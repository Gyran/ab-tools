(this["webpackJsonpab-tools"]=this["webpackJsonpab-tools"]||[]).push([[5],{31:function(e,t,a){"use strict";var n,r,s,c=a(12),i=a(0),l=a(4),o=a(2),b=l.b.div(n||(n=Object(c.a)([""]))),u=l.b.input(r||(r=Object(c.a)([""]))),p=l.b.label(s||(s=Object(c.a)(["\n  display: block;\n  font-weight: bold;\n  margin-bottom: 5px;\n"])));t.a=function(e){var t=e.label,a=e.onChange,n=e.value,r=e.type,s=void 0===r?"text":r,c=e.step,l=Object(i.useCallback)((function(e){a(e.currentTarget.value)}),[a]);return Object(o.jsxs)(b,{children:[Object(o.jsx)(p,{children:t}),Object(o.jsx)(u,{onChange:l,type:s,value:n,step:c})]})}},32:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=a(4).b.div.withConfig({displayName:"layout__Stack",componentId:"sc-purhk0-0"})(["display:grid;grid-template-columns:1fr;grid-row-gap:10px;"])},65:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(4),s=a(0),c=a(32),i=a(31),l=a(2),o=r.b.div.withConfig({displayName:"calculate-december-salary__PageWrapper",componentId:"sc-v8k1or-0"})([""]),b=r.b.div.withConfig({displayName:"calculate-december-salary__Wrapper",componentId:"sc-v8k1or-1"})(["display:grid;grid-template-columns:1fr 300px;"]),u=function(e){var t=parseFloat(e);return Number.isFinite(t)?t:0},p=537200;t.default=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),a=t[0],r=t[1],j=Object(s.useState)(""),d=Object(n.a)(j,2),m=d[0],h=d[1],v=Object(s.useState)(""),g=Object(n.a)(v,2),k=g[0],f=g[1],O=u(a)+u(m)+u(k),x=p-O,y=Object(s.useMemo)((function(){return new Intl.NumberFormat("sv-SE",{style:"currency",currency:"SEK"})}),[]);return Object(l.jsxs)(o,{children:[Object(l.jsx)("h2",{children:"Hur mycket beh\xf6ver du ta i l\xf6n i december f\xf6r att n\xe5 till gr\xe4nsen (Inkomst\xe5r 2021)"}),Object(l.jsxs)(b,{children:[Object(l.jsxs)(c.a,{children:[Object(l.jsxs)("p",{children:["Samla in samtliga"," ",Object(l.jsx)("a",{href:"https://sso.skatteverket.se/ms/ms_web/page.do#/privat/skatter-deklaration/inkomstuppgifter",children:"inkomstuppgifter fr\xe5n skatteverket"})," ","till och med November."]}),Object(l.jsx)(i.a,{label:"Bruttol\xf6n",type:"number",value:a,onChange:r}),Object(l.jsx)(i.a,{label:"F\xf6rm\xe5ner",type:"number",value:m,onChange:h}),Object(l.jsx)(i.a,{label:"Ers\xe4ttningar och pension ",type:"number",value:k,onChange:f})]}),Object(l.jsxs)(c.a,{children:[Object(l.jsxs)("p",{children:["Inkomster totalt: ",y.format(O)]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("a",{href:"https://www.skatteverket.se/privat/etjansterochblanketter/svarpavanligafragor/inkomstavtjanst/privattjansteinkomsterfaq/narskamanbetalastatliginkomstskattochhurhogarden.5.10010ec103545f243e8000166.html",children:"Brytpunkt innan statlig skatt"}),": ",y.format(p)]}),Object(l.jsxs)("p",{children:["F\xf6reslagen bruttol\xf6n i december:"," ",y.format(x)]})]})]})]})}}}]);
//# sourceMappingURL=5.1e68d68a.chunk.js.map