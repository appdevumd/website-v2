function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DNVTUAYr.js","assets/index-Bbgz_z7F.js","assets/index-m95q60Ds.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Bbgz_z7F.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DNVTUAYr.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
