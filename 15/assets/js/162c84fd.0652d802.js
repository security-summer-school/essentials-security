"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[4849],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),y=a,m=c["".concat(l,".").concat(y)]||c[y]||g[y]||s;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=y;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},3242:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(8168),a=(t(6540),t(5680));const s={},o="Further Reading",i={unversionedId:"Scratch Linux/System Exploration/Reading/further-reading",id:"Scratch Linux/System Exploration/Reading/further-reading",title:"Further Reading",description:"Forensics",source:"@site/docs/Scratch Linux/System Exploration/Reading/further-reading.md",sourceDirName:"Scratch Linux/System Exploration/Reading",slug:"/Scratch Linux/System Exploration/Reading/further-reading",permalink:"/essentials-security/15/Scratch Linux/System Exploration/Reading/further-reading",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Summary",permalink:"/essentials-security/15/Scratch Linux/System Exploration/Reading/summary"},next:{title:"Guides",permalink:"/essentials-security/15/Scratch Linux/System Exploration/Guides/"}},l={},p=[{value:"Forensics",id:"forensics",level:2},{value:"Regular Expressions",id:"regular-expressions",level:3}],u={toc:p},c="wrapper";function g(e){let{components:r,...t}=e;return(0,a.yg)(c,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"further-reading"},"Further Reading"),(0,a.yg)("h2",{id:"forensics"},"Forensics"),(0,a.yg)("p",null,"The greater CTF topic of today has been ",(0,a.yg)("strong",{parentName:"p"},"forensics"),".\nIt's probably one of the vastest and most diverse topics out there, because it doesn't really fit into many patterns.\nYou can read more about forensics ",(0,a.yg)("a",{parentName:"p",href:"https://trailofbits.github.io/ctf/forensics/"},"here"),"."),(0,a.yg)("h3",{id:"regular-expressions"},"Regular Expressions"),(0,a.yg)("p",null,"Regular expressions are like globs on steroids.\nThey provide a huge step-up in terms of expressiveness.\nAs expected, they're also more difficult to understand."),(0,a.yg)("p",null,"By default, ",(0,a.yg)("inlineCode",{parentName:"p"},"grep")," actually matches regular expressions, not just raw strings.\n",(0,a.yg)("inlineCode",{parentName:"p"},"find")," can also look fore files matching regular expressions, by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"-regex")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"-regextype")," parameters (yes, there are multiple regular expression syntaxes)."),(0,a.yg)("p",null,"A good point from which to start learning how to use regular expressions are these resources:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"https://regexone.com/"))),(0,a.yg)("p",null,"For testing your regular expressions before using them, ",(0,a.yg)("a",{parentName:"p",href:"https://regex101.com/"},"this website")," is king."),(0,a.yg)("p",null,"Once you've got the hang of regular expressions, test your skills in the ",(0,a.yg)("a",{parentName:"p",href:"https://regexcrossword.com/"},"regular expression Crossword"),".\nYes, such a thing really does exist and it's as crazy as you might think.\nGive it a try!"),(0,a.yg)("p",null,"Moreover, most programming languages have libraries for regular expressions.\nPython can do so, too.\nTake a look at its ",(0,a.yg)("a",{parentName:"p",href:"https://docs.python.org/3/library/re.html"},"regular expression module"),"."))}g.isMDXComponent=!0}}]);