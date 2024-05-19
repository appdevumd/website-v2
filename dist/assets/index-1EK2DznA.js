function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CyLeXEWe.js","assets/index-oTx0snEa.js","assets/index-m95q60Ds.css","assets/index-BJycpAwg.js","assets/index-Bw__r20K.js","assets/index-CTSBAsgv.js","assets/index-Sft8gFf2.js","assets/index-BMjOnTlA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-oTx0snEa.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CyLeXEWe.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BJycpAwg.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Bw__r20K.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CTSBAsgv.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Sft8gFf2.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BMjOnTlA.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
