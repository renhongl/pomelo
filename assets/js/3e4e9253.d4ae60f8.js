"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[148],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(n),b=o,m=f["".concat(a,".").concat(b)]||f[b]||p[b]||l;return n?r.createElement(m,u(u({ref:t},s),{},{components:n})):r.createElement(m,u({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,u=new Array(l);u[0]=f;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var c=2;c<l;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7573:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),u=["components"],i={title:"\u5192\u6ce1\u6392\u5e8f/Bubble Sort",tags:["\u6392\u5e8f"]},a=void 0,c={unversionedId:"\u6392\u5e8f/bubble-sort",id:"\u6392\u5e8f/bubble-sort",title:"\u5192\u6ce1\u6392\u5e8f/Bubble Sort",description:"\u4ee3\u7801",source:"@site/docs/\u6392\u5e8f/bubble-sort.md",sourceDirName:"\u6392\u5e8f",slug:"/\u6392\u5e8f/bubble-sort",permalink:"/pomelo/docs/\u6392\u5e8f/bubble-sort",tags:[{label:"\u6392\u5e8f",permalink:"/pomelo/docs/tags/\u6392\u5e8f"}],version:"current",frontMatter:{title:"\u5192\u6ce1\u6392\u5e8f/Bubble Sort",tags:["\u6392\u5e8f"]},sidebar:"tutorialSidebar",previous:{title:"\u6392\u5e8f",permalink:"/pomelo/docs/sort"},next:{title:"\u63d2\u5165\u6392\u5e8f/Insertion Sort",permalink:"/pomelo/docs/\u6392\u5e8f/insertion-sort"}},s={},p=[{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2},{value:"\u7a7a\u95f4\u590d\u6742\u5ea6",id:"\u7a7a\u95f4\u590d\u6742\u5ea6",level:2},{value:"\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u65f6\u95f4\u590d\u6742\u5ea6",level:2},{value:"\u662f\u5426\u662f\u7a33\u5b9a\u6392\u5e8f",id:"\u662f\u5426\u662f\u7a33\u5b9a\u6392\u5e8f",level:2}],f={toc:p};function b(e){var t=e.components,n=(0,o.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst bubbleSort = (nums) => {\n\n  for (let i = 0, len = nums.length; i < len - 1; i++) {\n    for (let j = i; j < len - 1 - i; j++) {\n      if (nums[j] > nums[j + 1]) {\n        let temp = nums[j];\n        nums[j] = nums[j + 1];\n        nums[j + 1] = temp;\n      }\n    }\n  }\n\n  return nums;\n}\n\nconsole.log(bubbleSort([4, 7, 32, 6, 21, 10, 11]));\n\n")),(0,l.kt)("h2",{id:"\u7a7a\u95f4\u590d\u6742\u5ea6"},"\u7a7a\u95f4\u590d\u6742\u5ea6"),(0,l.kt)("p",null,"O(1)"),(0,l.kt)("h2",{id:"\u65f6\u95f4\u590d\u6742\u5ea6"},"\u65f6\u95f4\u590d\u6742\u5ea6"),(0,l.kt)("p",null,"O(n^2)"),(0,l.kt)("h2",{id:"\u662f\u5426\u662f\u7a33\u5b9a\u6392\u5e8f"},"\u662f\u5426\u662f\u7a33\u5b9a\u6392\u5e8f"),(0,l.kt)("p",null,"\u662f"))}b.isMDXComponent=!0}}]);