const t=window.Ionic.h;import{c as e,d as s}from"./chunk-7c632336.js";import{i as a,f as i}from"./chunk-6d7d2f8c.js";class n{constructor(){this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.disabled=!1,this.value=0,this.handleKeyboard=((t,e)=>{let s=this.step;s=s>0?s:1,s/=this.max-this.min,e||(s*=-1),"A"===t?this.ratioA=a(0,this.ratioA+s,1):this.ratioB=a(0,this.ratioB+s,1),this.updateValue()})}debounceChanged(){this.ionChange=i(this.ionChange,this.debounce)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled),this.emitStyle()}valueChanged(t){this.noUpdate||this.updateRatio(),this.ionChange.emit({value:t})}onBlur(){this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())}onFocus(){this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())}componentWillLoad(){this.updateRatio(),this.debounceChanged(),this.emitStyle()}async componentDidLoad(){this.gesture=(await import("./chunk-f56eaea8.js")).createGesture({el:this.rangeSlider,queue:this.queue,gestureName:"range",gesturePriority:100,threshold:0,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.setDisabled(this.disabled)}componentDidUnload(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}getValue(){const t=this.value||0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t}emitStyle(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}onStart(t){const e=this.rect=this.rangeSlider.getBoundingClientRect(),s=t.currentX,i=a(0,(s-e.left)/e.width,1);this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-i)<Math.abs(this.ratioB-i)?"A":"B",this.setFocus(this.pressedKnob),this.update(s)}onMove(t){this.update(t.currentX)}onEnd(t){this.update(t.currentX),this.pressedKnob=void 0}update(t){const e=this.rect;let s=a(0,(t-e.left)/e.width,1);this.snaps&&(s=h(r(s,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=s:this.ratioB=s,this.updateValue()}get valA(){return r(this.ratioA,this.min,this.max,this.step)}get valB(){return r(this.ratioB,this.min,this.max,this.step)}get ratioLower(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const t=this.getValue(),{min:e,max:s}=this;this.dualKnobs?(this.ratioA=h(t.lower,e,s),this.ratioB=h(t.upper,e,s)):this.ratioA=h(t,e,s)}updateValue(){this.noUpdate=!0;const{valA:t,valB:e}=this;this.value=this.dualKnobs?{lower:Math.min(t,e),upper:Math.max(t,e)}:t,this.noUpdate=!1}setFocus(t){if(this.el.shadowRoot){const e=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");e&&e.focus()}}hostData(){return{class:Object.assign({},e(this.color),{"in-item":s("ion-item",this.el),"range-disabled":this.disabled,"range-pressed":void 0!==this.pressedKnob,"range-has-pin":this.pin})}}render(){const{min:e,max:s,step:a,ratioLower:i,ratioUpper:n}=this,r=`${100*i}%`,l=`${100-100*n}%`,d=[];if(this.snaps)for(let t=e;t<=s;t+=a){const a=h(t,e,s);d.push({ratio:a,active:a>=i&&a<=n,left:`${100*a}%`})}return[t("slot",{name:"start"}),t("div",{class:"range-slider",ref:t=>this.rangeSlider=t},d.map(e=>t("div",{style:{left:e.left},role:"presentation",class:{"range-tick":!0,"range-tick-active":e.active}})),t("div",{class:"range-bar",role:"presentation"}),t("div",{class:"range-bar range-bar-active",role:"presentation",style:{left:r,right:l}}),o({knob:"A",pressed:"A"===this.pressedKnob,value:this.valA,ratio:this.ratioA,pin:this.pin,disabled:this.disabled,handleKeyboard:this.handleKeyboard,min:e,max:s}),this.dualKnobs&&o({knob:"B",pressed:"B"===this.pressedKnob,value:this.valB,ratio:this.ratioB,pin:this.pin,disabled:this.disabled,handleKeyboard:this.handleKeyboard,min:e,max:s})),t("slot",{name:"end"})]}static get is(){return"ion-range"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},dualKnobs:{type:Boolean,attr:"dual-knobs"},el:{elementRef:!0},max:{type:Number,attr:"max",watchCallbacks:["maxChanged"]},min:{type:Number,attr:"min",watchCallbacks:["minChanged"]},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},pin:{type:Boolean,attr:"pin"},pressedKnob:{state:!0},queue:{context:"queue"},ratioA:{state:!0},ratioB:{state:!0},snaps:{type:Boolean,attr:"snaps"},step:{type:Number,attr:"step"},value:{type:Number,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"focusout",method:"onBlur"},{name:"focusin",method:"onFocus"}]}static get style(){return":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle{right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar{right:0}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}:host-context([dir=rtl]) .range-knob{right:calc(50% - var(--knob-size) / 2)}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.range-pressed) .range-knob-handle{will-change:left}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--ion-background-color,#fff);--knob-box-shadow:0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02);--knob-size:28px;--bar-height:1px;--bar-background:var(--ion-color-step-250,#bfbfbf);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-.5px;border-radius:0;position:absolute;top:17.5px;width:1px;height:8px;background:var(--ion-color-step-250,#bfbfbf);pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-tick{margin-left:unset;-webkit-margin-start:-.5px;margin-inline-start:-.5px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,28px,0) scale(.01);transform:translate3d(0,28px,0) scale(.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform .12s ease;transition:-webkit-transform .12s ease;transition:transform .12s ease;transition:transform .12s ease,-webkit-transform .12s ease;background:transparent;color:var(--ion-text-color,#000);font-size:12px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}:host(.range-disabled){opacity:.5}"}static get styleMode(){return"ios"}}function o({knob:e,value:s,ratio:a,min:i,max:n,disabled:o,pressed:r,pin:h,handleKeyboard:l}){return t("div",{onKeyDown:t=>{const s=t.key;"ArrowLeft"===s||"ArrowDown"===s?(l(e,!1),t.preventDefault(),t.stopPropagation()):"ArrowRight"!==s&&"ArrowUp"!==s||(l(e,!0),t.preventDefault(),t.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===e,"range-knob-b":"B"===e,"range-knob-pressed":r,"range-knob-min":s===i,"range-knob-max":s===n},style:{left:`${100*a}%`},role:"slider",tabindex:o?-1:0,"aria-valuemin":i,"aria-valuemax":n,"aria-disabled":o?"true":null,"aria-valuenow":s},h&&t("div",{class:"range-pin",role:"presentation"},Math.round(s)),t("div",{class:"range-knob",role:"presentation"}))}function r(t,e,s,i){let n=(s-e)*t;return i>0&&(n=Math.round(n/i)*i+e),a(e,n,s)}function h(t,e,s){return a(0,(t-e)/(s-e),1)}export{n as IonRange};