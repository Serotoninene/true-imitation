precision mediump float;
varying vec2 vUv;
uniform float zMax; 
void main()
{
  vUv = uv;
  vec3 pos = vec3(position.xy, zMax);
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

}