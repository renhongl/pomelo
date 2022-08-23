"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5251],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={title:"\u521b\u5efa\u652f\u6301\u5f02\u6b65\u7684\u63d2\u4ef6",tags:["\u624b\u5199JS"]},s=void 0,u={unversionedId:"write-redux/a3",id:"write-redux/a3",title:"\u521b\u5efa\u652f\u6301\u5f02\u6b65\u7684\u63d2\u4ef6",description:"\u4e3b\u8981 API",source:"@site/docs/write-redux/a3.md",sourceDirName:"write-redux",slug:"/write-redux/a3",permalink:"/site/docs/write-redux/a3",tags:[{label:"\u624b\u5199JS",permalink:"/site/docs/tags/\u624b\u5199js"}],version:"current",frontMatter:{title:"\u521b\u5efa\u652f\u6301\u5f02\u6b65\u7684\u63d2\u4ef6",tags:["\u624b\u5199JS"]},sidebar:"redux",previous:{title:"\u521b\u5efa\u63d2\u4ef6",permalink:"/site/docs/write-redux/a2"}},l={},p=[{value:"\u4e3b\u8981 API",id:"\u4e3b\u8981-api",level:2},{value:"Core",id:"core",level:2},{value:"\u521b\u5efathunk\u63d2\u4ef6",id:"\u521b\u5efathunk\u63d2\u4ef6",level:2},{value:"\u6d4b\u8bd5\u4ee3\u7801",id:"\u6d4b\u8bd5\u4ee3\u7801",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e3b\u8981-api"},"\u4e3b\u8981 API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"createStore"),(0,o.kt)("li",{parentName:"ul"},"getState"),(0,o.kt)("li",{parentName:"ul"},"dispatch"),(0,o.kt)("li",{parentName:"ul"},"subscribe"),(0,o.kt)("li",{parentName:"ul"},"combineReducers"),(0,o.kt)("li",{parentName:"ul"},"applyMiddleware"),(0,o.kt)("li",{parentName:"ul"},"thunk // \u65b0\u589e")),(0,o.kt)("h2",{id:"core"},"Core"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const combineReducers = (reducers) => {\n    return (state, action) => {\n        const combineState = {}\n        const keys = Object.keys(reducers)\n        for (let key of keys) {\n            const partial = reducers[key](state === undefined ? state : state[key], action)\n            combineState[key] = partial\n        }\n        return combineState\n    }\n}\n\nconst applyMiddleware = (...middlewares) => {\n    return (store) => {\n        let dispatch = store.dispatch\n        middlewares.forEach(middleware => {\n            dispatch = middleware(store)(dispatch)\n        })\n        return {\n            ...store,\n            dispatch\n        }\n    }\n}\n\nconst createStore = (reducer, applyMiddleware) => {\n    let state = reducer(undefined, {})\n    const listener = []\n\n    const store = {\n        getState: () => {\n            return state\n        },\n        subscribe: (fn) => {\n            listener.push(fn)\n        },\n        dispatch: (action) => {\n            state = reducer(state, action)\n            for (let fn of listener) {\n                fn && fn()\n            }\n        }\n    }\n    return applyMiddleware(store)\n}\n")),(0,o.kt)("h2",{id:"\u521b\u5efathunk\u63d2\u4ef6"},"\u521b\u5efathunk\u63d2\u4ef6"),(0,o.kt)("p",null,"\u57fa\u672c\u539f\u7406\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6839\u636eredux\u7684\u6982\u5ff5\uff0cdispatch\u7684\u65f6\u5019\uff0c\u662f\u4f20\u5165\u4e00\u4e2aaction\uff0c\u90a3\u4e48\u5b83\u6ca1\u6cd5\u652f\u6301\u5f02\u6b65"),(0,o.kt)("li",{parentName:"ul"},"\u6211\u4eec\u8ba9dispatch\u652f\u6301\u4f20\u5165\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5728\u65b9\u6cd5\u5185\u90e8\u518d\u53bbdispatch\u4e00\u4e2aaction\uff0c\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u652f\u6301\u5f02\u6b65")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const thunk = store => dispatch => action => {\n    if (typeof action === 'function') {\n        action(store.getState, dispatch)\n    }\n    return dispatch(action)\n}\n")),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u4ee3\u7801"},"\u6d4b\u8bd5\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const initCounterState = {\n    value: 0,\n    name: 'counter reducer'\n}\n\nconst initTodoState = {\n    value: 0,\n    name: 'todo reducer'\n}\n\nconst counterReducer = (state = initCounterState, action) => {\n    switch (action.type) {\n        case 'COUNTER/INCREMENT':\n            return {\n                ...state,\n                value: state.value + (action.payload || 1)\n            }\n        case 'COUNTER/DECREMENT':\n            return {\n                ...state,\n                value: state.value - (action.payload || 1)\n            }\n        default:\n            return {\n                ...state\n            }\n    }\n}\n\nconst todoReducer = (state = initTodoState, action) => {\n    switch (action.type) {\n        case 'TODO/INCREMENT':\n            return {\n                ...state,\n                value: state.value + (action.payload || 1)\n            }\n        case 'TODO/DECREMENT':\n            return {\n                ...state,\n                value: state.value - (action.payload || 1)\n            }\n        default:\n            return {\n                ...state\n            }\n    }\n}\n\nconst reducer = combineReducers({\n    counterReducer,\n    todoReducer,\n})\n\nconst store = createStore(reducer, applyMiddleware(thunk))\n\nstore.subscribe(() => {\n    const state = store.getState()\n})\n\nstore.dispatch({\n    type: 'TODO/INCREMENT',\n    payload: 10\n})\n\nstore.dispatch({\n    type: 'COUNTER/INCREMENT',\n    payload: 5\n})\n\nstore.dispatch({\n    type: 'TODO/DECREMENT',\n    payload: 2\n})\n\n// \u6d4b\u8bd5\u5f02\u6b65\u64cd\u4f5c\u6848\u4f8b\u4e00\nstore.dispatch(() => {\n    console.log('dispatching')\n    setTimeout(() => {\n        console.log('got new data')\n        const value = 100\n        store.dispatch({\n            type: 'TODO/INCREMENT',\n            payload: value\n        })\n    }, 2000)\n})\n\n// \u7ed9\u5f02\u6b65\u64cd\u4f5c\u4e00\u4e2a\u6b63\u5f53\u7684\u540d\u5b57\nconst addCounterByValue = (params) => {\n    return (getState, dispatch) => {\n        console.log(params, getState())\n        setTimeout(() => {\n            const value = 2000\n            dispatch({\n                type: 'COUNTER/INCREMENT',\n                payload: value\n            })\n        }, 3000)\n    }\n}\n\nstore.dispatch(addCounterByValue('params'))\n")))}f.isMDXComponent=!0}}]);