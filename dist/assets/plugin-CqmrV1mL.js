function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-D8T7lHAA.js","assets/index-Pv_U7KwT.js","assets/index-Dmll8ldZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Pv_U7KwT.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-D8T7lHAA.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
