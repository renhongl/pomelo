"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5666],{3842:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var n=a(7855),i=a(7294),s="home_fPeY",c=a(4996),r="header_SjuS",m="left_nZJx",o="item_Ce0g",p="time_fCSR";function d(e){return Number(e)<10?"0"+e:e}function l(){var e=new Date;return d(e.getHours())+":"+d(e.getMinutes())}function u(){var e=(0,i.useState)(l()),t=e[0],a=e[1];return(0,i.useEffect)((function(){var e=setInterval((function(){a(l())}),1e3);return function(){clearInterval(e)}}),[]),i.createElement("section",{className:p},t)}function g(){return i.createElement("section",{className:r},i.createElement("div",{className:m},i.createElement("span",{className:"material-symbols-outlined",style:{fontSize:"16px"}},"cloudbuild"),i.createElement("span",{className:o},"\u641c\u7d22"),i.createElement("span",{className:o},"\u6d4f\u89c8\u5668")),i.createElement("div",{className:m},i.createElement("span",{className:"material-symbols-outlined",style:{fontSize:"16px",paddingRight:"10px",cursor:"pointer"}},"search"),i.createElement("span",{className:"material-symbols-outlined",style:{fontSize:"16px",paddingRight:"10px",cursor:"pointer"}},"person"),i.createElement(u,{className:o})))}var f="docker_tQou",h="itemWrap_AJ4g",v="itemTemp_SFPr",E="item_Z_xi",w="opened_sQr6",N="smallDocker_rcbD";function _(e){var t=e.data,a=void 0===t?[]:t,n=e.toggleWin,s=e.showDocker,r=e.setShowDocker;return i.createElement("section",{className:s?f:N,onClick:function(){return!s&&r(!0)}},a.map((function(e){return i.createElement("div",{className:h,key:e.id},e.mat?i.createElement("div",{className:e.temp?v:E,name:e.name,onClick:function(){return n(e.id)}},i.createElement("span",{className:"material-symbols-outlined"},e.icon)):i.createElement("div",{name:e.name,onClick:function(){return n(e.id)},className:e.temp?v:E,style:{backgroundImage:"url("+(0,c.Z)("/img/"+e.icon)+")"}}),e.opened?i.createElement("span",{className:w}):null)})))}var k="winWrap_MZ03",b="win_xPEc",W="winContent_x06Z",B="winTit_pTpQ",y="red_LKqS",S="yellow_PLAM",C="gray_Amli",x="winText_pJDl",A=(a(3935),a(1193)),Z=a.n(A),D=a(1706);function R(e){var t=e.data,a=void 0===t?{}:t,n=e.toggleWin,s=e.toggleActive;return i.createElement("div",{className:a.active?k:""},i.createElement(Z(),{axis:"both",handle:"#win",defaultPosition:{x:400,y:50},position:null,scale:1},i.createElement(D.ResizableBox,{width:800,height:600,minConstraints:[100,100],maxConstraints:[1/0,1/0]},i.createElement("section",{className:b,onClick:function(){return s(a.id)}},i.createElement("div",{id:"win",className:B},i.createElement("span",{onClick:function(){return n(a.id)},className:y}),i.createElement("span",{className:S}),i.createElement("span",{className:C}),i.createElement("span",{className:x},a.name)),i.createElement("div",{className:W},a.app?a.app:i.createElement("iframe",{width:"100%",height:"100%",src:a.path,frameBorder:"0"}))))))}var I="apps_V847",T="center_fyOw",P="appsTitle_RqJW",J="appsRow_rqfh",M="appsRowSec_meSI",z="appsRowThir_yUcm",O="appWrap_JYly",j="app_Ikcm",q="name_n6x6";function Q(e){var t=e.data,a=e.toggleWin,n=e.setShowApps;return i.createElement("section",{className:O},t.mat?i.createElement("div",{className:j,name:t.name,key:t.id,onClick:function(){a(t.id),n(!1)}},i.createElement("span",{className:"material-symbols-outlined"},t.icon)):i.createElement("div",{name:t.name,onClick:function(){a(t.id),n(!1)},key:t.id,className:j,style:{backgroundImage:"url("+(0,c.Z)("/img/"+t.icon)+")"}}),i.createElement("span",{className:q},t.name))}function H(e){var t=e.data,a=e.toggleWin,n=e.setShowApps;return i.createElement("section",{className:I},i.createElement("div",{className:J},i.createElement("p",{className:P},"\u9ad8\u6548\u5de5\u4f5c"),i.createElement("div",{className:T},t.map((function(e){return i.createElement(Q,{data:e,toggleWin:a,setShowApps:n})})))),i.createElement("div",{className:M},i.createElement("p",{className:P},"\u5a31\u4e50\u751f\u6d3b"),i.createElement("div",{className:T},t.map((function(e){return i.createElement(Q,{data:e,toggleWin:a,setShowApps:n})})))),i.createElement("div",{className:z},i.createElement("p",{className:P},"\u5f71\u97f3\u8bfb\u4e66"),i.createElement("div",{className:T},t.map((function(e){return i.createElement(Q,{data:e,toggleWin:a,setShowApps:n})})))))}var L="settingsCon_SDai",U="settingsWrap_RlCZ",Y="settings_vTCe",F="name_frHU",K={img:"img_AthO"},V=[{path:"b0.svg"},{path:"b1.svg"},{path:"b2.svg"},{path:"b3.svg"},{path:"b4.svg"},{path:"b5.svg"}];function G(e){var t=e.setBg;return i.createElement("section",{className:K.theme},V.map((function(e){return i.createElement("img",{className:K.img,src:(0,c.Z)("/desktop/"+e.path),onClick:function(){return t(e.path)}})})))}function X(e){var t=e.setBg,a=e.addWin,n=[{id:"win0000",name:"\u4e3b\u9898",path:"/site",icon:"dark_mode",opened:!1,active:!1,mat:!0,app:i.createElement(G,{setBg:t})},{id:"win1111",name:"\u4efb\u52a1\u680f",path:"/site",icon:"grid_view",opened:!1,active:!1,mat:!0,app:i.createElement(G,{setBg:t})},{id:"win2222",name:"\u901a\u7528",path:"/site",icon:"settings_suggest",opened:!1,active:!1,mat:!0,app:i.createElement(G,{setBg:t})},{id:"win3333",name:"\u8bed\u8a00",path:"/site",icon:"language",opened:!1,active:!1,mat:!0,app:i.createElement(G,{setBg:t})},{id:"win0000423",name:"\u4e3b\u9898",path:"/site",icon:"dark_mode",opened:!1,active:!1,mat:!0,app:i.createElement(G,{setBg:t})},{id:"win1111534",name:"\u4efb\u52a1\u680f",path:"/site",icon:"grid_view",opened:!1,active:!1,mat:!0,app:i.createElement(G,{setBg:t})},{id:"win22224534",name:"\u901a\u7528",path:"/site",icon:"settings_suggest",opened:!1,active:!1,mat:!0,app:i.createElement(G,{setBg:t})},{id:"win333345dfasdf34",name:"\u8bed\u8a00",path:"/site",icon:"language",opened:!1,active:!1,mat:!0,app:i.createElement(G,{setBg:t})},{id:"win111153dfasdf4",name:"\u4efb\u52a1\u680f",path:"/site",icon:"grid_view",opened:!1,active:!1,mat:!0,app:i.createElement(G,{setBg:t})},{id:"win2222453fasdfad4",name:"\u901a\u7528",path:"/site",icon:"settings_suggest",opened:!1,active:!1,mat:!0,app:i.createElement(G,{setBg:t})},{id:"fdsdfadsf",name:"\u8bed\u8a00",path:"/site",icon:"language",opened:!1,active:!1,mat:!0,app:i.createElement(G,{setBg:t})}];return i.createElement("section",{className:L},n.map((function(e){return i.createElement("div",{className:U,key:e.id,onClick:function(t){a(Object.assign({},e,{id:Math.random(),opened:!0,active:!0,temp:!0,pin:!0})),console.log(t),t.preventDefault(),t.stopPropagation()}},i.createElement("div",{className:Y},i.createElement("span",{className:"material-symbols-outlined"},e.icon)),i.createElement("span",{className:F},e.name))})))}function $(){var e=(0,i.useState)(!1),t=e[0],a=e[1],r=(0,i.useState)(!0),m=r[0],o=r[1],p=(0,i.useState)("b0.svg"),d=p[0],l=p[1],u=[{id:"win0",name:"\u6240\u6709\u5e94\u7528",path:"/site",icon:"home",opened:!1,active:!1,mat:!0,pin:!0,start:!0},{id:"win10",name:"\u8bbe\u7f6e",path:"/site",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(X,{setBg:l,addWin:E}),pin:!0,start:!0},{id:"win1",name:"\u524d\u7aef\u5c0f\u7ad9",path:"/site",icon:"language",opened:!1,active:!1,mat:!0,pin:!0,start:!1},{id:"win2",name:"Markdown Editor",path:"https://renhongl.github.io/markdown-editor/",icon:"border_color",opened:!1,active:!1,mat:!0,pin:!0,start:!1},{id:"win3",name:"Code Online",path:"https://renhongl.github.io/code-online/#/",icon:"code",opened:!1,mat:!0,pin:!0,start:!1},{id:"win4",name:"\u9690\u85cf\u4efb\u52a1\u680f",path:"/site",icon:"keyboard_hide",opened:!1,redirct:!0,mat:!0,pin:!0,start:!1},{id:"win5",name:"\u9000\u51fa\u684c\u9762\u6a21\u5f0f",path:"/site",icon:"logout",opened:!1,redirct:!0,mat:!0,pin:!0,start:!1},{id:"win52",name:"aaa",path:"/site",icon:"logout",opened:!1,redirct:!0,mat:!0,pin:!1,start:!0},{id:"win51",name:"bbb",path:"/site",icon:"logout",opened:!1,redirct:!0,mat:!0,pin:!1,start:!0},{id:"win101",name:"\u8bbe\u7f6e",path:"/site",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(X,{setBg:l,addWin:E}),pin:!1,start:!0},{id:"win102",name:"\u8bbe\u7f6e",path:"/site",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(X,{setBg:l,addWin:E}),pin:!1,start:!0},{id:"win103",name:"\u8bbe\u7f6e",path:"/site",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(X,{setBg:l,addWin:E}),pin:!1,start:!0},{id:"win103hjghffd",name:"\u8bbe\u7f6e",path:"/site",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(X,{setBg:l,addWin:E}),pin:!1,start:!0},{id:"ghfghdfg",name:"\u8bbe\u7f6edfasdfasd",path:"/site",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(X,{setBg:l,addWin:E}),pin:!1,start:!0},{id:"win1ghfgdh03fd",name:"\u8bbe\u7f6edfsfada",path:"/site",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(X,{setBg:l,addWin:E}),pin:!1,start:!0},{id:"hfdghdfg",name:"\u8bbe\u7f6e",path:"/site",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(X,{setBg:l,addWin:E}),pin:!1,start:!0},{id:"win1ghfgd03fd",name:"\u8bbe\u7f6e",path:"/site",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(X,{setBg:l,addWin:E}),pin:!1,start:!0},{id:"winhsfg103fd",name:"\u8bbe\u7f6e",path:"/site",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(X,{setBg:l,addWin:E}),pin:!1,start:!0},{id:"gdgfds",name:"\u8bbe\u7f6e",path:"/site",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(X,{setBg:l,addWin:E}),pin:!1,start:!0},{id:"dfasddfd",name:"\u8bbe\u7f6e",path:"/site",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(X,{setBg:l,addWin:E}),pin:!1,start:!0},{id:"win103fddfasd",name:"\u8bbe\u7f6e",path:"/site",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(X,{setBg:l,addWin:E}),pin:!1,start:!0}],f=(0,i.useState)(u),h=f[0],v=f[1];function E(e){console.log(e),v((function(t){return[].concat(t,[e])}))}function w(e){if("win0"===e)return a(!0);if("win4"===e)return o(!1);var t=h.find((function(t){return t.id===e}));if(t.temp&&t.opened)return v((function(t){return t.filter((function(t){return t.id!==e}))}));v((function(t){for(var a,i=[].concat(t),s=(0,n.Z)(i);!(a=s()).done;){var c=a.value;if(c.id===e){if(c.redirct)return location=c.path;c.opened=!c.opened,c.opened&&N(e);break}}return i}))}function N(e){v((function(t){for(var a,i=[].concat(t),s=(0,n.Z)(i);!(a=s()).done;){var c=a.value;c.id===e?c.active=!0:c.active=!1}return i}))}return i.createElement("section",{style:{backgroundImage:"url("+(0,c.Z)("/desktop/"+d)+")"},className:s},t?i.createElement(H,{data:h.filter((function(e){return e.start})),toggleWin:w,setShowApps:a}):null,i.createElement(g,null),i.createElement(_,{data:h.filter((function(e){return e.pin})),toggleWin:w,showDocker:m,setShowDocker:o}),h.filter((function(e){return e.opened})).map((function(e){return i.createElement(R,{key:e.id,data:e,toggleWin:w,toggleActive:N})})))}}}]);