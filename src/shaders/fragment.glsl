varying float vNoise;
varying vec2 vUv;
uniform sampler2D uImage;

void main()	{

    vec2 newUV = vUv;

    vec4 oceanView = texture2D(uImage,newUV);

    // render picture
    gl_FragColor = oceanView;

    // color variation with vNoise
    gl_FragColor.rgb += 0.05*vec3(vNoise);
}