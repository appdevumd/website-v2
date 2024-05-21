function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-Cv1oKC14.js","assets/index-DMko1hvE.js","assets/index-B3sGiwrl.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DMko1hvE.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-Cv1oKC14.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
