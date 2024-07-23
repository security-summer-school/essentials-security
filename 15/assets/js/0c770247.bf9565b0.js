"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[2687],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(t),y=a,u=p["".concat(d,".").concat(y)]||p[y]||g[y]||s;return t?r.createElement(u,i(i({ref:n},c),{},{components:t})):r.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=y;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6726:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(8168),a=(t(6540),t(5680));const s={},i="Dereferencing Addresses",o={unversionedId:"Binary Introduction/Assembly Language/Reading/dereferencing-addresses",id:"Binary Introduction/Assembly Language/Reading/dereferencing-addresses",title:"Dereferencing Addresses",description:"Up to this point we know how to operate with data and can write complex programs using conditional jumps.",source:"@site/docs/Binary Introduction/Assembly Language/Reading/dereferencing-addresses.md",sourceDirName:"Binary Introduction/Assembly Language/Reading",slug:"/Binary Introduction/Assembly Language/Reading/dereferencing-addresses",permalink:"/essentials-security/15/Binary Introduction/Assembly Language/Reading/dereferencing-addresses",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Assembly Instructions",permalink:"/essentials-security/15/Binary Introduction/Assembly Language/Reading/assembly-instructions"},next:{title:"Reading Assembly",permalink:"/essentials-security/15/Binary Introduction/Assembly Language/Reading/reading-assembly"}},d={},l=[{value:"Endianness",id:"endianness",level:2}],c={toc:l},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"dereferencing-addresses"},"Dereferencing Addresses"),(0,a.yg)("p",null,"Up to this point we know how to operate with data and can write complex programs using conditional jumps.\nBut we know that data is stored mostly in the RAM.\nHow do we fetch it from there to our registers?"),(0,a.yg)("p",null,"Imagine the RAM is one giant array.\nEach byte is a cell in this array.\nTherefore, each byte is found at a given ",(0,a.yg)("strong",{parentName:"p"},"index")," in this array.\nIndices start at 0, so the first byte is found at index 0, the third 3 at index 2 and so on.\nThese indices are also called ",(0,a.yg)("strong",{parentName:"p"},"memory addresses"),", or simply ",(0,a.yg)("strong",{parentName:"p"},"addresses"),"."),(0,a.yg)("p",null,"In order to load data from the RAM into our registers or vice-versa, we need to specify the CPU which RAM address to access.\nThis is called ",(0,a.yg)("strong",{parentName:"p"},"dereferencing that address"),".\nSyntactically, this is very easy and is done by wrapping the address in ",(0,a.yg)("inlineCode",{parentName:"p"},"[]"),".\nThe address can be either a raw number, or a register, or an expression:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-asm"},"mov rax, [0xdeadbeef]   ; load 8 bytes from the address 0xdeadbeef into rax\nmov bx, [0xdeadbeef]    ; load 2 bytes from the address 0xdeadbeef into bx\nmov [0xdeadbeef], ecx   ; store 4 bytes from ecx at the address 0xdeadbeef\n")),(0,a.yg)("p",null,"Notice that the number of bytes that are transferred between the RAM and registers is given by the size of the register.\nBut what happens when we don't use a register?\nThe code below is incorrect because it is impossible to tell how many bytes to use to write 0x69.\nWe could write it using one byte of course, but what if we wanted to write it on 4 bytes and store ",(0,a.yg)("inlineCode",{parentName:"p"},"[ 0x00 | 0x00 | 0x00 | 0x69 ]"),"?\nTo eliminate such ambiguities, we must specify the number of bytes that we want to write to the RAM:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-asm"},"mov [0xdeadbeef], byte 0x2      ; writes 1 byte\nmov [0xdeadbeef], word 0x2      ; writes 2 bytes: 0x00 and 0x02\nmov [0xdeadbeef], dword 0x2     ; writes 4 bytes\nmov [0xdeadbeef], qword 0x2     ; writes 8 bytes\n")),(0,a.yg)("p",null,"Instead of a hardcoded value, we can express addresses as complex expressions which the CPU computes for us.\nIn the snippet below, the CPU computes the address given by ",(0,a.yg)("inlineCode",{parentName:"p"},"rdi + rcx * 4")," and then writes the contents of ",(0,a.yg)("inlineCode",{parentName:"p"},"edx")," there."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-asm"},"mov [rdi + rcx * 4], edx\n")),(0,a.yg)("p",null,"This is equivalent to ",(0,a.yg)("inlineCode",{parentName:"p"},"v[i] = something")," where ",(0,a.yg)("inlineCode",{parentName:"p"},"v")," is an array of 4-byte values (hence ",(0,a.yg)("inlineCode",{parentName:"p"},"rcx * 4"),"):"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"rdi")," = starting address of ",(0,a.yg)("inlineCode",{parentName:"li"},"v")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"rcx")," = ",(0,a.yg)("inlineCode",{parentName:"li"},"i")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"edx")," = ",(0,a.yg)("inlineCode",{parentName:"li"},"something"))),(0,a.yg)("p",null,"Therefore, whenever you see ",(0,a.yg)("inlineCode",{parentName:"p"},"[...]")," in Assembly, what between the square brackets is being dereferenced ",(0,a.yg)("a",{parentName:"p",href:"/essentials-security/15/Binary%20Introduction/Assembly%20Language/Reading/further-reading#lea"},(0,a.yg)("strong",{parentName:"a"},"with one exception")),"."),(0,a.yg)("h2",{id:"endianness"},"Endianness"),(0,a.yg)("p",null,"This is all nice, but how does all this look like in the memory?\nThe order in which the bytes are stored in the RAM is called ",(0,a.yg)("strong",{parentName:"p"},"endianness"),".\nMost CPUs store bytes ",(0,a.yg)("strong",{parentName:"p"},"in reverse order"),", or ",(0,a.yg)("strong",{parentName:"p"},"little endian")," order, because the least significant byte is the first.\nWhen data is fetched back from the ram, the order is reversed:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-asm"},"mov [0x100], dword 0x12345678       ; the RAM at 0x100: [ 0x78 | 0x56 | 0x34 | 0x12 ]\nmov ax, [0x100]     ; ax = 0x5678\nmov bx, [101]       ; bx = 0x3456\n")),(0,a.yg)("p",null,"However, endianness does not apply to strings.\nThe code below writes the string ",(0,a.yg)("inlineCode",{parentName:"p"},"SSS Rulz")," at the address 0x100.\nNotice we don't have to write it in reverse order like ",(0,a.yg)("inlineCode",{parentName:"p"},"zluR SSS"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-asm"},'mov rax, "SSS Rulz"\nmov [0x100], rax\n; We need to use a register because mov cannot take both an address and a 64-bit immediate as operands.\n; https://www.felixcloutier.com/x86/mov\n')))}g.isMDXComponent=!0}}]);