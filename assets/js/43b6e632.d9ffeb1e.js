"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8655],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6656:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"\u5e0c\u5c14\u6392\u5e8f/Shell Sort \u2713",tags:["\u6392\u5e8f"]},c=void 0,s={unversionedId:"sort/a8",id:"sort/a8",title:"\u5e0c\u5c14\u6392\u5e8f/Shell Sort \u2713",description:"\u5e0c\u5c14\u6392\u5e8f",source:"@site/docs/sort/a8.md",sourceDirName:"sort",slug:"/sort/a8",permalink:"/site/docs/sort/a8",tags:[{label:"\u6392\u5e8f",permalink:"/site/docs/tags/\u6392\u5e8f"}],version:"current",frontMatter:{title:"\u5e0c\u5c14\u6392\u5e8f/Shell Sort \u2713",tags:["\u6392\u5e8f"]},sidebar:"sort",previous:{title:"\u57fa\u6570\u6392\u5e8f/Radix Sort",permalink:"/site/docs/sort/a7"},next:{title:"\u8ba1\u6570\u6392\u5e8f/Count Sort",permalink:"/site/docs/sort/a9"}},u={},p=[{value:"\u5e0c\u5c14\u6392\u5e8f",id:"\u5e0c\u5c14\u6392\u5e8f",level:2}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5e0c\u5c14\u6392\u5e8f"},"\u5e0c\u5c14\u6392\u5e8f"),(0,a.kt)("p",null,"\u5e0c\u5c14\u6392\u5e8f(Shell's Sort)\u662f\u63d2\u5165\u6392\u5e8f\u7684\u4e00\u79cd\u53c8\u79f0\u201c\u7f29\u5c0f\u589e\u91cf\u6392\u5e8f\u201d\uff08Diminishing Increment Sort\uff09\uff0c\u662f\u76f4\u63a5\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5\u7684\u4e00\u79cd\u66f4\u9ad8\u6548\u7684\u6539\u8fdb\u7248\u672c\u3002\u5e0c\u5c14\u6392\u5e8f\u662f\u975e\u7a33\u5b9a\u6392\u5e8f\u7b97\u6cd5\u3002\u8be5\u65b9\u6cd5\u56e0 D.L.Shell \u4e8e 1959 \u5e74\u63d0\u51fa\u800c\u5f97\u540d\u3002"),(0,a.kt)("p",null,"\u5e0c\u5c14\u6392\u5e8f\u662f\u628a\u8bb0\u5f55\u6309\u4e0b\u6807\u7684\u4e00\u5b9a\u589e\u91cf\u5206\u7ec4\uff0c\u5bf9\u6bcf\u7ec4\u4f7f\u7528\u76f4\u63a5\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5\u6392\u5e8f\uff1b\u968f\u7740\u589e\u91cf\u9010\u6e10\u51cf\u5c11\uff0c\u6bcf\u7ec4\u5305\u542b\u7684\u5173\u952e\u8bcd\u8d8a\u6765\u8d8a\u591a\uff0c\u5f53\u589e\u91cf\u51cf\u81f3 1 \u65f6\uff0c\u6574\u4e2a\u6587\u4ef6\u6070\u88ab\u5206\u6210\u4e00\u7ec4\uff0c\u7b97\u6cd5\u4fbf\u7ec8\u6b62\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u5e0c\u5c14\u6392\u5e8f\n * \u5faa\u73af\u9012\u51cf\u589e\u91cf\uff0c \u76f4\u5230\u5c0f\u4e8e1\n * \u5c06\u6570\u7ec4\u5143\u7d20\u6309\u589e\u91cf\u5206\u7ec4\n * \u5c06\u6bcf\u4e00\u7ec4\u7684\u6570\u636e\u4f7f\u7528\u76f4\u63a5\u63d2\u5165\u7684\u65b9\u5f0f\u6392\u5e8f\n */\nconst shellSort = (arr) => {\n    //\u4e0d\u65ad\u51cf\u5c0f\u95f4\u9694\uff0c\u76f4\u5230\u95f4\u9694\u4e3a1\n    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {\n        //\u8fd9\u91cc\u6709\u5f85\u89e3\u91ca\n        for (let i = gap; i < arr.length; i++) {\n            let j = i;\n            //\u5c06\u4ee5\u95f4\u9694\u5206\u7ec4\u7684\u6570\u636e\uff0c\u4f7f\u7528\u76f4\u63a5\u63d2\u5165\u6392\u5e8f\u7684\u65b9\u5f0f\u6392\u5e8f\n            while (j - gap >= 0 && arr[j] < arr[j - gap]) {\n                let temp = arr[j];\n                arr[j] = arr[j - gap];\n                arr[j - gap] = temp;\n                j -= gap;\n            }\n        }\n    }\n    return arr;\n}\n")),(0,a.kt)("a",{class:"stackblitz",href:"https://stackblitz.com/edit/node-wps8mf?file=sort%2Fshell-sort.js"},"Try in StackBlitz",(0,a.kt)("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},(0,a.kt)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))))}m.isMDXComponent=!0}}]);