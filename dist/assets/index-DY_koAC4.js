function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-cq6r4nVV.js","assets/index-CYTvHIKC.js","assets/index-B8hL3UqP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CYTvHIKC.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-cq6r4nVV.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
