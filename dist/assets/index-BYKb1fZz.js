function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DOqMzA2Y.js","assets/index-CbDPnSIu.js","assets/index-m95q60Ds.css","assets/index-Dp4lHfZX.js","assets/index-DgvHJ33D.js","assets/index-BFdOZjxk.js","assets/index-97AWNjhu.js","assets/index-DNwylqum.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CbDPnSIu.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DOqMzA2Y.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Dp4lHfZX.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DgvHJ33D.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BFdOZjxk.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-97AWNjhu.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DNwylqum.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
