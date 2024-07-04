"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[9527],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=i,d=p["".concat(l,".").concat(y)]||p[y]||m[y]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(8168),i=(n(6540),n(5680));const a={linkTitle:"11. Taming the Stack",type:"docs",weight:10},o="Taming the Stack",s={unversionedId:"Binary Introduction/Taming the Stack/README",id:"Binary Introduction/Taming the Stack/README",title:"Taming the Stack",description:"Table of Contents",source:"@site/docs/Binary Introduction/Taming the Stack/README.md",sourceDirName:"Binary Introduction/Taming the Stack",slug:"/Binary Introduction/Taming the Stack/",permalink:"/essentials-security/12/Binary Introduction/Taming the Stack/",draft:!1,tags:[],version:"current",frontMatter:{linkTitle:"11. Taming the Stack",type:"docs",weight:10},sidebar:"sidebar",previous:{title:"Taming the Stack",permalink:"/essentials-security/12/Binary Introduction/Taming the Stack/"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Reminders and Prerequisites",id:"reminders-and-prerequisites",level:2},{value:"Content Sections:",id:"content-sections",level:2},{value:"Summary",id:"summary",level:2},{value:"Activities",id:"activities",level:2},{value:"Further Reading",id:"further-reading",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"taming-the-stack"},"Taming the Stack"),(0,i.yg)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.yg)("p",null,"Use ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ekalinin/github-markdown-toc"},"gh-md-toc"),"."),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"Objectives and rationale for the current session."),(0,i.yg)("h2",{id:"reminders-and-prerequisites"},"Reminders and Prerequisites"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Information required for this section"),(0,i.yg)("li",{parentName:"ul"},"Commands / snippets that should be known, useful to copy-paste throughout the practical session")),(0,i.yg)("h2",{id:"content-sections"},"Content Sections:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Content split in sections, according to session specifics"),(0,i.yg)("li",{parentName:"ul"},"Demos will be part of the session presentation and will be referenced (snippets, images, links) in the content")),(0,i.yg)("h2",{id:"summary"},"Summary"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Sumamrizing session concepts"),(0,i.yg)("li",{parentName:"ul"},"Summarizing commands / snippets that are useful for tutorials, challenges (easy reference, copy-paste)")),(0,i.yg)("h2",{id:"activities"},"Activities"),(0,i.yg)("p",null,"Tasks for the students to solve. They may be of two types:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Tutorials")," - simpler tasks accompanied by more detailed, walkthrough-like explanations"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Challenges")," - the good stuff")),(0,i.yg)("h2",{id:"further-reading"},"Further Reading"),(0,i.yg)("p",null,"Any links or references to extra information."))}m.isMDXComponent=!0}}]);