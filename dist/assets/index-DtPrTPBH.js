function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-DDPlX-Ay.js","assets/ValueWithRandom-BS5hZeK4.js","assets/index-DMko1hvE.js","assets/index-B3sGiwrl.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DMko1hvE.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DDPlX-Ay.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
