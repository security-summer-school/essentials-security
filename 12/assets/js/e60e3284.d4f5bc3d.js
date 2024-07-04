"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[7008],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(8168),i=(n(6540),n(5680));const o={},a="Doge",s={unversionedId:"Scratch Linux/System Exploration/Guides/README",id:"Scratch Linux/System Exploration/Guides/README",title:"Doge",description:"The best way to showcase the strings command is to use it in order to find our first flag for today.",source:"@site/docs/Scratch Linux/System Exploration/Guides/README.md",sourceDirName:"Scratch Linux/System Exploration/Guides",slug:"/Scratch Linux/System Exploration/Guides/",permalink:"/essentials-security/12/Scratch Linux/System Exploration/Guides/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Guides",permalink:"/essentials-security/12/Scratch Linux/System Exploration/Guides/"},next:{title:"Drills",permalink:"/essentials-security/12/Scratch Linux/System Exploration/Drills/"}},l={},c=[],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"doge"},"Doge"),(0,i.yg)("p",null,"The best way to showcase the ",(0,i.yg)("inlineCode",{parentName:"p"},"strings")," command is to use it in order to find our first flag for today.\nHead to the ",(0,i.yg)("inlineCode",{parentName:"p"},"guides/doge/support")," folder and take a look at the image you've been given."),(0,i.yg)("p",null,"Since this section is dedicated to the ",(0,i.yg)("inlineCode",{parentName:"p"},"strings")," command, we'll run this command on our ",(0,i.yg)("inlineCode",{parentName:"p"},"doge.jpg")," file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'root@kali:~/essentials-security/chapters/scratch-linux/system-exploration/guides/doge/public# strings doge.jpg\nJFIF\n[...]\neP!_"\n')),(0,i.yg)("p",null,"So there are lots of human-readable strings in this image, but very few, if any, actually make any sense.\nIn order to filter them out, we'll use what we've learned today: ",(0,i.yg)("inlineCode",{parentName:"p"},"|")," + ",(0,i.yg)("inlineCode",{parentName:"p"},"grep"),".\nWe'll try to find the flag itself.\nMaybe we get lucky."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"root@kali:~/essentials/system-exploration/activities/doge/public# strings doge.jpg | grep SSS\n<there should be a flag here>\n")),(0,i.yg)("p",null,"That's how you use ",(0,i.yg)("inlineCode",{parentName:"p"},"strings"),": often in combination with some filtering mechanism, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"grep"),"."),(0,i.yg)("p",null,"Another way to get the flag is to run the ",(0,i.yg)("inlineCode",{parentName:"p"},"file")," command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'root@kali:~/essentials/system-exploration# file activities/doge/public/doge.jpg\nactivities/doge/public/doge.jpg: JPEG image data, JFIF standard 1.01, aspect ratio, density 1x1, segment length 16, comment: "SSS{grep_your_strings}", progressive, precision 8, 500x500, components 3\n')),(0,i.yg)("p",null,"The flag is included in the file as a comment.\nImage comments are often used in CTFs in order to hide some more subtle information, such as hints.\nAlways remember to check them out."))}g.isMDXComponent=!0}}]);