function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DGL4yKst.js","assets/index-DeefX4sy.js","assets/index-Cy_GvPgK.css","assets/index-CmnmrZU_.js","assets/index-CvqkUHi4.js","assets/index-Bml9rERt.js","assets/index-C_XRMVjZ.js","assets/index-CEYiOXgF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DeefX4sy.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DGL4yKst.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CmnmrZU_.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CvqkUHi4.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Bml9rERt.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-C_XRMVjZ.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CEYiOXgF.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
