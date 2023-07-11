import * as THREE from 'three';
import imagesLoaded from 'imagesloaded';
import gsap from 'gsap';
import FontFaceObserver from 'fontfaceobserver';
import Scroll from './scroll';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import fragment from '../shaders/fragment.glsl'
import vertex from '../shaders/vertex.glsl'

import ocean from '../../static/img/ocean.jpg';



export default class Sketch {
    constructor(options) {
        this.time = 0;
        this.container = options.dom;
        this.scene = new THREE.Scene();

        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 100, 1000);
        this.camera.position.z = 600;

        // camera vue angle in degrees
        this.camera.fov = 2 * Math.atan((this.height / 2) / 600) * (180 / Math.PI);

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            // no background
            alpha: true
        });

        this.container.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.images = [...document.querySelectorAll('img')];


        // wait font loaded for no changing position after loaded
        const fontOpen = new Promise(resolve => {
            new FontFaceObserver("Open Sans").load().then(() => {
                resolve();
            });
        });

        // wait font loaded
        const fontPlayfair = new Promise(resolve => {
            new FontFaceObserver("Playfair Display").load().then(() => {
                resolve();
            });
        });

        // Preload images
        // wait images loaded
        const preloadImages = new Promise((resolve, reject) => {
            imagesLoaded(document.querySelectorAll("img"), { background: true }, resolve);
        });

        let allDone = [fontOpen, fontPlayfair, preloadImages]
        // should not be zero by default in case the browser remember the previous position
        this.currentScroll = 0;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();


        // if all promises are ok lets go
        Promise.all(allDone).then(() => {
            // custom scroll to remove laggy positionning cause to the the calculation with the scroll addEventListenner
            this.scroll = new Scroll();
            this.addImages();
            this.setPosition();

            this.mouseMovement()
            this.resize()
            this.setupResize();
            // this.addObjects();
            this.render();
            // window.addEventListener('scroll',()=>{
            //     this.currentScroll = window.scrollY;
            //     this.setPosition();
            // })
        })


    }
    mouseMovement() {


        window.addEventListener('mousemove', (event) => {
            this.mouse.x = (event.clientX / this.width) * 2 - 1;
            this.mouse.y = - (event.clientY / this.height) * 2 + 1;

            console.log(this.mouse.y)
        
            // update the picking ray with the camera and mouse position
            this.raycaster.setFromCamera(this.mouse, this.camera);
        
            // calculate objects intersecting the picking ray
            // here this.scene.children is for all children of the DOM, should be another way to target different objects in different ways
            const intersects = this.raycaster.intersectObjects(this.scene.children);
        
            if (intersects.length > 0) {
                let obj = intersects[0].object;
                obj.material.uniforms.hover.value = intersects[0].uv;
            } else {
                this.material.uniforms.hover.value = 0;
            }
        // Set the uniform values for mouseX and mouseY
        // this.materials.forEach(m => {
        //     m.uniforms.mouseX.value = this.mouse.x - m.uniforms.left.value;
        //     m.uniforms.mouseY.value = this.mouse.y;
        //     console.log(m.uniforms)
        // });
        this.materials[0].uniforms.mouseX.value = this.mouse.x;
        this.materials[0].uniforms.mouseY.value = this.mouse.y;
        }, false);
    }

    setupResize() {
        window.addEventListener('resize', this.resize.bind(this));
    }

    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }

    addImages() {
        this.material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                uImage: { value: 0 },
                mouseX: { value: 0 },
                mouseY: { value: 0 },
                top: { value: 0 },
                left: { value: 0 },
                width: { value: 0 },
                height: { value: 0 },
                hover: { value: new THREE.Vector2(0.5, 0.5) },
                hoverState: { value: 0 },
                oceanTexture: { value: new THREE.TextureLoader().load(ocean) },
            },
            side: THREE.DoubleSide,
            fragmentShader: fragment,
            vertexShader: vertex,
            // wireframe: true
        })

        this.materials = []

        this.imageStore = this.images.map(img => {
            // images positions
            let bounds = img.getBoundingClientRect()

            let geometry = new THREE.PlaneGeometry(bounds.width, bounds.height, 60, 60);
            let texture = new THREE.Texture(img);
            texture.needsUpdate = true;
            // let material = new THREE.MeshBasicMaterial({
            //     // color: 0xff0000,
            //     map: texture
            // })

            let material = this.material.clone();

            img.addEventListener('mouseenter', () => {
                gsap.to(material.uniforms.hoverState, {
                    duration: 1,
                    value: 1
                })
            })
            img.addEventListener('mouseout', () => {
                gsap.to(material.uniforms.hoverState, {
                    duration: 1,
                    value: 0
                })
            })

            this.materials.push(material)

            material.uniforms.uImage.value = texture;

            material.uniforms.mouseX.value = this.mouse.x
            material.uniforms.mouseY.value = this.mouse.y
            material.uniforms.top.value = bounds.top
            material.uniforms.left.value = bounds.left
            material.uniforms.width.value = bounds.width
            material.uniforms.height.value = bounds.height

            let mesh = new THREE.Mesh(geometry, material);

            this.scene.add(mesh)


            return {
                img: img,
                mesh: mesh,
                top: bounds.top,
                left: bounds.left,
                width: bounds.width,
                height: bounds.height
            }
        })
    }

    setPosition() {
        this.imageStore.forEach(o => {
            // positionning images (from center screen)
            o.mesh.position.y = this.currentScroll - o.top + this.height / 2 - o.height / 2;
            o.mesh.position.x = o.left - this.width / 2 + o.width / 2;
        })
    }

    addObjects() {
        this.geometry = new THREE.PlaneGeometry(200, 400, 100, 100);
        // this.geometry = new THREE.SphereGeometry( 0.4, 40,40 );
        this.material = new THREE.MeshNormalMaterial();

        this.material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                oceanTexture: { value: new THREE.TextureLoader().load(ocean) },
            },
            side: THREE.DoubleSide,
            fragmentShader: fragment,
            vertexShader: vertex,
            // wireframe: true
        })

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
    }

    render() {
        this.time += 0.05;

        this.scroll.render();
        this.currentScroll = this.scroll.scrollToRender;
        this.setPosition();


        // this.material.uniforms.time.value = this.time;

        // update time for each object
        this.materials.forEach(m => {
            m.uniforms.time.value = this.time;
        })

        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.render.bind(this));
    }
}

new Sketch({
    dom: document.getElementById('container')
});
