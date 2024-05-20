function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-rFCwFv-u.js","assets/index-BYZjsxH_.js","assets/index-B3sGiwrl.css","assets/index-DvHlaMbZ.js","assets/index-ChurQQUY.js","assets/index-D_76-wTm.js","assets/index-65jCUE65.js","assets/index-B9gNfIRR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BYZjsxH_.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-rFCwFv-u.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DvHlaMbZ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-ChurQQUY.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-D_76-wTm.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-65jCUE65.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-B9gNfIRR.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
