"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4217],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||s[d]||u;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,l=new Array(u);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<u;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3332:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),u=(n(7294),n(3905)),l=["components"],i={title:"\u53d7\u63a7\u7ec4\u4ef6\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6",tags:["React"]},o=void 0,c={unversionedId:"react/a21",id:"react/a21",title:"\u53d7\u63a7\u7ec4\u4ef6\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6",description:"\u975e\u53d7\u63a7\u7ec4\u4ef6",source:"@site/docs/react/a21.md",sourceDirName:"react",slug:"/react/a21",permalink:"/site/docs/react/a21",tags:[{label:"React",permalink:"/site/docs/tags/react"}],version:"current",frontMatter:{title:"\u53d7\u63a7\u7ec4\u4ef6\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6",tags:["React"]}},p={},s=[{value:"\u975e\u53d7\u63a7\u7ec4\u4ef6",id:"\u975e\u53d7\u63a7\u7ec4\u4ef6",level:2},{value:"\u9ed8\u8ba4\u503c",id:"\u9ed8\u8ba4\u503c",level:2},{value:"\u53d7\u63a7\u7ec4\u4ef6",id:"\u53d7\u63a7\u7ec4\u4ef6",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,u.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"\u975e\u53d7\u63a7\u7ec4\u4ef6"},"\u975e\u53d7\u63a7\u7ec4\u4ef6"),(0,u.kt)("p",null,"React \u8981\u7f16\u5199\u4e00\u4e2a\u975e\u53d7\u63a7\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 ref \u6765\u4ece DOM \u8282\u70b9\u4e2d\u83b7\u53d6\u8868\u5355\u6570\u636e\uff0c\u5c31\u662f\u975e\u53d7\u63a7\u7ec4\u4ef6\u3002",(0,u.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u4f7f\u7528\u975e\u53d7\u63a7\u7ec4\u4ef6\u63a5\u53d7\u4e00\u4e2a\u8868\u5355\u7684\u503c\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},'class NameForm extends React.Component {\n\xa0\xa0\xa0\xa0\n    constructor(props) {\n\xa0\xa0\xa0\xa0    super(props);\n        this.handleSubmit = this.handleSubmit.bind(this);\n        this.input = React.createRef();\n    }\n\n    handleSubmit(event) {\n        alert(\'A name was submitted: \' + this.input.current.value);\n        event.preventDefault();\n    }\n\n    render() {\n        return (\n            <form onSubmit={this.handleSubmit}>\n                <label>\n                    Name:\n                    <input type="text" ref={this.input} />\n                </label>\n                <input type="submit" value="Submit" />\n            </form>\n        );\n    }\n}\n')),(0,u.kt)("p",null,"\u56e0\u4e3a\u975e\u53d7\u63a7\u7ec4\u4ef6\u5c06\u771f\u5b9e\u6570\u636e\u50a8\u5b58\u5728 DOM \u8282\u70b9\u4e2d\uff0c\u6240\u4ee5\u5728\u4f7f\u7528\u975e\u53d7\u63a7\u7ec4\u4ef6\u65f6\uff0c\u6709\u65f6\u5019\u53cd\u800c\u66f4\u5bb9\u6613\u540c\u65f6\u96c6\u6210 React \u548c\u975e React \u4ee3\u7801\u3002\u5982\u679c\u4f60\u4e0d\u4ecb\u610f\u4ee3\u7801\u7f8e\u89c2\u6027\uff0c\u5e76\u4e14\u5e0c\u671b\u5feb\u901f\u7f16\u5199\u4ee3\u7801\uff0c\u4f7f\u7528\u975e\u53d7\u63a7\u7ec4\u4ef6\u5f80\u5f80\u53ef\u4ee5\u51cf\u5c11\u4f60\u7684\u4ee3\u7801\u91cf\u3002\u5426\u5219\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528\u53d7\u63a7\u7ec4\u4ef6\u3002"),(0,u.kt)("h2",{id:"\u9ed8\u8ba4\u503c"},"\u9ed8\u8ba4\u503c"),(0,u.kt)("p",null,"\u5728 React \u6e32\u67d3\u751f\u547d\u5468\u671f\u65f6\uff0c\u8868\u5355\u5143\u7d20\u4e0a\u7684 value \u5c06\u4f1a\u8986\u76d6 DOM \u8282\u70b9\u4e2d\u7684\u503c\uff0c\u5728\u975e\u53d7\u63a7\u7ec4\u4ef6\u4e2d\uff0c\u4f60\u7ecf\u5e38\u5e0c\u671b React \u80fd\u8d4b\u4e88\u7ec4\u4ef6\u4e00\u4e2a\u521d\u59cb\u503c\uff0c\u4f46\u662f\u4e0d\u53bb\u63a7\u5236\u540e\u7eed\u7684\u66f4\u65b0\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b, \u4f60\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a defaultValue \u5c5e\u6027\uff0c\u800c\u4e0d\u662f value \u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},'render() {\n    return (\n      <form onSubmit={this.handleSubmit}>\n          <label>\n            Name:\n            <input\n            defaultValue="Bob"\n            type="text"\n            ref={this.input} />\n        </label>\n        <input type="submit" value="Submit" />\n        </form>\n    );\n}\n')),(0,u.kt)("p",null,"\u540c\u6837\uff0c ",(0,u.kt)("inlineCode",{parentName:"p"},'<input type="checkbox">')," \u548c ",(0,u.kt)("inlineCode",{parentName:"p"},'<input type="radio">')," \u652f\u6301 defaultChecked \uff0c ",(0,u.kt)("inlineCode",{parentName:"p"},"<select>")," \u548c ",(0,u.kt)("inlineCode",{parentName:"p"},"<textarea>")," \u652f\u6301 defaultValue \u3002"),(0,u.kt)("h2",{id:"\u53d7\u63a7\u7ec4\u4ef6"},"\u53d7\u63a7\u7ec4\u4ef6"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},'class NameForm extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {value: \'\'};\n        this.handleChange = this.handleChange.bind(this);\n        this.handleSubmit = this.handleSubmit.bind(this);\n    }\n\n    handleChange(event) {\n        this.setState({value: event.target.value});\n    }\n\n    handleSubmit(event) {\n        alert(\'\u63d0\u4ea4\u7684\u540d\u5b57: \' + this.state.value);\n        event.preventDefault();\n    }\n\n    render() {\n        return (\n            <form onSubmit={this.handleSubmit}>\n                <label>\n                    \u540d\u5b57:\n                    <input type="text" value={this.state.value} onChange=            {this.handleChange}\n                    </label>\n                <input type="submit" value="\u63d0\u4ea4" />\n            </form>\n        );\n    }\n}\n')),(0,u.kt)("p",null,"\u7531\u4e8e\u5728\u8868\u5355\u5143\u7d20\u4e0a\u8bbe\u7f6e\u4e86 value \u5c5e\u6027\uff0c\u56e0\u6b64\u663e\u793a\u7684\u503c\u5c06\u59cb\u7ec8\u4e3a this.state.value \uff0c\u8fd9\u4f7f\u5f97 React \u7684 state \u6210\u4e3a \u552f\u4e00\u6570\u636e\u6e90\u3002"),(0,u.kt)("p",null,"\u7531\u4e8e handlechange \u5728\u6bcf\u6b21\u6309\u952e\u65f6\u90fd\u4f1a\u6267\u884c\u5e76\u66f4\u65b0 React \u7684 state\uff0c\u56e0\u6b64\u663e\u793a\u7684\u503c\u5c06\u968f\u7740\u7528\u6237\u8f93\u5165\u800c\u66f4\u65b0\u3002",(0,u.kt)("br",{parentName:"p"}),"\n","\u5bf9\u4e8e\u53d7\u63a7\u7ec4\u4ef6\u6765\u8bf4\uff0c\u8f93\u5165\u7684\u503c\u59cb\u7ec8\u7531 React \u7684 state \u9a71\u52a8\u3002\u4f60\u4e5f\u53ef\u4ee5\u5c06 value \u4f20\u9012\u7ed9\u5176\u4ed6 UI \u5143\u7d20\uff0c\u6216\u8005\u901a\u8fc7\u5176\u4ed6\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u91cd\u7f6e\uff0c\u4f46\u8fd9\u610f\u5473\u7740\u4f60\u9700\u8981\u7f16\u5199\u66f4\u591a\u7684\u4ee3\u7801\u3002"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u53e6\u4e00\u79cd\u8bf4\u6cd5\uff08\u5e7f\u4e49\u8303\u56f4\u7684\u8bf4\u6cd5\uff09\uff0cReact \u7ec4\u4ef6\u7684\u6570\u636e\u6e32\u67d3\u662f\u5426\u88ab\u8c03\u7528\u8005\u4f20\u9012\u7684 props \u5b8c\u5168\u63a7\u5236\uff0c\u63a7\u5236\u5219\u4e3a\u53d7\u63a7\u7ec4\u4ef6\uff0c\u5426\u5219\u975e\u53d7\u63a7\u7ec4\u4ef6\u3002")))}d.isMDXComponent=!0}}]);