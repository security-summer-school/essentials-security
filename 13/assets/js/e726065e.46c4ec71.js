"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[4779],{5680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>h});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=u(n),g=i,h=y["".concat(c,".").concat(g)]||y[g]||p[g]||o;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[y]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(8168),i=(n(6540),n(5680));const o={},a="AAA",s={unversionedId:"Demystifying the Web/Re-Discovering the Browser/Reading/triple-a",id:"Demystifying the Web/Re-Discovering the Browser/Reading/triple-a",title:"AAA",description:"We say there are 3 A's when it comes to web security (and not only web security):",source:"@site/docs/Demystifying the Web/Re-Discovering the Browser/Reading/triple-a.md",sourceDirName:"Demystifying the Web/Re-Discovering the Browser/Reading",slug:"/Demystifying the Web/Re-Discovering the Browser/Reading/triple-a",permalink:"/essentials-security/13/Demystifying the Web/Re-Discovering the Browser/Reading/triple-a",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"(Re)Discovering the Browser",permalink:"/essentials-security/13/Demystifying the Web/Re-Discovering the Browser/Reading/introduction"},next:{title:"HyperText Transfer Protocol (HTTP)",permalink:"/essentials-security/13/Demystifying the Web/Re-Discovering the Browser/Reading/http"}},c={},u=[{value:"Authentication",id:"authentication",level:2},{value:"Authorisation",id:"authorisation",level:2},{value:"Accounting",id:"accounting",level:2}],l={toc:u},y="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(y,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"aaa"},"AAA"),(0,i.yg)("p",null,"We say there are 3 A's when it comes to web security (and not only web security):"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Authentication"),(0,i.yg)("li",{parentName:"ul"},"Authorisation"),(0,i.yg)("li",{parentName:"ul"},"Accounting")),(0,i.yg)("h2",{id:"authentication"},"Authentication"),(0,i.yg)("p",null,"Authorisation refers to verifying the client's identity.\nIt's usually done via requiring the client to submit some credentials such as username and password.\nSimply put, authentication takes place whenever you are required to ",(0,i.yg)("strong",{parentName:"p"},"login")," to a website.\nThe purpose of authentication is obvious: to prevent attackers from ",(0,i.yg)("strong",{parentName:"p"},"impersonating")," legitimate users."),(0,i.yg)("p",null,'So authentication means answering the question: "Who are you?"\nAuthentication on its own is not ',(0,i.yg)("em",{parentName:"p"},"that")," powerful.\nIt might allow the server admin to specify which users are allowed to login to a system, but not ",(0,i.yg)("em",{parentName:"p"},"what they can do")," once they're logged on that system."),(0,i.yg)("h2",{id:"authorisation"},"Authorisation"),(0,i.yg)("p",null,"In order to have a finer access control, such as specifying that a given user may read some files from the server while others can't, authentication is not enough.\nWe need a means to ",(0,i.yg)("strong",{parentName:"p"},"enforce"),' some security policies like, for example, UNIX-like permissions on the file system.\nAuthentication helps us identify the user, but we need another "A", called ',(0,i.yg)("strong",{parentName:"p"},"Authorisation")," in order to decide what that user may or may not do."),(0,i.yg)("p",null,'In short, authorisation answers the question: "What can you do?".\nIt means defining a set of ',(0,i.yg)("strong",{parentName:"p"},"policies")," by which to grant users various kinds of access to different resources.\nYou can read about the 3 large types of access control types, from which policies derive, ",(0,i.yg)("a",{parentName:"p",href:"/essentials-security/13/Demystifying%20the%20Web/Re-Discovering%20the%20Browser/Reading/further-reading#access-control-types"},"at the end of this session"),"."),(0,i.yg)("h2",{id:"accounting"},"Accounting"),(0,i.yg)("p",null,"Accounting refers to logging as a means to audit a system.\nLogs provide a chronological view of the events that took place on a system / web server.\nUsing them we can trace and understand attackers better and protect from them in the future."))}p.isMDXComponent=!0}}]);