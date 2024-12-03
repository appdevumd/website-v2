function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-C9Pl8Aj3.js","assets/Ranges-BPLsRCCw.js","assets/index-Pv_U7KwT.js","assets/index-Dmll8ldZ.css","assets/index-DBZ-PEM4.js","assets/OptionsColor-Bt6CWUWJ.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Pv_U7KwT.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-C9Pl8Aj3.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
