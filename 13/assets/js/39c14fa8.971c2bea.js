"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[7746],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),h=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=h(r),c=i,d=p["".concat(l,".").concat(c)]||p[c]||m[c]||s;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var h=2;h<s;h++)o[h]=r[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var n=r(8168),i=(r(6540),r(5680));const s={},o="The Domain Name System",a={unversionedId:"Demystifying the Web/Explaining the Internet/Reading/dns",id:"Demystifying the Web/Explaining the Internet/Reading/dns",title:"The Domain Name System",description:"Remember: IPs, not URLs, are what's used to identify hosts (web servers included) on the internet.",source:"@site/docs/Demystifying the Web/Explaining the Internet/Reading/dns.md",sourceDirName:"Demystifying the Web/Explaining the Internet/Reading",slug:"/Demystifying the Web/Explaining the Internet/Reading/dns",permalink:"/essentials-security/13/Demystifying the Web/Explaining the Internet/Reading/dns",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"URLs",permalink:"/essentials-security/13/Demystifying the Web/Explaining the Internet/Reading/urls"},next:{title:"The Transport Layer",permalink:"/essentials-security/13/Demystifying the Web/Explaining the Internet/Reading/transport-layer"}},l={},h=[{value:"The Recursive Resolver",id:"the-recursive-resolver",level:2},{value:"The Root Server",id:"the-root-server",level:2},{value:"The Top-Level Domain Name Server",id:"the-top-level-domain-name-server",level:2},{value:"The Authoritative Name Server(s)",id:"the-authoritative-name-servers",level:2},{value:"Putting it Together",id:"putting-it-together",level:2},{value:"<code>host</code>",id:"host",level:2}],u={toc:h},p="wrapper";function m(e){let{components:t,...s}=e;return(0,i.yg)(p,(0,n.A)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"the-domain-name-system"},"The Domain Name System"),(0,i.yg)("p",null,"Remember: IPs, ",(0,i.yg)("strong",{parentName:"p"},"not URLs"),", are what's used to identify hosts (web servers included) on the internet.\nSo there needs to be a service by which the URLs we've just learned about are mapped to IPs.\nThis service is called the DNS.\nIt organises URLs in a hierarchical manner, in order to rapidly respond to queries.\nYou can think of the DNS as being similar to a ",(0,i.yg)("strong",{parentName:"p"},"phonebook of the internet"),"."),(0,i.yg)("p",null,"Here's how all of this works.\nWhen you type ",(0,i.yg)("inlineCode",{parentName:"p"},"security-summer-school.github.io")," into your browser, it sends a query over the internet in order to find the website associated with the URL ",(0,i.yg)("inlineCode",{parentName:"p"},"security-summer-school.github.io"),".\nA query is a question asking to look up the domain name and respond to the corresponding IP address.\nLet's follow the path of this question across the internet."),(0,i.yg)("p",null,"In short, a DNS server performs the steps outlined ",(0,i.yg)("a",{parentName:"p",href:"https://howdns.works/ep1/"},"here"),"."),(0,i.yg)("h2",{id:"the-recursive-resolver"},"The Recursive Resolver"),(0,i.yg)("p",null,"The first server that the query interacts with is what's called the ",(0,i.yg)("strong",{parentName:"p"},"recursive resolver"),'.\nThis resolver is often operated by your ISP.\nIt is a database of other DNS servers, which asks it forwards the same question: "What is the IP of ',(0,i.yg)("inlineCode",{parentName:"p"},"security-summer-school.github.io"),'?"'),(0,i.yg)("h2",{id:"the-root-server"},"The Root Server"),(0,i.yg)("p",null,"The first DNS server that the recursive resolver talks to is the ",(0,i.yg)("strong",{parentName:"p"},"root server"),".\nThese servers are responsible for translating ",(0,i.yg)("em",{parentName:"p"},"top-level domains"),", such as ",(0,i.yg)("inlineCode",{parentName:"p"},".io"),", ",(0,i.yg)("inlineCode",{parentName:"p"},".com"),", ",(0,i.yg)("inlineCode",{parentName:"p"},".net")," etc.\nThese root servers are few in number (only 13 across the world) and are highly secured."),(0,i.yg)("h2",{id:"the-top-level-domain-name-server"},"The Top-Level Domain Name Server"),(0,i.yg)("p",null,"The next entity that processes the query is the ",(0,i.yg)("strong",{parentName:"p"},"Top-Level Domain (TLD) Name Server"),".\nThere are TLDs associated with each domain mentioned in the above section.\nFor instance, the search for ",(0,i.yg)("inlineCode",{parentName:"p"},"security-summer-school.github.io")," will be passed to the TLD responsible for the ",(0,i.yg)("inlineCode",{parentName:"p"},".io")," domain.\nThis TLD will answer with ",(0,i.yg)("inlineCode",{parentName:"p"},".io"),"'s IP."),(0,i.yg)("h2",{id:"the-authoritative-name-servers"},"The Authoritative Name Server(s)"),(0,i.yg)("p",null,"The last step in our lookup is ",(0,i.yg)("strong",{parentName:"p"},"The Authoritative Name Servers"),' (sometimes the "authoritative" part is omitted).\nWe use the plural "servers" because our query may be for a subdomain.\nIn fact, our query for ',(0,i.yg)("inlineCode",{parentName:"p"},"security-summer-school.github")," is one such case.\nThis means, that 2 name servers will fulfill the request.\nThe first server will fetch the IP of ",(0,i.yg)("inlineCode",{parentName:"p"},".github.io")," and the second will fetch the IP of the whole query (",(0,i.yg)("inlineCode",{parentName:"p"},"security-summer-school.github.io"),"), by looking into the subdomains of ",(0,i.yg)("inlineCode",{parentName:"p"},".github.io"),".\nThis server is  to a dictionary, in which a specific domain name is translated into its IP."),(0,i.yg)("h2",{id:"putting-it-together"},"Putting it Together"),(0,i.yg)("p",null,"As you've probably noticed, the URLs are translated to IPs ",(0,i.yg)("em",{parentName:"p"},"in reverse order"),".\nAs a result, ",(0,i.yg)("inlineCode",{parentName:"p"},"security-summer-school.github.io")," is mapped to its IP in the order:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},".io"),";"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},".github"),";"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"security-summer-school"),".")),(0,i.yg)("p",null,"This makes sense, as this order gradually narrows the ",(0,i.yg)("em",{parentName:"p"},"scope")," in which the URL has to be searched.\nIt would be much more inefficient to look for ",(0,i.yg)("inlineCode",{parentName:"p"},"security-summer-school")," across the whole internet, rather than limiting the search to the ",(0,i.yg)("inlineCode",{parentName:"p"},".github.io")," domain.\nThe fact that we are able to perform queries in this manner is proof of the hierarchical nature of IP addresses."),(0,i.yg)("p",null,"All in all, the DNS lookup for ",(0,i.yg)("inlineCode",{parentName:"p"},"security-summer-school.github.io")," is the one shown below.\nNotice that the Recursive Resolver acts as a mediator between most of the DNS lookups."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"DNS Lookup for security-summer-school.github.io",src:r(6608).A,width:"1276",height:"367"})),(0,i.yg)("p",null,"Notice that only the domain of a URL has its name resolved to an IP address.\nThe port, path, parameters and anchor are handled by the web server itself.\nThe DNS part is, thus, necessary in order to ",(0,i.yg)("strong",{parentName:"p"},"find")," that web server."),(0,i.yg)("h2",{id:"host"},(0,i.yg)("inlineCode",{parentName:"h2"},"host")),(0,i.yg)("p",null,"In the previous section we explained the DNS.\nNow let's put what we've just learned into practice.\nIn order to query the DNS service, we use the ",(0,i.yg)("inlineCode",{parentName:"p"},"host")," command.\nIt's pretty straightforward:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# host security.summer.school.github.io\nsecurity.summer.school.github.io has address 185.199.108.153\nsecurity.summer.school.github.io has address 185.199.110.153\nsecurity.summer.school.github.io has address 185.199.109.153\nsecurity.summer.school.github.io has address 185.199.111.153\nsecurity.summer.school.github.io has IPv6 address 2606:50c0:8002::153\nsecurity.summer.school.github.io has IPv6 address 2606:50c0:8000::153\nsecurity.summer.school.github.io has IPv6 address 2606:50c0:8003::153\nsecurity.summer.school.github.io has IPv6 address 2606:50c0:8001::153\n")),(0,i.yg)("p",null,"Notice there are more IPs for ",(0,i.yg)("inlineCode",{parentName:"p"},"security.summer.school.github.io"),".\nThe main reason for this is ",(0,i.yg)("strong",{parentName:"p"},"load balancing"),".\nGitHub is accessed frequently and in order not to overload a single server, it uses multiple servers for a single domain.\nObviously, each of them serve the same web page: ",(0,i.yg)("inlineCode",{parentName:"p"},"security.summer.school.github.io"),".\nGitHub simply serves more machines to spread the workload."))}m.isMDXComponent=!0},6608:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/dns_lookup-20835f232a0ef9ce09e89d95b1368368.png"}}]);