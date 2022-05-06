"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4125],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,d=u["".concat(s,".").concat(f)]||u[f]||y[f]||o;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9683:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return y}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"\u4e2d\u4ecb\u8005\u6a21\u5f0f/Mediator Pattern",tags:["\u8bbe\u8ba1\u6a21\u5f0f"]},s=void 0,p={unversionedId:"design-pattern/a4",id:"design-pattern/a4",title:"\u4e2d\u4ecb\u8005\u6a21\u5f0f/Mediator Pattern",description:"\u4ec0\u4e48\u662f\u4e2d\u4ecb\u8005\u6a21\u5f0f",source:"@site/docs/design-pattern/a4.md",sourceDirName:"design-pattern",slug:"/design-pattern/a4",permalink:"/site/docs/design-pattern/a4",tags:[{label:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/site/docs/tags/\u8bbe\u8ba1\u6a21\u5f0f"}],version:"current",frontMatter:{title:"\u4e2d\u4ecb\u8005\u6a21\u5f0f/Mediator Pattern",tags:["\u8bbe\u8ba1\u6a21\u5f0f"]},sidebar:"designpattern",previous:{title:"\u88c5\u9970\u8005\u6a21\u5f0f",permalink:"/site/docs/design-pattern/a3"},next:{title:"\u804c\u8d23\u94fe\u6a21\u5f0f",permalink:"/site/docs/design-pattern/a5"}},c={},y=[{value:"\u4ec0\u4e48\u662f\u4e2d\u4ecb\u8005\u6a21\u5f0f",id:"\u4ec0\u4e48\u662f\u4e2d\u4ecb\u8005\u6a21\u5f0f",level:2},{value:"\u9762\u5411\u5bf9\u8c61\u4f8b\u5b50\uff1a",id:"\u9762\u5411\u5bf9\u8c61\u4f8b\u5b50",level:2}],u={toc:y};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u662f\u4e2d\u4ecb\u8005\u6a21\u5f0f"},"\u4ec0\u4e48\u662f\u4e2d\u4ecb\u8005\u6a21\u5f0f"),(0,o.kt)("p",null,"\u4e2d\u4ecb\u8005\u6a21\u5f0f\uff08Mediator Pattern\uff09\u662f\u7528\u6765\u964d\u4f4e\u591a\u4e2a\u5bf9\u8c61\u548c\u7c7b\u4e4b\u95f4\u7684\u901a\u4fe1\u590d\u6742\u6027\u3002\u8fd9\u79cd\u6a21\u5f0f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4e2d\u4ecb\u7c7b\uff0c\u8be5\u7c7b\u901a\u5e38\u5904\u7406\u4e0d\u540c\u7c7b\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u5e76\u652f\u6301\u677e\u8026\u5408\uff0c\u4f7f\u4ee3\u7801\u6613\u4e8e\u7ef4\u62a4\u3002\u4e2d\u4ecb\u8005\u6a21\u5f0f\u5c5e\u4e8e\u884c\u4e3a\u578b\u6a21\u5f0f\u3002"),(0,o.kt)("h2",{id:"\u9762\u5411\u5bf9\u8c61\u4f8b\u5b50"},"\u9762\u5411\u5bf9\u8c61\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"}," class Player{\n     constructor(name, teamColor, playerDirector) {\n         this.name = name;\n         this.teamColor = teamColor;\n         this.status = 'live';\n         this.playerDirector = playerDirector;\n         this.add();\n     }\n\n     win() {\n         console.log('for self win action: ' + this.name);\n     }\n\n     lose() {\n         console.log('for self lose action: ' + this.name);\n     }\n\n     add() {\n         console.log('for self add action: ' + this.name);\n         this.playerDirector.recieveMessage('add', this);\n     }\n\n     remove() {\n         console.log('for self remove action: ' + this.name);\n         this.playerDirector.recieveMessage('remove', this);\n     }\n\n     die() {\n         console.log('for self die action: ' + this.name);\n         this.playerDirector.recieveMessage('die', this);\n     }\n\n     getMessage(message) {\n         console.log(`${this.name} recieved message: ${message}`);\n     }\n }\n\n export class PlayerMediator{\n     constructor() {\n         this.players = {};\n     }\n\n     recieveMessage(type, player) {\n         this[type](player);\n     }\n\n     add(player) {\n         this.players[player.teamColor] = this.players[player.teamColor] || [];\n         this.players[player.teamColor].push(player);\n         this.getAllPlayerExceptThis(player).forEach((p) => {\n             p.getMessage(`player ${player.name} added.`);\n         });\n     }\n\n     remove(player) {\n         let index = this.players[player.teamColor].indexOf(player);\n         this.players[player.teamColor][index].status = 'disconnect';\n         this.getAllPlayerExceptThis(player).forEach((p) => {\n             p.getMessage(`player ${player.name} disconnected.`);\n         });\n         if (this.verifyOver(player.teamColor)) {\n             this.gameOver(player.teamColor)\n         }\n     }\n\n     die(player) {\n         let index = this.players[player.teamColor].indexOf(player);\n         this.players[player.teamColor][index].status = 'die';\n         this.getAllPlayerExceptThis(player).forEach((p) => {\n             p.getMessage(`player ${player.name} dead.`);\n         });\n         if (this.verifyOver(player.teamColor)) {\n             this.gameOver(player.teamColor)\n         }\n     }\n\n     getAllPlayerExceptThis(player) {\n         let ret = [];\n         for (let t of Object.keys(this.players)) {\n             for (let p of this.players[t]) {\n                 if (player !== p) {\n                     ret.push(p);\n                 }\n             }\n         }\n         return ret;\n     }\n\n     verifyOver(teamColor) {\n         for (let player of this.players[teamColor]) {\n             if (player.status === 'live') {\n                 return false;\n             }\n         }\n         return true\n     }\n\n     gameOver(teamColor) {\n         for (let t of Object.keys(this.players)) {\n             for (let player of this.players[t]) {\n                 if (teamColor === player.teamColor) {\n                     player.lose();\n                 } else {\n                     player.win();\n                 }\n             }\n         }\n     }\n }\n")))}f.isMDXComponent=!0}}]);