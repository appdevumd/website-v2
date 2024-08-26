function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-ByxQcTbZ.js","assets/index-BwUF06Ed.js","assets/index-Cy_GvPgK.css","assets/index-DGlsrxh6.js","assets/index-iKJPD0Jr.js","assets/index-D6B1e1Zy.js","assets/index-Bwnoau7V.js","assets/index-CTvd80ox.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BwUF06Ed.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-ByxQcTbZ.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DGlsrxh6.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-iKJPD0Jr.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-D6B1e1Zy.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Bwnoau7V.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CTvd80ox.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
