function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-De137OVA.js","assets/index-peRxv9d_.js","assets/index-Dmll8ldZ.css","assets/index-BA91Sa7f.js","assets/index-Ch-ICLJb.js","assets/index-B-Z3io1k.js","assets/index-Dhi9oUEb.js","assets/index-B0Vj7Swk.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-peRxv9d_.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-De137OVA.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BA91Sa7f.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Ch-ICLJb.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-B-Z3io1k.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Dhi9oUEb.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-B0Vj7Swk.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
