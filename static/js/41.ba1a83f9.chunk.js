(this.webpackJsonpSongsBook=this.webpackJsonpSongsBook||[]).push([[41],{141:function(n,t,o){"use strict";o.r(t),o.d(t,"startFocusVisible",(function(){return i}));var e="ion-focused",s=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],i=function(){var n=[],t=!0,o=document,i=function(t){n.forEach((function(n){return n.classList.remove(e)})),t.forEach((function(n){return n.classList.add(e)})),n=t},c=function(){t=!1,i([])};o.addEventListener("keydown",(function(n){(t=s.includes(n.key))||i([])})),o.addEventListener("focusin",(function(n){if(t&&n.composedPath){var o=n.composedPath().filter((function(n){return!!n.classList&&n.classList.contains("ion-focusable")}));i(o)}})),o.addEventListener("focusout",(function(){o.activeElement===o.body&&i([])})),o.addEventListener("touchstart",c),o.addEventListener("mousedown",c)}}}]);
//# sourceMappingURL=41.ba1a83f9.chunk.js.map