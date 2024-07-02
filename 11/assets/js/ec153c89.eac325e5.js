"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[9478],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(n),h=o,u=g["".concat(l,".").concat(h)]||g[h]||y[h]||a;return n?r.createElement(u,s(s({ref:t},p),{},{components:n})):r.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[g]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(8168),o=(n(6540),n(5680));const a={},s="Browsers",i={unversionedId:"Demystifying the Web/Re-Discovering the Browser/Reading/browsers",id:"Demystifying the Web/Re-Discovering the Browser/Reading/browsers",title:"Browsers",description:"Browsers are the most common type of client for web servers.",source:"@site/docs/Demystifying the Web/Re-Discovering the Browser/Reading/browsers.md",sourceDirName:"Demystifying the Web/Re-Discovering the Browser/Reading",slug:"/Demystifying the Web/Re-Discovering the Browser/Reading/browsers",permalink:"/essentials-security/11/Demystifying the Web/Re-Discovering the Browser/Reading/browsers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"HyperText Transfer Protocol (HTTP)",permalink:"/essentials-security/11/Demystifying the Web/Re-Discovering the Browser/Reading/http"},next:{title:"Summary",permalink:"/essentials-security/11/Demystifying the Web/Re-Discovering the Browser/Reading/summary"}},l={},c=[{value:"HTML",id:"html",level:2},{value:"The Document Object Model (DOM)",id:"the-document-object-model-dom",level:3},{value:"&quot;Browsers&quot; From the CLI",id:"browsers-from-the-cli",level:2},{value:"<code>curl</code>",id:"curl",level:3},{value:"URL encodings",id:"url-encodings",level:3},{value:"<code>wget</code>",id:"wget",level:3}],p={toc:c},g="wrapper";function y(e){let{components:t,...a}=e;return(0,o.yg)(g,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"browsers"},"Browsers"),(0,o.yg)("p",null,"Browsers are the most common type of client for web servers.\nThey send requests to servers like the ones we outlined ",(0,o.yg)("a",{parentName:"p",href:"/essentials-security/11/Demystifying%20the%20Web/Re-Discovering%20the%20Browser/Reading/http#requests"},"before"),".\nServers respond with text files, images, audio files, all kinds of data.\nBrowsers also store those precious cookies that all websites are eager to give you.\nWe'll dive deeper into browsers ",(0,o.yg)("a",{parentName:"p",href:"../hacking-the-web/"},"next session"),"."),(0,o.yg)("p",null,"For now, press ",(0,o.yg)("inlineCode",{parentName:"p"},"Ctrl + u")," in your browser.\nIt should lead you to a more weird-looking ",(0,o.yg)("a",{parentName:"p",href:"view-source:https://security-summer-school.github.io/essentials/rediscovering-the-browser/"},"version of our website"),".\nThis is the HTML code that the browser ",(0,o.yg)("strong",{parentName:"p"},"renders"),' in order to display its contents in a more "eye-candy" fashion (insert images, code snippets, videos etc.).'),(0,o.yg)("h2",{id:"html"},"HTML"),(0,o.yg)("p",null,"As we've ",(0,o.yg)("a",{parentName:"p",href:"/essentials-security/11/Demystifying%20the%20Web/Re-Discovering%20the%20Browser/Reading/http#hypertext-transfer-protocol-http"},"already established"),", HTML stands for HyperText Markup Language.\nIt's a ",(0,o.yg)("strong",{parentName:"p"},"description language"),", in which the text content of a website is stored.\nIf you look at view-source:",(0,o.yg)("a",{parentName:"p",href:"https://security-summer-school.github.io/essentials/rediscovering-the-browser/"},"https://security-summer-school.github.io/essentials/rediscovering-the-browser/"),", you'll find that the sentences in the ",(0,o.yg)("inlineCode",{parentName:"p"},".html")," file are the same as those on ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/security-summer-school/essentials/blob/master/rediscovering-the-browser/index.md"},"GitHub"),".\n",(0,o.yg)("inlineCode",{parentName:"p"},"security-summer-school.github.io")," is built using ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/google/docsy-example"},"Docsy"),".\nAmong many other things, Docsy can convert Markdown files to HTML.\nThis is how we write these sessions in Markdown (another markup language), but you see them in HTML."),(0,o.yg)("h3",{id:"the-document-object-model-dom"},"The Document Object Model (DOM)"),(0,o.yg)("p",null,"Every HTML file is organised hierarchically by what's called a ",(0,o.yg)("strong",{parentName:"p"},"Document Object Model (DOM)"),".\nIt connects web pages to scripts or programming languages by representing the structure of a document, such as the HTML representing a web page, in memory."),(0,o.yg)("p",null,"The DOM represents a document as a tree data structure.\nEach branch of the tree ends in a node, and each node contains objects.\nDOM methods allow programmatic access to the tree.\nWith them, you can change the document's structure, style, or content."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"DOM",src:n(7143).A,width:"582",height:"388"})),(0,o.yg)("p",null,"Every element within your document is an object: ",(0,o.yg)("inlineCode",{parentName:"p"},"\\<head\\>")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"\\<body\\>")," tags etc.\nDOMs are flexible and allow easy introduction of nodes, as all objects are nodes.\nThe DOM can also be used to make changes to the contents of the HTML document, such as creating animations or validating input etc."),(0,o.yg)("p",null,"DOMs are outside the scope of the Security Essentials track.\nTo get a better understanding of DOMs, join the ",(0,o.yg)("a",{parentName:"p",href:"https://security-summer-school.github.io/web"},"Web Security track")," next year."),(0,o.yg)("h2",{id:"browsers-from-the-cli"},'"Browsers" From the CLI'),(0,o.yg)("p",null,"The browser is all nice and good-looking, but is not so easily configurable.\nIt's a bit difficult to add your own headers to a request form a browser, for example.\nAnd good luck writing a script that launches subsequent, interdependent browser requests.\nWhen it comes to hacking and crafting very specific HTTP requests, we need to move away from the browser and into the CLI."),(0,o.yg)("h3",{id:"curl"},(0,o.yg)("inlineCode",{parentName:"h3"},"curl")),(0,o.yg)("p",null,"The most versatile command-line tool for creating and sending HTTP requests is by far ",(0,o.yg)("inlineCode",{parentName:"p"},"curl"),".\nIt's syntax is at firs really simple:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# curl <URL>\n")),(0,o.yg)("p",null,"To see the full request and response, use the ",(0,o.yg)("inlineCode",{parentName:"p"},"-v")," parameter:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},'root@kali:~# curl -v example.com\n*   Trying 93.184.216.34:80...\n* TCP_NODELAY set\n* Connected to example.com (93.184.216.34) port 80 (#0)\n> GET / HTTP/1.1\n> Host: example.com\n> User-Agent: curl/7.68.0\n> Accept: */*\n>\n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< Age: 441067\n< Cache-Control: max-age=604800\n< Content-Type: text/html; charset=UTF-8\n< Date: Sat, 02 Jul 2022 18:33:49 GMT\n< Etag: "3147526947+ident"\n< Expires: Sat, 09 Jul 2022 18:33:49 GMT\n< Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT\n< Server: ECS (dcb/7EEA)\n< Vary: Accept-Encoding\n< X-Cache: HIT\n< Content-Length: 1256\n<\n<!doctype html>\n[...]\n')),(0,o.yg)("p",null,"The request is very simple:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},"GET / HTTP/1.1\nHost: example.com\nUser-Agent: curl/7.68.0\nAccept: */*\n")),(0,o.yg)("p",null,"It requests the root of the website, that the client (",(0,o.yg)("inlineCode",{parentName:"p"},"User-Agent"),") is ",(0,o.yg)("inlineCode",{parentName:"p"},"curl")," version ",(0,o.yg)("inlineCode",{parentName:"p"},"7.68.0"),", and that it accepts any type of response (",(0,o.yg)("inlineCode",{parentName:"p"},"Accept"),")."),(0,o.yg)("p",null,"The server at ",(0,o.yg)("inlineCode",{parentName:"p"},"example.com")," answers with the code 200, meaning the request was handled smoothly.\nIt specifies that the delivered content is an HTML file (",(0,o.yg)("inlineCode",{parentName:"p"},"Content-Type: text/html"),"), with UTF-8 encoding (",(0,o.yg)("inlineCode",{parentName:"p"},"charset=UTF-8"),").\nIf you don't know what UTF-8 is yet, it's a convention on how to encode characters.\nWe will explain it along with other encodings in session ",(0,o.yg)("a",{parentName:"p",href:"../data-representation/"},"Data Representation"),".\nNotice that since the response does contain a body (i. e. the HTML contents of ",(0,o.yg)("inlineCode",{parentName:"p"},"example.com"),"), the ",(0,o.yg)("inlineCode",{parentName:"p"},"Content-Length")," field is also present and set to the size of the HTML file."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"curl"),"'s versatility comes from the fact that we can enrich this request by specifying ",(0,o.yg)("a",{parentName:"p",href:"/essentials-security/11/Demystifying%20the%20Web/Re-Discovering%20the%20Browser/Reading/http#query-parameters"},"query parameters")," and even a ",(0,o.yg)("a",{parentName:"p",href:"/essentials-security/11/Demystifying%20the%20Web/Re-Discovering%20the%20Browser/Reading/http#request-body"},"body"),"."),(0,o.yg)("h3",{id:"url-encodings"},"URL encodings"),(0,o.yg)("p",null,"Head over to your browser and search for ",(0,o.yg)("inlineCode",{parentName:"p"},"security; summer ? school"),".\nTake a look at the link in the browser:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"https://www.google.com/search?client=firefox-b-lm&q=security%3B+summer+%3F+school\n")),(0,o.yg)("p",null,"To recap, its query parameters are:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"client=firefox-b-lm")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"q=security%3B+summer+%3F+school"))),(0,o.yg)("p",null,"The first parameter seems reasonable.\nBut what's with the weird symbols in the value of ",(0,o.yg)("inlineCode",{parentName:"p"},"q"),"?\nThose symbols are the ",(0,o.yg)("strong",{parentName:"p"},"URL encodings")," of ",(0,o.yg)("inlineCode",{parentName:"p"},";")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"?"),".\nIn order for the value of ",(0,o.yg)("inlineCode",{parentName:"p"},"q")," not to contain some specific characters used by URLs (such as ",(0,o.yg)("inlineCode",{parentName:"p"},"?")," to separate the path from the query parameters), those characters are ",(0,o.yg)("strong",{parentName:"p"},"encoded")," differently in the URL.\nIt's something similar to escaping characters in bash."),(0,o.yg)("p",null,"Specifically, in the URL below:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"+")," is the URL encoding for space"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"%3B")," is the URL encoding for ",(0,o.yg)("inlineCode",{parentName:"li"},";")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"%3F")," is the URL encoding for ",(0,o.yg)("inlineCode",{parentName:"li"},"?"))),(0,o.yg)("h3",{id:"wget"},(0,o.yg)("inlineCode",{parentName:"h3"},"wget")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Do not confuse it with ",(0,o.yg)("inlineCode",{parentName:"strong"},"curl"),"!"),"\nIts ",(0,o.yg)("a",{parentName:"p",href:"https://linux.die.net/man/1/wget"},"man page")," clearly states:"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("inlineCode",{parentName:"p"},"wget")," - The non-interactive network downloader.")),(0,o.yg)("p",null,"In other words, while ",(0,o.yg)("inlineCode",{parentName:"p"},"curl")," is an HTTP client which, obviously, receives HTTP responses, ",(0,o.yg)("inlineCode",{parentName:"p"},"wget")," is used for ",(0,o.yg)("strong",{parentName:"p"},"downloading files")," and nothing else."),(0,o.yg)("p",null,"Let's try it out:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# wget example.com\n[...]\nindex.html        100%[===================>]   1,23K  --.-KB/s    in 0s\n\nroot@kali:~# cat index.html # Now we have the file locally.\n<!doctype html>\n<html>\n<head>\n    <title>Example Domain</title>\n[...]\n")))}y.isMDXComponent=!0},7143:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/dom-d4c276b758aecfbba3cfe8ca188e88ce.png"}}]);