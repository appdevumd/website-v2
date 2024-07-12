function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CS3LDVqE.js","assets/index-CEPTdPEk.js","assets/index-Cy_GvPgK.css","assets/index-huvB1oJt.js","assets/index-DH7l63kX.js","assets/index-ijCCAhhJ.js","assets/index-CFdq8XeW.js","assets/index-DsyN3uT0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CEPTdPEk.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CS3LDVqE.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-huvB1oJt.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DH7l63kX.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-ijCCAhhJ.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CFdq8XeW.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DsyN3uT0.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
