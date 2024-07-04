"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[5838],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var i=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||y[f]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(8168),r=(n(6540),n(5680));const a={},o="Inspecting Files",s={unversionedId:"Scratch Linux/System Exploration/Reading/file-inspection",id:"Scratch Linux/System Exploration/Reading/file-inspection",title:"Inspecting Files",description:"Now that we can find our way inside a file hierarchy, we need a means by which to inspect those files.",source:"@site/docs/Scratch Linux/System Exploration/Reading/file-inspection.md",sourceDirName:"Scratch Linux/System Exploration/Reading",slug:"/Scratch Linux/System Exploration/Reading/file-inspection",permalink:"/essentials-security/12/Scratch Linux/System Exploration/Reading/file-inspection",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Continuing Our Exploration",permalink:"/essentials-security/12/Scratch Linux/System Exploration/Reading/exploration-tools"},next:{title:"Summary",permalink:"/essentials-security/12/Scratch Linux/System Exploration/Reading/summary"}},l={},p=[{value:"<code>file</code>",id:"file",level:2},{value:"<code>strings</code>",id:"strings",level:2}],c={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,i.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"inspecting-files"},"Inspecting Files"),(0,r.yg)("p",null,"Now that we can find our way inside a file hierarchy, we need a means by which to inspect those files.\n",(0,r.yg)("inlineCode",{parentName:"p"},"grep")," works just fine, provided we're dealing with text files.\nBut what if we aren't?"),(0,r.yg)("p",null,"In this case, we'll need to take a sneak peak into some ",(0,r.yg)("em",{parentName:"p"},"binary analysis"),".\nWe'll get back to this subject starting from Session ",(0,r.yg)("a",{parentName:"p",href:"../data-representation"},"Data Representation"),"."),(0,r.yg)("h2",{id:"file"},(0,r.yg)("inlineCode",{parentName:"h2"},"file")),(0,r.yg)("p",null,"First, we want to get some more detailed information about what type of binary file we are dealing with specifically.\n",(0,r.yg)("inlineCode",{parentName:"p"},"ls")," already gives us information such as the file's name, size and permissions.\nThis is all fine, but this information is common to all files.\nWhether we're dealing with an image, or with an executable file ",(0,r.yg)("inlineCode",{parentName:"p"},"ls")," won't tell us."),(0,r.yg)("p",null,"But ",(0,r.yg)("inlineCode",{parentName:"p"},"file")," does.\n",(0,r.yg)("inlineCode",{parentName:"p"},"file")," works by reading a file's header (the first few bytes at the beginning of the file, which hold information about its format and type).\nThus, it is capable of outputting more precise information than ",(0,r.yg)("inlineCode",{parentName:"p"},"ls"),".\nLet's test it using one of today's challenges, ",(0,r.yg)("inlineCode",{parentName:"p"},"drills/tasks/not-your-doge/support/not-doge.pnm"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"root@kali:~/essentials-security/chapters/scratch-linux/system-exploration# file drills/tasks/not-your-doge/support/not-doge.pnm\ndrills/tasks/not-your-doge/support/not-doge.pnm: Netpbm image data, size = 500 x 590, rawbits, pixmap\n")),(0,r.yg)("h2",{id:"strings"},(0,r.yg)("inlineCode",{parentName:"h2"},"strings")),(0,r.yg)("p",null,"One of the most basic forms of binary analysis is to simply look for any human-readable string present in a binary file.\nFor this purpose, we'll use the ",(0,r.yg)("inlineCode",{parentName:"p"},"strings")," command."))}y.isMDXComponent=!0}}]);