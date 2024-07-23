"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[3223],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A=r.createContext({}),l=function(e){var t=r.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(A.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,A=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,f=d["".concat(A,".").concat(g)]||d[g]||h[g]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var A in t)hasOwnProperty.call(t,A)&&(s[A]=t[A]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const o={},i="A General Overview of the Internet",s={unversionedId:"Demystifying the Web/Explaining the Internet/Reading/internet-overview",id:"Demystifying the Web/Explaining the Internet/Reading/internet-overview",title:"A General Overview of the Internet",description:"Before learning how to use and, later, how to hack the internet, let's first understand its building blocks.",source:"@site/docs/Demystifying the Web/Explaining the Internet/Reading/internet-overview.md",sourceDirName:"Demystifying the Web/Explaining the Internet/Reading",slug:"/Demystifying the Web/Explaining the Internet/Reading/internet-overview",permalink:"/essentials-security/15/Demystifying the Web/Explaining the Internet/Reading/internet-overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Explaining the Internet",permalink:"/essentials-security/15/Demystifying the Web/Explaining the Internet/Reading/introduction"},next:{title:"Layers on Layers on Layers",permalink:"/essentials-security/15/Demystifying the Web/Explaining the Internet/Reading/layers"}},A={},l=[{value:"Encapsulation",id:"encapsulation",level:2}],c={toc:l},d="wrapper";function h(e){let{components:t,...o}=e;return(0,a.yg)(d,(0,r.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"a-general-overview-of-the-internet"},"A General Overview of the Internet"),(0,a.yg)("p",null,"Before learning how to use and, later, how to hack the internet, let's first understand its building blocks.\nThe internet is all about sending data to and from an enormous amount of hosts."),(0,a.yg)("p",null,"In order to learn how all of this works, let's start from the example below.\nIt's generic enough for it to be relatable to most networking scenarios.\nYet, it encompasses everything we need to talk about."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Network Stack",src:n(2867).A,width:"730",height:"660"})),(0,a.yg)("p",null,"So what happens here is that the computer on the left is trying to ",(0,a.yg)("strong",{parentName:"p"},"send")," data to the one on the right.\nWe call the left computer ",(0,a.yg)("strong",{parentName:"p"},"the sender")," and the right one ",(0,a.yg)("strong",{parentName:"p"},"the receiver"),".\nThe two computers are connected via a ",(0,a.yg)("strong",{parentName:"p"},"medium")," on which the actual bits of data that make up the communication are sent.\nIn short, this medium is the connection between the aforementioned computers."),(0,a.yg)("p",null,"However, there are 4 boxes above the aforementioned medium.\nThese boxes are altogether known as ",(0,a.yg)("strong",{parentName:"p"},"The TCP/IP Network Stack"),".\nWe'll see what's with the ",(0,a.yg)("em",{parentName:"p"},"TCP/IP")," part soon enough.\nIndividually, each box is a ",(0,a.yg)("strong",{parentName:"p"},"layer"),".\nHere are the 4 layers of the TCP/IP stack:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"The TCP/IP Network Stack",src:n(3736).A,width:"700",height:"360"})),(0,a.yg)("p",null,"Each layer provides a well-defined set of requirements, which are fulfilled by ",(0,a.yg)("strong",{parentName:"p"},"protocols"),".\nA networking protocol is a set of rules that define the communication (data formatting and processing) between the same two levels of the network stack.\nFor example, there are protocols for the transport layer, others for the link layer and so on.\nWe'll talk about them in a bit."),(0,a.yg)("h2",{id:"encapsulation"},"Encapsulation"),(0,a.yg)("p",null,"Each layer takes care of a specific requirement of networking, as we'll discuss shortly.\nWhen sending data, each of the layers in the TCP/IP model accepts data from the layer above (or from the user in the case of the application layer), and adds additional information to the data that is necessary for that layer to carry out its task.\nIn some cases, the original data may be processed in some way before the additional information is added.\nFor example, it might be encrypted.\nThe layer then passes this data on to the layer below (or onto the transmission medium in the case of the link layer)."),(0,a.yg)("p",null,"The arrival of data from an upper layer may trigger additional separate messages to be sent to the receiving end.\nFor instance, if the data needed to be encrypted, the layer that carries out the encryption has to exchange initial setup messages with the receiving end to agree the encryption method and other data that we'll touch on in the session ",(0,a.yg)("a",{parentName:"p",href:"../data-security"},"Data Security"),", before the encrypted data can be transferred."),(0,a.yg)("p",null,"At the receiving end, the process happens in reverse: each layer accepts data from the layer below, inspects and removes the additional information added on by the corresponding layer in the sending end, before passing it up to the layer above."),(0,a.yg)("p",null,"Data is passed from a sender process to a receiver process by using the services of the layer below.\nIt is only the final layer that actually causes the data to be transmitted onto the transmission media (e.g. cable).\nBelow is a representation of this whole mechanism."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"General Workings of a Network Stack Layer",src:n(7733).A,width:"500",height:"320"})),(0,a.yg)("p",null,"This method of modular communication is called ",(0,a.yg)("strong",{parentName:"p"},"encapsulation"),".\nIt can be likened to taking the data from the layer above and placing it in an ",(0,a.yg)("strong",{parentName:"p"},"envelope"),", writing some additional information on the envelope, then passing the envelope to the layer below.\nAt the receiving end, a layer is passed an envelope from the layer below.\nIt looks at the data on the outside of the envelope to decide what to do with the contents of the envelope.\nIt then opens the envelope and passes the contained data up to the next level.\nThe reverse of encapsulation is ",(0,a.yg)("strong",{parentName:"p"},"decapsulation"),".\nAfter a message has passed through the network stack, it ends up in a ",(0,a.yg)("em",{parentName:"p"},"matryoshka")," of envelopes, one for each layer, each with its own, specific information."))}h.isMDXComponent=!0},7733:(e,t,n)=>{n.d(t,{A:()=>r});const r="data:image/png;base64,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"},2867:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/network_stack-7ec9712b880e622b7750b6703dac1146.png"},3736:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/tcp_ip_network_stack-1566e3ad915dc324385453eddd9b657c.svg"}}]);