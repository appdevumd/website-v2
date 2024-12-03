function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Grabber-C2W-GX6k.js","assets/CanvasUtils-DEwa2kjg.js","assets/index-Pv_U7KwT.js","assets/index-Dmll8ldZ.css","assets/ExternalInteractorBase-CIi3zRdK.js","assets/OptionsColor-Bt6CWUWJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Pv_U7KwT.js";import{O as s}from"./OptionsColor-Bt6CWUWJ.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-C2W-GX6k.js"),__vite__mapDeps([0,1,2,3,4,5]));return new t(o)},i)}export{f as Grab,r as GrabLinks,a as loadExternalGrabInteraction};
