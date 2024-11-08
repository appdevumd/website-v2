function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-C5Yrt80Z.js","assets/index-CShsFACI.js","assets/index-Cy_GvPgK.css","assets/index-SbQKj88b.js","assets/index-CyymV-gL.js","assets/index-B-eNKEuG.js","assets/index-B_a7NW2Q.js","assets/index-CzzyTFZc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CShsFACI.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-C5Yrt80Z.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-SbQKj88b.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CyymV-gL.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-B-eNKEuG.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-B_a7NW2Q.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CzzyTFZc.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
