function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-C1FiSO-q.js","assets/index-CYTvHIKC.js","assets/index-B8hL3UqP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CYTvHIKC.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-C1FiSO-q.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
