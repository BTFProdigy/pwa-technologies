System.register(["./p-a6904dd4.system.js","./p-45890bdd.system.js","./p-4d6d38a9.system.js"],function(t){"use strict";var e;return{setters:[function(){},function(){},function(t){e=t.createGesture}],execute:function(){t("createSwipeBackGesture",r);function r(t,r,n,a,i){var s=t.ownerDocument.defaultView;function u(t){return t.startX<=50&&r()}function o(t){var e=t.deltaX;var r=e/s.innerWidth;a(r)}function c(t){var e=t.deltaX;var r=s.innerWidth;var n=e/r;var a=t.velocityX;var u=r/2;var o=a>=0&&(a>.2||t.deltaX>u);var c=o?1-n:n;var v=c*r;var d=0;if(v>5){var f=v/Math.abs(a);d=Math.min(f,300)}i(o,n,d)}return e({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:u,onStart:n,onMove:o,onEnd:c})}}}});