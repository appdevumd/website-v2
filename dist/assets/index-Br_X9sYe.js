function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-DxUU6b6N.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-DMko1hvE.js","assets/index-B3sGiwrl.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as c}from"./index-DMko1hvE.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-DxUU6b6N.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
