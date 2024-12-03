function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-DnYx9VE0.js","assets/index-Pv_U7KwT.js","assets/index-Dmll8ldZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Pv_U7KwT.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-DnYx9VE0.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
