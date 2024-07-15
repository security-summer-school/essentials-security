"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[5415],{5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>g});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=u(t),p=a,g=y["".concat(l,".").concat(p)]||y[p]||m[p]||i;return t?n.createElement(g,s(s({ref:r},c),{},{components:t})):n.createElement(g,s({ref:r},c))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[y]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8408:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(8168),a=(t(6540),t(5680));const i={},s="Summary",o={unversionedId:"Binary Introduction/Assembly Language/Reading/summary",id:"Binary Introduction/Assembly Language/Reading/summary",title:"Summary",description:"The key takeaways from this session are:",source:"@site/docs/Binary Introduction/Assembly Language/Reading/summary.md",sourceDirName:"Binary Introduction/Assembly Language/Reading",slug:"/Binary Introduction/Assembly Language/Reading/summary",permalink:"/essentials-security/8/Binary Introduction/Assembly Language/Reading/summary",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Reading Assembly",permalink:"/essentials-security/8/Binary Introduction/Assembly Language/Reading/reading-assembly"},next:{title:"Further Reading",permalink:"/essentials-security/8/Binary Introduction/Assembly Language/Reading/further-reading"}},l={},u=[],c={toc:u},y="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(y,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"summary"},"Summary"),(0,a.yg)("p",null,"The key takeaways from this session are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Assembly is a human-readable representation of instructions executed by the CPU"),(0,a.yg)("li",{parentName:"ul"},"It allows us to access CPU registers directly"),(0,a.yg)("li",{parentName:"ul"},"It uses a fixed set of instructions called ISA"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Memory")," is the RAM, ",(0,a.yg)("strong",{parentName:"li"},"storage")," is the disk"),(0,a.yg)("li",{parentName:"ul"},"Data is stored in memory using the little endian representation"),(0,a.yg)("li",{parentName:"ul"},"You can disassemble a program with ",(0,a.yg)("inlineCode",{parentName:"li"},"objdump")," like so:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~$ objdump -M intel -d <program> |less\n")))}m.isMDXComponent=!0}}]);