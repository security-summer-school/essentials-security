"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[8451],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>u});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,u=p["".concat(l,".").concat(m)]||p[m]||y[m]||i;return t?a.createElement(u,s(s({ref:n},d),{},{components:t})):a.createElement(u,s({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(8168),r=(t(6540),t(5680));const i={},s="Further Reading",o={unversionedId:"Binary Introduction/Assembly Language/Reading/further-reading",id:"Binary Introduction/Assembly Language/Reading/further-reading",title:"Further Reading",description:"The Whole ISA",source:"@site/docs/Binary Introduction/Assembly Language/Reading/further-reading.md",sourceDirName:"Binary Introduction/Assembly Language/Reading",slug:"/Binary Introduction/Assembly Language/Reading/further-reading",permalink:"/essentials-security/12/Binary Introduction/Assembly Language/Reading/further-reading",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Summary",permalink:"/essentials-security/12/Binary Introduction/Assembly Language/Reading/summary"},next:{title:"Drills",permalink:"/essentials-security/12/Binary Introduction/Assembly Language/Drills/"}},l={},c=[{value:"The Whole ISA",id:"the-whole-isa",level:2},{value:"Caches",id:"caches",level:2},{value:"Assembly Syntaxes",id:"assembly-syntaxes",level:2},{value:"<code>lea</code>",id:"lea",level:2}],d={toc:c},p="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"further-reading"},"Further Reading"),(0,r.yg)("h2",{id:"the-whole-isa"},"The Whole ISA"),(0,r.yg)("p",null,"If you want to search for an instruction, use ",(0,r.yg)("a",{parentName:"p",href:"https://www.felixcloutier.com/x86/"},"this")," website.\nEach instruction has its own table with all possible operands and what they do.\nNote that ",(0,r.yg)("inlineCode",{parentName:"p"},"imm8"),' means "8-bit immediate" (an 8-byte regular number), ',(0,r.yg)("inlineCode",{parentName:"p"},"imm64")," means a 64-bit immediate and so on.\nSimilarly, ",(0,r.yg)("inlineCode",{parentName:"p"},"reg32")," means a 32-bit register and ",(0,r.yg)("inlineCode",{parentName:"p"},"m16")," for example means a 16-bit (2-byte) memory area.\nYou'll see ",(0,r.yg)("inlineCode",{parentName:"p"},"reg"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"imm")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"m")," combined with ",(0,r.yg)("inlineCode",{parentName:"p"},"8"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"16"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"32")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"64")," depending on what each instruction does."),(0,r.yg)("h2",{id:"caches"},"Caches"),(0,r.yg)("p",null,"Many programs access the same addresses repeatedly over a short period of time.\nTake a short 1000-step loop.\nIt uses the same code 1000 times.\nIt would be inefficient for the CPU to read the instructions directly from the RAM 1000 times.\nFor this reason, there is an intermediary level of memory between the RAM and the registers, called ",(0,r.yg)("strong",{parentName:"p"},"the cache"),"."),(0,r.yg)("p",null,"As their name implies, caches store the contents of some memory addresses that are frequently requested by the CPU.\nWe say ",(0,r.yg)("em",{parentName:"p"},"caches"),", in plural because they are laid out hierarchically, each lower level being faster and smaller than the ones below.\nUsually, CPUs have 3 levels of cache memory.\nYou can query their sizes with the ",(0,r.yg)("inlineCode",{parentName:"p"},"lscpu")," command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~$ lscpu\n[...]\nL1d cache:                       128 KiB\nL1i cache:                       128 KiB\nL2 cache:                        1 MiB\nL3 cache:                        6 MiB\n[...]\n")),(0,r.yg)("p",null,"Notice the L1 (level 1) cache is split between a data cache (",(0,r.yg)("inlineCode",{parentName:"p"},"L1d"),") and an instruction cache ",(0,r.yg)("inlineCode",{parentName:"p"},"L1i"),".\nThe other caches do not store data and instructions separately."),(0,r.yg)("h2",{id:"assembly-syntaxes"},"Assembly Syntaxes"),(0,r.yg)("p",null,"This session we've used the Intel syntax for writing and displaying Assembly.\nWe did so because it's more straightforward than its alternative: the AT&T syntax.\nYou can find the differences on ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/X86_assembly_language#Syntax"},"Wikipedia"),"."),(0,r.yg)("h2",{id:"lea"},(0,r.yg)("inlineCode",{parentName:"h2"},"lea")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"lea"),' stands for "Load Effective Address".\nIts syntax is:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-asm"},"lea dest, [address]\n")),(0,r.yg)("p",null,"It loads ",(0,r.yg)("inlineCode",{parentName:"p"},"address")," into the ",(0,r.yg)("inlineCode",{parentName:"p"},"dest")," register (it can only be a register).\nWhat's interesting about it is that it also uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"[...]")," syntax, but ",(0,r.yg)("strong",{parentName:"p"},"does not dereference the address"),".\nIn the snippet below, ",(0,r.yg)("inlineCode",{parentName:"p"},"0xdeadbeef")," is simply copied to ",(0,r.yg)("inlineCode",{parentName:"p"},"rax"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-asm"},"lea rax, [0xdeadbeef]\n")),(0,r.yg)("p",null,"Its true power comes from the fact that it can also compute an address.\nFor example, the code below will first compute the address given by ",(0,r.yg)("inlineCode",{parentName:"p"},"rdi + rcx * 8 + 7")," and then write this address into ",(0,r.yg)("inlineCode",{parentName:"p"},"rax"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-asm"},"lea rax, [rdi + rcx * 8 + 7]\n")))}y.isMDXComponent=!0}}]);