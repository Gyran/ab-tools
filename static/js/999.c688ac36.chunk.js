"use strict";(self.webpackChunkab_tools=self.webpackChunkab_tools||[]).push([[999],{7169:function(e,t,n){n.d(t,{L:function(){return r},Z:function(){return a}});var r,c=n(2791),i=n(741),u=n(184),o=function(e){var t=e.content,n=e.width,r=(0,c.useRef)(null);return(0,c.useEffect)((function(){r.current&&i.toCanvas(r.current,t,{width:n,errorCorrectionLevel:"H"})}),[t,n]),(0,u.jsx)("canvas",{ref:r})};!function(e){e.IBAN="IBAN",e.BBAN="BBAN",e.BG="bg",e.PG="PG"}(r||(r={}));var a=function(e){var t=e.uqr,n=void 0===t?1:t,i=e.tp,a=void 0===i?1:i,l=e.nme,s=void 0===l?"":l,p=e.cid,d=void 0===p?"":p,f=e.iref,b=void 0===f?-1:f,v=e.ddt,j=void 0===v?new Date:v,y=e.due,m=void 0===y?0:y,O=e.pt,h=void 0===O?r.BG:O,w=e.acc,g=void 0===w?"":w,x=e.width,P=(0,c.useMemo)((function(){return JSON.stringify({uqr:n,tp:a,nme:s,cid:d,iref:b,ddt:j.toISOString().slice(0,10).replace(/-/g,""),due:m,pt:h,acc:g})}),[n,a,s,d,b,j,m,h,g]);return(0,u.jsx)(o,{content:P,width:x})}},4999:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return p}});var u=n(8152),o=n(2791),a=n(7169),l=n(184),s=function(e){return e},p=function(){var e=[{label:"amount",element:(0,l.jsx)("input",{type:"number",step:.01}),dataKey:"due",parseFn:function(e){return parseFloat(e)}},{label:"ocr",element:(0,l.jsx)("input",{type:"number"}),dataKey:"iref",parseFn:function(e){return parseInt(e,10)}},{label:"account",element:(0,l.jsx)("input",{type:"text"}),dataKey:"acc"},{label:"payment type",element:(0,l.jsxs)("select",{children:[(0,l.jsx)("option",{children:a.L.BG}),(0,l.jsx)("option",{children:a.L.PG})]}),dataKey:"pt"}],t=(0,o.useState)({uqr:1,tp:1,nme:"",cid:"",iref:-1,ddt:new Date((new Date).getTime()+864e5),due:-1,pt:a.L.BG,acc:""}),n=(0,u.Z)(t,2),c=n[0],p=n[1],d=(0,o.useCallback)((function(e,t){p((function(n){return i(i({},n),{},r({},e,t))}))}),[]);return(0,l.jsxs)("div",{className:"app-wrapper",children:[e.map((function(e){return(0,l.jsxs)("div",{children:[e.label," ",o.cloneElement(e.element,{onChange:function(t){var n,r=t.currentTarget.value,c=null!==(n=e.parseFn)&&void 0!==n?n:s;d(e.dataKey,c(r))}})]})})),(0,l.jsx)(a.Z,i({width:300},c))]})}}}]);
//# sourceMappingURL=999.c688ac36.chunk.js.map