function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-Be3kZ91d.js","assets/index-DMko1hvE.js","assets/index-B3sGiwrl.css","assets/CanvasUtils-I3KmgLQw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DMko1hvE.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-Be3kZ91d.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
