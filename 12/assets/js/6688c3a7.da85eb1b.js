"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[9769],{5680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},y=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},y),{},{components:n})):r.createElement(g,o({ref:t},y))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const i={},o="Layers on Layers on Layers",s={unversionedId:"Demystifying the Web/Explaining the Internet/Reading/layers",id:"Demystifying the Web/Explaining the Internet/Reading/layers",title:"Layers on Layers on Layers",description:"As we said previously, each of the layers of the TCP/IP model adds its own information to the data coming from the layer above.",source:"@site/docs/Demystifying the Web/Explaining the Internet/Reading/layers.md",sourceDirName:"Demystifying the Web/Explaining the Internet/Reading",slug:"/Demystifying the Web/Explaining the Internet/Reading/layers",permalink:"/essentials-security/12/Demystifying the Web/Explaining the Internet/Reading/layers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"A General Overview of the Internet",permalink:"/essentials-security/12/Demystifying the Web/Explaining the Internet/Reading/internet-overview"},next:{title:"Routers",permalink:"/essentials-security/12/Demystifying the Web/Explaining the Internet/Reading/routers"}},l={},c=[{value:"The Medium",id:"the-medium",level:2},{value:"The Link Layer",id:"the-link-layer",level:2},{value:"The Internet Layer",id:"the-internet-layer",level:2}],y={toc:c},h="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(h,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"layers-on-layers-on-layers"},"Layers on Layers on Layers"),(0,a.yg)("p",null,"As we said previously, each of the layers of the TCP/IP model adds its own information to the data coming from the layer above.\nThis encapsulation at each layer results in a new structure effectively wrapping up the original data.\nEach of these has a specific name depending on the layer that creates it:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"TCP/IP Layer"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Name of data block produced by the layer"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"Application"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Application data (e.g. HTTP, HTTPS)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"Transport"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Segments (TCP) or datagrams (UDP)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"Internet"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Packets (e.g IP packet)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"Link"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Frames (e.g. Ethernet frame)")))),(0,a.yg)("h2",{id:"the-medium"},"The Medium"),(0,a.yg)("p",null,"This layer is not mentioned in the above diagrams, but is worth talking a little bit about.\nThe medium represents the connection itself between the 2 stations.\nThis connection can be:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"wired"),": using a cable on which digital signals that encode the bits are sent"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"wireless"),": using high-frequency radio waves in order to send the same signals as before")),(0,a.yg)("h2",{id:"the-link-layer"},"The Link Layer"),(0,a.yg)("p",null,"This layer is also known as the ",(0,a.yg)("strong",{parentName:"p"},"Data Link")," layer."),(0,a.yg)("p",null,"It represents the underlying technology of any application.\nThe device on which the application is running may have a choice of many technologies to connect to a network, such as Ethernet, Wi-Fi, Bluetooth, 4G, 5G (",(0,a.yg)("em",{parentName:"p"},"tinfoil hat off"),") etc.\nWhere more than one link exists, the operating system of the device chooses the most appropriate link.\nFor instance, a mobile phone might be connected to both 4G and Wi-Fi.\nMost mobile phones prefer the Wi-Fi connection, but remain connected to 4G mobile data, which they use as backup.\nHowever, in some cases the application itself may dictate the choice of link, e.g. the mobile phone may decide to send traffic over Wi-Fi to avoid 4G data charges.\nOnce the link has been chosen, the appropriate link layer protocol is selected."),(0,a.yg)("p",null,"The most commonly used link layer protocol is ",(0,a.yg)("strong",{parentName:"p"},"Ethernet"),".\nWired or wireless Ethernet is used on most local area networks (LANs).\nThe packets from the internet layer are further encapsulated in Ethernet frames which are designed to be transported across a local network."),(0,a.yg)("p",null,"This layer needs a means to identify local stations.\nThis is where the ",(0,a.yg)("strong",{parentName:"p"},"Media Access Control (MAC) addresses")," come in.\nThey are 48 bits long and are unique to a specific ",(0,a.yg)("strong",{parentName:"p"},"Network Interface Card (NIC)"),".\nThe MAC address is physically tied to the hardware of the computer, which means it may also be referred to as the hardware or physical address."),(0,a.yg)("h2",{id:"the-internet-layer"},"The Internet Layer"),(0,a.yg)("p",null,"So each NIC has its own 48-bit MAC address.\nThis means there are ",(0,a.yg)("inlineCode",{parentName:"p"},"2^48")," unique MACs, which means ",(0,a.yg)("inlineCode",{parentName:"p"},"2^48")," unique NICs.\n",(0,a.yg)("inlineCode",{parentName:"p"},"2^48")," is a huge number, which is way beyond everything humanity has produced so far.\nSo, since we aren't likely to run out of MAC addresses any time soon, a host can be easily identified in the internet via its MAC, right?\nYes, it can."),(0,a.yg)("p",null,"There is one problem, though.\nSuppose the sender is in the US and the receiver is in India.\nThere's no way you can connect these two hosts using the same medium.\nYou need some intermediaries: ",(0,a.yg)("strong",{parentName:"p"},"routers"),"."))}p.isMDXComponent=!0}}]);