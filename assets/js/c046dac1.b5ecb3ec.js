"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6655],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(f,u(u({ref:t},d),{},{components:n})):r.createElement(f,u({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7215:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=["components"],i={title:"Redux Toolkit",tags:["React-Redux"]},l=void 0,c={unversionedId:"react-redux/a3",id:"react-redux/a3",title:"Redux Toolkit",description:"\u65b0\u7248\u672c\u7684 Redux \u4f7f\u7528\u4e86 Toolkit \u5de5\u5177\uff0c\u7528\u4e8e\u7b80\u5316 Redux \u5b9a\u4e49\uff0c\u4f7f\u7f16\u5199 Redux \u5e94\u7528\u7a0b\u5e8f\u66f4\u52a0\u5bb9\u6613\u3002",source:"@site/docs/react-redux/a3.md",sourceDirName:"react-redux",slug:"/react-redux/a3",permalink:"/site/docs/react-redux/a3",tags:[{label:"React-Redux",permalink:"/site/docs/tags/react-redux"}],version:"current",frontMatter:{title:"Redux Toolkit",tags:["React-Redux"]},sidebar:"reactRedux",previous:{title:"React-Redux",permalink:"/site/docs/react-redux/a2"},next:{title:"Redux\u5f02\u6b65",permalink:"/site/docs/react-redux/a4"}},d={},s=[{value:"\u6211\u4eec\u73b0\u5728\u5c31\u6765\u521b\u5efa\u4e00\u4e2a\u4f7f\u7528 RTK \u7684\u9879\u76ee\u5427",id:"\u6211\u4eec\u73b0\u5728\u5c31\u6765\u521b\u5efa\u4e00\u4e2a\u4f7f\u7528-rtk-\u7684\u9879\u76ee\u5427",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668",id:"\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668",level:2},{value:"\u5b89\u88c5 React \u548c Redux",id:"\u5b89\u88c5-react-\u548c-redux",level:2},{value:"\u5b89\u88c5 Redux Toolkit",id:"\u5b89\u88c5-redux-toolkit",level:2},{value:"\u521b\u5efa Slice",id:"\u521b\u5efa-slice",level:2},{value:"\u521b\u5efa Store",id:"\u521b\u5efa-store",level:2},{value:"\u5728\u7ec4\u4ef6\u4e2d\u83b7\u53d6 State",id:"\u5728\u7ec4\u4ef6\u4e2d\u83b7\u53d6-state",level:2},{value:"\u4fee\u6539 State\uff0c\u6dfb\u52a0 todo",id:"\u4fee\u6539-state\u6dfb\u52a0-todo",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u65b0\u7248\u672c\u7684 Redux \u4f7f\u7528\u4e86 Toolkit \u5de5\u5177\uff0c\u7528\u4e8e\u7b80\u5316 Redux \u5b9a\u4e49\uff0c\u4f7f\u7f16\u5199 Redux \u5e94\u7528\u7a0b\u5e8f\u66f4\u52a0\u5bb9\u6613\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/"},(0,o.kt)("strong",{parentName:"a"},"Redux Toolkit")),"\xa0 \u662f\u6211\u4eec\u5b98\u65b9\u63a8\u8350\u7684\u7f16\u5199 Redux \u903b\u8f91\u7684\u65b9\u6cd5\u3002\u5b83\u5305\u542b\u4e86 Redux \u6838\u5fc3\uff0c\u5e76\u5305\u542b\u6211\u4eec\u8ba4\u4e3a\u5bf9\u4e8e\u6784\u5efa Redux \u5e94\u7528\u5fc5\u4e0d\u53ef\u5c11\u7684\u8f6f\u4ef6\u5305\u548c\u529f\u80fd\u3002Redux Toolkit \u5efa\u7acb\u5728\u6211\u4eec\u5efa\u8bae\u7684\u6700\u4f73\u5b9e\u8df5\u4e2d\uff0c\u7b80\u5316\u4e86\u5927\u591a\u6570 Redux \u4efb\u52a1\uff0c\u9632\u6b62\u4e86\u5e38\u89c1\u9519\u8bef\uff0c\u5e76\u4f7f\u7f16\u5199 Redux \u5e94\u7528\u7a0b\u5e8f\u66f4\u52a0\u5bb9\u6613\u3002"),(0,o.kt)("p",null,"RTK \u5305\u542b\u4e86\u6709\u52a9\u4e8e\u7b80\u5316\u8bb8\u591a\u5e38\u89c1\u573a\u666f\u7684\u5de5\u5177\uff0c\u5305\u62ec \xa0",(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/configureStore"},"\u914d\u7f6e Store"),"\uff0c\xa0",(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createreducer"},"\u521b\u5efa reducer \u5e76\u7f16\u5199 immutable \u66f4\u65b0\u903b\u8f91"),"\uff0c \u751a\u81f3\u8fd8\u5305\u542b \xa0",(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createslice"},"\u4e00\u6b21\u6027\u521b\u5efa\u6574\u4e2a State \u7684 \u201c\u5207\u9762\u201d"),"\u3002"),(0,o.kt)("h2",{id:"\u6211\u4eec\u73b0\u5728\u5c31\u6765\u521b\u5efa\u4e00\u4e2a\u4f7f\u7528-rtk-\u7684\u9879\u76ee\u5427"},"\u6211\u4eec\u73b0\u5728\u5c31\u6765\u521b\u5efa\u4e00\u4e2a\u4f7f\u7528 RTK \u7684\u9879\u76ee\u5427"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm create vite@latest\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm install\n")),(0,o.kt)("h2",{id:"\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668"},"\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm run dev\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5-react-\u548c-redux"},"\u5b89\u88c5 React \u548c Redux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm install --save react\nnpm install --save redux\nnpm install --save react-redux\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5-redux-toolkit"},"\u5b89\u88c5 Redux Toolkit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm install --save-dev @reduxjs/toolkit\n")),(0,o.kt)("h2",{id:"\u521b\u5efa-slice"},"\u521b\u5efa Slice"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createSlice } from \"@reduxjs/toolkit\"\n\nconst todoSlice = createSlice({\n    name: 'todo',\n    initialState: {\n        todoList: [\n            {\n                id: 0,\n                text: 'some text'\n            }\n        ]\n    },\n    reducers: {\n        add: (state, action) => {\n            state.todoList.push(action.payload)\n        }\n    }\n})\n\nexport const { add } = todoSlice.actions\n\nexport default todoSlice.reducer\n")),(0,o.kt)("h2",{id:"\u521b\u5efa-store"},"\u521b\u5efa Store"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from \"@reduxjs/toolkit\"\nimport todoReducer from './components/todo/slice'\n\n// \u73b0\u5728\u4f7f\u7528configureStore\u6765\u521b\u5efastore\nconst store = configureStore({\n    reducer: {\n        todoReducer\n    },\n})\n\nexport default store\n")),(0,o.kt)("h2",{id:"\u5728\u7ec4\u4ef6\u4e2d\u83b7\u53d6-state"},"\u5728\u7ec4\u4ef6\u4e2d\u83b7\u53d6 State"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { useSelector } from 'react-redux'\n\nexport default function TodoList() {\n    // \u548c\u4e4b\u524d\u4e00\u6837\uff0c\u56e0\u4e3a\u90fd\u662f\u4f7f\u7528react-redux\u7684api\n    const list = useSelector(state => state.todoReducer.todoList)\n    return (\n        <div>\n            <div>TODO</div>\n            {\n                list.map(item => <div key={item.id}>{item.text}</div>)\n            }\n        </div>\n    )\n}\n")),(0,o.kt)("h2",{id:"\u4fee\u6539-state\u6dfb\u52a0-todo"},"\u4fee\u6539 State\uff0c\u6dfb\u52a0 todo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useCallback, useRef} from 'react'\nimport { useDispatch } from 'react-redux'\nimport { add } from './slice'\n\nexport default function AddTodo() {\n    const dispatch = useDispatch()\n    const inputRef = useRef()\n\n    const onAdd = useCallback(\n      () => {\n        // action\u4eceslice\u4e2d\u5bfc\u51fa\n        dispatch(add({\n            id: Math.random(),\n            text: inputRef.current.value\n        }))\n      },\n      [],\n    )\n\n    return (\n        <div>\n            <input ref={inputRef} type=\"text\" />\n            <button onClick={onAdd}>Add</button>\n        </div>\n    )\n}\n")),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Redux Toolkit \u4e0d\u7528\u518d\u5728\u5404\u4e2a\u6587\u4ef6\u521b\u5efa action type, action \u8fd8\u6709 reducer")))}m.isMDXComponent=!0}}]);