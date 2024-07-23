"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[8160],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),y=a,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const i={},o="Introduction",s={unversionedId:"Data/Data Security/Reading/introduction",id:"Data/Data Security/Reading/introduction",title:"Introduction",description:"Today's session is about how we secure data in computer systems using math and algorithms.",source:"@site/docs/Data/Data Security/Reading/introduction.md",sourceDirName:"Data/Data Security/Reading",slug:"/Data/Data Security/Reading/introduction",permalink:"/essentials-security/15/Data/Data Security/Reading/introduction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Reading",permalink:"/essentials-security/15/Data/Data Security/Reading/"},next:{title:"Exclusive Or (XOR)",permalink:"/essentials-security/15/Data/Data Security/Reading/xor-encrpytion"}},c={},l=[{value:"Reminders and Prerequisites",id:"reminders-and-prerequisites",level:2},{value:"Encryption",id:"encryption",level:2},{value:"Classical Ciphers",id:"classical-ciphers",level:2},{value:"Caesar Cipher",id:"caesar-cipher",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.yg)(u,(0,r.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Today's session is about how we secure data in computer systems using math and algorithms.\nWe will understand why we need cryptography and how we can use it correctly."),(0,a.yg)("h2",{id:"reminders-and-prerequisites"},"Reminders and Prerequisites"),(0,a.yg)("p",null,"For this session, you will require:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"general understanding of what data is, as discussed in the previous session ",(0,a.yg)("strong",{parentName:"li"},"Data Representation"),"."),(0,a.yg)("li",{parentName:"ul"},"high school level math")),(0,a.yg)("h2",{id:"encryption"},"Encryption"),(0,a.yg)("p",null,"The process of encoding information in a form that is unrecognisable by most human and can only be deciphered by a select few who posses the mean to do so is called encryption.\nGiven a piece of information, that from now on we'll call ",(0,a.yg)("strong",{parentName:"p"},"plaintext"),", we use the process of encryption to transform it to an unreadable form known as ",(0,a.yg)("strong",{parentName:"p"},"ciphertext"),".\nThe purpose of encryption is to allow only authorized parties to decipher a ciphertext back into the original plaintext.\nEncryption relies on using a pseudo-random mathematically-generated secret string of characters called ",(0,a.yg)("strong",{parentName:"p"},"cryptographic key")," in order to be able to easily decipher the ciphertext."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Encryption Example",src:n(6502).A})),(0,a.yg)("p",null,"We will talk more about cryptographic keys later in this session were we'll dive deeper into the concepts of symmetric and asymmetric encryption schemes."),(0,a.yg)("h2",{id:"classical-ciphers"},"Classical Ciphers"),(0,a.yg)("p",null,"Since Greek and Roman times people needed a way to exchange information safely.\nWithout complex mathematics and algorithms people found intuitive ways to codify their messages."),(0,a.yg)("p",null,"Classical ciphers were of two types: substitution and transposition of letters."),(0,a.yg)("h2",{id:"caesar-cipher"},"Caesar Cipher"),(0,a.yg)("p",null,"One of the most known and simple classical ciphers, named after the great Roman conqueror Julius Caesar, who also used it to communicate with his crush Cleopatra, works by using the alphabet substitution of a letter by a given shift."),(0,a.yg)("p",null,"For example if we set our shift to +5 we can see how the cipher works in the following drawing ",(0,a.yg)("img",{alt:"Caesar Cipher Example",src:n(1884).A})))}d.isMDXComponent=!0},1884:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/caesar-cipher-0997dee7997df125b59caf2bdf52a1d1.svg"},6502:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/encryption-86f9d7691daa75633b62858bb726cee7.svg"}}]);