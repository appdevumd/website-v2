function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-CpPckXac.js","assets/index-DMko1hvE.js","assets/index-B3sGiwrl.css","assets/ValueWithRandom-BS5hZeK4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DMko1hvE.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-CpPckXac.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
