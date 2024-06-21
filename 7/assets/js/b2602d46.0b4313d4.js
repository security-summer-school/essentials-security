"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[1125],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),p=a,g=c["".concat(l,".").concat(p)]||c[p]||y[p]||i;return t?r.createElement(g,s(s({ref:n},d),{},{components:t})):r.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7870:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(8168),a=(t(6540),t(5680));const i={},s="Introduction",o={unversionedId:"Binary Introduction/Assembly Language/Reading/introduction",id:"Binary Introduction/Assembly Language/Reading/introduction",title:"Introduction",description:"In the previous 2 sessions you started discovering what binary security looks like.",source:"@site/docs/Binary Introduction/Assembly Language/Reading/introduction.md",sourceDirName:"Binary Introduction/Assembly Language/Reading",slug:"/Binary Introduction/Assembly Language/Reading/introduction",permalink:"/essentials-security/7/Binary Introduction/Assembly Language/Reading/introduction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Reading",permalink:"/essentials-security/7/Binary Introduction/Assembly Language/Reading/"},next:{title:"Registers",permalink:"/essentials-security/7/Binary Introduction/Assembly Language/Reading/registers"}},l={},u=[{value:"Reminders and Prerequisites",id:"reminders-and-prerequisites",level:2},{value:"Assembly",id:"assembly",level:2}],d={toc:u},c="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"In the previous 2 sessions you started discovering what binary security looks like.\n",(0,a.yg)("a",{parentName:"p",href:"../../Binary%20Analysis/"},"Last session")," you learnt two very powerful means of investigating and even reverse engineering executables: static and dynamic analysis.\nIn order to leverage them efficiently, you used Ghidra for static analysis.\nNow we'll introduce GDB for dynamic analysis.\nYou've most likely noticed that they are able to display the source code of the application.\nGDB can do so when said app was compiled with ",(0,a.yg)("em",{parentName:"p"},"debug symbols"),", while Ghidra does not even need debug symbols.\nIt infers the original C code from its compiled representation (learn more about how Ghidra does this by taking part in the ",(0,a.yg)("a",{parentName:"p",href:"https://security-summer-school.github.io/binary/static-analysis/#ida-and-ghidra"},"Binary Security track")," next year).\nThis representation is called ",(0,a.yg)("strong",{parentName:"p"},"assembly language"),".\nBoth Ghidra and GDB can display the program's code in assembly language.\nToday we will demystify this low-level language and learn to understand it."),(0,a.yg)("h2",{id:"reminders-and-prerequisites"},"Reminders and Prerequisites"),(0,a.yg)("p",null,"For this session, you need:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"a working knowledge of the C programming language and familiarity with pointers"),(0,a.yg)("li",{parentName:"ul"},"basic skills with Ghidra and GDB"),(0,a.yg)("li",{parentName:"ul"},"understand how an executable file is created, as described in the ",(0,a.yg)("a",{parentName:"li",href:"../../Application%20Lifetime"},"Application Lifetime session")),(0,a.yg)("li",{parentName:"ul"},"knowledge of the following means of representing data: ASCII, binary, hexadecimal.")),(0,a.yg)("p",null,"Check out the session on ",(0,a.yg)("a",{parentName:"p",href:"../../../Data/Data%20Representation/"},"Data Representation")," for a reminder."),(0,a.yg)("h2",{id:"assembly"},"Assembly"),(0,a.yg)("p",null,"Assembly is a low-level language used as a human-readable representation of instructions executed by the CPU.\nThere is a one-to-one mapping between the binary code executed by the CPU and Assembly.\nFew people write Assembly, but many people are required to read it:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"security engineers"),(0,a.yg)("li",{parentName:"ul"},"compiler / interpreter developers"),(0,a.yg)("li",{parentName:"ul"},"embedded developers"),(0,a.yg)("li",{parentName:"ul"},"operating systems developers")),(0,a.yg)("p",null,"Simply put, if a field is close to CPU it requires (some knowledge of) Assembly.\nSo let's learn this language!"))}y.isMDXComponent=!0}}]);