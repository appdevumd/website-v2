function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-eEXyOSAC.js","assets/index-CToFMunW.js","assets/index-Dmll8ldZ.css","assets/index-DzMuQYl4.js","assets/index-apGmEl2B.js","assets/index-w3Eob2Ex.js","assets/index-B1Sn0_TA.js","assets/index-DElaDhpY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CToFMunW.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-eEXyOSAC.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DzMuQYl4.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-apGmEl2B.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-w3Eob2Ex.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-B1Sn0_TA.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DElaDhpY.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
