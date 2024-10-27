function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-i7yvafQ3.js","assets/Ranges-DOcs18nu.js","assets/index-BbPL1Txh.js","assets/index-Cy_GvPgK.css","assets/index-Hv8I8PQE.js","assets/OptionsColor-Ceq0kCZC.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BbPL1Txh.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-i7yvafQ3.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
