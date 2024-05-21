function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CWu8q_gy.js","assets/index-DMko1hvE.js","assets/index-B3sGiwrl.css","assets/index-BFjSyPw4.js","assets/index-Cl6O_6Ol.js","assets/index-DoW1CnVv.js","assets/index-B3Av9A3s.js","assets/index-_gkGm9us.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DMko1hvE.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CWu8q_gy.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BFjSyPw4.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Cl6O_6Ol.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DoW1CnVv.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-B3Av9A3s.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-_gkGm9us.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
