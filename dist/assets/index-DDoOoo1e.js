function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B0_6NBbs.js","assets/index-Bbgz_z7F.js","assets/index-m95q60Ds.css","assets/index-CjVY5ipL.js","assets/index-C--U4dyP.js","assets/index-Cy5r87Qd.js","assets/index-DZwjfU_n.js","assets/index-BNZjmy7w.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Bbgz_z7F.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B0_6NBbs.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CjVY5ipL.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-C--U4dyP.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Cy5r87Qd.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DZwjfU_n.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BNZjmy7w.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
