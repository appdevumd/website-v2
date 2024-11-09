function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B8Ix3fnb.js","assets/index-CHYufSqv.js","assets/index-Cy_GvPgK.css","assets/index-Bs05AE91.js","assets/index-Un5qaJTo.js","assets/index-sPjV8mqv.js","assets/index-DEVWbX7e.js","assets/index-D2NQ84Y6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CHYufSqv.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B8Ix3fnb.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Bs05AE91.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Un5qaJTo.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-sPjV8mqv.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DEVWbX7e.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-D2NQ84Y6.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
