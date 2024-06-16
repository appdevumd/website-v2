function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D3yz9_Gs.js","assets/index-CJxpASZZ.js","assets/index-B8hL3UqP.css","assets/index-CueRaInA.js","assets/index-12eRyUHC.js","assets/index-DGt3Me6E.js","assets/index-DJb5KwUd.js","assets/index-BQidWiOF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CJxpASZZ.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D3yz9_Gs.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CueRaInA.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-12eRyUHC.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DGt3Me6E.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DJb5KwUd.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BQidWiOF.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
