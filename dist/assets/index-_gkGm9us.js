function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-ICB4npPZ.js","assets/index-DMko1hvE.js","assets/index-B3sGiwrl.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-DMko1hvE.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-ICB4npPZ.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
