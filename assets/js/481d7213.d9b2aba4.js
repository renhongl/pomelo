"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7532],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4010:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],u={title:"\u652f\u6301\u591a\u4e2areducer",tags:["\u624b\u5199JS"]},i=void 0,s={unversionedId:"write-redux/a1",id:"write-redux/a1",title:"\u652f\u6301\u591a\u4e2areducer",description:"\u4e3b\u8981 API",source:"@site/docs/write-redux/a1.md",sourceDirName:"write-redux",slug:"/write-redux/a1",permalink:"/site/docs/write-redux/a1",tags:[{label:"\u624b\u5199JS",permalink:"/site/docs/tags/\u624b\u5199js"}],version:"current",frontMatter:{title:"\u652f\u6301\u591a\u4e2areducer",tags:["\u624b\u5199JS"]},sidebar:"redux",previous:{title:"\u57fa\u7840\u7248\u672c",permalink:"/site/docs/write-redux/"},next:{title:"\u521b\u5efa\u63d2\u4ef6",permalink:"/site/docs/write-redux/a2"}},l={},d=[{value:"\u4e3b\u8981 API",id:"\u4e3b\u8981-api",level:2},{value:"Core",id:"core",level:2},{value:"\u6d4b\u8bd5\u4ee3\u7801",id:"\u6d4b\u8bd5\u4ee3\u7801",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e3b\u8981-api"},"\u4e3b\u8981 API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"createStore"),(0,o.kt)("li",{parentName:"ul"},"getState"),(0,o.kt)("li",{parentName:"ul"},"dispatch"),(0,o.kt)("li",{parentName:"ul"},"subscribe"),(0,o.kt)("li",{parentName:"ul"},"combineReducers // \u65b0\u589e")),(0,o.kt)("h2",{id:"core"},"Core"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const combineReducers = (reducers) => {\n    return (state, action) => {\n        const combineState = {}\n        const keys = Object.keys(reducers)\n        for (let key of keys) {\n            const partial = reducers[key](state === undefined ? state : state[key], action)\n            combineState[key] = partial\n        }\n        return combineState\n    }\n}\n\nconst createStore = (reducer) => {\n    let state = reducer(undefined, {})\n    const listener = []\n\n    return {\n        getState: () => {\n            return state\n        },\n        subscribe: (fn) => {\n            listener.push(fn)\n        },\n        dispatch: (action) => {\n            state = reducer(state, action)\n            for (let fn of listener) {\n                fn && fn()\n            }\n        }\n    }\n}\n")),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u4ee3\u7801"},"\u6d4b\u8bd5\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const initCounterState = {\n    value: 0,\n    name: 'counter reducer'\n}\n\nconst initTodoState = {\n    value: 0,\n    name: 'todo reducer'\n}\n\nconst counterReducer = (state = initCounterState, action) => {\n    switch (action.type) {\n        case 'COUNTER/INCREMENT':\n            return {\n                ...state,\n                value: state.value + (action.payload || 1)\n            }\n        case 'COUNTER/DECREMENT':\n            return {\n                ...state,\n                value: state.value - (action.payload || 1)\n            }\n        default:\n            return {\n                ...state\n            }\n    }\n}\n\nconst todoReducer = (state = initTodoState, action) => {\n    switch (action.type) {\n        case 'TODO/INCREMENT':\n            return {\n                ...state,\n                value: state.value + (action.payload || 1)\n            }\n        case 'TODO/DECREMENT':\n            return {\n                ...state,\n                value: state.value - (action.payload || 1)\n            }\n        default:\n            return {\n                ...state\n            }\n    }\n}\n\nconst reducer = combineReducers({\n    counterReducer,\n    todoReducer,\n})\nconst store = createStore(reducer)\n\nstore.subscribe(() => {\n    const state = store.getState()\n    console.log(state)\n})\n\nconsole.log('add todo 10')\nstore.dispatch({\n    type: 'TODO/INCREMENT',\n    payload: 10\n})\n\nconsole.log('add counter 5')\nstore.dispatch({\n    type: 'COUNTER/INCREMENT',\n    payload: 5\n})\n\nconsole.log('minus todo 2')\nstore.dispatch({\n    type: 'TODO/DECREMENT',\n    payload: 2\n})\n")))}f.isMDXComponent=!0}}]);