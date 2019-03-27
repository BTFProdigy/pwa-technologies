const e=window.Ionic.h;import{a as t,b as n,c as s,d as o,e as i,f as a,g as r,h as c}from"./chunk-4f24dff4.js";import{a as l}from"./chunk-7c632336.js";function d(e,t){const n=new e,s=new e;s.addElement(t.querySelector("ion-backdrop"));const o=new e;o.addElement(t.querySelector(".action-sheet-wrapper")),s.fromTo("opacity",.01,.4),o.fromTo("translateY","100%","0%");const i=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(s).add(o);return Promise.resolve(i)}function h(e,t){const n=new e,s=new e;s.addElement(t.querySelector("ion-backdrop"));const o=new e;o.addElement(t.querySelector(".action-sheet-wrapper")),s.fromTo("opacity",.4,0),o.fromTo("translateY","0%","100%");const i=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(s).add(o);return Promise.resolve(i)}function m(e,t){const n=new e,s=new e;s.addElement(t.querySelector("ion-backdrop"));const o=new e;o.addElement(t.querySelector(".action-sheet-wrapper")),s.fromTo("opacity",.01,.32),o.fromTo("translateY","100%","0%");const i=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(s).add(o);return Promise.resolve(i)}function u(e,t){const n=new e,s=new e;s.addElement(t.querySelector("ion-backdrop"));const o=new e;o.addElement(t.querySelector(".action-sheet-wrapper")),s.fromTo("opacity",.32,0),o.fromTo("translateY","0%","100%");const i=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(s).add(o);return Promise.resolve(i)}class p{constructor(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.translucent=!1,this.animated=!0}onBackdropTap(){this.dismiss(void 0,t)}dispatchCancelHandler(e){if(n(e.detail.role)){const e=this.getButtons().find(e=>"cancel"===e.role);this.callButtonHandler(e)}}present(){return s(this,"actionSheetEnter",d,m)}dismiss(e,t){return o(this,e,t,"actionSheetLeave",h,u)}onDidDismiss(){return i(this.el,"ionActionSheetDidDismiss")}onWillDismiss(){return i(this.el,"ionActionSheetWillDismiss")}async buttonClick(e){const t=e.role;return n(t)?this.dismiss(void 0,t):await this.callButtonHandler(e)?this.dismiss(void 0,e.role):Promise.resolve()}async callButtonHandler(e){if(e&&e.handler)try{if(!1===await e.handler())return!1}catch(e){console.error(e)}return!0}getButtons(){return this.buttons.map(e=>"string"==typeof e?{text:e}:e)}hostData(){return{role:"dialog","aria-modal":"true",style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},l(this.cssClass),{"action-sheet-translucent":this.translucent})}}render(){const t=this.getButtons(),n=t.find(e=>"cancel"===e.role),s=t.filter(e=>"cancel"!==e.role);return[e("ion-backdrop",{tappable:this.backdropDismiss}),e("div",{class:"action-sheet-wrapper",role:"dialog"},e("div",{class:"action-sheet-container"},e("div",{class:"action-sheet-group"},void 0!==this.header&&e("div",{class:"action-sheet-title"},this.header,this.subHeader&&e("div",{class:"action-sheet-sub-title"},this.subHeader)),s.map(t=>e("button",{type:"button","ion-activatable":!0,class:b(t),onClick:()=>this.buttonClick(t)},e("span",{class:"action-sheet-button-inner"},t.icon&&e("ion-icon",{icon:t.icon,lazy:!1,class:"action-sheet-icon"}),t.text),"md"===this.mode&&e("ion-ripple-effect",null)))),n&&e("div",{class:"action-sheet-group action-sheet-group-cancel"},e("button",{type:"button",class:b(n),onClick:()=>this.buttonClick(n)},e("span",{class:"action-sheet-button-inner"},n.icon&&e("ion-icon",{icon:n.icon,lazy:!1,class:"action-sheet-icon"}),n.text)))))]}static get is(){return"ion-action-sheet"}static get encapsulation(){return"scoped"}static get properties(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"}}}static get events(){return[{name:"ionActionSheetDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionActionSheetWillDismiss",method:"dispatchCancelHandler"}]}static get style(){return".sc-ion-action-sheet-md-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-md{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:scroll;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-selected.sc-ion-action-sheet-md{background:var(--background-selected)}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color,#fff);--background-selected:var(--background,);--background-activated:var(--background)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;height:60px;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:16px;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;background:transparent;color:var(--color,var(--ion-color-step-850,#262626));font-size:16px;text-align:start;contain:strict;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:24px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:700}"}static get styleMode(){return"md"}}function b(e){return Object.assign({"action-sheet-button":!0,"ion-activatable":!0,[`action-sheet-${e.role}`]:void 0!==e.role},l(e.cssClass))}class y{create(e){return a(this.doc.createElement("ion-action-sheet"),e)}dismiss(e,t,n){return r(this.doc,e,t,"ion-action-sheet",n)}async getTop(){return c(this.doc,"ion-action-sheet")}static get is(){return"ion-action-sheet-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}}export{p as IonActionSheet,y as IonActionSheetController};