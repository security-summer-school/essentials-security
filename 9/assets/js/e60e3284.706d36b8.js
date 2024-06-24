"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[7008],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(8168),o=(n(6540),n(5680));const a={},i="Doge",s={unversionedId:"Scratch Linux/System Exploration/Guides/README",id:"Scratch Linux/System Exploration/Guides/README",title:"Doge",description:"The best way to showcase the strings command is to use it in order to find our first flag for today.",source:"@site/docs/Scratch Linux/System Exploration/Guides/README.md",sourceDirName:"Scratch Linux/System Exploration/Guides",slug:"/Scratch Linux/System Exploration/Guides/",permalink:"/essentials-security/9/Scratch Linux/System Exploration/Guides/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Guides",permalink:"/essentials-security/9/Scratch Linux/System Exploration/Guides/"},next:{title:"Drills",permalink:"/essentials-security/9/Scratch Linux/System Exploration/Drills/"}},l={},c=[],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"doge"},"Doge"),(0,o.yg)("p",null,"The best way to showcase the ",(0,o.yg)("inlineCode",{parentName:"p"},"strings")," command is to use it in order to find our first flag for today.\nHead to the ",(0,o.yg)("inlineCode",{parentName:"p"},"tasks/doge/support")," folder and take a look at the image you've been given."),(0,o.yg)("p",null,"Since this section is dedicated to the ",(0,o.yg)("inlineCode",{parentName:"p"},"strings")," command, we'll run this command on our ",(0,o.yg)("inlineCode",{parentName:"p"},"doge.jpg")," file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'root@kali:~/essentials/system-exploration/activities/doge/public# strings doge.jpg\nJFIF\n[...]\neP!_"\n')),(0,o.yg)("p",null,"So there are lots of human-readable strings in this image, but very few, if any, actually make any sense.\nIn order to filter them out, we'll use what we've learned today: ",(0,o.yg)("inlineCode",{parentName:"p"},"|")," + ",(0,o.yg)("inlineCode",{parentName:"p"},"grep"),".\nWe'll try to find the flag itself.\nMaybe we get lucky."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"root@kali:~/essentials/system-exploration/activities/doge/public# strings doge.jpg | grep SSS\n<there should be a flag here>\n")),(0,o.yg)("p",null,"That's how you use ",(0,o.yg)("inlineCode",{parentName:"p"},"strings"),": often in combination with some filtering mechanism, such as ",(0,o.yg)("inlineCode",{parentName:"p"},"grep"),"."),(0,o.yg)("p",null,"Another way to get the flag is to run the ",(0,o.yg)("inlineCode",{parentName:"p"},"file")," command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'root@kali:~/essentials/system-exploration# file activities/doge/public/doge.jpg\nactivities/doge/public/doge.jpg: JPEG image data, JFIF standard 1.01, aspect ratio, density 1x1, segment length 16, comment: "SSS{grep_your_strings}", progressive, precision 8, 500x500, components 3\n')),(0,o.yg)("p",null,"The flag is included in the file as a comment.\nImage comments are often used in CTFs in order to hide some more subtle information, such as hints.\nAlways remember to check them out."))}g.isMDXComponent=!0}}]);