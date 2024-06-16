function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DQW8MjDL.js","assets/index-CmQm87bN.js","assets/index-Cy_GvPgK.css","assets/index-DjmyHKQo.js","assets/index-DzNWdVLF.js","assets/index-CsV5kwBB.js","assets/index-CT-DkScS.js","assets/index-C5ZcbUfs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CmQm87bN.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DQW8MjDL.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DjmyHKQo.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DzNWdVLF.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CsV5kwBB.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CT-DkScS.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C5ZcbUfs.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
