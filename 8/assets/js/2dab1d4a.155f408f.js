"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[1894],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,d=p["".concat(l,".").concat(g)]||p[g]||y[g]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(8168),i=(n(6540),n(5680));const o={},s="(Re)Discovering the Browser",a={unversionedId:"Demystifying the Web/Re-Discovering the Browser/Reading/introduction",id:"Demystifying the Web/Re-Discovering the Browser/Reading/introduction",title:"(Re)Discovering the Browser",description:"Introduction",source:"@site/docs/Demystifying the Web/Re-Discovering the Browser/Reading/introduction.md",sourceDirName:"Demystifying the Web/Re-Discovering the Browser/Reading",slug:"/Demystifying the Web/Re-Discovering the Browser/Reading/introduction",permalink:"/essentials-security/8/Demystifying the Web/Re-Discovering the Browser/Reading/introduction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Reading",permalink:"/essentials-security/8/Demystifying the Web/Re-Discovering the Browser/Reading/"},next:{title:"AAA",permalink:"/essentials-security/8/Demystifying the Web/Re-Discovering the Browser/Reading/triple-a"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Reminders and Prerequisites",id:"reminders-and-prerequisites",level:2},{value:"Web Applications",id:"web-applications",level:2},{value:"Web Security",id:"web-security",level:2}],u={toc:c},p="wrapper";function y(e){let{components:t,...o}=e;return(0,i.yg)(p,(0,r.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"rediscovering-the-browser"},"(Re)Discovering the Browser"),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"In this session we'll zoom in on one of the application-level protocols mentioned in session ",(0,i.yg)("a",{parentName:"p",href:"../explaining-the-internet/"},"Explaining the Internet"),": HTTP.\nWe'll explain how the browser works and what information to draw from the most widely spoken language on the internet: HTML.\nIn addition, we'll also imitate the behaviour of our browser using two highly-versatile commands: ",(0,i.yg)("inlineCode",{parentName:"p"},"curl")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"wget"),"."),(0,i.yg)("h2",{id:"reminders-and-prerequisites"},"Reminders and Prerequisites"),(0,i.yg)("p",null,"For this session, you'll need:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"a high-level understanding of the TCP/IP stack explained in session ",(0,i.yg)("a",{parentName:"li",href:"../explaining-the-internet/"},"Explaining the Internet")),(0,i.yg)("li",{parentName:"ul"},"an internet connection"),(0,i.yg)("li",{parentName:"ul"},"a Firefox/Chrome browser"),(0,i.yg)("li",{parentName:"ul"},"a Linux command-line interface")),(0,i.yg)("h2",{id:"web-applications"},"Web Applications"),(0,i.yg)("p",null,"A typical web application is essentially a server.\nA server is a host connected to the internet that ",(0,i.yg)("strong",{parentName:"p"},"listens")," for connections from ",(0,i.yg)("strong",{parentName:"p"},"clients"),".\nA client is any application that interacts with the server.\nSo in short, the server waits for clients to come to it.\nThe clients are proactive.\nThey reach out to the server by initiating connections."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Web Application Model",src:n(1855).A})),(0,i.yg)("h2",{id:"web-security"},"Web Security"),(0,i.yg)("p",null,"There are 3 main subjects when it comes to web security:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"client-side security (i.e. browser security)"),(0,i.yg)("li",{parentName:"ul"},"server-side security"),(0,i.yg)("li",{parentName:"ul"},"communications security (i.e. the security of the data while it's travelling from client to server or vice-versa)")),(0,i.yg)("p",null,"In this track, we'll discuss about server-side security as attacking servers is by far the most rewarding out of the 3 options above.\nSince servers communicate with lots of clients, infecting one server can allow an attacker to steal data or even infect the server's clients as well."))}y.isMDXComponent=!0},1855:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/client-server-fb88293d7e725305508e14a181b78111.svg"}}]);