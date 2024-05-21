function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CDNNLDas.js","assets/index-CIovSKpD.js","assets/index-B3sGiwrl.css","assets/index-D2-jkfOB.js","assets/index-DfP0nwyZ.js","assets/index-dWXBjqua.js","assets/index-8hKBTRb9.js","assets/index-CjJjuNz4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CIovSKpD.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CDNNLDas.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D2-jkfOB.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DfP0nwyZ.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-dWXBjqua.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-8hKBTRb9.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CjJjuNz4.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
