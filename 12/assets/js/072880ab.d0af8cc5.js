"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[7771],{5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>m});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,m=p["".concat(l,".").concat(d)]||p[d]||y[d]||o;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3510:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(8168),a=(t(6540),t(5680));const o={},s="Summary",i={unversionedId:"Demystifying the Web/Re-Discovering the Browser/Reading/summary",id:"Demystifying the Web/Re-Discovering the Browser/Reading/summary",title:"Summary",description:"HTTP is the most widely used protocol for passing data on the internet.",source:"@site/docs/Demystifying the Web/Re-Discovering the Browser/Reading/summary.md",sourceDirName:"Demystifying the Web/Re-Discovering the Browser/Reading",slug:"/Demystifying the Web/Re-Discovering the Browser/Reading/summary",permalink:"/essentials-security/12/Demystifying the Web/Re-Discovering the Browser/Reading/summary",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Browsers",permalink:"/essentials-security/12/Demystifying the Web/Re-Discovering the Browser/Reading/browsers"},next:{title:"Further Reading",permalink:"/essentials-security/12/Demystifying the Web/Re-Discovering the Browser/Reading/further-reading"}},l={},u=[],c={toc:u},p="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"summary"},"Summary"),(0,a.yg)("p",null,"HTTP is the most widely used protocol for passing data on the internet.\nIt is a stateless protocol, meaning that each request is independent from any other request, even for the same resource.\nIt allows a few specific methods:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"- `GET` - request data from the server\n- `POST` - upload data to the  server\n- `PUT` - update data on the server\n- `DELETE` - remove data from the server\n")),(0,a.yg)("p",null,"Each request is like a function call across the web and can receive parameters.\nIn a URL, they are separated from the path by ",(0,a.yg)("inlineCode",{parentName:"p"},"?")," and from each other by ",(0,a.yg)("inlineCode",{parentName:"p"},"&"),".\nThey are key-value pairs such as ",(0,a.yg)("inlineCode",{parentName:"p"},"?user=hacker&role=god"),"."),(0,a.yg)("p",null,"The two commands we've added to our arsenal today are ",(0,a.yg)("inlineCode",{parentName:"p"},"curl")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"wget"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"curl"),": create and send HTTP requests.")),(0,a.yg)("p",null,"Here are some of its most useful parameters:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"- `-v`: **verbose** - display the request and response headers.\n- `-d`: **data** - specify the body of a request (usually a `POST` request) and the query parameters\n    - `-G`: **get** - allows sending a body in a `GET` request\n- `-X <method>`: use another HTTP method than the default `GET`\n- `-L`: **follow redirects** - issue another request to the redirected URL the when receiving a `3XX` response.\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"wget"),": download files")))}y.isMDXComponent=!0}}]);