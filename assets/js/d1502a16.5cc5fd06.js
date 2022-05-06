"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5375],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),f=a,h=p["".concat(u,".").concat(f)]||p[f]||s[f]||l;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6709:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],i={title:"\u5806/Heap \u2713",tags:["\u6570\u636e\u7ed3\u6784"]},u=void 0,d={unversionedId:"data-structure/a7",id:"data-structure/a7",title:"\u5806/Heap \u2713",description:"\u63cf\u8ff0",source:"@site/docs/data-structure/a7.md",sourceDirName:"data-structure",slug:"/data-structure/a7",permalink:"/site/docs/data-structure/a7",tags:[{label:"\u6570\u636e\u7ed3\u6784",permalink:"/site/docs/tags/\u6570\u636e\u7ed3\u6784"}],version:"current",frontMatter:{title:"\u5806/Heap \u2713",tags:["\u6570\u636e\u7ed3\u6784"]},sidebar:"datastructure",previous:{title:"\u4e8c\u53c9\u6811/Binary Tree \u2713",permalink:"/site/docs/data-structure/a6"},next:{title:"\u56fe/Graph",permalink:"/site/docs/data-structure/a71"}},c={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u5b9e\u73b0\u63a5\u53e3",id:"\u5b9e\u73b0\u63a5\u53e3",level:2},{value:"\u4e3b\u8981\u7b97\u6cd5\u5206\u6790",id:"\u4e3b\u8981\u7b97\u6cd5\u5206\u6790",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u6d4b\u8bd5\u4ee3\u7801",id:"\u6d4b\u8bd5\u4ee3\u7801",level:2}],p={toc:s};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5806\u662f\u4e00\u7c7b\u7279\u6b8a\u7684\u6811\uff0c\u5806\u7684\u901a\u7528\u7279\u70b9\u5c31\u662f\u7236\u8282\u70b9\u4f1a\u5927\u4e8e\u6216\u5c0f\u4e8e\u6240\u6709\u5b50\u8282\u70b9\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u68f5\u6709\u6839\u6811\u7684\u6bcf\u4e00\u4e2a\u7ed3\u70b9\u81f3\u591a\u6709\u4e24\u4e2a\u513f\u5b50\uff0c\u90a3\u4e48\u8fd9\u68f5\u6811\u79f0\u4e3a\u4e8c\u53c9\u6811\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u68f5\u4e8c\u53c9\u6811\u7684\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u5e26\u7740\u4e00\u4e2a\u503c\uff0c\u4e14\u7236\u4eb2\u7684\u503c\u603b\u662f\u6bd4\u513f\u5b50\u7684\u503c\u8981\u5927\uff0c\u6211\u4eec\u79f0\u8fd9\u68f5\u6811\u4e3a\u5927\u9876\u4e8c\u53c9\u5806\uff0c\u5982\u679c\u662f\u7236\u4eb2\u6bd4\u513f\u5b50\u90fd\u8981\u5c0f\uff0c\u90a3\u5c31\u662f\u5c0f\u9876\u4e8c\u53c9\u5806\uff0c\u7edf\u79f0\u4e3a\u4e8c\u53c9\u5806\u3002(\u5176\u5b9e\u4e00\u822c\u90fd\u628a\u4e8c\u53c9\u4e24\u4e2a\u5b57\u7701\u7565\u6389\uff0c\u6bd5\u7adf\u901a\u5e38\u8bf4\u7684\u5806\u90fd\u662f\u4e8c\u53c9\u5806\uff0c\u7136\u800c\u5806\u4e0d\u6b62\u4e8c\u53c9\u5806)\u3002\u8fd9\u4e00\u4e2a\u826f\u597d\u7684\u6027\u8d28\u6ce8\u5b9a\u4e86\u5806\u53ef\u4ee5\u7528\u6765\u5f53\u4f5c\u4f18\u5148\u961f\u5217\u4f7f\u7528\u3002")),(0,l.kt)("h2",{id:"\u5b9e\u73b0\u63a5\u53e3"},"\u5b9e\u73b0\u63a5\u53e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u5e8f\u904d\u5386",(0,l.kt)("inlineCode",{parentName:"li"},"inOrder(callback, node)")),(0,l.kt)("li",{parentName:"ul"},"\u5148\u5e8f\u904d\u5386",(0,l.kt)("inlineCode",{parentName:"li"},"preOrder(callback, node)")),(0,l.kt)("li",{parentName:"ul"},"\u540e\u5e8f\u904d\u5386",(0,l.kt)("inlineCode",{parentName:"li"},"postOrder(callback, node)")),(0,l.kt)("li",{parentName:"ul"},"\u5c42\u7ea7\u904d\u5386",(0,l.kt)("inlineCode",{parentName:"li"},"levelOrder(callback, node)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6309\u987a\u5e8f\u63d2\u5165\u6570\u636e"),(0,l.kt)("inlineCode",{parentName:"li"},"insert(data, node)"),"\uff0c\u6700\u5927\u7684\u5728\u6700\u4e0a\u9762\uff0c\u8fd9\u662f\u4e0e\u4e8c\u53c9\u6811\u4e0d\u540c\u7684\u5730\u65b9"),(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u6570\u636e",(0,l.kt)("inlineCode",{parentName:"li"},"remove(data, node)")),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u53c9\u6811\u6240\u6709\u6570\u636e\u7684\u5feb\u7167",(0,l.kt)("inlineCode",{parentName:"li"},"toString()"))),(0,l.kt)("h2",{id:"\u4e3b\u8981\u7b97\u6cd5\u5206\u6790"},"\u4e3b\u8981\u7b97\u6cd5\u5206\u6790"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0e\u4e8c\u53c9\u6811\u6700\u4e3b\u8981\u7684\u533a\u522b\u5c31\u662f\uff0c\u5728\u63d2\u5165\u65f6\uff0c\u6839\u8282\u70b9\u7684\u503c\u59cb\u7ec8\u5927\u4e8e\u5de6\u53f3\u8282\u70b9\u7684\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u63d2\u5165\u7684\u503c\u5927\u4e8e\u6839\u8282\u70b9\u7684\u503c\uff0c\u90a3\u4e48\u8be5\u503c\u4f1a\u66ff\u6362\u6839\u8282\u70b9\u7684\u503c\uff0c\u6839\u8282\u70b9\u7684\u503c\u4f1a\u5f80\u4e0b\u63d2\u5165\u3002")),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Node {\n    constructor(data) {\n        this.data = data;\n        this.left = null;\n        this.right = null;\n    }\n}\n\nclass Heap {\n    constructor() {\n        this._root = null;\n    }\n\n    insert(data, node = this._root) {\n        let newNode = new Node(data);\n        if (node === null) {\n            this._root = newNode;\n        } else {\n            //\u5982\u679c\u63d2\u5165\u7684\u6570\u636e\u6bd4\u6839\u8282\u70b9\u7684\u6570\u636e\u5927\n            //\u90a3\u4e48\uff0c\u5c06\u63d2\u5165\u6570\u636e\u4e0e\u6839\u8282\u70b9\u6570\u636e\u4ea4\u6362\uff0c\u518d\u8fdb\u884c\u63d2\u5165\n            if (data > node.data) {\n                let temp = data;\n                data = node.data;\n                node.data = temp;\n                this.insert(data, node);\n            } else {\n                if (!node.left) {\n                    return node.left = new Node(data);\n                }\n                if (!node.right) {\n                    return node.right = new Node(data);\n                }\n                if (node.left && node.left.data <= data) {\n                    this.insert(data, node.left);\n                } else {\n                    this.insert(data, node.right);\n                }\n            }\n        }\n    }\n\n    //\u4e2d\u5e8f\u904d\u5386\n    inOrder(callback, node = this._root) {\n        if (node === null) {\n            return;\n        }\n        if (node.left) {\n            this.inOrder(callback, node.left);\n        }\n        callback(node);\n        if (node.right) {\n            this.inOrder(callback, node.right);\n        }\n    }\n\n    //\u5148\u5e8f\u904d\u5386\n    preOrder(callback, node = this._root) {\n        if (node === null) {\n            return;\n        }\n        callback(node);\n        if (node.left) {\n            this.preOrder(callback, node.left);\n        }\n        if (node.right) {\n            this.preOrder(callback, node.right);\n        }\n    }\n\n    //\u540e\u5e8f\u904d\u5386\n    postOrder(callback, node = this._root) {\n        if (node === null) {\n            return;\n        }\n        if (node.left) {\n            this.postOrder(callback, node.left);\n        }\n        if (node.right) {\n            this.postOrder(callback, node.right);\n        }\n        callback(node);\n    }\n\n    //\u5c42\u7ea7\u904d\u5386\n    levelOrder(callback, node = this._root) {\n        if (node === null) {\n            return;\n        }\n        let queue = [];\n        queue.push(node);\n        while (queue.length > 0) {\n            let curr = queue.shift();\n            callback(curr);\n            curr.left && queue.push(curr.left);\n            curr.right && queue.push(curr.right);\n        }\n    }\n\n    remove(data, node = this._root) {\n        if (node === null) {\n            return null;\n        }\n        if (this._root.data === data) {\n            let curr = this._root;\n            this._root = null;\n            return curr;\n        }\n        if (node.left) {\n            let curr = node.left;\n            if (curr.data === data) {\n                node.left = null;\n                return curr;\n            } else {\n                this.remove(data, node.left);\n            }\n        }\n        if (node.right) {\n            let curr = node.right;\n            if (curr.data === data) {\n                node.right = null;\n                return curr;\n            } else {\n                this.remove(data, node.right);\n            }\n        }\n    }\n\n    toString() {\n        return JSON.stringify(this._root);\n    }\n}\n")),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u4ee3\u7801"},"\u6d4b\u8bd5\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let heap = new Heap();\nheap.insert(35, heap._root);\nheap.insert(52, heap._root);\nheap.insert(21, heap._root);\nheap.insert(11, heap._root);\nheap.insert(16, heap._root);\nheap.insert(87, heap._root);\nheap.insert(100, heap._root);\nconsole.log(heap.toString());\nheap.levelOrder((node) => console.log(node.data));\n")),(0,l.kt)("a",{class:"stackblitz",href:"https://stackblitz.com/edit/node-wps8mf?file=data-structure%2F2Fheap.js"},"Try in StackBlitz ",(0,l.kt)("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},(0,l.kt)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))))}f.isMDXComponent=!0}}]);