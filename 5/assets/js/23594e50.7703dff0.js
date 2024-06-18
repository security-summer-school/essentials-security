"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[4254],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=h(n),d=i,u=p["".concat(l,".").concat(d)]||p[d]||g[d]||o;return n?a.createElement(u,s(s({ref:t},c),{},{components:n})):a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:i,s[1]=r;for(var h=2;h<o;h++)s[h]=n[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var a=n(8168),i=(n(6540),n(5680));const o={linkTitle:"05. Hacking the Web",type:"docs",weight:10},s="Introduction",r={unversionedId:"Demystifying the Web/Hacking the Web/README",id:"Demystifying the Web/Hacking the Web/README",title:"Introduction",description:"Last session we learned how browsers work, what HTTP and HTML are and how to use curl and wget to imitate a browser.",source:"@site/docs/Demystifying the Web/Hacking the Web/README.md",sourceDirName:"Demystifying the Web/Hacking the Web",slug:"/Demystifying the Web/Hacking the Web/",permalink:"/essentials-security/Demystifying the Web/Hacking the Web/",draft:!1,tags:[],version:"current",frontMatter:{linkTitle:"05. Hacking the Web",type:"docs",weight:10},sidebar:"sidebar",previous:{title:"Hacking the Web",permalink:"/essentials-security/Demystifying the Web/Hacking the Web/"},next:{title:"Data",permalink:"/essentials-security/Data/"}},l={},h=[{value:"What are Cookies?",id:"what-are-cookies",level:2},{value:"Developer Tools",id:"developer-tools",level:2},{value:"Inspector",id:"inspector",level:3},{value:"Console",id:"console",level:3},{value:"Debugger",id:"debugger",level:3},{value:"Sources",id:"sources",level:4},{value:"Network",id:"network",level:3},{value:"Storage",id:"storage",level:3},{value:"Cookies from the CLI",id:"cookies-from-the-cli",level:2},{value:"Sessions in the CLI",id:"sessions-in-the-cli",level:3},{value:"Sessions in Python",id:"sessions-in-python",level:3},{value:"DIRectory Buster (DIRB)",id:"directory-buster-dirb",level:2},{value:"Tutorial - Chef Hacky McHack",id:"tutorial---chef-hacky-mchack",level:2},{value:"Virgin: From the Browser",id:"virgin-from-the-browser",level:3},{value:"Chad v1: From the CLI",id:"chad-v1-from-the-cli",level:3},{value:"Chad v2: From Python",id:"chad-v2-from-python",level:3},{value:"Challenge: Beep Beep Boop",id:"challenge-beep-beep-boop",level:3},{value:"Challenge: Colours",id:"challenge-colours",level:3},{value:"Challenge: Great Names",id:"challenge-great-names",level:3},{value:"Challenge: Nobody Loves Me",id:"challenge-nobody-loves-me",level:3},{value:"Challenge: One-by-One",id:"challenge-one-by-one",level:3},{value:"Challenge: Produce-Consume",id:"challenge-produce-consume",level:3},{value:"Challenge: Traverse the Universe",id:"challenge-traverse-the-universe",level:3},{value:"Cookie Theft / Session Hijacking",id:"cookie-theft--session-hijacking",level:2}],c={toc:h},p="wrapper";function g(e){let{components:t,...o}=e;return(0,i.yg)(p,(0,a.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"../rediscovering-the-browser/"},"Last session")," we learned how browsers work, what HTTP and HTML are and how to use ",(0,i.yg)("inlineCode",{parentName:"p"},"curl")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"wget")," to imitate a browser.\nToday we'll dive deeper into the inner workings of browsers.\nSpecifically, we will:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"learn how to use the developer tools to inspect the requests it makes"),(0,i.yg)("li",{parentName:"ul"},"learn what cookies are"),(0,i.yg)("li",{parentName:"ul"},"learn how to use them from the command line"),(0,i.yg)("li",{parentName:"ul"},"learn how to write Python scripts that send HTTP requests")),(0,i.yg)("h1",{id:"reminders-and-prerequisites"},"Reminders and Prerequisites"),(0,i.yg)("p",null,"Remember these concepts from the ",(0,i.yg)("a",{parentName:"p",href:"../rediscovering-the-browser/"},"previous session"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"by default, HTTP is a ",(0,i.yg)("strong",{parentName:"li"},"stateless")," protocol.\nEvery request is independent from any other"),(0,i.yg)("li",{parentName:"ul"},"HTTP supports fixed methods, such as ",(0,i.yg)("inlineCode",{parentName:"li"},"GET"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"PUT"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"POST")," etc."),(0,i.yg)("li",{parentName:"ul"},"HTTP servers respond with status codes and, optionally, data."),(0,i.yg)("li",{parentName:"ul"},"web browsers such as Firefox are HTTP clients"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"curl")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"wget")," are used to send HTTP requests and to download files, respectively")),(0,i.yg)("p",null,"For this session, you need:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"a working internet connection"),(0,i.yg)("li",{parentName:"ul"},"basic knowledge of the HTTP protocol"),(0,i.yg)("li",{parentName:"ul"},"a Linux machine"),(0,i.yg)("li",{parentName:"ul"},"a Firefox browser"),(0,i.yg)("li",{parentName:"ul"},"a Python interpreter (at least Python3.6)")),(0,i.yg)("h1",{id:"sending-http-requests-from-python"},"Sending HTTP Requests from Python"),(0,i.yg)("p",null,"The module we need in order to handle requests in Python is called ",(0,i.yg)("inlineCode",{parentName:"p"},"requests"),".\nIt contains methods for all types of HTTP requests: ",(0,i.yg)("inlineCode",{parentName:"p"},"GET"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"POST"),", etc."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"import requests as req\n\nURL = 'https://httpbin.org'\n\n# Send a `GET` request.\n# `params` is a dictionary of query parameters.\n# `response` is an object.\nresponse = req.get(f'{URL}/get', params={'name': 'SSS', 'role': 'boss'})\n# This request is equivalent to:\n# GET URL?name=SSS?role=boss\n\n# We must access its fields to gain specific information.\nprint(response.status_code)  # The status code returned by the server\nprint(response.text)  # The HTML sent by the server\n\npayload = {'skill': 'infinite'}\nresponse = req.post(f'{URL}/post', data=payload)\n")),(0,i.yg)("h1",{id:"cookies"},"Cookies"),(0,i.yg)("p",null,"HTTP is a stateless protocol used to communicate over the internet.\nThis means that a request is not aware of any of the previous ones and each request is executed independently.\nGiven its stateless nature, simple mechanisms such as HTTP cookies were created to overcome the issue."),(0,i.yg)("p",null,"An HTTP cookie (also called web cookie, Internet cookie, browser cookie, or simply cookie) is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing.\nCookies were designed to be a reliable mechanism for websites to remember stateful information (such as items added in the shopping cart in an online store) or to record the user's browsing activity (including clicking particular buttons, logging in, or recording which pages were visited in the past).\nThey can also be used to remember pieces of information that the user previously entered into form fields, such as names, addresses, passwords, and credit card numbers."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Cookies",src:n(2474).A,width:"768",height:"428"})),(0,i.yg)("p",null,"They are like ID cards for websites.\nIf a browser sends a certain cookie to a web server, the server deduces the identity of said client from that cookie, without requiring authentication.\nThis can pose problems from a security perspective.\nFor more details, check the section about ",(0,i.yg)("a",{parentName:"p",href:"#cookie-theft--session-hijacking"},"cookie theft and session hijacking"),"."),(0,i.yg)("h2",{id:"what-are-cookies"},"What are Cookies?"),(0,i.yg)("p",null,"A cookie is a key-value pair stored in a text file on the user\u2019s computer.\nThis file can be found, for example, at the following path on a Linux system using Firefox:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"~/.mozilla/firefox/<some_random_characters>.default-release/cookies.sqlite\n")),(0,i.yg)("p",null,"As the file name implies, Firefox stores cookies in an SQLite database."),(0,i.yg)("p",null,"An example of cookies set for a website could be:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"username=admin")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"cookie_consent=1")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"theme=dark"))),(0,i.yg)("p",null,"The first cookie stores the username, so it can be displayed to the user without querying the database.\nThe second one stores the choice made by the user regarding their concent to receive cookies, so the application does not continue to show that annoying message every time.\nFinally, the third one stores which theme was selected (in this case, a dark theme)."),(0,i.yg)("p",null,"Once a cookie has been set, the browser will send the cookie information in all subsequent HTTP requests until the cookie is deleted.\nCookies also have various attributes:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Domain")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"Path"),": define the scope of the cookies.\nThese attributes tell the browser what website they belong to."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Secure"),": defines that cookies should only be sent using secure channels such as HTTPS."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Expires"),": specifies when the cookie is to be deleted.\nAll cookies have a maximum lifespan, after which they must be erased by the browser, for security.\nThat why if you haven't logged on a website for a long time, you will be logged out.",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"- Alternatively, the`Max-Age` attribute can be used to state the number of seconds after the cookie is to be deleted.\n")))),(0,i.yg)("h2",{id:"developer-tools"},"Developer Tools"),(0,i.yg)("p",null,"All modern browsers have the ability to assist developers in creating, previewing, testing and debugging their web applications.\nThis ability comes in the form of the ",(0,i.yg)("strong",{parentName:"p"},"Developer Tools")," suite.\nYou can open the Developer Tools by pressing either ",(0,i.yg)("inlineCode",{parentName:"p"},"F12")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"Ctrl + Shift + c")," when browsing through a website."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Developer Tools - First Sight",src:n(9851).A,width:"1917",height:"991"})),(0,i.yg)("h3",{id:"inspector"},"Inspector"),(0,i.yg)("p",null,'The first "tab" we see in the Developer Tools is called ',(0,i.yg)("em",{parentName:"p"},"Inspector"),".\nIt displays the HTML source of the page we are viewing.\nThis structure is called the ",(0,i.yg)("a",{parentName:"p",href:"../explaining-the-internet#the-document-object-model-dom"},"Document Object Model"),".\nWe can even modify the content of the HTML document"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Modified Title",src:n(1868).A,width:"800",height:"769"})),(0,i.yg)("p",null,"Of course, this modification is only visible to me because I'm modifying my local copy of the ",(0,i.yg)("inlineCode",{parentName:"p"},"index.html")," file."),(0,i.yg)("h3",{id:"console"},"Console"),(0,i.yg)("p",null,"This tab is pretty straightforward.\nIt is a shell in which we can write JavaScript code."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Console",src:n(7279).A,width:"357",height:"323"})),(0,i.yg)("h3",{id:"debugger"},"Debugger"),(0,i.yg)("p",null,"This tab displays all the files loaded by the web page and allows you to run the JavaScript code step by step.\nHence its name: ",(0,i.yg)("em",{parentName:"p"},"Debugger")),(0,i.yg)("h4",{id:"sources"},"Sources"),(0,i.yg)("p",null,'The "Sources" sub-tab of the "Debugger" tab shows the hierarchical structure of all files used by the web page.\nThese files can be HTML files, CSS files images, videos, JavaScript files, anything.'),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Debugger - Source",src:n(7079).A,width:"1107",height:"468"})),(0,i.yg)("p",null,"Notice the file ",(0,i.yg)("inlineCode",{parentName:"p"},"(index)")," is actually the same we saw in ",(0,i.yg)("a",{parentName:"p",href:"#inspector"},"Inspector"),"."),(0,i.yg)("h3",{id:"network"},"Network"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Network",src:n(2661).A,width:"1641",height:"464"})),(0,i.yg)("p",null,"The network tab shows detailed information about every file loaded and every request and response made by the page.\nNotice the sub-tabs to the right.\nhere you can find in-depth information about the HTTP requests, such as HTTP parameters, HTTP methods (",(0,i.yg)("inlineCode",{parentName:"p"},"GET"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"POST")," etc.), HTTP status codes (200, 404, 500, etc.), loading time and size of each loaded element (image, script, etc).\nFurthermore, clicking on one of the requests there, you can see the headers, the preview, the response (as raw content) and others.\nThis is useful for listing all the resources needed by a page, such as if there are any requests to APIs, additional scripts loaded, etc."),(0,i.yg)("p",null,"Here we can also see the cookies sent with each request."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Network - Cookies",src:n(2439).A,width:"549",height:"171"})),(0,i.yg)("h3",{id:"storage"},"Storage"),(0,i.yg)("p",null,'Viewing cookies in the "Network" tab is fine, but that only gives us their value.\nIf we want to see all their attributes ',(0,i.yg)("strong",{parentName:"p"},"and change their value"),', we need to go over to the "Storage" tab.'),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Storage",src:n(4933).A,width:"1915",height:"329"})),(0,i.yg)("p",null,"Let's take a closer look at one cookie called ",(0,i.yg)("inlineCode",{parentName:"p"},"_ga"),'.\nIt comes form "Google Analytics".\nThis is a service provided by Google that ',(0,i.yg)("strong",{parentName:"p"},"definitely does not spy on users"),", but it uses ",(0,i.yg)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/collection/gtagjs/cookie-usage#gtagjs_google_analytics_4_-_cookie_usage"},"cookies like this one")," to give website owners statistics about their visitors.\nSo it's literally spying and tracking users' behaviour."),(0,i.yg)("p",null,"Let's troll them by modifying their cookie\nIts contents are explained ",(0,i.yg)("a",{parentName:"p",href:"https://stackoverflow.com/a/16107194"},"here"),".\nBut we're just going to mess with it."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Storage - Modified",src:n(7517).A,width:"918",height:"264"})),(0,i.yg)("p",null,"There!\nWe showed Big Tech not to mess with us!"),(0,i.yg)("h2",{id:"cookies-from-the-cli"},"Cookies from the CLI"),(0,i.yg)("p",null,"We're going to use our old friend ",(0,i.yg)("inlineCode",{parentName:"p"},"curl"),".\nTo set a cookie we simply use the ",(0,i.yg)("inlineCode",{parentName:"p"},"-b")," parameter like so:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"root@kali:~# curl -b 'something=nothing' -b 'something_else=still_nothing' $URL\n")),(0,i.yg)("h1",{id:"http-sessions"},"HTTP Sessions"),(0,i.yg)("p",null,"Some websites use sessions to remember their clients across multiple requests.\nThese sessions are essentially IDs with which the server identifies clients.\nFor example, PHP uses a cookie called ",(0,i.yg)("inlineCode",{parentName:"p"},"PHPSESSID"),".\nIt contains a random large number."),(0,i.yg)("p",null,"Sessions are usually short-lived, which makes them ideal for storing temporary states between pages.\nSessions also expire once the user closes his browser or after a predefined amount of time (for example, 30 minutes)."),(0,i.yg)("p",null,"The basic workflow is:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"The server starts a new session (sets a cookie via the HTTP ",(0,i.yg)("inlineCode",{parentName:"li"},"Cookie")," header)."),(0,i.yg)("li",{parentName:"ol"},"The server sets a new session variable (stored on the server-side)."),(0,i.yg)("li",{parentName:"ol"},"When the client changes the page, it sends all the cookies in the request, along with the session ID from step 1."),(0,i.yg)("li",{parentName:"ol"},"The server reads the session ID from the cookie."),(0,i.yg)("li",{parentName:"ol"},"The server matches the session ID with the entries of a local list (in-memory, text file etc.)."),(0,i.yg)("li",{parentName:"ol"},"If the server finds a match, it reads the stored variables.\nFor PHP, these variables will become available in the superglobal variable ",(0,i.yg)("inlineCode",{parentName:"li"},"$_SESSION"),"."),(0,i.yg)("li",{parentName:"ol"},"If the server doesn't find a match, it will create a new session and repeat steps 1-6.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Session lifecycle",src:n(6507).A,width:"602",height:"473"})),(0,i.yg)("p",null,"Example of a session in PHP (running on the server):  "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"<?php\n    session_start(); // Start the session\n    $_SESSION['username'] = \"John Doe\"; \n    $_SESSION['is_admin'] = true;\n    echo \"Hello \" . $_SESSION['username'];\n?>\n")),(0,i.yg)("h3",{id:"sessions-in-the-cli"},"Sessions in the CLI"),(0,i.yg)("p",null,"Guess who's back?\n",(0,i.yg)("inlineCode",{parentName:"p"},"curl"),", of course.\nWe can save the cookies sent by a server in a ",(0,i.yg)("strong",{parentName:"p"},"cookie jar"),".\nRemember this concept.\nPython uses it too.\nIt's not too sophisticated, either.\nA cookie jar is a file that contains cookies."),(0,i.yg)("p",null,"To save the cookies in a file, we use the ",(0,i.yg)("inlineCode",{parentName:"p"},"-c <file name>")," option"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"root@kali:~# curl -c cookies.txt $URL\n[...]\n\nroot@kali:~# cat cookies.txt\n# Netscape HTTP Cookie File\n# https://curl.haxx.se/docs/http-cookies.html\n# This file was generated by libcurl! Edit at your own risk.\n\nsample.domain.com   FALSE   /   FALSE   1656864260  something   nothing\n")),(0,i.yg)("p",null,"Each entry in a cookies file represents a cookie.\nIts layout is:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"<domain> <include subdomains> <path> <HTTPS only> <expires at> <cookie name> <cookie value>\n")),(0,i.yg)("p",null,"We are free to modify this cookies file however we want.\nAs you can see, this file has a very specific format.\nIt's better to let ",(0,i.yg)("inlineCode",{parentName:"p"},"curl")," generate it first to make sure it's correct and only then edit it ourselves.\nThen, in order to use these cookies in a subsequent request, we use the ",(0,i.yg)("inlineCode",{parentName:"p"},"-b")," parameter:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"root@kali:~# curl -b cookies.txt $URL\n")),(0,i.yg)("p",null,"Notice it's the same parameter we used to ",(0,i.yg)("a",{parentName:"p",href:"#cookies-from-the-cli"},"send cookies manually"),".\nWhen the argument is a file, ",(0,i.yg)("inlineCode",{parentName:"p"},"curl")," reads the cookies form the file.\nOtherwise, it reads them from the argument itself as strings."),(0,i.yg)("h3",{id:"sessions-in-python"},"Sessions in Python"),(0,i.yg)("p",null,"In order to send HTTP requests in Python, we can import the ",(0,i.yg)("inlineCode",{parentName:"p"},"requests")," module.\nThen, we simply create a session object which we then use to send requests.\nThis object also maintains the session cookies.\nThey are accessible via ",(0,i.yg)("inlineCode",{parentName:"p"},"session.cookies"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"s = requests.Session()\n\n# Set the value of the `something` cookie to `nothing`.\ns.cookies.set('something', 'nothing')\n\n# Send a `GET` request with the above cookie.\ns.get($URL)\n")),(0,i.yg)("h1",{id:"path-traversal"},"Path Traversal"),(0,i.yg)("p",null,"Every request asks for a file.\nRemember ",(0,i.yg)("inlineCode",{parentName:"p"},"GET /path/to/file"),".\nEven ",(0,i.yg)("inlineCode",{parentName:"p"},"GET /")," implicitly asks for ",(0,i.yg)("inlineCode",{parentName:"p"},"index.html")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"index.php"),"."),(0,i.yg)("p",null,"If the application does not verify the parameter, an attacker might be able to exploit the application and display an arbitrary file from the target system.\nNormally an attacker would try to access sensitive files containing passwords or configurations in order to gain access to the system.\nRemember that PHP scripts aren't normally visible by the client."),(0,i.yg)("p",null,"Below is an example of a vulnerability where an attacker can leak PHP scripts:\nConsider the following URL:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"http://somesite.com/view.php?file=image.jpg\n")),(0,i.yg)("p",null,"What if the attacker could query the website using ",(0,i.yg)("inlineCode",{parentName:"p"},"view.php")," as parameter?"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"http://somesite.com/view.php?file=view.php\n")),(0,i.yg)("p",null,"This would be too easy.\nSometimes, images are stored in different directories than application files.\nSo our attacker should query the server like with a link like this one:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"http://somesite.com/view.php?file=../../view.php\n")),(0,i.yg)("p",null,"If they manage to view ",(0,i.yg)("inlineCode",{parentName:"p"},"view.php"),", then it is likely they can access any file on the system, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"/etc/passwd"),", using this query:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"http://somesite.com/view.php?file=/etc/passwd\n")),(0,i.yg)("p",null,"This kind of situation when an attacker can freely access files on the server is called a ",(0,i.yg)("strong",{parentName:"p"},"path traversal attack"),".\nTo fix this, applications should always validate user input and ensure the path they request is within a safe folder to which they have access."),(0,i.yg)("h2",{id:"directory-buster-dirb"},"DIRectory Buster (DIRB)"),(0,i.yg)("p",null,"There may be other files stored on the server that aren't accessible from the entry point web page.\nIt is difficult to search for such pages manually.\nLuckily there are tools that can help us with this.\nOne of them is ",(0,i.yg)("strong",{parentName:"p"},"DIRectory Buster"),", or ",(0,i.yg)("inlineCode",{parentName:"p"},"dirb")," in short.\nIt simply queries a web server for many files ",(0,i.yg)("strong",{parentName:"p"},"fast"),".\nAll you need to do is to give it a list of files for which to search."),(0,i.yg)("p",null,"Here's how to run it:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"root@kali:~# dirb <URL> wordlist.txt\n")),(0,i.yg)("p",null,"A good starting point for wordlists are the lists ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/danielmiessler/SecLists/tree/master/Discovery/Web-Content"},"here"),", particularly those named ",(0,i.yg)("inlineCode",{parentName:"p"},"raft-large-*.txt"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"raft-large-files.txt")," for files, duh..."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"raft-large-directories.txt")," for directories")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"dirb")," works by issuing lots of ",(0,i.yg)("inlineCode",{parentName:"p"},"GET")," requests, one for each file in its wordlist.\nIf a request receives a 404 response, the file doesn't exist.\nOtherwise, it does (except for 500 responses, in which case the request is resent).\nEven a 403 response is alright.\nIt just means that a regular user doesn't have access to that file."),(0,i.yg)("p",null,"Here's what ",(0,i.yg)("inlineCode",{parentName:"p"},"dirb")," + ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/danielmiessler/SecLists"},(0,i.yg)("inlineCode",{parentName:"a"},"SecLists"))," look like:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"root@kali:~# dirb http://example.com ~/SecLists/Discovery/Web-Content/raft-large-files.txt \n[...]                                                       \n---- Scanning URL: http://example.com/ ----\n+ http://example.com/index.html (CODE:200|SIZE:1256)                                                                                                                                                                                         \n+ http://example.com/. (CODE:200|SIZE:1256)                                                                                                                                                                                                  \n+ http://example.com/extension.inc (CODE:403|SIZE:345)  \n[...] \n")),(0,i.yg)("h1",{id:"summary"},"Summary"),(0,i.yg)("p",null,"The key takeaways from this session are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"HTTP cookies are used to make the protocol stateful.\nYou can pass them with ",(0,i.yg)("inlineCode",{parentName:"li"},"curl")," by using the ",(0,i.yg)("inlineCode",{parentName:"li"},"-b")," parameter"),(0,i.yg)("li",{parentName:"ul"},"Sessions are cookies used to identify a client.\nBoth ",(0,i.yg)("inlineCode",{parentName:"li"},"curl")," and Python can account for sessions:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"- `curl` does so by saving and loading them from a cookie file with the `-c` and `-c` parameters, respectively\n- Python uses a `Session` object that stores cookies internally\n"))),(0,i.yg)("li",{parentName:"ul"},"In path traversal attacks hackers can access files they shouldn't be allowed to by specifying the path to them",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"A very useful tool for testing the existence of additional files is ",(0,i.yg)("inlineCode",{parentName:"li"},"dirb"),"."))),(0,i.yg)("li",{parentName:"ul"},"One of the most widely used repositories of lists of common names / passwords / anything is ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/danielmiessler/SecLists"},"SecLists"),".\nUse it any time.")),(0,i.yg)("h1",{id:"activities"},"Activities"),(0,i.yg)("h2",{id:"tutorial---chef-hacky-mchack"},"Tutorial - Chef Hacky McHack"),(0,i.yg)("p",null,"We'll solve this task in 3 ways: from the browser, from the CLI and using Python.\nThat good we are!"),(0,i.yg)("h3",{id:"virgin-from-the-browser"},"Virgin: From the Browser"),(0,i.yg)("p",null,'We visit to the URL, open the Developer Tools and go over to the "Storage" tab.\nThere we see the server has given ass the cookie ',(0,i.yg)("inlineCode",{parentName:"p"},"u=guest"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Hacky McHack - Initial Cookie",src:n(1099).A,width:"1666",height:"323"})),(0,i.yg)("p",null,'Since the challenge is called "Hacky McHack" we set the cookie value to ',(0,i.yg)("inlineCode",{parentName:"p"},"hacky mchack"),".\nWe notice a new tab has appeared at the top of the page or by inspecting the HTML source: ",(0,i.yg)("strong",{parentName:"p"},"Manage")," (",(0,i.yg)("inlineCode",{parentName:"p"},"/manage.php"),").\nWe click on it and get the flag."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'<ul class="nav-menu list-unstyled">\n    <li><a href="index.php" class="smoothScroll">Home</a></li>\n    <li><a href="#about" class="smoothScroll">About</a></li>\n    <li><a href="#portfolio" class="smoothScroll">Portfolio</a></li>\n    <li><a href="#journal" class="smoothScroll">Blog</a></li>\n    <li><a href="#contact" class="smoothScroll">Contact</a></li>\n        <li><a href="manage.php" class="smoothScroll">Manage</a></li>\n    </ul>\n')),(0,i.yg)("h3",{id:"chad-v1-from-the-cli"},"Chad v1: From the CLI"),(0,i.yg)("p",null,"We use our good friend ",(0,i.yg)("inlineCode",{parentName:"p"},"curl"),".\nFirst, we save the cookies from the initial page into a cookie jar."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"root@kali:~# curl -c cookies.txt http://141.85.224.70:8010\n[...]\n\nroot@kali:~# cat cookies.txt\n# Netscape HTTP Cookie File\n# https://curl.haxx.se/docs/http-cookies.html\n# This file was generated by libcurl! Edit at your own risk.\n\nhttp://141.85.224.70:8010   FALSE   /   FALSE   1656864260  u   guest\n")),(0,i.yg)("p",null,"Now we edit the file and replace ",(0,i.yg)("inlineCode",{parentName:"p"},"guest")," with ",(0,i.yg)("inlineCode",{parentName:"p"},"hacky mchack")," and send a ",(0,i.yg)("inlineCode",{parentName:"p"},"GET")," request to ",(0,i.yg)("inlineCode",{parentName:"p"},"/manage.php"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"root@kali:~# sed -i s/guest/hacky\\ mchack/ cookies.txt\n\nroot@kali:~# curl -b cookies.txt $URL/manage.php\n")),(0,i.yg)("p",null,'If we didn\'t want to use the cookie jar, we could have simply looked at the headers sent by the server then sent the cookie "manually":'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"root@kali:~# curl -v $URL > /dev/null  # we don't care about the output\n[...]\n< HTTP/1.1 200 OK\n< Date: Sun, 03 Jul 2022 16:10:51 GMT\n< Server: Apache/2.4.38 (Debian)\n< X-Powered-By: PHP/7.2.34\n< Set-Cookie: u=guest; expires=Sun, 03-Jul-2022 16:11:51 GMT; Max-Age=60\n\nroot@kali:~# curl -b 'u=hacky mchack' $URL/manage.php  # Notice the Set-Cookie field above\n<here we get the flag>\n")),(0,i.yg)("h3",{id:"chad-v2-from-python"},"Chad v2: From Python"),(0,i.yg)("p",null,"Simply create a ",(0,i.yg)("inlineCode",{parentName:"p"},"Session")," object, set the cookie ",(0,i.yg)("inlineCode",{parentName:"p"},"u")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"hacky mchack"),", then send a ",(0,i.yg)("inlineCode",{parentName:"p"},"GET")," request to the ",(0,i.yg)("inlineCode",{parentName:"p"},"/manage.php")," endpoint."),(0,i.yg)("h3",{id:"challenge-beep-beep-boop"},"Challenge: Beep Beep Boop"),(0,i.yg)("p",null,"Look for hidden files on the web server."),(0,i.yg)("h3",{id:"challenge-colours"},"Challenge: Colours"),(0,i.yg)("p",null,"Indices go brrrrrrr."),(0,i.yg)("h3",{id:"challenge-great-names"},"Challenge: Great Names"),(0,i.yg)("p",null,"Do you know these great explorers?"),(0,i.yg)("h3",{id:"challenge-nobody-loves-me"},"Challenge: Nobody Loves Me"),(0,i.yg)("p",null,"Whom do you call?"),(0,i.yg)("h3",{id:"challenge-one-by-one"},"Challenge: One-by-One"),(0,i.yg)("p",null,"One by one by one by one by one..."),(0,i.yg)("h3",{id:"challenge-produce-consume"},"Challenge: Produce-Consume"),(0,i.yg)("p",null,"What does the server produce exactly?"),(0,i.yg)("h3",{id:"challenge-traverse-the-universe"},"Challenge: Traverse the Universe"),(0,i.yg)("p",null,"Explore new ~planets~ files."),(0,i.yg)("h1",{id:"further-reading"},"Further Reading"),(0,i.yg)("h2",{id:"cookie-theft--session-hijacking"},"Cookie Theft / Session Hijacking"),(0,i.yg)("p",null,"Enter Facebook then close the tab.\nNext time you won't be asked to login.\nThis is because Facebook has given you a session ID with which you no longer need to log in.\nIt would be a pity if an attacker stole your ID.\nThis is what's called  ",(0,i.yg)("strong",{parentName:"p"},"cookie theft")," or ",(0,i.yg)("strong",{parentName:"p"},"session Hijacking"),"."),(0,i.yg)("p",null,"It's a pretty common attack that mostly requires the user to click on a malicious link that leads to a webpage whose JavaScript code reads the victim's cookies.\nFollowing this attack, hackers can impersonate you wherever you were logged in."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.venafi.com/blog/what-session-hijacking"},"Here")," are more ways in which your session can be stolen."))}g.isMDXComponent=!0},7517:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/_ga-cookie-modified-65bd75b94931d1478f5883817882abdd.png"},4933:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/_ga-cookie-995b16adbf4b3122aeac7c3b6fa979aa.png"},7279:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/console-69a6896d80bc7a5b718c521f320e225a.png"},2474:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cookies-801ed1690e49b28263d3e2a616d3a8cc.png"},7079:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/debugger-sources-0dad073c2a8daaa9d3ef9529fba86e20.png"},9851:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/developer-tools-97a232616f1bb33610d6ab44ed85d9ad.png"},1099:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/hacky-mchack-cookies-ca643757ebb13120fc31e2c70be33b67.png"},1868:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/inspector-modify-title-731700007ccc8ab1a164c8d0b7a9584f.png"},2439:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/network-cookies-044ef1680dae69791af4ef19ab9f8e47.png"},2661:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/network-d9003d026cb1ec6fab2c377d047c8bbb.png"},6507:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/session-4d2456ea8afc9c174b432bf9f1f4830a.jpg"}}]);