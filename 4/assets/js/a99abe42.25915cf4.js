"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[210],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=s(n),d=a,g=y["".concat(p,".").concat(d)]||y[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[y]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const i={},o="Exclusive Or (XOR)",l={unversionedId:"Data/Data Security/Reading/xor-encrpytion",id:"Data/Data Security/Reading/xor-encrpytion",title:"Exclusive Or (XOR)",description:'Exclusive or, also called "XOR" is a binary operator that behave',source:"@site/docs/Data/Data Security/Reading/xor-encrpytion.md",sourceDirName:"Data/Data Security/Reading",slug:"/Data/Data Security/Reading/xor-encrpytion",permalink:"/essentials-security/4/Data/Data Security/Reading/xor-encrpytion",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/essentials-security/4/Data/Data Security/Reading/introduction"},next:{title:"Symmetric Cryptography",permalink:"/essentials-security/4/Data/Data Security/Reading/symmetric-cryptography"}},p={},s=[{value:"XOR Properties",id:"xor-properties",level:2},{value:"XOR Encryption",id:"xor-encryption",level:2},{value:"OTP (One Time Pad)",id:"otp-one-time-pad",level:2}],c={toc:s},y="wrapper";function u(e){let{components:t,...i}=e;return(0,a.yg)(y,(0,r.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"exclusive-or-xor"},"Exclusive Or (XOR)"),(0,a.yg)("p",null,'Exclusive or, also called "XOR" is a binary operator that behave\nlike a programmable inverter so as the output is true if either\nfirst or second input is true but not both.'),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"XOR inverter",src:n(5168).A})),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"You will also find XOR operation described by ",(0,a.yg)("inlineCode",{parentName:"p"},"\u2295")," symbol in textbooks.")),(0,a.yg)("h2",{id:"xor-properties"},"XOR Properties"),(0,a.yg)("p",null,"To get familiar with how XOR operates we will take a brief look at some of its properties."),(0,a.yg)("p",null,"$$  0 \u2295 0 = 0 \\qquad 1 \u2295 0 = 0 $$"),(0,a.yg)("p",null,"$$  0 \u2295 1 = 1 \\qquad 1 \u2295 1 = 0 $$"),(0,a.yg)("p",null,"From now on we can determine some arithmetical attributes from that:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"a \u2295 (b \u2295 c) = (a \u2295 b) \u2295 c"),(0,a.yg)("td",{parentName:"tr",align:null},"XOR can be applied in any order")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"a \u2295 a = 0"),(0,a.yg)("td",{parentName:"tr",align:null},"XORing a bit with itself is always 0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"a \u2295 0 = a"),(0,a.yg)("td",{parentName:"tr",align:null},"XORing a bit with 0 doesn't change the bit value")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"a \u2295 b = b \u2295 a"),(0,a.yg)("td",{parentName:"tr",align:null},"You can flip the operands order")))),(0,a.yg)("h2",{id:"xor-encryption"},"XOR Encryption"),(0,a.yg)("p",null,"We can combine the previously mentioned properties in order to\nobtain a cool property that's used for decryption:\n$a \u2295 b \u2295 a = b$"),(0,a.yg)("p",null,"The first XOR between $a$ and $b$ is the encryption part whereas the\nsecond XOR operations marks the decryption phase:\n$\nciphertext = plaintext \u2295 key","\\","\nciphertext \u2295 key  = plaintext \u2295 key \u2295 key = plaintext\n$"),(0,a.yg)("p",null,"We only defined the XOR as working on single bits, so to be able to\nuse the XOR for encryption we need to implement a bitwise XOR\nfunction that can operate on more than one bit."),(0,a.yg)("p",null,"Luckily for us, Python already provide us with the ",(0,a.yg)("inlineCode",{parentName:"p"},"^")," (caret) operator\nthat can be applied to integers to XOR them.\nIt works by XOR-ing each 2 corresponding bits of the two integers."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"'''\nHere we can see the process of bitwise XORing two numbers\n42 \u2295 69 = 0b101010 \u2295 0b1000101\n         = 0 1 0 1 0 1 0\n               \u2295         we apply the XOR operation to every one of the bits\n           1 0 0 0 1 0 1\n           \u2193 \u2193 \u2193 \u2193 \u2193 \u2193 \u2193\n         = 1 1 0 1 1 1 1\n'''\nprint(int('0b1101111', 2)) # convert binary to decimal\nprint(42 ^ 69)\n\n# Function to xor strings\ndef xor_strings(w1, w2):\n        return \"\".join([chr(ord(a) ^ ord(b)) for a,b in zip(w1, w2)])\n\nprint(xor_strings(\"111\",\"bbb\").encode())\n")),(0,a.yg)("h2",{id:"otp-one-time-pad"},"OTP (One Time Pad)"),(0,a.yg)("p",null,"At a first glance, XOR may look too simple to provide a secure\nencryption scheme but it is the basis of the most secure encryption\nalgorithm, called a ",(0,a.yg)("strong",{parentName:"p"},"one-time pad"),".\nThe name suggests using a random sequence of bits called ",(0,a.yg)("inlineCode",{parentName:"p"},"pad")," with which we XOR each bit in the plaintext.\nThe security is guaranteed by the fact that the pad must be only used once therefore the name."),(0,a.yg)("p",null,"But how exactly does OTP work?"),(0,a.yg)("p",null,"Given a plaintext that can be translated into binary data and the\npreviously mentioned pad made up of random and unpredictable bits,\nthe attacker won't have any clue about the plaintext when they see\nthe ciphertext."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"XOR Attack",src:n(6041).A})),(0,a.yg)("p",null,"You will probably think \"Why don't we use OTP's if it's impossible\nfor an attacker to decipher it if the OTP's rules are implemented\ncorrectly?\"\nThe problem is OTP is impractical: if the data you want to transmit\nis big then the pad must be at least the size of the data.\nAlso you'll have to transmit the pad to other parties ahead of time\nin order to get it deciphered in practical time."))}u.isMDXComponent=!0},6041:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/xor-attack-493e7819ae9789b9717c645e37b8ef81.svg"},5168:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/xor-inverter-98dd8b9cbf01943774fb33f04213a988.svg"}}]);