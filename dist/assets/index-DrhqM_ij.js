function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-D28JQ4Ag.js","assets/index-BYZjsxH_.js","assets/index-B3sGiwrl.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BYZjsxH_.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-D28JQ4Ag.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
