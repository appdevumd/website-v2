function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-B3RP__F0.js","assets/index-DMko1hvE.js","assets/index-B3sGiwrl.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-DMko1hvE.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-B3RP__F0.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
