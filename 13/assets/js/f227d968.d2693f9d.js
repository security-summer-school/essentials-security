"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[4605],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>f});var n=t(6540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),y=i,f=u["".concat(l,".").concat(y)]||u[y]||m[y]||a;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7513:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(8168),i=(t(6540),t(5680));const a={},o="Summary",s={unversionedId:"Scratch Linux/System Exploration/Reading/summary",id:"Scratch Linux/System Exploration/Reading/summary",title:"Summary",description:"Here are a few useful snippets from today's session:",source:"@site/docs/Scratch Linux/System Exploration/Reading/summary.md",sourceDirName:"Scratch Linux/System Exploration/Reading",slug:"/Scratch Linux/System Exploration/Reading/summary",permalink:"/essentials-security/13/Scratch Linux/System Exploration/Reading/summary",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Inspecting Files",permalink:"/essentials-security/13/Scratch Linux/System Exploration/Reading/file-inspection"},next:{title:"Further Reading",permalink:"/essentials-security/13/Scratch Linux/System Exploration/Reading/further-reading"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:r,...t}=e;return(0,i.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"summary"},"Summary"),(0,i.yg)("p",null,"Here are a few useful snippets from today's session:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},'grep -R "some string" /some/path'),': recursively looks for "some string" inside all the files in the ',(0,i.yg)("inlineCode",{parentName:"li"},"some/path")," directory;"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"find /some/path -name *flag* -type f"),": recursively searches for regular files in the ",(0,i.yg)("inlineCode",{parentName:"li"},"/some/path")," directory, whose names include the word ",(0,i.yg)("inlineCode",{parentName:"li"},"flag"),";"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"cat large_file | grep SSS"),": looks for the ",(0,i.yg)("inlineCode",{parentName:"li"},"SSS")," string in a large file, so you don't have to do this manually;"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"find some/path <some criteria> | xargs grep SSS"),": look for the ",(0,i.yg)("inlineCode",{parentName:"li"},"SSS")," string in each file that matches some specified criteria.")))}m.isMDXComponent=!0}}]);