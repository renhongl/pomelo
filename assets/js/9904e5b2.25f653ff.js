"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3704],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,f=d["".concat(i,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3888:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],s={title:"\u521b\u5efa\u63d2\u4ef6",tags:["\u624b\u5199JS"]},i=void 0,l={unversionedId:"write-redux/a2",id:"write-redux/a2",title:"\u521b\u5efa\u63d2\u4ef6",description:"\u4e3b\u8981 API",source:"@site/docs/write-redux/a2.md",sourceDirName:"write-redux",slug:"/write-redux/a2",permalink:"/site/docs/write-redux/a2",tags:[{label:"\u624b\u5199JS",permalink:"/site/docs/tags/\u624b\u5199js"}],version:"current",frontMatter:{title:"\u521b\u5efa\u63d2\u4ef6",tags:["\u624b\u5199JS"]},sidebar:"redux",previous:{title:"\u652f\u6301\u591a\u4e2areducer",permalink:"/site/docs/write-redux/a1"},next:{title:"\u521b\u5efa\u652f\u6301\u5f02\u6b65\u7684\u63d2\u4ef6",permalink:"/site/docs/write-redux/a3"}},u={},p=[{value:"\u4e3b\u8981 API",id:"\u4e3b\u8981-api",level:2},{value:"Core",id:"core",level:2},{value:"\u589e\u52a0\u65e5\u5fd7\u529f\u80fd",id:"\u589e\u52a0\u65e5\u5fd7\u529f\u80fd",level:2},{value:"\u521b\u5efa\u63d2\u4ef6",id:"\u521b\u5efa\u63d2\u4ef6",level:2},{value:"\u6d4b\u8bd5\u4ee3\u7801",id:"\u6d4b\u8bd5\u4ee3\u7801",level:2}],d={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e3b\u8981-api"},"\u4e3b\u8981 API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"createStore"),(0,o.kt)("li",{parentName:"ul"},"getState"),(0,o.kt)("li",{parentName:"ul"},"dispatch"),(0,o.kt)("li",{parentName:"ul"},"subscribe"),(0,o.kt)("li",{parentName:"ul"},"combineReducers"),(0,o.kt)("li",{parentName:"ul"},"applyMiddleware // \u65b0\u589e"),(0,o.kt)("li",{parentName:"ul"},"logger // \u65b0\u589e"),(0,o.kt)("li",{parentName:"ul"},"crashReporter // \u65b0\u589e")),(0,o.kt)("h2",{id:"core"},"Core"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const combineReducers = (reducers) => {\n    return (state, action) => {\n        const combineState = {}\n        const keys = Object.keys(reducers)\n        for (let key of keys) {\n            const partial = reducers[key](state === undefined ? state : state[key], action)\n            combineState[key] = partial\n        }\n        return combineState\n    }\n}\n\nconst applyMiddleware = (...middlewares) => {\n    return (store) => {\n        let dispatch = store.dispatch\n        middlewares.forEach(middleware => {\n            dispatch = middleware(store)(dispatch)\n        })\n        return {\n            ...store,\n            dispatch\n        }\n    }\n}\n\nconst createStore = (reducer, applyMiddleware) => {\n    let state = reducer(undefined, {})\n    const listener = []\n\n    const store = {\n        getState: () => {\n            return state\n        },\n        subscribe: (fn) => {\n            listener.push(fn)\n        },\n        dispatch: (action) => {\n            state = reducer(state, action)\n            for (let fn of listener) {\n                fn && fn()\n            }\n        }\n    }\n    return applyMiddleware(store)\n}\n")),(0,o.kt)("h2",{id:"\u589e\u52a0\u65e5\u5fd7\u529f\u80fd"},"\u589e\u52a0\u65e5\u5fd7\u529f\u80fd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u4fee\u6539store\uff0c\u589e\u52a0\u6253\u5370\u65e5\u5fd7\u529f\u80fd\nconst next = store.dispatch\nstore.dispatch = (action) => {\n    console.log('dispatching', action)\n    const result = next(action)\n    console.log('next state', store.getState())\n    return result\n}\n\n// \u5c01\u88c5\u6253\u5370\u65e5\u5fd7\u529f\u80fd\nconst patchStoreToAddLogging = (store) => {\n    const next = store.dispatch\n    store.dispatch = (action) => {\n        console.log('dispatching', action)\n        const result = next(action)\n        console.log('next state', store.getState())\n        return result\n    }\n}\n\n// \u4f7f\u7528\u6253\u5370\u529f\u80fd\n// patchStoreToAddLogging(store)\n\n// \u8fd4\u56de\u65b9\u6cd5\uff0c\u9632\u6b62\u76f4\u63a5\u4fee\u6539dispatch,\nconst logger0 = (store) => {\n    const dispatch = store.dispatch\n    return (action) => {\n        console.log('dispatching', action)\n        const result = dispatch(action)\n        console.log('next state', store.getState())\n        return result\n    }\n}\n\n// \u652f\u6301\u591a\u4e2a\u589e\u5f3a\u529f\u80fd\uff0c\u4e0d\u76f4\u63a5\u4f7f\u7528store\u4e0a\u9762\u7684dispatch\uff0c\u4f7f\u7528\u4f20\u8fc7\u6765\u7684\uff0c\u589e\u5f3a\u4e4b\u540e\u7684dispatch\n// \u8fd9\u5c31\u662f\u5b8c\u6574\u7248\u7684\u63d2\u4ef6\nconst logger1 = (store) => {\n    return (dispatch) => {\n      return (action) => {\n          console.log('dispatching', action)\n          const result = dispatch(action)\n          console.log('next state', store.getState())\n          return result\n      }\n    }\n}\n")),(0,o.kt)("h2",{id:"\u521b\u5efa\u63d2\u4ef6"},"\u521b\u5efa\u63d2\u4ef6"),(0,o.kt)("p",null,"\u6253\u5370\u65e5\u5fd7\u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const logger = (store) => (dispatch) => (action) => {\n    console.log('dispatching', action)\n    const result = dispatch(action)\n    console.log('next state', store.getState())\n    return result\n}\n")),(0,o.kt)("p",null,"\u9519\u8bef\u63a7\u5236\u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const crashReporter = store => dispatch => action => {\n    try {\n        dispatch(action)\n        console.log('run in crash reporter')\n    } catch (error) {\n        console.log('handled error', error)\n    }\n}\n")),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u4ee3\u7801"},"\u6d4b\u8bd5\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nconst initCounterState = {\n    value: 0,\n    name: 'counter reducer'\n}\n\nconst initTodoState = {\n    value: 0,\n    name: 'todo reducer'\n}\n\nconst counterReducer = (state = initCounterState, action) => {\n    switch (action.type) {\n        case 'COUNTER/INCREMENT':\n            return {\n                ...state,\n                value: state.value + (action.payload || 1)\n            }\n        case 'COUNTER/DECREMENT':\n            return {\n                ...state,\n                value: state.value - (action.payload || 1)\n            }\n        default:\n            return {\n                ...state\n            }\n    }\n}\n\nconst todoReducer = (state = initTodoState, action) => {\n    switch (action.type) {\n        case 'TODO/INCREMENT':\n            return {\n                ...state,\n                value: state.value + (action.payload || 1)\n            }\n        case 'TODO/DECREMENT':\n            return {\n                ...state,\n                value: state.value - (action.payload || 1)\n            }\n        default:\n            return {\n                ...state\n            }\n    }\n}\n\nconst reducer = combineReducers({\n    counterReducer,\n    todoReducer,\n})\n\nconst store = createStore(reducer, applyMiddleware(logger, crashReporter))\n\nstore.subscribe(() => {\n    const state = store.getState()\n})\n\nstore.dispatch({\n    type: 'TODO/INCREMENT',\n    payload: 10\n})\n\nstore.dispatch({\n    type: 'COUNTER/INCREMENT',\n    payload: 5\n})\n\nstore.dispatch({\n    type: 'TODO/DECREMENT',\n    payload: 2\n})\n")))}g.isMDXComponent=!0}}]);