uniform float time;
uniform vec2 hover;
// hoverState is 0 or 1
uniform float hoverState;
varying float vNoise;
varying vec2 vUv;

uniform float shaderX;
uniform float shaderY;
uniform float widthImg;
uniform float heightImg;
varying vec2 vMousePos;


void main() {
    // Calculate the mouse position from the center
    vec2 mousePosition = vec2(shaderX , shaderY);

    // Assign the mouse position to a variable for use in the fragment shader
    vec2 mousePos = mousePosition;

    // Pass the mouse position as a varying to the fragment shader
    vMousePos = mousePos;

    vec3 newposition = position;
    
    float dist = distance(uv,hover);
    // float dist = distance(uv,mousePosition);

    float z = hoverState * -100. * pow(sin(dist * 1. - 1.0), 3.0); 
    // float z = -100. * pow(sin(dist * 1. - 1.0), 3.0); 
    newposition.z += z < 0.0 ? 0.0 : z;

    // vNoise = hoverState *-5. * pow(sin(dist * 1. - 1.0), 3.0);
    vNoise = -5. * pow(sin(dist * 1. - 1.0), 3.0);
    // vNoise = dist;
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );
}