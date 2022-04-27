"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3687],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,u(u({ref:t},p),{},{components:n})):r.createElement(d,u({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<a;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6261:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),u=["components"],c={title:"1.\u4e24\u6570\u76f8\u52a0/Two Sum",tags:["\u529b\u6263\u7b97\u6cd5","\u7b80\u5355","\u5b57\u5178"]},i=void 0,l={unversionedId:"\u529b\u6263\u7b97\u6cd5\u9898/a1",id:"\u529b\u6263\u7b97\u6cd5\u9898/a1",title:"1.\u4e24\u6570\u76f8\u52a0/Two Sum",description:"",source:"@site/docs/\u529b\u6263\u7b97\u6cd5\u9898/a1.md",sourceDirName:"\u529b\u6263\u7b97\u6cd5\u9898",slug:"/\u529b\u6263\u7b97\u6cd5\u9898/a1",permalink:"/leo/docs/\u529b\u6263\u7b97\u6cd5\u9898/a1",tags:[{label:"\u529b\u6263\u7b97\u6cd5",permalink:"/leo/docs/tags/\u529b\u6263\u7b97\u6cd5"},{label:"\u7b80\u5355",permalink:"/leo/docs/tags/\u7b80\u5355"},{label:"\u5b57\u5178",permalink:"/leo/docs/tags/\u5b57\u5178"}],version:"current",frontMatter:{title:"1.\u4e24\u6570\u76f8\u52a0/Two Sum",tags:["\u529b\u6263\u7b97\u6cd5","\u7b80\u5355","\u5b57\u5178"]},sidebar:"tutorialSidebar",previous:{title:"\u529b\u6263\u7b97\u6cd5\u9898/LeetCode",permalink:"/leo/docs/leet-code"},next:{title:"15.\u4e09\u6570\u76f8\u52a0/Three Sum",permalink:"/leo/docs/\u529b\u6263\u7b97\u6cd5\u9898/a15"}},p={},s=[],m={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    const map = new Map();\n    for (let i = 0, len = nums.length; i < len; i++) {\n        if (map.has(target - nums[i])) {\n            return [map.get(target - nums[i]), i];\n        }\n        map.set(nums[i], i);\n    }\n};\n\n")))}f.isMDXComponent=!0}}]);