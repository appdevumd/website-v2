function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DNNQJIKU.js","assets/index-BbheiJoV.js","assets/index-Cy_GvPgK.css","assets/index-CNxj2Z_Y.js","assets/index-TMzS-lA1.js","assets/index-C57LDxQ1.js","assets/index-DX79IQ9H.js","assets/index-BDw7s7uD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BbheiJoV.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DNNQJIKU.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CNxj2Z_Y.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-TMzS-lA1.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C57LDxQ1.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DX79IQ9H.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BDw7s7uD.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
