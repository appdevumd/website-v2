function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-JUAaVyn3.js","assets/index-C_RGOhCd.js","assets/index-B8hL3UqP.css","assets/index-CWocaunf.js","assets/index-BEeMwQj-.js","assets/index-CYcKhMSn.js","assets/index-DJr6f9sd.js","assets/index-BGjzOm2t.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C_RGOhCd.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-JUAaVyn3.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CWocaunf.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BEeMwQj-.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CYcKhMSn.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DJr6f9sd.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BGjzOm2t.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
