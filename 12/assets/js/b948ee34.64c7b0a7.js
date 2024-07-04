"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[3315],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),y=c(r),u=a,d=y["".concat(s,".").concat(u)]||y[u]||m[u]||i;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[y]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const i={},o="Symmetric Cryptography",p={unversionedId:"Data/Data Security/Reading/symmetric-cryptography",id:"Data/Data Security/Reading/symmetric-cryptography",title:"Symmetric Cryptography",description:"Symmetric ciphers are encryptions algorithms that uses the same key for both encrypting and decrypting data.",source:"@site/docs/Data/Data Security/Reading/symmetric-cryptography.md",sourceDirName:"Data/Data Security/Reading",slug:"/Data/Data Security/Reading/symmetric-cryptography",permalink:"/essentials-security/12/Data/Data Security/Reading/symmetric-cryptography",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Exclusive Or (XOR)",permalink:"/essentials-security/12/Data/Data Security/Reading/xor-encrpytion"},next:{title:"Asymmetric Cryptography",permalink:"/essentials-security/12/Data/Data Security/Reading/asymmetric-cryptography"}},s={},c=[{value:"How AES works?",id:"how-aes-works",level:2},{value:"Block cipher mode of operation",id:"block-cipher-mode-of-operation",level:2},{value:"ECB",id:"ecb",level:3},{value:"CBC",id:"cbc",level:3}],l={toc:c},y="wrapper";function m(e){let{components:t,...i}=e;return(0,a.yg)(y,(0,n.A)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"symmetric-cryptography"},"Symmetric Cryptography"),(0,a.yg)("p",null,"Symmetric ciphers are encryptions algorithms that uses the same key for both encrypting and decrypting data."),(0,a.yg)("p",null,"Symmetric-key ciphers are of two types:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"block ciphers")," that breaks up the plaintext into multiple fixed-length size blocks and send each block through an encryption function alongside with the secret key."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"stream ciphers")," takes a different approach by encrypting one byte of plaintext at a time")),(0,a.yg)("p",null,"We will focus on block ciphers, specifically on ",(0,a.yg)("strong",{parentName:"p"},"AES"),"(Advanced Encryption Standard) which is the most famous symmetric-key cipher.\nMany modern processor contain special instruction sets to perform AES operations and you can find more about that in the Hardware Section of SSS."),(0,a.yg)("h2",{id:"how-aes-works"},"How AES works?"),(0,a.yg)("p",null,"AES is basically just a keyed permutation.\nIn other words it maps every possible input block to another unique output block determined by a key."),(0,a.yg)("p",null,"AES comes in 3 variants where the key sizes can be 128, 192 or 256 bits and the block size of 128 bits."),(0,a.yg)("p",null,"In order for AES to perform an keyed permutation that can't be inverted without the key, the algorithm\napplies mixing operations on the input."),(0,a.yg)("p",null,"Because the size of the block is 128 bits (16 bytes), we represent them by a 4x4 matrix of bytes.\nIn the 128 bits-key AES version there are 10 rounds where the initial 4x4 matrix is modified each round by a number of invertible operations."),(0,a.yg)("p",null,"Steps of AES Encryption:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Key Expansion",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},'From the 128 bit key we generate 11 separate 128 "round keys" each to be used in ',(0,a.yg)("strong",{parentName:"li"},"Add Round Key")," step"))),(0,a.yg)("li",{parentName:"ul"},"Initial Add Round Key",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"the bytes of the first round key are XOR'd with the current block matrix"))),(0,a.yg)("li",{parentName:"ul"},"Round",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"This step is looped 10 times"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Substitute Bytes")," - each byte of the state is substituted with a different byte according to a lookup table called ",(0,a.yg)("strong",{parentName:"li"},"S-box")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Shift Rows")," - transposition of the last three rows of the block matrix shifted over one, two or\nthree columns"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Mix Columns")," - matrix multiplication is performed on block matrix columns combining the four bytes\nin each column. In the last round this step is skipped"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Add Round Key")," - the bytes of the current round key are XOR'd with the current block matrix")))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"AES",src:r(1822).A})),(0,a.yg)("h2",{id:"block-cipher-mode-of-operation"},"Block cipher mode of operation"),(0,a.yg)("p",null,'Block ciphers seems to solve the OTP key size problem but "what if\nwe want to encrypt more than a block of data?"\nWe will need to use a block cipher mode of operation.\nThe mode of operation describes how to securely apply the cipher\'s\nsingle-block operation to transform data larger than the block\nsize.'),(0,a.yg)("h3",{id:"ecb"},"ECB"),(0,a.yg)("p",null,"ECB stands for Electronic Codebook and is the simplest and not to be used encryption mode.\nThe way it works it's straightforward: the message is divided into\nmultiple blocks and each block is encrypted separately."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"ECB",src:r(9189).A})),(0,a.yg)("p",null,"The main security issue with ECB mode is that encrypting the same\nblock of plaintext always returns the same block of ciphertext."),(0,a.yg)("p",null,"From now on we'll be using the Crypto module from the PyCryptoDome package.\nYou can install it via pip by using the ",(0,a.yg)("strong",{parentName:"p"},"pip install pycryptodome")," command in your Linux terminal."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'from Crypto.Cipher import AES\nfrom Crypto.Random import get_random_bytes\nfrom Crypto.Util.Padding import pad\n\nKEY = get_random_bytes(16) #generate a random 16 bytes key\n\nplaintext = b"$ecret_1nformat1on"\n\ncipher = AES.new(KEY, AES.MODE_ECB)\nciphertext = cipher.encrypt(pad(plaintext, 16))\n\n# Encryption\nprint(f"Key: {KEY}")\nprint(f"Ciphertext: {ciphertext}")\n\ndecrypted_plaintext = cipher.decrypt(ciphertext) # we don\'t need to specify the key because we are using the\ncipher object initialized with the Key\nprint(f"Plaintext: {decrypted_plaintext}")\n')),(0,a.yg)("h3",{id:"cbc"},"CBC"),(0,a.yg)("p",null,"CBC stands for Cipher Block Chaining and it works by XORing each ciphertext block with the previous one."),(0,a.yg)("p",null,"In order for CBC to be secure and solve the similarity issue of ECB we must use a random sequence of bytes\ncalled ",(0,a.yg)("strong",{parentName:"p"},"IV")," (initialization vector) in the first block XOR operation."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"CBC",src:r(473).A})),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'from Crypto.Cipher import AES\nfrom Crypto.Random import get_random_bytes\nfrom Crypto.Util.Padding import pad\n\nKEY = get_random_bytes(16) # generate a random 16 bytes key\n\nplaintext = b"$ecret_1nformat1on"\n\ncipher = AES.new(KEY, AES.MODE_CBC) #\nciphertext = cipher.encrypt(pad(plaintext, AES.block_size))\n\n# Encryption\nprint(f"Key: {KEY}")\nprint(f"IV: {cipher.iv}") # The library will create a random IV if not specified when we create the AES\nobject\nprint(f"Ciphertext: {ciphertext}")\n\ncipher = AES.new(KEY, AES.MODE_CBC, cipher.iv) # we initialize a new object specifying the IV used in the\nencryption\n\ndecrypted_plaintext = cipher.decrypt(ciphertext)\nprint(f"Plaintext: {decrypted_plaintext}")\n')))}m.isMDXComponent=!0},1822:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/aes-2c7bf37f520788a2f891b297b75cf95c.svg"},473:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/cbc-0e0567e148afac38a971f51d5b6f09a9.svg"},9189:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ecb-4cde12663e261a98a1be3b786677c8b6.svg"}}]);