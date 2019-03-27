const t=window.Ionic.h;import{c as e,d as i,e as s,f as a,g as o,h as n}from"./chunk-4f24dff4.js";import{d as r,e as l,a as h}from"./chunk-7c632336.js";import{i as d,d as c,e as u}from"./chunk-6d7d2f8c.js";import{a as m}from"./chunk-81780b86.js";function p(t,e,i,s){if(t!==T&&t!==N){if(t===J)return void 0!==i&&void 0!==i.hour?i.hour<12?"AM":"PM":e?e.toUpperCase():"";if(t===L)return void 0!==i&&void 0!==i.hour?i.hour<12?"am":"pm":e||"";if(null==e)return"";if(t===F||t===E||t===O||t===$||t===H||t===q)return D(e);if(t===C)return w(e);if(t===I)return(s.monthNames?s.monthNames:G)[e-1];if(t===Y)return(s.monthShortNames?s.monthShortNames:X)[e-1];if(t===W||t===B){if(0===e)return"12";if(e>12&&(e-=12),t===W&&e<10)return"0"+e}return e.toString()}try{return e=new Date(i.year,i.month-1,i.day).getDay(),t===T?(s.dayNames?s.dayNames:Z)[e]:(s.dayShortNames?s.dayShortNames:U)[e]}catch(t){}}function y(t,e,i,s=0,a=0){return parseInt(`1${w(t)}${D(e)}${D(i)}${D(s)}${D(a)}`,10)}function f(t){return y(t.year,t.month,t.day,t.hour,t.minute)}const g=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,v=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;function b(t){let e=null;if(null!=t&&""!==t&&((e=v.exec(t))?(e.unshift(void 0,void 0),e[2]=e[3]=void 0):e=g.exec(t)),null===e)return;for(let t=1;t<8;t++)e[t]=void 0!==e[t]?parseInt(e[t],10):void 0;let i=0;return e[9]&&e[10]&&(i=60*parseInt(e[10],10),e[11]&&(i+=parseInt(e[11],10)),"-"===e[9]&&(i*=-1)),{year:e[1],month:e[2],day:e[3],hour:e[4],minute:e[5],second:e[6],millisecond:e[7],tzOffset:i}}function k(t){for(const e in R)if(R[e].f===t)return R[e].k}function x(t,e){if(null==t)return;let i;return"string"==typeof t&&(t=t.replace(/\[|\]/g,"").split(",")),Array.isArray(t)&&(i=t.map(t=>t.toString().trim())),void 0!==i&&0!==i.length||console.warn(`Invalid "${e}Names". Must be an array of strings, or a comma separated string.`),i}function M(t,e){let i;return"string"==typeof t&&(t=t.replace(/\[|\]|\s/g,"").split(",")),0===(i=Array.isArray(t)?t.map(t=>parseInt(t,10)).filter(isFinite):[t]).length&&console.warn(`Invalid "${e}Values". Must be an array of numbers, or a comma separated string of numbers.`),i}function D(t){return("0"+(void 0!==t?Math.abs(t):"0")).slice(-2)}function S(t){return("00"+(void 0!==t?Math.abs(t):"0")).slice(-3)}function w(t){return("000"+(void 0!==t?Math.abs(t):"0")).slice(-4)}const C="YYYY",F="YY",I="MMMM",Y="MMM",E="MM",A="M",T="DDDD",N="DDD",O="DD",P="D",$="HH",V="H",W="hh",B="h",H="mm",j="m",q="ss",z="s",J="A",L="a",R=[{f:C,k:"year"},{f:I,k:"month"},{f:T,k:"day"},{f:Y,k:"month"},{f:N,k:"day"},{f:F,k:"year"},{f:E,k:"month"},{f:O,k:"day"},{f:$,k:"hour"},{f:W,k:"hour"},{f:H,k:"minute"},{f:q,k:"second"},{f:A,k:"month"},{f:P,k:"day"},{f:V,k:"hour"},{f:B,k:"hour"},{f:j,k:"minute"},{f:z,k:"second"},{f:J,k:"ampm"},{f:L,k:"ampm"}],Z=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],U=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],G=["January","February","March","April","May","June","July","August","September","October","November","December"],X=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],K=[W,B,H,j,q,z];class Q{constructor(){this.inputId=`ion-dt-${_++}`,this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.isExpanded=!1,this.name=this.inputId,this.disabled=!1,this.readonly=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done",this.onFocus=(()=>{this.ionFocus.emit()}),this.onBlur=(()=>{this.ionBlur.emit()})}disabledChanged(){this.emitStyle()}valueChanged(){this.updateDatetimeValue(this.value),this.emitStyle(),this.ionChange.emit({value:this.value})}componentWillLoad(){this.locale={monthNames:x(this.monthNames,"monthNames"),monthShortNames:x(this.monthShortNames,"monthShortNames"),dayNames:x(this.dayNames,"dayNames"),dayShortNames:x(this.dayShortNames,"dayShortNames")},this.updateDatetimeValue(this.value),this.emitStyle()}onClick(){this.setFocus(),this.open()}async open(){if(this.disabled||this.isExpanded)return;const t=this.generatePickerOptions(),e=await this.pickerCtrl.create(t);this.isExpanded=!0,e.onDidDismiss().then(()=>{this.isExpanded=!1,this.setFocus()}),await this.validate(e),await e.present()}emitStyle(){this.ionStyle.emit({interactive:!0,datetime:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled})}updateDatetimeValue(t){!function(t,e){if(e&&""!==e){if("string"==typeof e){if(e=b(e))return Object.assign(t,e),!0}else if(e.year||e.hour||e.month||e.day||e.minute||e.second){e.ampm&&e.hour&&(e.hour.value="pm"===e.ampm.value?12===e.hour.value?12:e.hour.value+12:12===e.hour.value?0:e.hour.value);for(const i of Object.keys(e))t[i]=e[i].value;return!0}console.warn(`Error parsing date: "${e}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`)}else for(const e in t)t.hasOwnProperty(e)&&delete t[e]}(this.datetimeValue,t)}generatePickerOptions(){const t=Object.assign({mode:this.mode},this.pickerOptions,{columns:this.generateColumns()}),e=t.buttons;return e&&0!==e.length||(t.buttons=[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.doneText,handler:t=>{this.updateDatetimeValue(t),this.value=function(t){let e="";return void 0!==t.year?(e=w(t.year),void 0!==t.month&&(e+="-"+D(t.month),void 0!==t.day&&(e+="-"+D(t.day),void 0!==t.hour&&(e+=`T${D(t.hour)}:${D(t.minute)}:${D(t.second)}`,t.millisecond>0&&(e+="."+S(t.millisecond)),e+=void 0===t.tzOffset?"Z":(t.tzOffset>0?"+":"-")+D(Math.floor(Math.abs(t.tzOffset/60)))+":"+D(t.tzOffset%60))))):void 0!==t.hour&&(e=D(t.hour)+":"+D(t.minute),void 0!==t.second&&(e+=":"+D(t.second),void 0!==t.millisecond&&(e+="."+S(t.millisecond)))),e}(this.datetimeValue)}}]),t}generateColumns(){let t=this.pickerFormat||this.displayFormat||tt;if(0===t.length)return[];this.calcMinMax(),-1===(t=t.replace("DDDD","{~}").replace("DDD","{~}")).indexOf("D")&&(t=t.replace("{~}","D"));const e=function(t){const e=[];t=t.replace(/[^\w\s]/gi," "),R.forEach(e=>{e.f.length>1&&t.indexOf(e.f)>-1&&t.indexOf(e.f+e.f.charAt(0))<0&&(t=t.replace(e.f," "+e.f+" "))});const i=t.split(" ").filter(t=>t.length>0);return i.forEach((t,s)=>{R.forEach(a=>{if(t===a.f){if((t===J||t===L)&&(e.indexOf(B)<0&&e.indexOf(W)<0||-1===K.indexOf(i[s-1])))return;e.push(t)}})}),e}(t=t.replace(/{~}/g,"")).map(t=>{const e=k(t);let i;const s=(i=this[e+"Values"]?M(this[e+"Values"],e):function(t,e,i){const s=[];if(t===C||t===F){if(void 0===i.year||void 0===e.year)throw new Error("min and max year is undefined");for(let t=i.year;t>=e.year;t--)s.push(t)}else if(t===I||t===Y||t===E||t===A||t===W||t===B)for(let t=1;t<13;t++)s.push(t);else if(t===T||t===N||t===O||t===P)for(let t=1;t<32;t++)s.push(t);else if(t===$||t===V)for(let t=0;t<24;t++)s.push(t);else if(t===H||t===j)for(let t=0;t<60;t++)s.push(t);else if(t===q||t===z)for(let t=0;t<60;t++)s.push(t);else t!==J&&t!==L||s.push("am","pm");return s}(t,this.datetimeMin,this.datetimeMax)).map(e=>({value:e,text:p(t,e,void 0,this.locale)})),a=function(t,e){return e===J||e===L?t.hour<12?"am":"pm":e===W||e===B?t.hour>12?t.hour-12:t.hour:t[k(e)]}(this.datetimeValue,t),o=s.findIndex(t=>t.value===a);return{name:e,selectedIndex:o>=0?o:0,options:s}}),i=this.datetimeMin,s=this.datetimeMax;return["month","day","hour","minute"].filter(t=>!e.find(e=>e.name===t)).forEach(t=>{i[t]=0,s[t]=0}),function(t){const e=[];let i,s;for(let a=0;a<t.length;a++){i=t[a],e.push(0);for(const t of i.options)(s=t.text.length)>e[a]&&(e[a]=s)}return 2===e.length?(s=Math.max(e[0],e[1]),t[0].align="right",t[1].align="left",t[0].optionsWidth=t[1].optionsWidth=`${17*s}px`):3===e.length&&(s=Math.max(e[0],e[2]),t[0].align="right",t[1].columnWidth=`${17*e[1]}px`,t[0].optionsWidth=t[2].optionsWidth=`${17*s}px`,t[2].align="left"),t}(e)}async validate(t){const e=new Date,i=f(this.datetimeMin),s=f(this.datetimeMax),a=await t.getColumn("year");let o=e.getFullYear();if(a){a.options.find(t=>t.value===e.getFullYear())||(o=a.options[0].value);const t=a.selectedIndex;if(void 0!==t){const e=a.options[t];e&&(o=e.value)}}const n=await this.validateColumn(t,"month",1,i,s,[o,0,0,0,0],[o,12,31,23,59]),r=4===(l=n)||6===l||9===l||11===l?30:2===l?function(t){return t%4==0&&t%100!=0||t%400==0}(o)?29:28:31;var l;const h=await this.validateColumn(t,"day",2,i,s,[o,n,0,0,0],[o,n,r,23,59]),d=await this.validateColumn(t,"hour",3,i,s,[o,n,h,0,0],[o,n,h,23,59]);await this.validateColumn(t,"minute",4,i,s,[o,n,h,d,0],[o,n,h,d,59])}calcMinMax(){const t=(new Date).getFullYear();if(void 0!==this.yearValues){const t=M(this.yearValues,"year");void 0===this.min&&(this.min=Math.min(...t).toString()),void 0===this.max&&(this.max=Math.max(...t).toString())}else void 0===this.min&&(this.min=(t-100).toString()),void 0===this.max&&(this.max=t.toString());const e=this.datetimeMin=b(this.min),i=this.datetimeMax=b(this.max);e.year=e.year||t,i.year=i.year||t,e.month=e.month||1,i.month=i.month||12,e.day=e.day||1,i.day=i.day||31,e.hour=e.hour||0,i.hour=i.hour||23,e.minute=e.minute||0,i.minute=i.minute||59,e.second=e.second||0,i.second=i.second||59,e.year>i.year&&(console.error("min.year > max.year"),e.year=i.year-100),e.year===i.year&&(e.month>i.month?(console.error("min.month > max.month"),e.month=1):e.month===i.month&&e.day>i.day&&(console.error("min.day > max.day"),e.day=1))}async validateColumn(t,e,i,s,a,o,n){const r=await t.getColumn(e);if(!r)return 0;const l=o.slice(),h=n.slice(),c=r.options;let u=c.length-1,m=0;for(let t=0;t<c.length;t++){const e=c[t],r=e.value;l[i]=e.value,h[i]=e.value,(e.disabled=r<o[i]||r>n[i]||y(h[0],h[1],h[2],h[3],h[4])<s||y(l[0],l[1],l[2],l[3],l[4])>a)||(u=Math.min(u,t),m=Math.max(m,t))}const p=r.selectedIndex=d(u,r.selectedIndex,m),f=r.options[p];return f?f.value:0}getText(){return function(t,e,i){if(void 0===e)return;const s=[];let a=!1;if(R.forEach((o,n)=>{if(t.indexOf(o.f)>-1){const r="{"+n+"}",l=p(o.f,e[o.k],e,i);a||void 0===l||null==e[o.k]||(a=!0),s.push(r,l||""),t=t.replace(o.f,r)}}),a){for(let e=0;e<s.length;e+=2)t=t.replace(s[e],s[e+1]);return t}}(this.displayFormat||this.pickerFormat||tt,this.datetimeValue,this.locale)}hasValue(){return Object.keys(this.datetimeValue).length>0}setFocus(){this.buttonEl&&this.buttonEl.focus()}hostData(){const{inputId:t,disabled:e,readonly:i,isExpanded:s,el:a,placeholder:o}=this,n=void 0===this.getText()&&null!=o,l=t+"-lbl",h=c(a);return h&&(h.id=l),{role:"combobox","aria-disabled":e?"true":null,"aria-expanded":`${s}`,"aria-haspopup":"true","aria-labelledby":l,class:{"datetime-disabled":e,"datetime-readonly":i,"datetime-placeholder":n,"in-item":r("ion-item",a)}}}render(){let e=this.getText();return void 0===e&&(e=null!=this.placeholder?this.placeholder:""),u(!0,this.el,this.name,this.value,this.disabled),[t("div",{class:"datetime-text"},e),t("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:t=>this.buttonEl=t})]}static get is(){return"ion-datetime"}static get encapsulation(){return"shadow"}static get properties(){return{cancelText:{type:String,attr:"cancel-text"},dayNames:{type:String,attr:"day-names"},dayShortNames:{type:String,attr:"day-short-names"},dayValues:{type:"Any",attr:"day-values"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},displayFormat:{type:String,attr:"display-format"},doneText:{type:String,attr:"done-text"},el:{elementRef:!0},hourValues:{type:"Any",attr:"hour-values"},isExpanded:{state:!0},max:{type:String,attr:"max",mutable:!0},min:{type:String,attr:"min",mutable:!0},minuteValues:{type:"Any",attr:"minute-values"},mode:{type:String,attr:"mode"},monthNames:{type:String,attr:"month-names"},monthShortNames:{type:String,attr:"month-short-names"},monthValues:{type:"Any",attr:"month-values"},name:{type:String,attr:"name"},open:{method:!0},pickerCtrl:{connect:"ion-picker-controller"},pickerFormat:{type:String,attr:"picker-format"},pickerOptions:{type:"Any",attr:"picker-options"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]},yearValues:{type:"Any",attr:"year-values"}}}static get events(){return[{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"click",method:"onClick"}]}static get style(){return".sc-ion-datetime-ios-h{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-datetime-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.in-item.sc-ion-datetime-ios-h{position:static}.datetime-placeholder.sc-ion-datetime-ios-h{color:var(--placeholder-color)}.datetime-disabled.sc-ion-datetime-ios-h{opacity:.3;pointer-events:none}.datetime-readonly.sc-ion-datetime-ios-h{pointer-events:none}button.sc-ion-datetime-ios{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl].sc-ion-datetime-ios-h   button.sc-ion-datetime-ios, [dir=rtl]   .sc-ion-datetime-ios-h   button.sc-ion-datetime-ios{right:0}button.sc-ion-datetime-ios::-moz-focus-inner{border:0}.datetime-text.sc-ion-datetime-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}.sc-ion-datetime-ios-h{--placeholder-color:var(--ion-color-step-400,#999);--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}"}static get styleMode(){return"ios"}}let _=0;const tt="MMM D, YYYY";function et(t,e){const i=new t,s=new t;s.addElement(e.querySelector("ion-backdrop"));const a=new t;return a.addElement(e.querySelector(".picker-wrapper")),s.fromTo("opacity",.01,.26),a.fromTo("translateY","100%","0%"),Promise.resolve(i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(s).add(a))}function it(t,e){const i=new t,s=new t;s.addElement(e.querySelector("ion-backdrop"));const a=new t;return a.addElement(e.querySelector(".picker-wrapper")),s.fromTo("opacity",.26,.01),a.fromTo("translateY","0%","100%"),Promise.resolve(i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(s).add(a))}class st{constructor(){this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.columns=[],this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0}onBackdropTap(){const t=this.buttons.find(t=>"cancel"===t.role);t?this.buttonClick(t):this.dismiss()}async present(){await e(this,"pickerEnter",et,et,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration))}dismiss(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),i(this,t,e,"pickerLeave",it,it)}onDidDismiss(){return s(this.el,"ionPickerDidDismiss")}onWillDismiss(){return s(this.el,"ionPickerWillDismiss")}getColumn(t){return Promise.resolve(this.columns.find(e=>e.name===t))}buttonClick(t){let e=!0;return t.handler&&!1===t.handler(this.getSelected())&&(e=!1),e?this.dismiss():Promise.resolve(!1)}getSelected(){const t={};return this.columns.forEach((e,i)=>{const s=void 0!==e.selectedIndex?e.options[e.selectedIndex]:void 0;t[e.name]={text:s?s.text:void 0,value:s?s.value:void 0,columnIndex:i}}),t}hostData(){return{"aria-modal":"true",class:Object.assign({},l(this.mode,"picker"),h(this.cssClass)),style:{zIndex:2e4+this.overlayIndex}}}render(){return[t("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),t("div",{class:"picker-wrapper",role:"dialog"},t("div",{class:"picker-toolbar"},this.buttons.map(e=>t("div",{class:at(e)},t("button",{type:"button",onClick:()=>this.buttonClick(e),class:ot(e)},e.text)))),t("div",{class:"picker-columns"},t("div",{class:"picker-above-highlight"}),this.presented&&this.columns.map(e=>t("ion-picker-column",{col:e})),t("div",{class:"picker-below-highlight"})))]}static get is(){return"ion-picker"}static get encapsulation(){return"scoped"}static get properties(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons"},columns:{type:"Any",attr:"columns"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},getColumn:{method:!0},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},presented:{state:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"}}}static get events(){return[{name:"ionPickerDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]}static get style(){return".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}[dir=rtl].sc-ion-picker-ios-h + b.sc-ion-picker-ios{right:0}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-wrapper.sc-ion-picker-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active, .picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios, .picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color,#fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,#c8c7cc)));--height:260px;color:var(--ion-item-color,var(--ion-text-color,#000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child   .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:400;text-align:start}.picker-button.sc-ion-picker-ios, .picker-button.activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1em;padding-right:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-button.sc-ion-picker-ios, .picker-button.activated.sc-ion-picker-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em}}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{left:0;top:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--background,var(--ion-background-color,#fff))),to(rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(180deg,var(--background,var(--ion-background-color,#fff)) 20%,rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8));z-index:10}[dir=rtl].sc-ion-picker-ios-h   .picker-above-highlight.sc-ion-picker-ios, [dir=rtl]   .sc-ion-picker-ios-h   .picker-above-highlight.sc-ion-picker-ios{right:0}.picker-below-highlight.sc-ion-picker-ios{left:0;top:115px;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--background,var(--ion-background-color,#fff))),to(rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(0deg,var(--background,var(--ion-background-color,#fff)) 30%,rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8));z-index:11}[dir=rtl].sc-ion-picker-ios-h   .picker-below-highlight.sc-ion-picker-ios, [dir=rtl]   .sc-ion-picker-ios-h   .picker-below-highlight.sc-ion-picker-ios{right:0}"}static get styleMode(){return"ios"}}function at(t){return{[`picker-toolbar-${t.role}`]:void 0!==t.role,"picker-toolbar-button":!0}}function ot(t){return Object.assign({"picker-button":!0,"ion-activatable":!0},h(t.cssClass))}class nt{constructor(){this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0,this.noAnimate=!0}componentWillLoad(){let t=0,e=.81;"ios"===this.mode&&(t=-.46,e=1),this.rotateFactor=t,this.scaleFactor=e}async componentDidLoad(){const t=this.optsEl;t&&(this.optHeight=t.firstElementChild?t.firstElementChild.clientHeight:0),this.refresh(),this.gesture=(await import("./chunk-f56eaea8.js")).createGesture({el:this.el,queue:this.queue,gestureName:"picker-swipe",gesturePriority:100,threshold:0,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.setDisabled(!1),this.tmrId=setTimeout(()=>{this.noAnimate=!1,this.refresh(!0)},250)}componentDidUnload(){cancelAnimationFrame(this.rafId),clearTimeout(this.tmrId),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}setSelected(t,e){const i=t>-1?-t*this.optHeight:0;this.velocity=0,cancelAnimationFrame(this.rafId),this.update(i,e,!0)}update(t,e,i){if(!this.optsEl)return;let s=0,a=0;const{col:o,rotateFactor:n}=this,r=o.selectedIndex=this.indexForY(-t),l=0===e?"":e+"ms",h=`scale(${this.scaleFactor})`,d=this.optsEl.children;for(let i=0;i<d.length;i++){const c=d[i],u=o.options[i],m=i*this.optHeight+t;let p="";if(0!==n){const t=m*n;Math.abs(t)<=90?(s=0,a=90,p=`rotateX(${t}deg) `):s=-9999}else a=0,s=m;const y=r===i;p+=`translate3d(0px,${s}px,${a}px) `,1===this.scaleFactor||y||(p+=h),this.noAnimate?(u.duration=0,c.style.transitionDuration=""):e!==u.duration&&(u.duration=e,c.style.transitionDuration=l),p!==u.transform&&(u.transform=p,c.style.transform=p),y!==u.selected&&(u.selected=y,y?c.classList.add(rt):c.classList.remove(rt))}this.col.prevSelected=r,i&&(this.y=t),this.lastIndex!==r&&(m(),this.lastIndex=r)}decelerate(){if(0!==this.velocity){this.velocity*=lt,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);let t=this.y+this.velocity;t>this.minY?(t=this.minY,this.velocity=0):t<this.maxY&&(t=this.maxY,this.velocity=0),this.update(t,0,!0),(Math.round(t)%this.optHeight!=0||Math.abs(this.velocity)>1)&&(this.rafId=requestAnimationFrame(()=>this.decelerate()))}else if(this.y%this.optHeight!=0){const t=Math.abs(this.y%this.optHeight);this.velocity=t>this.optHeight/2?1:-1,this.decelerate()}}indexForY(t){return Math.min(Math.max(Math.abs(Math.round(t/this.optHeight)),0),this.col.options.length-1)}onStart(t){t.event.preventDefault(),t.event.stopPropagation(),cancelAnimationFrame(this.rafId);const e=this.col.options;let i=e.length-1,s=0;for(let t=0;t<e.length;t++)e[t].disabled||(i=Math.min(i,t),s=Math.max(s,t));this.minY=-i*this.optHeight,this.maxY=-s*this.optHeight}onMove(t){t.event.preventDefault(),t.event.stopPropagation();let e=this.y+t.deltaY;e>this.minY?(e=Math.pow(e,.8),this.bounceFrom=e):e<this.maxY?(e+=Math.pow(this.maxY-e,.9),this.bounceFrom=e):this.bounceFrom=0,this.update(e,0,!1)}onEnd(t){if(this.bounceFrom>0)this.update(this.minY,100,!0);else if(this.bounceFrom<0)this.update(this.maxY,100,!0);else if(this.velocity=d(-ht,23*t.velocityY,ht),0===this.velocity&&0===t.deltaY){const e=t.event.target.closest(".picker-opt");e&&e.hasAttribute("opt-index")&&this.setSelected(parseInt(e.getAttribute("opt-index"),10),dt)}else this.y+=t.deltaY,this.decelerate()}refresh(t){let e=this.col.options.length-1,i=0;const s=this.col.options;for(let t=0;t<s.length;t++)s[t].disabled||(e=Math.min(e,t),i=Math.max(i,t));const a=d(e,this.col.selectedIndex||0,i);if(this.col.prevSelected!==a||t){const t=a*this.optHeight*-1;this.velocity=0,this.update(t,dt,!0)}}hostData(){return{class:{"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}}}render(){const e=this.col;return[e.prefix&&t("div",{class:"picker-prefix",style:{width:e.prefixWidth}},e.prefix),t("div",{class:"picker-opts",style:{maxWidth:e.optionsWidth},ref:t=>this.optsEl=t},e.options.map((e,i)=>t("button",{type:"button",class:{"picker-opt":!0,"picker-opt-disabled":!!e.disabled},"opt-index":i},e.text))),e.suffix&&t("div",{class:"picker-suffix",style:{width:e.suffixWidth}},e.suffix)]}static get is(){return"ion-picker-column"}static get properties(){return{col:{type:"Any",attr:"col"},el:{elementRef:!0},queue:{context:"queue"}}}static get style(){return".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}:host-context([dir=rtl]) .picker-opt{right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right,:host-context([dir=rtl]) .picker-opts-left{-ms-flex-pack:end;justify-content:flex-end}:host-context([dir=rtl]) .picker-opts-right{-ms-flex-pack:start;justify-content:flex-start}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:1;flex:1;white-space:nowrap}.picker-suffix{text-align:start}.picker-col{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}.picker-opts,.picker-prefix,.picker-suffix{top:77px;pointer-events:none}.picker-opt,.picker-opts,.picker-prefix,.picker-suffix{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}"}static get styleMode(){return"ios"}}const rt="picker-opt-selected",lt=.97,ht=90,dt=150;class ct{create(t){return a(this.doc.createElement("ion-picker"),t)}dismiss(t,e,i){return o(this.doc,t,e,"ion-picker",i)}async getTop(){return n(this.doc,"ion-picker")}static get is(){return"ion-picker-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}}export{Q as IonDatetime,st as IonPicker,nt as IonPickerColumn,ct as IonPickerController};