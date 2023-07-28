import * as THREE from 'three';
import imagesLoaded from 'imagesloaded';
import gsap from 'gsap';
import FontFaceObserver from 'fontfaceobserver';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import fragment from '../shaders/fragment.glsl'
import vertex from '../shaders/vertex.glsl'

import ocean from '../../static/img/ocean.jpg';

let scrollThree = 0;
const section1 = document.querySelector('#btob-seminaire')
const section2 = document.querySelector('#btob-team-building')
const section3 = document.querySelector('#btob-soiree-entreprise')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
var urlParams = new URLSearchParams(window.location.search);
let queryString = urlParams.get('link');

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
            alpha: true, 
            precision: 'highp'
        });

        this.container.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        if (section1) {
            switch (queryString) {
                case 'seminaire':
                    this.images = [...document.querySelectorAll('#btob-seminaire [paper-effect]')];
                    break;
                case 'team-building':
                    this.images = [...document.querySelectorAll('#btob-team-building [paper-effect]')];
                    break;
                case 'soiree-entreprise':
                    this.images = [...document.querySelectorAll('#btob-soiree-entreprise [paper-effect]')];
                    break;
                default:
                    this.images = [...document.querySelectorAll('#btob-seminaire [paper-effect]')];
            }
        } else {
            this.images = [...document.querySelectorAll('[paper-effect]')]
        }

        if (btn1) {
            btn1.addEventListener('click', () => {
                while (this.scene.children.length > 0) {
                    var child = this.scene.children[0];
                    this.scene.remove(child);
                }
                this.images = [...document.querySelectorAll('#btob-seminaire [paper-effect]')];
                this.addImages();
                this.setPosition();
            })
        }
        if (btn2) {
            btn2.addEventListener('click', () => {
                while (this.scene.children.length > 0) {
                    var child = this.scene.children[0];
                    this.scene.remove(child);
                }
                this.images = [...document.querySelectorAll('#btob-team-building [paper-effect]')];
                this.addImages();
                this.setPosition();
            })
        }
        if (btn3) {
            btn3.addEventListener('click', () => {
                while (this.scene.children.length > 0) {
                    var child = this.scene.children[0];
                    this.scene.remove(child);
                }
                this.images = [...document.querySelectorAll('#btob-soiree-entreprise [paper-effect]')];
                this.addImages();
                this.setPosition();
            })
        }


        // wait font loaded for no changing position after loaded
        const fontOpen = new Promise(resolve => {
            new FontFaceObserver("Poppins").load().then(() => {
                resolve();
            });
        });

        // Preload images
        // wait images loaded
        const preloadImages = new Promise((resolve, reject) => {
            imagesLoaded(document.querySelectorAll("img"), { background: true }, resolve);
        });

        let allDone = [fontOpen, preloadImages]
        // should not be zero by default in case the browser remember the previous position
        this.currentScroll = 0;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();


        // if all promises are ok lets go
        Promise.all(allDone).then(() => {
            this.addImages();
            this.setPosition();
            this.imageStore.forEach(o => {
                // positionning images (from center screen)
                o.mesh.position.y = this.currentScroll - o.top + this.height / 2 - o.height / 2;
                o.mesh.position.x = o.left - this.width / 2 + o.width / 2;
            })
            this.mouseMovement()
            this.resize()
            this.setupResize();
            this.render();
        })


    }
    mouseMovement() {


        window.addEventListener('mousemove', (event) => {
            this.mouse.x = (event.clientX / this.width) * 2 - 1;
            this.mouse.y = - (event.clientY / this.height) * 2 + 1;

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
            let bounds = img.getBoundingClientRect()

            let geometry = new THREE.PlaneGeometry(bounds.width, bounds.height, 100, 100);

            let image = new Image();
            image.src = img.src;
            let texture = new THREE.Texture(image);

            texture.needsUpdate = true;

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

            let mesh = new THREE.Mesh(geometry, material);

            this.scene.add(mesh)


            return {
                img: img,
                mesh: mesh,
                top: bounds.top + scrollThree,
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


    render() {
        this.time += 0.05;

        this.currentScroll = scrollThree
        this.setPosition();

        // update time for each object
        this.materials.forEach(m => {
            m.uniforms.time.value = this.time;
        })

        // this.scene.children

        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.render.bind(this));
    }
}

// ONLOAD
window.addEventListener("load", (event) => {
    // window.addEventListener("window-scroll", function (e) {
    //     scrollThree = e.detail;
    // });
    window.addEventListener("scroll", function (e) {
        scrollThree = window.scrollY;
    });
    if (section1) {
        switch (queryString) {
            case 'seminaire':
                section1.classList.add('active')
                btn1.classList.add('active')
                break;
            case 'team-building':
                section2.classList.add('active')
                btn2.classList.add('active')
                break;
            case 'soiree-entreprise':
                section3.classList.add('active')
                btn3.classList.add('active')
                break;
            default:
                section1.classList.add('active')
                btn1.classList.add('active')
        }

        let btns = [btn1, btn2, btn3]
        let sections = [section1, section2, section3]
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                sections.forEach(section => {
                    section.classList.remove('active')
                });
                sections[btns.indexOf(btn)].classList.add('active')
                btns.forEach(btn => {
                    btn.classList.remove('active')
                });
                btn.classList.add('active')
            })
        });
    }

    if (window.innerWidth >= 991) {
        new Sketch({
            dom: document.getElementById('container')
        });
    }
});