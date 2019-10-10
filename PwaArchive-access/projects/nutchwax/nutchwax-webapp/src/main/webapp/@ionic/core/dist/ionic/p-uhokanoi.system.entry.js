var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r["throw"](e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,a)}c((r=r.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return c([e,t])}}function c(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-a6904dd4.system.js","./p-45890bdd.system.js","./p-8dca3b40.system.js","./p-94417ec5.system.js"],function(e){"use strict";var t,n,r,i,o,s,a,c,u,l,d,h;return{setters:[function(e){t=e.r;n=e.d;r=e.c;i=e.h;o=e.e;s=e.H},function(){},function(e){a=e.B;c=e.i;u=e.d;l=e.e;d=e.f},function(e){h=e.g}],execute:function(){function f(e,t){var n=new e;var r=new e;r.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper"));r.fromTo("opacity",.01,.4);i.fromTo("translateY","100%","0%");var o=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(r).add(i);return Promise.resolve(o)}function p(e,t){var n=new e;var r=new e;r.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper"));r.fromTo("opacity",.4,0);i.fromTo("translateY","0%","100%");var o=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(r).add(i);return Promise.resolve(o)}function b(e,t){var n=new e;var r=new e;r.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper"));r.fromTo("opacity",.01,.32);i.fromTo("translateY","100%","0%");var o=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(r).add(i);return Promise.resolve(o)}function v(e,t){var n=new e;var r=new e;r.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper"));r.fromTo("opacity",.32,0);i.fromTo("translateY","0%","100%");var o=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(r).add(i);return Promise.resolve(o)}var y=function(){function e(e){t(this,e);this.presented=false;this.mode=n(this);this.keyboardClose=true;this.buttons=[];this.backdropDismiss=true;this.translucent=false;this.animated=true;this.didPresent=r(this,"ionActionSheetDidPresent",7);this.willPresent=r(this,"ionActionSheetWillPresent",7);this.willDismiss=r(this,"ionActionSheetWillDismiss",7);this.didDismiss=r(this,"ionActionSheetDidDismiss",7)}e.prototype.onBackdropTap=function(){this.dismiss(undefined,a)};e.prototype.dispatchCancelHandler=function(e){var t=e.detail.role;if(c(t)){var n=this.getButtons().find(function(e){return e.role==="cancel"});this.callButtonHandler(n)}};e.prototype.present=function(){return u(this,"actionSheetEnter",f,b)};e.prototype.dismiss=function(e,t){return l(this,e,t,"actionSheetLeave",p,v)};e.prototype.onDidDismiss=function(){return d(this.el,"ionActionSheetDidDismiss")};e.prototype.onWillDismiss=function(){return d(this.el,"ionActionSheetWillDismiss")};e.prototype.buttonClick=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:t=e.role;if(c(t)){return[2,this.dismiss(undefined,t)]}return[4,this.callButtonHandler(e)];case 1:n=r.sent();if(n){return[2,this.dismiss(undefined,e.role)]}return[2,Promise.resolve()]}})})};e.prototype.callButtonHandler=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:if(!(e&&e.handler))return[3,4];r.label=1;case 1:r.trys.push([1,3,,4]);return[4,e.handler()];case 2:t=r.sent();if(t===false){return[2,false]}return[3,4];case 3:n=r.sent();console.error(n);return[3,4];case 4:return[2,true]}})})};e.prototype.getButtons=function(){return this.buttons.map(function(e){return typeof e==="string"?{text:e}:e})};e.prototype.hostData=function(){var e;var t=n(this);return{role:"dialog","aria-modal":"true",style:{zIndex:2e4+this.overlayIndex},class:Object.assign((e={},e[t]=true,e),h(this.cssClass),{"action-sheet-translucent":this.translucent})}};e.prototype.__stencil_render=function(){var e=this;var t=n(this);var r=this.getButtons();var o=r.find(function(e){return e.role==="cancel"});var s=r.filter(function(e){return e.role!=="cancel"});return[i("ion-backdrop",{tappable:this.backdropDismiss}),i("div",{class:"action-sheet-wrapper",role:"dialog"},i("div",{class:"action-sheet-container"},i("div",{class:"action-sheet-group"},this.header!==undefined&&i("div",{class:"action-sheet-title"},this.header,this.subHeader&&i("div",{class:"action-sheet-sub-title"},this.subHeader)),s.map(function(n){return i("button",{type:"button","ion-activatable":true,class:m(n),onClick:function(){return e.buttonClick(n)}},i("span",{class:"action-sheet-button-inner"},n.icon&&i("ion-icon",{icon:n.icon,lazy:false,class:"action-sheet-icon"}),n.text),t==="md"&&i("ion-ripple-effect",null))})),o&&i("div",{class:"action-sheet-group action-sheet-group-cancel"},i("button",{type:"button",class:m(o),onClick:function(){return e.buttonClick(o)}},i("span",{class:"action-sheet-button-inner"},o.icon&&i("ion-icon",{icon:o.icon,lazy:false,class:"action-sheet-icon"}),o.text)))))]};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});e.prototype.render=function(){return i(s,this.hostData(),this.__stencil_render())};Object.defineProperty(e,"style",{get:function(){return".sc-ion-action-sheet-md-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-md{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-selected.sc-ion-action-sheet-md{background:var(--background-selected)}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color,#fff);--background-selected:var(--background,);--background-activated:var(--background)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;height:60px;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:16px;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;background:transparent;color:var(--color,var(--ion-color-step-850,#262626));font-size:16px;text-align:start;contain:strict;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:24px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:700}"},enumerable:true,configurable:true});return e}();e("ion_action_sheet",y);function m(e){var t;return Object.assign((t={"action-sheet-button":true,"ion-activatable":true},t["action-sheet-"+e.role]=e.role!==undefined,t),h(e.cssClass))}}}});