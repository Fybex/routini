(this.webpackJsonproutini=this.webpackJsonproutini||[]).push([[0],{247:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(68),r=n.n(c),i=n(36),o=n(73),s=n(6),l=n(11),d=n(75),u=n(177),j=n(123),b=n(1),O=(Object(u.a)({apiKey:"AIzaSyAZZZw-ZB9MsEdfK3PJ6kaJL0bc_l_SiWQ",authDomain:"routini-30c51.firebaseapp.com",projectId:"routini-30c51",storageBucket:"routini-30c51.appspot.com",messagingSenderId:"783318539216",appId:"1:783318539216:web:c9030b35f5737f87b5b7d5",measurementId:"G-BC9SHQZQT4"}),Object(j.c)()),h=Object(a.createContext)(),x=function(e){var t=Object(a.useState)(Object(d.b)().currentUser),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(),o=Object(l.a)(i,2),u=o[0],j=o[1];return Object(a.useEffect)((function(){var e=Object(d.c)(Object(d.b)(),r,j);return function(){return e()}}),[]),Object(b.jsx)(h.Provider,Object(s.a)({value:{user:c,error:u}},e))},f=function(){var e=Object(a.useContext)(h);return Object(s.a)(Object(s.a)({},e),{},{isAuthenticated:null!=e.user})},p=n(20),m=n(2),g=n.n(m),v=n(7),k=n(319),w=n(320),y=n(326),S=n(337),C=n(202),I=n.n(C),D=n(15),T=n(181),A=n.n(T),E=n(328),F=n(203),L=n(131),W=n.n(L),N=n(153),P=n.n(N),U=n(182),M=n.n(U),z=n(342),B=n(343),J=n(310),R=n(4),H=n(262),q=n(261),K=n(256),Z=n(158),G=n(58),Q=n(327),V=n(336),Y=n(311),_=n(341);function X(e){var t=e.results,n=e.setActiveFile,a=e.setSearch;console.log(t);var c=t?t.map((function(e){var t=e.rawText.indexOf(" ",Math.max(e.resultIndexStart-15,0)),c=e.resultIndexStart+80<e.rawText.length?e.rawText.indexOf(" ",e.resultIndexStart+80):e.rawText.length;return console.log(t,c),Object(b.jsxs)("div",{children:[Object(b.jsxs)(Q.a,{sx:{flexDirection:"column",alignItems:"flex-start"},button:!0,onClick:function(){return t=e.id,n(t),void a(!1);var t},children:[Object(b.jsx)(V.a,{variant:"h6",children:e.title}),Object(b.jsxs)(J.a,{sx:{display:"inline-block",whiteSpace:"pre-wrap"},children:[Object(b.jsxs)(V.a,{component:"span",children:[0!==t?"...":"",e.rawText.slice(t,e.resultIndexStart)]}),Object(b.jsx)(V.a,{component:"span",fontWeight:"bold",children:e.rawText.slice(e.resultIndexStart,e.rawText.indexOf(" ",e.resultIndexEnd))}),Object(b.jsxs)(V.a,{component:"span",children:[e.rawText.slice(e.rawText.indexOf(" ",e.resultIndexEnd),c),c!==e.rawText.length?"...":""]})]})]}),Object(b.jsx)(Y.a,{})]})})):Object(b.jsx)(V.a,{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"});return Object(b.jsx)("div",{children:Object(b.jsx)(_.a,{sx:{flexDirection:"column"},children:c})})}var $={position:"fixed",top:"30%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",borderRadius:2,p:4},ee=Object(D.a)("div")((function(e){var t=e.theme;return Object(R.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(Z.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(Z.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"})})),te=Object(D.a)("div")((function(e){e.theme;return{height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),ne=Object(D.a)(G.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(R.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(2),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}}));function ae(e){var t=e.papers,n=e.search,c=e.setSearch,r=(e.handleSearchOpen,e.handleSearchClose),i=e.setActiveFile,o=Object(a.useState)(""),d=Object(l.a)(o,2),u=d[0],j=d[1],O=Object(a.useState)(!1),h=Object(l.a)(O,2),x=h[0],f=h[1],m=Object(a.useState)(!1),g=Object(l.a)(m,2),v=g[0],k=g[1],w=function e(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,a=[],c=0;c<n.length;c++)n[c].rawText&&console.log(n[c]),n[c].rawText&&n[c].rawText.toLowerCase().includes(u)?a.push(Object(s.a)(Object(s.a)({},n[c]),{},{resultIndexStart:n[c].rawText.toLowerCase().indexOf(u),resultIndexEnd:n[c].rawText.toLowerCase().indexOf(u)+u.length})):n[c].children&&a.push.apply(a,Object(p.a)(e(n[c].children)));if(n!==t)return a;k(a)},y=x?Object(b.jsx)(X,{results:v,setActiveFile:i,setSearch:c}):null;return Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:Object(b.jsx)(q.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:n,onClose:r,closeAfterTransition:!0,BackdropComponent:H.a,BackdropProps:{timeout:500},children:Object(b.jsx)(K.a,{in:n,children:Object(b.jsxs)(J.a,{sx:$,children:[Object(b.jsxs)(ee,{children:[Object(b.jsx)(te,{children:Object(b.jsx)(W.a,{})}),Object(b.jsx)(ne,{placeholder:"\u041f\u043e\u0448\u0443\u043a\u2026",inputProps:{"aria-label":"search"},value:u,onChange:function(e){e&&j(e.target.value.toLowerCase()),""===e.target.value?f(!1):f(!0),w()}})]}),y]})})})})})}var ce=Object(D.a)(z.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(s.a)({transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{width:"calc(100% - ".concat(240,"px)"),marginLeft:"".concat(240,"px"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})})}));function re(e){var t=e.papers,n=e.setActiveFile,c=e.handleDrawerOpen,r=Object(a.useState)(!1),i=Object(l.a)(r,2),o=i[0],s=i[1],u=function(){return s(!0)},j=Object(a.useState)(null),O=Object(l.a)(j,2),h=O[0],x=O[1],f=Object(a.useState)(null),p=Object(l.a)(f,2),m=p[0],g=p[1],v=Boolean(h),k=Boolean(m),w=function(){g(null)},y="primary-search-account-menu",C=Object(b.jsx)(F.a,{anchorEl:h,anchorOrigin:{vertical:"top",horizontal:"right"},id:y,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:v,onClose:function(){x(null),w()},children:Object(b.jsx)(E.a,{onClick:function(){return Object(d.e)(Object(d.b)())},children:"\u0412\u0438\u0439\u0442\u0438"})}),I="primary-search-account-menu-mobile",D=Object(b.jsx)(F.a,{anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"right"},id:I,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:k,onClose:w,children:Object(b.jsxs)(E.a,{onClick:function(){return Object(d.e)(Object(d.b)())},children:[Object(b.jsx)(S.a,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(b.jsx)(P.a,{})}),Object(b.jsx)("p",{children:"\u0412\u0438\u0439\u0442\u0438"})]})});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ce,{color:"transparent",elevation:0,position:"fixed",children:Object(b.jsxs)(B.a,{children:[Object(b.jsx)(S.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},onClick:c,children:Object(b.jsx)(A.a,{})}),Object(b.jsx)(J.a,{sx:{flexGrow:1}}),Object(b.jsxs)(J.a,{sx:{display:{xs:"none",md:"flex"}},children:[Object(b.jsx)(S.a,{onClick:u,size:"large",color:"inherit",children:Object(b.jsx)(W.a,{})}),Object(b.jsx)(S.a,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":y,"aria-haspopup":"true",onClick:function(e){x(e.currentTarget)},color:"inherit",children:Object(b.jsx)(P.a,{})})]}),Object(b.jsx)(J.a,{sx:{display:{xs:"flex",md:"none"}},children:Object(b.jsx)(S.a,{size:"large","aria-label":"show more","aria-controls":I,"aria-haspopup":"true",onClick:function(e){g(e.currentTarget)},color:"inherit",children:Object(b.jsx)(M.a,{})})})]})}),D,C,Object(b.jsx)(ae,{papers:t,search:o,setSearch:s,handleSearchOpen:u,handleSearchClose:function(){return s(!1)},setActiveFile:n})]})}var ie=n(331),oe=n(49),se=n(347),le=n(187),de=n.n(le),ue=n(186),je=n.n(ue),be=n(155),Oe=n.n(be),he=n(16),xe=n(349),fe=n(78),pe=n(183),me=n(132),ge=n.n(me),ve=n(184),ke=n.n(ve),we=n(154),ye=n(344);function Se(e){var t=Object(we.useSpring)({from:{opacity:0},to:{opacity:e.in?1:0}});return Object(b.jsx)(we.animated.div,{style:t,children:Object(b.jsx)(ye.a,Object(s.a)({},e))})}var Ce=Object(D.a)(xe.a)((function(e){var t,n=e.theme;return t={},Object(R.a)(t,"& .".concat(fe.a.content),Object(R.a)({fontWeight:n.typography.fontWeightMedium,color:n.palette.text.main,"&:hover":{backgroundColor:n.palette.action.hover},"&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused, &:hover.Mui-selected":{backgroundColor:n.palette.action.focus}},"& .".concat(fe.a.label),{fontWeight:"inherit",color:"inherit"})),Object(R.a)(t,"& .".concat(fe.a.group),Object(R.a)({marginLeft:0},"& .".concat(fe.a.content),{paddingLeft:n.spacing(4)})),t})),Ie=Object(a.forwardRef)((function(e,t){var n,c=e.classes,r=e.className,i=e.label,s=e.nodeId,d=e.icon,u=e.expansionIcon,j=e.displayIcon,O=e.addPaper,h=e.deletePaper,x=e.expand,f=e.labelIcon,p=e.activeFile,m=Object(pe.a)(s),g=m.disabled,v=m.expanded,k=m.selected,w=m.focused,y=m.handleExpansion,C=m.handleSelection,I=m.preventSelection,D=d||u||j,T=function(e){C(e)},A=Object(a.useState)(!1),E=Object(l.a)(A,2),F=E[0],L=E[1];return Object(a.useEffect)((function(){p==s&&T(s)}),[p]),Object(b.jsxs)(J.a,{className:Object(he.a)(r,c.root,(n={},Object(R.a)(n,c.expanded,v),Object(R.a)(n,c.selected,k),Object(R.a)(n,c.focused,w),Object(R.a)(n,c.disabled,g),n)),onMouseDown:function(e){I(e)},ref:t,onMouseEnter:function(){return L(!0)},onMouseLeave:function(){return L(!1)},sx:{display:"flex",alignItems:"center",p:.5,pr:0},children:[Object(b.jsx)("div",{onClick:function(e){y(e),x()},children:Object(b.jsx)(S.a,{size:"small",children:D})}),Object(b.jsxs)(o.b,{to:"/routini/".concat(s),onClick:T,style:{flexGrow:1,py:2,display:"flex",alignItems:"center",color:"inherit",textDecoration:"none"},children:[Object(b.jsx)(J.a,{component:f,sx:{mr:1,color:"#333",height:60}}),Object(b.jsx)(V.a,{variant:"body1",children:i})]}),F&&Object(b.jsxs)(J.a,{sx:{display:"block"},children:["1"!==s&&"tasks"!==s?Object(b.jsx)(S.a,{size:"small",onClick:h,children:Object(b.jsx)(ke.a,{})}):null,"tasks"!==s?Object(b.jsx)(S.a,{size:"small",onClick:O,children:Object(b.jsx)(ge.a,{})}):null]})]})})),De=function(e){return Object(b.jsx)(Ce,Object(s.a)({TransitionComponent:Se,ContentComponent:Ie},e))},Te=n(317),Ae=n(346),Ee=n(345),Fe=n(338);function Le(e){var t=e.openDialog,n=e.setOpenDialog,a=e.deletePaper,c=e.lastClickedDelete,r=function(){n(!1)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(Te.a,{open:t,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(b.jsx)(Ee.a,{id:"alert-dialog-title",children:"\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0449\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0444\u0430\u0439\u043b?"}),Object(b.jsxs)(Ae.a,{children:[Object(b.jsx)(Fe.a,{onClick:r,children:"\u041d\u0456"}),Object(b.jsx)(Fe.a,{onClick:function(){r(),a(c)},autoFocus:!0,children:"\u0422\u0430\u043a"})]})]})})}var We=n(188),Ne=n.n(We),Pe=n(185),Ue=n.n(Pe),Me=Object(D.a)("div")((function(e){var t=e.theme;return Object(s.a)(Object(s.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})})),ze=Object(D.a)("div")((function(e){e.theme;return{width:"5px",cursor:"ew-resize",padding:"4px 0 0",borderTop:"1px solid #ddd",position:"absolute",top:0,right:0,bottom:0,zIndex:100,"&:hover":{backgroundColor:"#ddd",transition:"all 0.4s ease"}}})),Be=function(e){var t=e.papers,n=e.addPaper,c=e.deletePaper,r=e.activeFile,i=e.setActiveFile,o=e.open,s=e.handleDrawerClose,d=e.drawerWidth,u=e.setDrawerWidth,j=e.expanded,O=e.handleExpandClick,h=Object(oe.a)(),x=function e(){document.removeEventListener("mouseup",e,!0),document.removeEventListener("mousemove",f,!0)},f=function(e){var t=e.clientX;t>180&&t<500&&(u(t),localStorage.setItem("drawerWidth",JSON.stringify(t)))},p=Object(a.useState)(!1),m=Object(l.a)(p,2),g=m[0],v=m[1],k=Object(a.useState)(!1),w=Object(l.a)(k,2),y=w[0],C=w[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(ie.a,{sx:Object(R.a)({width:d,flexShrink:0,transition:"all 0.1s ease-out",userSelect:"none"},"& .MuiDrawer-paper",{width:d,boxSizing:"border-box",transition:"all 0.1s ease-out"}),variant:"persistent",anchor:"left",open:o,children:[Object(b.jsx)(ze,{onMouseDown:function(e){return document.addEventListener("mouseup",x,!0),void document.addEventListener("mousemove",f,!0)}}),Object(b.jsx)(Me,{children:Object(b.jsx)(S.a,{onClick:s,children:"ltr"===h.direction?Object(b.jsx)(je.a,{}):Object(b.jsx)(Oe.a,{})})}),Object(b.jsxs)(se.a,{"aria-label":"multi-select",defaultCollapseIcon:Object(b.jsx)(de.a,{}),defaultExpandIcon:Object(b.jsx)(Oe.a,{}),multiSelect:!0,expanded:j,sx:{overflowY:"auto",my:3},onNodeSelect:function(e,t){return i(t[0])},children:[Object(b.jsx)(De,{nodeId:"tasks",label:"\u0417\u0430\u0434\u0430\u0447\u0456",ContentProps:{labelIcon:Ne.a}}),function e(t){return t?t.map((function(t){var a=t.id,c=1!==t.id?null:Ue.a;return Object(b.jsx)(De,{nodeId:"".concat(a),label:t.title,ContentProps:{activeFile:r,addPaper:function(){return n(t.id)},deletePaper:function(){C(a),v(!0)},expand:function(){return O("".concat(t.id))},labelIcon:c},children:t.children&&0!==t.children.length?e(t.children):null},a)})):null}(t)]})]}),Object(b.jsx)(Le,{openDialog:g,setOpenDialog:v,deletePaper:c,lastClickedDelete:y})]})},Je=n(65),Re=n(135),He=n(138),qe=n(136),Ke=n(139),Ze=n(190),Ge=n(191),Qe=n(192),Ve=n(24),Ye=n(325),_e=n(321),Xe=n(318),$e=n(322),et=n(334);function tt(e){return null===e?"\u0434\u0430\u0442\u0430 \u043d\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430":Object(et.a)(new Date(e))===Object(et.a)(new Date)?new Date(e).toLocaleDateString("uk-UA",{weekday:"long"})===(new Date).toLocaleDateString("uk-UA",{weekday:"long"})?"\u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456":new Date(e).getDay()===(new Date).getDay()+1?"\u0437\u0430\u0432\u0442\u0440\u0430":new Date(e).toLocaleDateString("uk-UA",{weekday:"long"}):new Date(e).toLocaleDateString("uk-UA",{weekday:"short",month:"long",day:"numeric"})}var nt=function(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(),o=Object(l.a)(i,2),d=o[0],u=o[1],j=Object(a.useState)(!1),O=Object(l.a)(j,2);O[0],O[1];Object(a.useEffect)((function(){var t=e.extension.options.tasks.filter((function(t){return t.id===e.node.attrs.id}));if(t[0]){var n=t[0],a=n.date,c=n.checkbox,i=n.content;e.updateAttributes({date:a,checkbox:c,content:i}),r(tt(a))}}),[d]),Object(a.useEffect)((function(){r(tt(e.node.attrs.date))}),[]);return Object(a.useEffect)((function(){e.node.attrs.id!==d&&u(e.node.attrs.id),e.extension.storage.object={id:e.node.attrs.id,checkbox:e.node.attrs.checkbox,date:new Date(e.node.attrs.date),content:e.node.content.content[0].content.content[0]?e.node.content.content[0].content.content[0].text:"",delete:!e.node.content.content[0].content.content[0]}})),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(Je.d,{className:"taskItem",children:[Object(b.jsxs)(J.a,{sx:{display:"flex"},children:[Object(b.jsx)(Ye.a,{checked:e.node.attrs.checkbox,onChange:function(t){e.updateAttributes({checkbox:t.target.checked})},contentEditable:!1,inputProps:{"aria-label":"controlled"}}),Object(b.jsx)(Je.c,{className:"content"})]}),Object(b.jsx)(J.a,{contentEditable:!1,children:Object(b.jsx)(Xe.b,{dateAdapter:_e.a,children:Object(b.jsx)($e.a,{label:"Date",value:e.node.attrs.date,onChange:function(t){return function(t){e.updateAttributes({date:new Date(t)}),r(tt(t))}(t)},renderInput:function(e){var t=e.inputRef,n=e.inputProps,a=e.InputProps;return Object(b.jsxs)(J.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsx)(J.a,Object(s.a)({ref:t},n)),Object(b.jsx)(V.a,{fontWeight:"bold",children:c}),null===a||void 0===a?void 0:a.endAdornment]})}})})})]})})},at=n(10),ct=n(101),rt=n.n(ct),it=/^\s*(\[([ |x])\])\s$/,ot=Ve.d.create({name:"taskItem",group:"block",addAttributes:function(){return{checkbox:{default:!1},date:{default:new Date},content:{default:""},delete:{default:!1},tasks:{default:this.options.tasks},id:{default:null,rendered:!1,keepOnSplit:!1}}},addStorage:function(){return{object:{}}},content:function(){return"paragraph+"},defining:!0,parseHTML:function(){return[{tag:"taskItem"}]},renderHTML:function(e){e.node;var t=e.HTMLAttributes;return["taskItem",Object(Ve.l)(t),0]},addKeyboardShortcuts:function(){var e=this,t={Enter:function(){return e.editor.commands.splitListItem("taskItem")},"Shift-Tab":function(){return e.editor.commands.liftListItem("taskItem")}};return this.options.nested?Object(s.a)(Object(s.a)({},t),{},{Tab:function(){return e.editor.commands.sinkListItem("taskItem")}}):t},addNodeView:function(){return Object(Je.e)(nt)},addInputRules:function(){return[Object(Ve.p)({find:it,type:this.type,getAttributes:function(e){return{checked:"x"===e[e.length-1]}}})]},addProseMirrorPlugins:function(){return[new at.d({appendTransaction:function(e,t,n){if(n.doc!==t.doc){var a=n.tr;return n.doc.descendants((function(e,t,c){e.isBlock&&c===n.doc&&!e.attrs.id&&0!==e.attrs.content&&a.setNodeMarkup(t,void 0,Object(s.a)(Object(s.a)({},e.attrs),{},{id:rt()()}))})),a}}})]}}),st=n(194),lt=n.n(st),dt=n(195),ut=n.n(dt),jt=n(196),bt=n.n(jt),Ot=n(197),ht=n.n(Ot),xt=n(198),ft=n.n(xt),pt=n(199),mt=n.n(pt),gt=n(200),vt=n.n(gt),kt=n(201),wt=n.n(kt),yt=n(348),St=n(332),Ct=n(210),It=Object(D.a)(St.a)((function(e){var t=e.theme;return{"& .MuiToggleButtonGroup-grouped":{margin:t.spacing(.5),border:0,"&.Mui-disabled":{border:0},"&:not(:first-of-type)":{borderRadius:t.shape.borderRadius},"&:first-of-type":{borderRadius:t.shape.borderRadius}}}}));function Dt(e){var t=e.editor;return Object(b.jsx)(b.Fragment,{children:t&&Object(b.jsx)(Je.a,{className:"bubble-menu",tippyOptions:{duration:100,maxWidth:"none"},editor:t,children:Object(b.jsxs)(Ct.a,{elevation:0,sx:{display:"flex",border:"1px solid #ddd",width:"100%"},children:[Object(b.jsxs)(It,{"aria-label":"text formatting",size:"small",sx:{backgroundColor:"white"},children:[Object(b.jsx)(yt.a,{value:"bold",selected:t.isActive("bold"),"aria-label":"bold",onClick:function(){return t.chain().focus().toggleBold().run()},children:Object(b.jsx)(lt.a,{})}),Object(b.jsx)(yt.a,{value:"italic",selected:t.isActive("italic"),"aria-label":"italic",onClick:function(){return t.chain().focus().toggleItalic().run()},children:Object(b.jsx)(ut.a,{})}),Object(b.jsx)(yt.a,{value:"underline",selected:t.isActive("underline"),"aria-label":"underline",onClick:function(){return t.chain().focus().toggleUnderline().run()},children:Object(b.jsx)(bt.a,{})})]}),Object(b.jsx)(Y.a,{flexItem:!0,orientation:"vertical",sx:{mx:.5,my:1}}),Object(b.jsxs)(It,{"aria-label":"text formatting",size:"small",sx:{backgroundColor:"white"},children:[Object(b.jsx)(yt.a,{value:"h1",selected:t.isActive("heading",{level:1}),"aria-label":"h1",onClick:function(){return t.isActive("heading",{level:1})?t.chain().focus().setParagraph().run():t.chain().focus().setHeading({level:1}).run()},children:Object(b.jsx)(V.a,{fontWeight:"bold",children:"H1"})}),Object(b.jsx)(yt.a,{value:"h2",selected:t.isActive("heading",{level:2}),"aria-label":"h2",onClick:function(){return t.isActive("heading",{level:2})?t.chain().focus().setParagraph().run():t.chain().focus().setHeading({level:2}).run()},children:Object(b.jsx)(V.a,{fontWeight:"bold",children:"H2"})})]}),Object(b.jsx)(Y.a,{flexItem:!0,orientation:"vertical",sx:{mx:.5,my:1}}),Object(b.jsxs)(It,{"aria-label":"text formatting",size:"small",sx:{backgroundColor:"white"},children:[Object(b.jsx)(yt.a,{value:"bulletList",selected:t.isActive("bulletList"),"aria-label":"bold",onClick:function(){return t.chain().focus().toggleBulletList().run()},children:Object(b.jsx)(ht.a,{})}),Object(b.jsx)(yt.a,{value:"blockquote",selected:t.isActive("blockquote"),"aria-label":"bold",onClick:function(){return t.chain().focus().toggleBlockquote().run()},children:Object(b.jsx)(ft.a,{})})]}),Object(b.jsx)(Y.a,{flexItem:!0,orientation:"vertical",sx:{mx:.5,my:1}}),Object(b.jsxs)(It,{"aria-label":"text formatting",size:"small",sx:{backgroundColor:"white"},children:[Object(b.jsx)(yt.a,{value:"left",selected:t.isActive({textAlign:"left"}),"aria-label":"bold",onClick:function(){return t.chain().focus().setTextAlign("left").run()},children:Object(b.jsx)(mt.a,{})}),Object(b.jsx)(yt.a,{value:"center",selected:t.isActive({textAlign:"center"}),"aria-label":"bold",onClick:function(){return t.chain().focus().setTextAlign("center").run()},children:Object(b.jsx)(vt.a,{})}),Object(b.jsx)(yt.a,{value:"right",selected:t.isActive({textAlign:"right"}),"aria-label":"bold",onClick:function(){return t.chain().focus().setTextAlign("right").run()},children:Object(b.jsx)(wt.a,{})})]})]})})})}n(247);var Tt=Re.a.extend({content:"heading block*"}),At=function(e){var t=e.getActiveFile,n=e.onUpdateNote,c=e.open,r=e.drawerWidth,i=e.onUpdateTask,o=e.onDeleteTask,d=(e.saveData,e.tasks),u=Object(a.useState)(),j=Object(l.a)(u,2),O=j[0],h=j[1],x=Object(a.useState)(),f=Object(l.a)(x,2),p=f[0],m=f[1],g=Object(Je.f)({autofocus:!0,extensions:[Tt,He.a.configure({document:!1}),Ke.a.configure({width:2}),Ze.a.configure({types:["heading","paragraph"],alignments:["left","center","right","justify"]}),Ge.a,ot.configure({tasks:d}),Qe.a,qe.a.configure({placeholder:function(e){return"heading"===e.node.type.name?"\u0411\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430":"\u0412\u0438\u0441\u043b\u043e\u0432\u0456\u0442\u044c \u0441\u0432\u043e\u0457 \u0434\u0443\u043c\u043a\u0438"}})],content:t.text,onBlur:function(e){var t=e.editor;m({title:1!==t.view.dom.children[0].innerText.length?t.view.dom.children[0].innerText:"Untitled",text:t.getJSON(),rawText:t.getText()})}});Object(a.useEffect)((function(){p&&n(Object(s.a)({id:t.id,children:t.children},p))}),[p]),Object(a.useEffect)((function(){if(t&&t.id!==O){h(t.id);try{g.commands.setContent(t.text,!1),g.commands.focus()}catch(e){return}}}),[t,g,O]);var v=Object(a.useState)(),w=Object(l.a)(v,2),y=w[0],S=w[1];Object(a.useEffect)((function(){g&&y!==g.storage.taskItem.object&&(g.storage.taskItem.object.delete?o(Object(s.a)(Object(s.a)({},g.storage.taskItem.object),{},{fileId:t.id})):i(Object(s.a)(Object(s.a)({},g.storage.taskItem.object),{},{fileId:t.id})),S(g.storage.taskItem.object))}),[g,y,i]);var C=t&&1!==t.id?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(k.a,{open:c,sx:{py:12,px:20,mr:c?"0px":"".concat(r,"px"),width:"100%"},className:"editarea",children:[Object(b.jsx)(B.a,{}),Object(b.jsx)(Je.b,{editor:g,children:Object(b.jsx)(Dt,{editor:g})})]})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(k.a,{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",height:"80vh",width:"100%",children:[Object(b.jsx)(B.a,{}),Object(b.jsx)(V.a,{variant:"h4",align:"center",fontWeight:"bold",children:"\u041d\u0435\u043c\u0430\u0454 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432"})]})});return Object(b.jsx)(b.Fragment,{children:C})},Et=Ve.b.create({name:"OneLine",addProseMirrorPlugins:function(){return[new at.d({key:new at.e("OneLine"),props:{handleKeyDown:function(e,t){return"Enter"===t.key&&!t.shiftKey}}})]}});function Ft(e){var t=e.task,n=e.onUpdateTask,c=e.onDeleteTask,r=e.title,i=void 0===r?null:r,d=e.id,u=void 0===d?null:d,j=e.setActiveFile,O=void 0===j?null:j,h=Object(a.useState)(t),x=Object(l.a)(h,2),f=x[0],p=x[1],m=Object(a.useState)(t.content),g=Object(l.a)(m,2),v=g[0],k=g[1],w=Object(a.useState)(),y=Object(l.a)(w,2),S=(y[0],y[1]);Object(a.useEffect)((function(){n(Object(s.a)(Object(s.a)({},f),{},{content:v}))}),[f]),Object(a.useEffect)((function(){S(tt(f.date))}),[]);var C=Object(Je.f)({autofocus:!0,extensions:[He.a,qe.a.configure({placeholder:function(e){e.node;return"\u041d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}}),Et],content:t.content,onUpdate:function(e){var t=e.editor;k(t.getText())}});return Object(b.jsxs)(J.a,{sx:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-between"},children:[Object(b.jsxs)(J.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsx)(Ye.a,{checked:f.checked,onChange:function(e){p(Object(s.a)(Object(s.a)({},f),{},{checkbox:e.target.checked}))}}),t.fileId?Object(b.jsx)(V.a,{children:t.content}):Object(b.jsx)(Je.b,{editor:C,onKeyDown:function(e){"Backspace"===e.key&&(v?0===v.length&&c(Object(s.a)(Object(s.a)({},f),{},{content:v})):c(Object(s.a)(Object(s.a)({},f),{},{content:v})))},onBlur:function(){return n(Object(s.a)(Object(s.a)({},f),{},{content:v}))}})]}),Object(b.jsxs)(J.a,{sx:{display:"flex"},children:[i&&u&&Object(b.jsx)(J.a,{sx:{mr:2},children:Object(b.jsxs)(o.b,{to:"/routini/".concat(u),onClick:function(){return O(u)},style:{color:"inherit",textDecoration:"none",textDecorationLine:"underline"},children:["\u0437 \u0444\u0430\u0439\u043b\u0443 ",i]})}),Object(b.jsx)(Xe.b,{dateAdapter:_e.a,children:Object(b.jsx)($e.a,{label:"Date",value:f.date,onChange:function(e){return function(e){p(Object(s.a)(Object(s.a)({},f),{},{date:new Date(e)})),S(tt(e))}(e)},renderInput:function(e){var t=e.inputRef,n=e.inputProps,a=e.InputProps;return Object(b.jsxs)(J.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsx)(J.a,Object(s.a)({ref:t},n)),null===a||void 0===a?void 0:a.endAdornment]})}})})]})]})}var Lt=n(156),Wt=n(333),Nt=Object(Lt.a)({palette:{button:{main:"#666666"}}});function Pt(e){var t=e.tasks,n=e.onUpdateTask,a=e.onDeleteTask,c=e.drawerWidth,r=e.open,i=e.getFileId,o=e.setActiveFile;var s=Object(p.a)(new Set(t.sort(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(n,a){if(!n.hasOwnProperty(e)||!a.hasOwnProperty(e))return 0;var c="string"===typeof n[e]?n[e].toUpperCase():n[e],r="string"===typeof a[e]?a[e].toUpperCase():a[e],i=0;return c>r?i=1:c<r&&(i=-1),"desc"===t?-1*i:i}}("date")).map((function(e){return e.date?tt(e.date):null}))));return Object(b.jsx)(Wt.a,{theme:Nt,children:Object(b.jsxs)(J.a,{open:r,sx:{py:12,px:24,mr:r?"0px":"".concat(c,"px"),width:"100%"},className:"editarea",children:[Object(b.jsx)(B.a,{}),Object(b.jsx)(V.a,{variant:"h4",fontWeight:"bold",sx:{mb:3},children:"\u0417\u0430\u0434\u0430\u0447\u0456"}),s.map((function(e){if(e){var c=t.filter((function(e){return null!==e.date})).map((function(t){var c=tt(t.date);if(t.id&&e===c){if(t.fileId){var r=i(t.fileId),s=r.title,l=r.id;return Object(b.jsx)(Ft,{title:s,id:l,setActiveFile:o,task:t,onUpdateTask:n,onDeleteTask:a},t.id)}return Object(b.jsx)(Ft,{task:t,onUpdateTask:n,onDeleteTask:a},t.id)}}));return Object(b.jsxs)(J.a,{children:[Object(b.jsxs)(V.a,{variant:"h6",fontWeight:"bold",children:[" ",e.charAt(0).toUpperCase()+e.slice(1)]}),c]})}})),function(){var e=t.filter((function(e){return null===e.date})).map((function(e){if(e.id){if(e.fileId){var t=i(e.fileId),c=t.title,r=t.id;return Object(b.jsx)(Ft,{title:c,id:r,setActiveFile:o,task:e,onUpdateTask:n,onDeleteTask:a},e.id)}return Object(b.jsx)(Ft,{task:e,onUpdateTask:n,onDeleteTask:a},e.id)}}));return Object(b.jsxs)(J.a,{children:[Object(b.jsx)(V.a,{variant:"h6",fontWeight:"bold",children:"\u0411\u0435\u0437 \u0434\u0430\u0442\u0438"}),e]})}(),Object(b.jsx)(Fe.a,{onClick:function(){n({checkbox:!1,id:rt()(),content:null,date:null,fileId:!1})},variant:"outlined",startIcon:Object(b.jsx)(ge.a,{}),color:"button",sx:{mt:1.5,textTransform:"none"},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0437\u0430\u0434\u0430\u0447\u0443"})]})})}var Ut=n(87);function Mt(e){var t=e.showEditor,n=void 0!==t&&t,c=e.showTasks,r=void 0!==c&&c,i=f().user,o=Object(a.useState)(),d=Object(l.a)(o,2),u=d[0],j=d[1],h=Object(a.useState)([]),x=Object(l.a)(h,2),m=x[0],C=x[1],D=Object(a.useState)(!1),T=Object(l.a)(D,2),A=T[0],E=T[1],F=function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ut.b)(Object(Ut.a)(O,"users/".concat(i.uid)));case 2:(t=e.sent).exists()?(console.log("Document data:",JSON.parse(t.data().papers)),j(JSON.parse(t.data().papers)),C(JSON.parse(t.data().tasks))):console.log("No such document!"),E(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){F()}),[]);var L=Object(a.useState)(!localStorage.open||JSON.parse(localStorage.open)),W=Object(l.a)(L,2),N=W[0],P=W[1],U=Object(a.useState)(1),M=Object(l.a)(U,2),z=M[0],B=M[1],J=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z,a=!1;return Array.isArray(t)&&t.forEach((function(t){t.id===n?a=t:t.children&&0!==t.children.length&&(a=e(t.children,n))})),a||!1},R=Object(a.useState)(localStorage.expanded?JSON.parse(localStorage.expanded):[]),H=Object(l.a)(R,2),q=H[0],K=H[1],Z=function(e){var t=q.filter((function(t){return t!==e})).length===q.length?[].concat(Object(p.a)(q),[e]):q.filter((function(t){return t!==e}));K(t),localStorage.setItem("expanded",JSON.stringify(t))},G=function(e){var t=m.slice(0,m.map((function(e){return e.id})).indexOf(e.id)),n=m.slice(m.map((function(e){return e.id})).indexOf(e.id)+1),a=-1!==m.map((function(e){return e.id})).indexOf(e.id)?[].concat(Object(p.a)(t),[e],Object(p.a)(n)):[e].concat(Object(p.a)(m));console.log("onUpdate",a),C(a.filter((function(e){return Boolean(e.id)})))},Q=function(e){var t=m.slice(0,m.map((function(e){return e.id})).indexOf(e.id)),n=m.slice(m.map((function(e){return e.id})).indexOf(e.id)+1),a=[].concat(Object(p.a)(t),Object(p.a)(n));console.log("onDelete",a),C(a.filter((function(e){return Boolean(e.id)})))},V=Object(a.useState)(localStorage.drawerWidth?JSON.parse(localStorage.drawerWidth):240),Y=Object(l.a)(V,2),_=Y[0],X=Y[1],$=Object(a.useState)(!1),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ae=function(){return console.log("saving"),Object(Ut.c)(Object(Ut.a)(O,"users/".concat(i.uid)),{papers:JSON.stringify(u),tasks:JSON.stringify(m)}),!1};!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,c=Object(a.useRef)();Object(a.useEffect)((function(){c.current=t}),[t]),Object(a.useEffect)((function(){if(n&&n.addEventListener){var t=function(e){return c.current(e)};return n.addEventListener(e,t),function(){n.removeEventListener(e,t)}}}),[e,n])}("keydown",(function(e){if(e.ctrlKey&&"s"===e.key)return e.preventDefault(),ae(),ne(!0),!1})),Object(a.useEffect)((function(){A&&ae()}),[u,m]);var ce=function(e,t){"clickaway"!==t&&ne(!1)},ie=Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(S.a,{size:"small","aria-label":"close",color:"inherit",onClick:ce,children:Object(b.jsx)(I.a,{fontSize:"small"})})});return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(k.a,{sx:{display:"flex"},children:[Object(b.jsx)(w.a,{}),Object(b.jsx)(re,{papers:u,setActiveFile:B,handleDrawerOpen:function(){P(!0),localStorage.setItem("open",JSON.stringify(!0))}}),Object(b.jsx)(Be,{papers:u,activeFile:z,setActiveFile:B,open:N,handleDrawerClose:function(){P(!1),localStorage.setItem("open",JSON.stringify(!1))},addPaper:function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,a=rt()(),c=n.map((function(n){return n.id===t?(Z("".concat(t)),n.children&&0!==n.children.length?Object(s.a)(Object(s.a)({},n),{},{children:[].concat(Object(p.a)(n.children),[{id:a,title:"Untitled",text:""}])}):Object(s.a)(Object(s.a)({},n),{},{children:[{id:a,title:"Untitled",text:""}]})):n.children&&0!==n.children.length?Object(s.a)(Object(s.a)({},n),{},{children:e(t,n.children)}):n}));if(n!==u)return c;B(a),j(c),Z(a)},deletePaper:function e(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,a=[],c=0;c<n.length;c++)n[c].id===t||(n[c].children&&0!==n[c].length?a.push(Object(s.a)(Object(s.a)({},n[c]),{},{children:e(t,n[c].children)})):a.push(n[c]));if(n!==u)return a;j(a)},drawerWidth:_,setDrawerWidth:X,expanded:q,handleExpandClick:Z}),n&&Object(b.jsx)(At,{getActiveFile:J(u),onUpdateNote:function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,a=n.map((function(n){return n.id===t.id?t:n.children&&0!==n.children.length?Object(s.a)(Object(s.a)({},n),{},{children:e(t,n.children)}):n}));if(n!==u)return a;j(a)},onUpdateTask:G,onDeleteTask:Q,open:N,drawerWidth:_,tasks:m}),r&&Object(b.jsx)(Pt,{tasks:m,onUpdateTask:G,onDeleteTask:Q,drawerWidth:_,open:N,getFileId:function(e){return J(u,e)},setActiveFile:B}),Object(b.jsx)(y.a,{open:te,autoHideDuration:6e3,onClose:ce,message:"\u0417\u043c\u0456\u043d\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e",action:ie})]})})}var zt=n(330),Bt=n(324),Jt=n(339),Rt=n(329),Ht=n(137),qt=n.n(Ht),Kt=n(340),Zt=n(107);function Gt(e){return Object(b.jsxs)(V.a,Object(s.a)(Object(s.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(b.jsx)(Jt.a,{color:"inherit",to:"/",children:"routini"})," ",(new Date).getFullYear(),"."]}))}var Qt=Object(Lt.a)();function Vt(){var e=Object(a.useCallback)(function(){var e=Object(v.a)(g.a.mark((function e(t){var n,a,c,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements,a=n.email,c=n.password,r=Object(Zt.b)(),e.prev=3,e.next=6,Object(Zt.c)(r,a.value,c.value);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(b.jsx)(Wt.a,{theme:Qt,children:Object(b.jsxs)(Kt.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(w.a,{}),Object(b.jsxs)(J.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(b.jsx)(zt.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(b.jsx)(qt.a,{})}),Object(b.jsx)(V.a,{component:"h1",variant:"h5",children:"\u0423\u0432\u0456\u0439\u0442\u0438"}),Object(b.jsxs)(J.a,{component:"form",onSubmit:e,noValidate:!0,sx:{mt:1},children:[Object(b.jsx)(Bt.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u0430\u0434\u0440\u0435\u0441\u0430",name:"email",autoComplete:"email",autoFocus:!0}),Object(b.jsx)(Bt.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password"}),Object(b.jsx)(Fe.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"\u0423\u0432\u0456\u0439\u0442\u0438"}),Object(b.jsx)(Rt.a,{container:!0,children:Object(b.jsx)(Rt.a,{item:!0,children:Object(b.jsx)(Jt.a,{to:"/routini/signup",variant:"body2",children:"\u041d\u0435\u043c\u0430\u0454 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443? \u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"})})})]})]}),Object(b.jsx)(Gt,{sx:{mt:8,mb:4}})]})})}function Yt(e){return Object(b.jsxs)(V.a,Object(s.a)(Object(s.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(b.jsx)(V.a,{color:"inherit",children:"routini"})," ",(new Date).getFullYear(),"."]}))}var _t=Object(Lt.a)();function Xt(e){e.setUserId;var t=Object(a.useCallback)(function(){var e=Object(v.a)(g.a.mark((function e(t){var n,a,c,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements,a=n.email,c=n.password,r=Object(Zt.b)(),e.prev=3,e.next=6,Object(Zt.a)(r,a.value,c.value);case 6:return e.next=8,Object(Ut.c)(Object(Ut.a)(O,"users/".concat(r.currentUser.uid)),{drawerWidth:240,papers:JSON.stringify([{id:1,title:"\u0417\u0430\u043c\u0456\u0442\u043a\u0438",children:[]}]),tasks:JSON.stringify([{}])});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),alert(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(b.jsx)(Wt.a,{theme:_t,children:Object(b.jsxs)(Kt.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(w.a,{}),Object(b.jsxs)(J.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(b.jsx)(zt.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(b.jsx)(qt.a,{})}),Object(b.jsx)(V.a,{component:"h1",variant:"h5",children:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"}),Object(b.jsxs)(J.a,{component:"form",noValidate:!0,onSubmit:t,sx:{mt:3},children:[Object(b.jsxs)(Rt.a,{container:!0,spacing:2,children:[Object(b.jsx)(Rt.a,{item:!0,xs:12,sm:6,children:Object(b.jsx)(Bt.a,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"\u0406\u043c'\u044f",autoFocus:!0})}),Object(b.jsx)(Rt.a,{item:!0,xs:12,sm:6,children:Object(b.jsx)(Bt.a,{required:!0,fullWidth:!0,id:"lastName",label:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",name:"lastName",autoComplete:"family-name"})}),Object(b.jsx)(Rt.a,{item:!0,xs:12,children:Object(b.jsx)(Bt.a,{required:!0,fullWidth:!0,id:"email",label:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u0430\u0434\u0440\u0435\u0441\u0430",name:"email",autoComplete:"email"})}),Object(b.jsx)(Rt.a,{item:!0,xs:12,children:Object(b.jsx)(Bt.a,{required:!0,fullWidth:!0,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"new-password"})})]}),Object(b.jsx)(Fe.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"}),Object(b.jsx)(Rt.a,{container:!0,justifyContent:"flex-end",children:Object(b.jsx)(Rt.a,{item:!0,children:Object(b.jsx)(o.b,{to:"/login",variant:"body2",children:"\u0412\u0436\u0435 \u0454 \u0430\u043a\u043a\u0430\u0443\u043d\u0442? \u0417\u0430\u0445\u043e\u0434\u044c\u0442\u0435"})})})]})]}),Object(b.jsx)(Yt,{sx:{mt:5}})]})})}var $t=function(e){var t=e.children,n=f().isAuthenticated;return console.log("AuthenticatedRoute: ".concat(n)),n?t:Object(b.jsx)(i.a,{to:"/login"})},en=function(e){var t=e.children,n=f().isAuthenticated;return console.log("UnauthenticatedRoute: ".concat(n)),n?Object(b.jsx)(i.a,{to:"/"}):t};function tn(){return Object(b.jsx)(x,{children:Object(b.jsxs)(o.a,{children:[Object(b.jsxs)(J.a,{sx:{display:"none"},children:[Object(b.jsx)(o.b,{to:"/routini",children:"Home"})," | ",Object(b.jsx)(o.b,{to:"/routini/login",children:"Login"})," |"," ",Object(b.jsx)(o.b,{to:"/routini/signup",children:"SignUp"})]}),Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{path:"/routini/",element:Object(b.jsx)($t,{children:Object(b.jsx)(Mt,{})})}),Object(b.jsx)(i.b,{path:"/routini/:key",element:Object(b.jsx)($t,{children:Object(b.jsx)(Mt,{showEditor:!0})})}),Object(b.jsx)(i.b,{path:"/routini/tasks",element:Object(b.jsx)($t,{children:Object(b.jsx)(Mt,{showTasks:!0})})}),Object(b.jsx)(i.b,{path:"/routini/signup",element:Object(b.jsx)(en,{children:Object(b.jsx)(Xt,{})})}),Object(b.jsx)(i.b,{path:"/routini/login",element:Object(b.jsx)(en,{children:Object(b.jsx)(Vt,{})})})]})]})})}r.a.render(Object(b.jsx)(tn,{}),document.getElementById("root"))}},[[248,1,2]]]);
//# sourceMappingURL=main.97b3283f.chunk.js.map