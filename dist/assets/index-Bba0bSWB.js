function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CBSkm_m4.js","assets/index-Pv_U7KwT.js","assets/index-Dmll8ldZ.css","assets/index-sBxPyZzU.js","assets/index-BZXAiAWX.js","assets/index-BsutQJpL.js","assets/index-CGHdWycq.js","assets/index-BD61_kRb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Pv_U7KwT.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CBSkm_m4.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-sBxPyZzU.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BZXAiAWX.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BsutQJpL.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CGHdWycq.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BD61_kRb.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
