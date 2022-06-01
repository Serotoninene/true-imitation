// Three
import * as THREE from "three";
// Shaders
import vertex from "./vertex.glsl";
import fragment from "./fragment.glsl";
import { extend } from "@react-three/fiber";

export default class ImgMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: new THREE.Texture() },
        uDisplacementMap: { value: null },
        uRadius: { value: 0.99, type: "f", min: 0.1, max: 2 },
        uWidth: { value: 0.55, type: "f", min: 0, max: 1 },
        uProgress: { value: 0 },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });
  }

  get time() {
    return this.uniforms.uTime.value;
  }

  set time(v) {
    this.uniforms.uTime.value = v;
  }

  get progress() {
    return this.uniforms.uProgress.value;
  }

  set progress(v) {
    this.uniforms.uProgress.value = v;
  }
}
extend({
  ImgMaterial,
});
