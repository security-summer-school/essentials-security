"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[7769],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>h});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=c(t),g=i,h=y["".concat(l,".").concat(g)]||y[g]||p[g]||s;return t?r.createElement(h,a(a({ref:n},u),{},{components:t})):r.createElement(h,a({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[y]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9659:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(8168),i=(t(6540),t(5680));const s={},a="They See Me Running",o={unversionedId:"Demystifying the Web/Explaining the Internet/Drills/Tasks/They See Me Running/README",id:"Demystifying the Web/Explaining the Internet/Drills/Tasks/They See Me Running/README",title:"They See Me Running",description:"There's a quiz server running on the remote host.",source:"@site/docs/Demystifying the Web/Explaining the Internet/Drills/Tasks/They See Me Running/README.md",sourceDirName:"Demystifying the Web/Explaining the Internet/Drills/Tasks/They See Me Running",slug:"/Demystifying the Web/Explaining the Internet/Drills/Tasks/They See Me Running/",permalink:"/essentials-security/8/Demystifying the Web/Explaining the Internet/Drills/Tasks/They See Me Running/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Who Is 111?",permalink:"/essentials-security/8/Demystifying the Web/Explaining the Internet/Drills/Tasks/Who is 111/"},next:{title:"Unaccessible",permalink:"/essentials-security/8/Demystifying the Web/Explaining the Internet/Drills/Tasks/Unaccessible/"}},l={},c=[],u={toc:c},y="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(y,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"they-see-me-running"},"They See Me Running"),(0,i.yg)("p",null,"There's a quiz server running on the remote host.\nFind the port on which the server is listening.\nThen use ",(0,i.yg)("inlineCode",{parentName:"p"},"netcat")," (",(0,i.yg)("inlineCode",{parentName:"p"},"nc"),') to "talk" to the server and answer its questions.\nUpon a correct answer, the server will give you a flag.'),(0,i.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,i.yg)("a",{parentName:"p",href:"/essentials-security/8/Demystifying%20the%20Web/Explaining%20the%20Internet/Reading/summary"},"this")," reading material."))}p.isMDXComponent=!0}}]);