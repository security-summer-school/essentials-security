"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[3237],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(y,s(s({ref:n},p),{},{components:t})):a.createElement(y,s({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(8168),r=(t(6540),t(5680));const i={},s="Data Formats",o={unversionedId:"Data/Data Representation/Reading/data-formats",id:"Data/Data Representation/Reading/data-formats",title:"Data Formats",description:"Numeral Systems",source:"@site/docs/Data/Data Representation/Reading/data-formats.md",sourceDirName:"Data/Data Representation/Reading",slug:"/Data/Data Representation/Reading/data-formats",permalink:"/essentials-security/13/Data/Data Representation/Reading/data-formats",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/essentials-security/13/Data/Data Representation/Reading/introduction"},next:{title:"Character Encoding",permalink:"/essentials-security/13/Data/Data Representation/Reading/character-encoding"}},l={},c=[{value:"Numeral Systems",id:"numeral-systems",level:2},{value:"Octal",id:"octal",level:3}],p={toc:c},d="wrapper";function m(e){let{components:n,...i}=e;return(0,r.yg)(d,(0,a.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"data-formats"},"Data Formats"),(0,r.yg)("h2",{id:"numeral-systems"},"Numeral Systems"),(0,r.yg)("p",null,"Numeral Systems are a method of representing numbers by mathematical combinations of symbols."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Numeral Systems 1",src:t(3700).A,width:"1920",height:"1080"})),(0,r.yg)("p",null,"Humans prefer the ",(0,r.yg)("inlineCode",{parentName:"p"},"decimal")," numeral system (also know as Base-10), since it provides better readability.\nTherefore, written software (i.e. code) is mostly ",(0,r.yg)("inlineCode",{parentName:"p"},"Base-10"),", as humans write software far more than they build hardware."),(0,r.yg)("p",null,"Computers, on the other hand, use binary (or Base-2), the numerical system that uses two digits (0 and 1), which are also known as ",(0,r.yg)("inlineCode",{parentName:"p"},"bits")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"bytes")," (1 byte = 8 bits)"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Binary Meme",src:t(7360).A,width:"517",height:"531"})),(0,r.yg)("p",null,"But why?\nHardware prefers them, since they are associated easier with electrical signals:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Data Signals",src:t(7940).A,width:"1920",height:"353"})),(0,r.yg)("p",null,"Of course, there is also an in-between: Hexadecimal.\nAlso known as Base-16, it uses 10 digits (0-9) and 6 alphabet letters (A-F).\nHexadecimal data is both readable and tightly correlated to the binary representation.\nLet's say we have ",(0,r.yg)("inlineCode",{parentName:"p"},"0b10101001")," (",(0,r.yg)("inlineCode",{parentName:"p"},"10101001"),").\nI assume you can safely say that since we have 8 bits, it will be ",(0,r.yg)("inlineCode",{parentName:"p"},"< 256"),".\nIts hexadecimal form is ",(0,r.yg)("inlineCode",{parentName:"p"},"0xa9")," (",(0,r.yg)("inlineCode",{parentName:"p"},"a9"),").\nThus, if we want to convert it to ",(0,r.yg)("inlineCode",{parentName:"p"},"decimal"),", instead of doing 8 steps:"),(0,r.yg)("p",null,"$(1 \xd7 2^7) + (0 \xd7 2^6) + (1 \xd7 2^5) + (0 \xd7 2^4) + (1 \xd7 2^3) + (0 \xd7 2^2) + (0 \xd7 2^1) + (1 \xd7 2^0) = 169$"),(0,r.yg)("p",null,"we only do 2 steps:"),(0,r.yg)("p",null,"$(a \xd7 16^1) + (9 \xd7 16^0) = 169$"),(0,r.yg)("p",null,"Some conversions:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-py"},'# binary <\u2015\u2015> decimal\ndef binToDec(n):\n    return int(n,2)\n\ndef decToBin(n):\n    return bin(n)\n\n# hexadecimal <\u2015\u2015> decimal\ndef hexToDec(n):\n    return int(n, 16)\n\ndef decToHex(n):\n    return hex(n)\n\n# binary <\u2015\u2015> hexadecimal\ndef binToHex(n):\n    return(decToHex(binToDec(n)))\n\ndef hexToBin(n):\n    return(decToBin(hexToDec(n)))\n\n# Back and forth conversions\nif __name__ == \'__main__\':\n    print(f"0b1111 \u2015\u2015\u2015> {binToDec(\'0b1111\')}")\n    print(f"15 \u2015\u2015\u2015> {decToBin(15)}")\n\n    print(f"0xa9 \u2015\u2015\u2015> {hexToDec(\'0xa9\')}")\n    print(f"169 \u2015\u2015\u2015> {decToHex(169)}")\n\n    print(f"0b111101111011 \u2015\u2015\u2015> {binToHex(\'0b111101111011\')}")\n    print(f"0xf7b \u2015\u2015\u2015> {hexToBin(\'0xf7b\')}")\n')),(0,r.yg)("p",null,"And their output:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"0b1111 \u2015\u2015\u2015> 15\n15 \u2015\u2015\u2015> 0b1111\n0xa9 \u2015\u2015\u2015> 169\n169 \u2015\u2015\u2015> 0xa9\n0b111101111011 \u2015\u2015\u2015> 0xf7b\n0xf7b \u2015\u2015\u2015> 0b111101111011\n")),(0,r.yg)("h3",{id:"octal"},"Octal"),(0,r.yg)("p",null,"Octal or Base-8 uses 8 digits (0-7).\nIt is the least popular of the aforementioned 4, but an interesting use of it is in the Unix File Permissions system:"),(0,r.yg)("p",null,"Here is a table that shows what each permissions does on a file, respectively on a directory.\n",(0,r.yg)("img",{alt:"Unix File Permissions 1",src:t(5793).A,width:"1440",height:"598"})),(0,r.yg)("p",null,"Each file/directory has three sets of permissions:\n",(0,r.yg)("inlineCode",{parentName:"p"},"Owner"),",\n",(0,r.yg)("inlineCode",{parentName:"p"},"Group Owner"),",\n",(0,r.yg)("inlineCode",{parentName:"p"},"Others")),(0,r.yg)("p",null,"So, if we want to view the permissions of a file/directory we execute:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"root@kali:~# ls -l File_Name\n-rwxrw-r-- 1 root root 1000 Sep 10 2020 File_Name\n-[-][-][-]   [--] [--]\n| |  |  |     ||   ||\n| |  |  |     ||   ||\n| |  |  |     ||   ++----------------\x3e 6. Group\n| |  |  |     ++---------------------\x3e 5. Owner\n| |  |  +----------------------------\x3e 4. Others Permissions\n| |  +-------------------------------\x3e 3. Group Permissions\n| +----------------------------------\x3e 2. Owner Permissions\n+------------------------------------\x3e 1. File Type\n")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Unix File Permissions 2",src:t(8690).A,width:"646",height:"520"})),(0,r.yg)("p",null,"An overview of the presented ",(0,r.yg)("inlineCode",{parentName:"p"},"Numeral Systems"),":\n",(0,r.yg)("img",{alt:"Numeral Systems 2",src:t(8263).A,width:"1824",height:"1026"})))}m.isMDXComponent=!0},7360:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/binary_meme-34171a3d9e4181a1808bbc8871b26d25.svg"},7940:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/data_signals-df16f4d46a3b1431faadca1137a65c4d.svg"},3700:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/numeral_systems1-4434761f7791c29c44e0a90dbaaa7ef9.svg"},8263:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/numeral_systems2-c95779e2409e058aa41f5d1ca123e846.svg"},5793:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/unix_file_permissions1-bc244e419635088217dcdd2d92e17555.svg"},8690:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/unix_file_permissions2-2803a8d1f95da6700729daa46d83dc82.svg"}}]);