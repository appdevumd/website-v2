function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DJy56vkk.js","assets/index-CgAHdhFx.js","assets/index-B8hL3UqP.css","assets/index-DmVDzt_N.js","assets/index-D-DXSEJ6.js","assets/index-auOhvgFb.js","assets/index-Bb7QZEuw.js","assets/index-HQm8VGKG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CgAHdhFx.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DJy56vkk.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DmVDzt_N.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D-DXSEJ6.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-auOhvgFb.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Bb7QZEuw.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-HQm8VGKG.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
