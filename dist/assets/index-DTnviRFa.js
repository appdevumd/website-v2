function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-BA-dpb0_.js","assets/index-BbPL1Txh.js","assets/index-Cy_GvPgK.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BbPL1Txh.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-BA-dpb0_.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
