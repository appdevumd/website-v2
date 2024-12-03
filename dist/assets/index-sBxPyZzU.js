function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-y2R1r3kF.js","assets/index-Pv_U7KwT.js","assets/index-Dmll8ldZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Pv_U7KwT.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-y2R1r3kF.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
