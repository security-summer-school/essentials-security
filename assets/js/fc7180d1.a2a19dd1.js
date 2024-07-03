"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[4943],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||g[u]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(8168),a=(n(6540),n(5680));const s={},o="The Transport Layer",i={unversionedId:"Demystifying the Web/Explaining the Internet/Reading/transport-layer",id:"Demystifying the Web/Explaining the Internet/Reading/transport-layer",title:"The Transport Layer",description:"So with IPs, we can connect two hosts however far apart they are.",source:"@site/docs/Demystifying the Web/Explaining the Internet/Reading/transport-layer.md",sourceDirName:"Demystifying the Web/Explaining the Internet/Reading",slug:"/Demystifying the Web/Explaining the Internet/Reading/transport-layer",permalink:"/essentials-security/Demystifying the Web/Explaining the Internet/Reading/transport-layer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"The Domain Name System",permalink:"/essentials-security/Demystifying the Web/Explaining the Internet/Reading/dns"},next:{title:"The Application Layer",permalink:"/essentials-security/Demystifying the Web/Explaining the Internet/Reading/application-layer"}},l={},p=[{value:"Ports",id:"ports",level:2},{value:"TCP",id:"tcp",level:2},{value:"SSH",id:"ssh",level:3},{value:"UDP",id:"udp",level:3}],c={toc:p},h="wrapper";function g(e){let{components:t,...s}=e;return(0,a.yg)(h,(0,r.A)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"the-transport-layer"},"The Transport Layer"),(0,a.yg)("p",null,"So with IPs, we can connect two hosts however far apart they are.\nSo far, we managed to directly connect hosts.\nThen we moved on to LANs and then to the whole Web.\nThis must be it, right?\nWe're now worldwide.\nWhy all the fuss about the Transport Layer.\nLet's run an experiment: in your browser, open two tabs to your favourite website (which is ",(0,a.yg)("a",{parentName:"p",href:"https://security-summer-school.github.io"},"https://security-summer-school.github.io"),", of course).\nHow are those connections handled?\nHow come what you do in one of the tabs does not interfere with what you do in the other?\nIPs give us connections from host to host, but they can't differentiate between multiple connections between the same two hosts."),(0,a.yg)("p",null,"For this, we need another concept: ",(0,a.yg)("strong",{parentName:"p"},"ports"),".\nThe layer that implements these ports is called ",(0,a.yg)("strong",{parentName:"p"},"the transport layer"),"."),(0,a.yg)("p",null,"The transport layer is the second layer of the protocol stack and sits immediately below the application layer.\nAt the transport layer there are two main protocols in use: ",(0,a.yg)("strong",{parentName:"p"},"Transmission Control Protocol (TCP)")," and ",(0,a.yg)("strong",{parentName:"p"},"User Datagram Protocol (UDP)"),".\nMore about them in just a bit."),(0,a.yg)("p",null,"The transport layer accepts ",(0,a.yg)("strong",{parentName:"p"},"messages")," from the application layer as application data.\nIt does not care if this data is part of the connection setup process, actual data to be transferred, or some other control message.\nIt just sees the data as a bunch of bytes to be transported to the receiving end's transport layer."),(0,a.yg)("h2",{id:"ports"},"Ports"),(0,a.yg)("p",null,"Generally speaking, ports are endpoints used for communication.\nThey have no physical correspondence, but are merely logical concepts used to segregate between different processes, all running on the same host."),(0,a.yg)("p",null,"A port is a 16-bit number used in order to identify multiple network-using processes ",(0,a.yg)("strong",{parentName:"p"},"on the same host"),".\nNotice that with IPs we were talking about identifying ",(0,a.yg)("em",{parentName:"p"},"hosts")," whereas now we've increased the granularity and are talking about ",(0,a.yg)("em",{parentName:"p"},"processes"),"\nAs a result, when a sender process wants to connect to another process (the receiver), it must specify both the port it's currently using and the port used by the receiver."),(0,a.yg)("p",null,"Since ports are numbers up to ",(0,a.yg)("inlineCode",{parentName:"p"},"2^16"),", this means there are 65536 of them.\nThis number is enough, given that it's meant to encompass the network-using processes in the system.\nHowever, not all of them are available for your average network application.\nThe ",(0,a.yg)("strong",{parentName:"p"},"first 1024 (port numbers 0 to 1023)")," of them are reserved for common system applications and services."),(0,a.yg)("h2",{id:"tcp"},"TCP"),(0,a.yg)("p",null,'The "Control" word in this protocol\'s name should give us a hint that TCP is about handling various errors that may occur while a packet is traversing the internet.\nFor this reason, TCP keeps track of the amount of data it sends and ensures it arrives in order (by buffering any out-of-order packets).\nThis type of tracking is made possible by the use of ',(0,a.yg)("strong",{parentName:"p"},"sequence numbers (",(0,a.yg)("inlineCode",{parentName:"strong"},"Seq"),")"),".\nIn addition, the receiver sends a special message whenever it gets a segment.\nThis message is called ",(0,a.yg)("strong",{parentName:"p"},"acknowledgment (ACK)"),".\nEach ACK is sent together with an ",(0,a.yg)("strong",{parentName:"p"},"ACK number"),".\nThis number signifies the amount of bytes received so far by the host.\nIt is used by the sender to figure out what portion of the data to send as part of the next segment."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"TCP ACKs in Action",src:n(6958).A,width:"538",height:"756"})),(0,a.yg)("p",null,"In the above diagram we can see that the sender (client) adds some bytes (whose length is specified as ",(0,a.yg)("inlineCode",{parentName:"p"},"Len"),") to those already sent.\nAt the same time, the receiver (server) adds the newly arrived bytes to those received previously and sends this number back to the client as the ACK number."),(0,a.yg)("p",null,"But some segments might arrive altered (some of their bits may be changed).\nTCP adds what's called a ",(0,a.yg)("strong",{parentName:"p"},"checksum")," to each packet.\nThis checksum is computed by ",(0,a.yg)("inlineCode",{parentName:"p"},"xor"),"-ing all bytes in the segment.\nWhen a segment is received, its checksum is recomputed and compared to the one contained within it.\nIf the two checksums differ, the receiver notifies the sender by sending a ",(0,a.yg)("strong",{parentName:"p"},"not ACK (NACK)")," segment instead of an ACK.\nUpon receiving a NACK, the sender ",(0,a.yg)("strong",{parentName:"p"},"retransmits")," the segment.\nThe same mechanism is employed for segments that do not make it to the receiver."),(0,a.yg)("p",null,"In short, TCP makes sure that whatever is sent is received completely and correctly.\nThis feature is obviously important.\nAs a result, TCP is used for the transport-layer in the following application-level protocols and scenarios:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"SMTP (Simple Mail Transfer Protocol)"),", ",(0,a.yg)("strong",{parentName:"li"},"IMAP (Internet Access Message Protocol)")," and ",(0,a.yg)("strong",{parentName:"li"},"POP3 (Post Office Protocol version 3)"),": the main protocols used by email services worldwide."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"HTTP/HTTPS (HyperText Transfer Protocol / Secured)"),": the most popular protocol used to transfer web pages.\nBy default, HTTP uses port 80 and HTTPS uses port 443."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"SSH (Secure Shell)"),": a widely used protocol for obtaining a remote shell on another machine.")),(0,a.yg)("h3",{id:"ssh"},"SSH"),(0,a.yg)("p",null,"We've been using ",(0,a.yg)("inlineCode",{parentName:"p"},"ssh")," to connect to the remote machines used for challenges and tutorials.\nNow we know it is a protocol used for connecting to remote hosts via a shell.\nIt opens a TCP connection to the remote host, where each character typed in the terminal is sent to the receiving host."),(0,a.yg)("p",null,"As its name suggests, the gist of this protocol is ",(0,a.yg)("strong",{parentName:"p"},"secured"),".\nThe security implies that the characters are not sent to the receiver as plain text, but are ",(0,a.yg)("strong",{parentName:"p"},"encrypted"),".\nWhile we'll discuss more about encryption in the ",(0,a.yg)("a",{parentName:"p",href:"../data-security"},"Data Security")," session, it is important that we outline the main workings of encryption."),(0,a.yg)("p",null,"Upon initiating the SSH connection, an encryption algorithm is negotiated between the communicating hosts.\nThis algorithm performs two operations: encryption and decryption"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Encryption")," transforms data (either keys pressed by the sender, or the output from the receiver) into bytes that look random (i.e. one cannot distinguish an encrypted text and a random set of bytes)."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Decryption")," performs the opposite operation: turns encrypted bytes into plain text.")),(0,a.yg)("p",null,"The typical ",(0,a.yg)("inlineCode",{parentName:"p"},"ssh")," command looks like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"ssh user@ip\n")),(0,a.yg)("p",null,"For example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"ssh student@141.85.224.100\n")),(0,a.yg)("p",null,"By default, SSH uses port 22.\nWe can specify another port by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"-p")," parameter like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"ssh user@ip -p port\n")),(0,a.yg)("p",null,"This is what you've been doing for the last 2 sessions in order to log onto our machines and solve challenges:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"root@kali:~# ssh ctf@ip -p <some_number>\n")),(0,a.yg)("p",null,"What you did is you created an SSH connection using a custom port which did not open a shell onto our full machines, but onto an individual ",(0,a.yg)("a",{parentName:"p",href:"/essentials-security/Demystifying%20the%20Web/Explaining%20the%20Internet/Reading/further-reading#containers"},"container")," that was hosting each challenge.\nThink of a container as a lighter, albeit less secure VM.\nThe architecture looks like this:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Challenge Hosting Architecture",src:n(2027).A})),(0,a.yg)("h3",{id:"udp"},"UDP"),(0,a.yg)("p",null,"We said TCP guarantees the correctness of the delivered data, which is great.\nThis guarantee, however, comes at the cost of performance.\nIn the picture above, we saw how ACKs are transmitted.\nThis mechanism causes a significant temporal overhead, that we sometimes simply cannot afford.\nThere are services that need to transfer data really fast and, thus, they forgo the need for ",(0,a.yg)("strong",{parentName:"p"},"datagram")," correctness.\nAs the protocol's name suggests, UDP messages are called datagrams.\nIf a received packet is incorrect or if it's missing, well... too bad.\nLife moves on... to the next packet and so on.\nSo applications usually simply discard incorrect or missing UDP datagrams.\nIn case you were wondering, UDP also computes the checksum, but provides no mechanism for error handling.\nIt's up to the application layer to deal with them."),(0,a.yg)("p",null,"In short, with UDP, the sender just sends its datagrams to the receiver.\nSome might arrive out of order, or corrupted, but this is entirely the receiver's problem."),(0,a.yg)("p",null,"Moreover, with the wide implementation of optical fiber around the world, the possibility of datagrams being lost or corrupted has dropped to almost 0.\nFor this reason, UDP is mostly used for streaming services:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"YouTube"),(0,a.yg)("li",{parentName:"ul"},"Netflix"),(0,a.yg)("li",{parentName:"ul"},"Discord"),(0,a.yg)("li",{parentName:"ul"},"Spotify"),(0,a.yg)("li",{parentName:"ul"},"PornHub")),(0,a.yg)("p",null,"Since an image is worth 1000 words, here's a summary of TCP and UDP:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"TCP vs UDP",src:n(6239).A,width:"460",height:"386"})))}g.isMDXComponent=!0},2027:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/challenge_hosting_architecture-c7dd58c9ceda8aae1f9ee57a0cc7129c.svg"},6958:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/tcp_ack_model-7fa0148027570ea3208dcb6b51ca468f.webp"},6239:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/tcp_vs_udp-11915d73a4a94a35d49987ff7c245f79.jpg"}}]);