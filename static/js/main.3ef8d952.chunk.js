(this.webpackJsonproutini=this.webpackJsonproutini||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(31),a=n.n(c),r=n(9),s=n(156),l=n(162),o=n(154),j=n(157),d=n(163),b=n(158),u=n(161),x=n(92),O=n.n(x),f=n(93),h=n.n(f),m=n(159),p=n(5),v=function(e){var t=e.folders,n=e.setActiveFile,i=t.map((function(e){var t=e.id,i=e.title;return Object(p.jsx)(m.a,{sx:{p:.5},nodeId:"".concat(t),label:i,onClick:function(){return n(t)}})}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{}),Object(p.jsx)(o.a,{component:"nav",sx:{width:{sm:240},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:Object(p.jsx)(j.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},open:!0,children:Object(p.jsxs)(o.a,{sx:{ml:2,mt:5},children:[Object(p.jsx)(d.a,{sx:{fontWeight:"bold"},variant:"h5",children:"routini"}),Object(p.jsx)(u.a,{"aria-label":"multi-select",defaultCollapseIcon:Object(p.jsx)(O.a,{}),defaultExpandIcon:Object(p.jsx)(h.a,{}),multiSelect:!0,sx:{overflowY:"auto",my:3},children:Object(p.jsx)(m.a,{nodeId:"1",label:"\u0417\u0430\u043c\u0456\u0442\u043a\u0438",children:i})}),Object(p.jsx)(b.a,{variant:"outlined",onClick:function(){},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043f\u0430\u043f\u043a\u0443"})]})})})]})},g=n(2),F=n(77),w=(n(6),n(96)),k=n(94),y=n(95),C=n.n(y),I=(n(114),function(e){var t=e.activeFile,n=e.onUpdateNote,c=t.text,a=Object(F.b)({extensions:[w.a,k.a],content:c});t&&a.on("blur",(function(){return n(Object(g.a)(Object(g.a)({},t),{},{text:a.getHTML()}))}));var r=t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C.a,{className:"ProseMirror Title",html:t.title,onChange:function(e){return n(Object(g.a)(Object(g.a)({},t),{},{title:e.target.value}))}}),Object(p.jsx)(F.a,{editor:a})]}):Object(p.jsx)("h2",{children:"\u041d\u0435\u043c\u0430\u0454 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432"});return Object(i.useEffect)((function(){if(t)try{a.commands.setContent(c)}catch(e){return}}),[t]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(s.a,{sx:{py:12,px:8,width:"100%"},className:"editarea",children:r})})}),S=function(){var e=Object(i.useState)([{id:2,title:"\u0428\u043a\u043e\u043b\u0430",text:"<p>Hello World! \ud83c\udf0e\ufe0f</p>"},{id:3,title:"\u041b\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",text:"<h3>Literature!</h3>"}]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(1),l=Object(r.a)(a,2),o=l[0],j=l[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(s.a,{sx:{display:"flex"},children:[Object(p.jsx)(v,{folders:n,setActiveFile:j}),Object(p.jsx)(I,{activeFile:!!n.find((function(e){return e.id===o}))&&n.find((function(e){return e.id===o})),onUpdateNote:function(e){var t=n.map((function(t){return t.id===e.id?e:t}));c(t)}})]})})};a.a.render(Object(p.jsx)(S,{}),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.3ef8d952.chunk.js.map