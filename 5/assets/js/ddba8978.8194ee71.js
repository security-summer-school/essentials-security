"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[8784],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||y[f]||o;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4955:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(8168),a=(t(6540),t(5680));const o={},c="In Your Face",i={unversionedId:"Scratch Linux/Welcome to Linux/Drills/Tasks/In Your Face/README",id:"Scratch Linux/Welcome to Linux/Drills/Tasks/In Your Face/README",title:"In Your Face",description:"The flag is literally in your face.",source:"@site/docs/Scratch Linux/Welcome to Linux/Drills/Tasks/In Your Face/README.md",sourceDirName:"Scratch Linux/Welcome to Linux/Drills/Tasks/In Your Face",slug:"/Scratch Linux/Welcome to Linux/Drills/Tasks/In Your Face/",permalink:"/essentials-security/5/Scratch Linux/Welcome to Linux/Drills/Tasks/In Your Face/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/essentials-security/5/Scratch Linux/Welcome to Linux/Drills/Tasks/"},next:{title:"Did You Look Everywhere?",permalink:"/essentials-security/5/Scratch Linux/Welcome to Linux/Drills/Tasks/Did You Look Everywhere/"}},l={},s=[],u={toc:s},p="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"in-your-face"},"In Your Face"),(0,a.yg)("p",null,"The flag is literally in your face."),(0,a.yg)("p",null,"Connect to the specified virtual machine and use ",(0,a.yg)("inlineCode",{parentName:"p"},"ls")," to explore your surroundings:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"ctf@tutorial:~$ ls\nflag\n")),(0,a.yg)("p",null,"Now just use ",(0,a.yg)("inlineCode",{parentName:"p"},"cat")," to extract the content of the ",(0,a.yg)("inlineCode",{parentName:"p"},"flag")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"ctf@tutorial:~$ cat flag\n<your_flag_is_here>\n")))}y.isMDXComponent=!0}}]);