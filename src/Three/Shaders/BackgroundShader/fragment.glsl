precision mediump float;
varying vec2 vUv;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uRadius;
uniform float uWidth;
uniform float uTime;
uniform float uProgress;

float parabola( float x, float k ) {
  return pow( 4. * x * ( 1. - x ), k );
}

void main(){
  vec2 start = vec2(0.5,.5);
  vec2 newUV = (vUv - vec2(.5)) + vec2(.5);
  vec4 noise = texture2D(uDisplacementMap, fract(newUV + uTime * 0.04));
  float prog = uProgress*0.66 + noise.g * 0.04;
  float circ = 1. - smoothstep(-uWidth, 0.0, uRadius * distance(start, newUV) - prog*(1.+uWidth));
  float intpl = pow(abs(circ), 1.);

  vec4 backgroundImg = texture2D(uTexture, (newUV - 0.5) *  (1.0 - intpl) + 0.5) * vec4(0.9, 0.5, 0.6, 1.0); 
  vec4 counterbackground = texture2D(uTexture,(newUV - 0.5) * intpl + 0.5) * vec4(0.333,0.333,0.9, 1.0);

  gl_FragColor = mix(backgroundImg, counterbackground, intpl);
  // gl_FragColor = vec4(1.0,0.0,0.0,1.0);
}