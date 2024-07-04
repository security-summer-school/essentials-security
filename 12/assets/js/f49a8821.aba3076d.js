"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[2976],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var i=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,g=h["".concat(l,".").concat(p)]||h[p]||d[p]||r;return n?i.createElement(g,s(s({ref:t},u),{},{components:n})):i.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[h]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(8168),o=(n(6540),n(5680));const r={},s="Cookies",a={unversionedId:"Demystifying the Web/Hacking the Web/Reading/cookies",id:"Demystifying the Web/Hacking the Web/Reading/cookies",title:"Cookies",description:"HTTP is a stateless protocol used to communicate over the internet.",source:"@site/docs/Demystifying the Web/Hacking the Web/Reading/cookies.md",sourceDirName:"Demystifying the Web/Hacking the Web/Reading",slug:"/Demystifying the Web/Hacking the Web/Reading/cookies",permalink:"/essentials-security/12/Demystifying the Web/Hacking the Web/Reading/cookies",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/essentials-security/12/Demystifying the Web/Hacking the Web/Reading/introduction"},next:{title:"Developer Tools",permalink:"/essentials-security/12/Demystifying the Web/Hacking the Web/Reading/developer-tools"}},l={},c=[{value:"What are Cookies?",id:"what-are-cookies",level:2},{value:"Cookies from the CLI",id:"cookies-from-the-cli",level:2}],u={toc:c},h="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(h,(0,i.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"cookies"},"Cookies"),(0,o.yg)("p",null,"HTTP is a stateless protocol used to communicate over the internet.\nThis means that a request is not aware of any of the previous ones and each request is executed independently.\nGiven its stateless nature, simple mechanisms such as HTTP cookies were created to overcome the issue."),(0,o.yg)("p",null,"An HTTP cookie (also called web cookie, internet cookie, browser cookie, or simply cookie) is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing.\nCookies were designed to be a reliable mechanism for websites to remember stateful information (such as items added in the shopping cart in an online store) or to record the user's browsing activity (including clicking particular buttons, logging in, or recording which pages were visited in the past).\nThey can also be used to remember pieces of information that the user previously entered into form fields, such as names, addresses, passwords, and credit card numbers."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Cookies",src:n(2474).A,width:"768",height:"428"})),(0,o.yg)("p",null,"They are like ID cards for websites.\nIf a browser sends a certain cookie to a web server, the server deduces the identity of said client from that cookie, without requiring authentication.\nThis can pose problems from a security perspective.\nFor more details, check the section about ",(0,o.yg)("a",{parentName:"p",href:"/essentials-security/12/Demystifying%20the%20Web/Hacking%20the%20Web/Reading/further-reading#cookie-theft--session-hijacking"},"cookie theft and session hijacking"),"."),(0,o.yg)("h2",{id:"what-are-cookies"},"What are Cookies?"),(0,o.yg)("p",null,"A cookie is a key-value pair stored in a text file on the user\u2019s computer.\nThis file can be found, for example, at the following path on a Linux system using Firefox:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"~/.mozilla/firefox/<some_random_characters>.default-release/cookies.sqlite\n")),(0,o.yg)("p",null,"As the filename implies, Firefox stores cookies in an SQLite database."),(0,o.yg)("p",null,"An example of cookies set for a website could be:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"username=admin")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"cookie_consent=1")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"theme=dark"))),(0,o.yg)("p",null,"The first cookie stores the username, so it can be displayed to the user without querying the database.\nThe second one stores the choice made by the user regarding their consent to receive cookies, so the application does not continue to show that annoying message every time.\nFinally, the third one stores which theme was selected (in this case, a dark theme)."),(0,o.yg)("p",null,"Once a cookie has been set, the browser will send the cookie information in all subsequent HTTP requests until the cookie is deleted.\nCookies also have various attributes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Domain")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"Path"),": define the scope of the cookies.\nThese attributes tell the browser what website they belong to."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Secure"),": defines that cookies should only be sent using secure channels such as HTTPS."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Expires"),": specifies when the cookie is to be deleted.\nAll cookies have a maximum lifespan, after which they must be erased by the browser, for security.\nThat why if you haven't logged on a website for a long time, you will be logged out.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Alternatively, the",(0,o.yg)("inlineCode",{parentName:"li"},"Max-Age")," attribute can be used to state the number of seconds after the cookie is to be deleted.")))),(0,o.yg)("h2",{id:"cookies-from-the-cli"},"Cookies from the CLI"),(0,o.yg)("p",null,"We're going to use our old friend ",(0,o.yg)("inlineCode",{parentName:"p"},"curl"),".\nTo set a cookie we simply use the ",(0,o.yg)("inlineCode",{parentName:"p"},"-b")," parameter like so:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# curl -b 'something=nothing' -b 'something_else=still_nothing' $URL\n")))}d.isMDXComponent=!0},2474:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/cookies-801ed1690e49b28263d3e2a616d3a8cc.png"}}]);