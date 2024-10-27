function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BpVT3pP3.js","assets/index-BbPL1Txh.js","assets/index-Cy_GvPgK.css","assets/index-CZxBByzA.js","assets/index-DR0baXpM.js","assets/index-sGc9p_8U.js","assets/index-CGJZHg63.js","assets/index-jKKFtAuZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BbPL1Txh.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BpVT3pP3.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CZxBByzA.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DR0baXpM.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-sGc9p_8U.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CGJZHg63.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-jKKFtAuZ.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
