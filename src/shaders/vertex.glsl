uniform vec2 hover;
uniform float hoverState;
varying float vNoise;
varying vec2 vUv;


void main() {
    vec3 newposition = position;
    
    float dist = distance(uv,hover);

    float z = - 1.0 + hoverState * -100. * pow(sin(dist * 1. - 1.), 3.); 
    newposition.z = z < 0.0 ? 0.0 : z;

    vNoise = -5. * pow(sin(dist * 1. - 1.0), 3.0);
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1. );
}