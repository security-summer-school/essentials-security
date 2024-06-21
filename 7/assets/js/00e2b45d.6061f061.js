"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[2867],{5680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>m});var t=a(6540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},y=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,m=d["".concat(o,".").concat(u)]||d[u]||g[u]||r;return a?t.createElement(m,l(l({ref:n},y),{},{components:a})):t.createElement(m,l({ref:n},y))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4697:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=a(8168),i=(a(6540),a(5680));const r={},l="Reading Assembly",s={unversionedId:"Binary Introduction/Assembly Language/Reading/reading-assembly",id:"Binary Introduction/Assembly Language/Reading/reading-assembly",title:"Reading Assembly",description:"objdump",source:"@site/docs/Binary Introduction/Assembly Language/Reading/reading-assembly.md",sourceDirName:"Binary Introduction/Assembly Language/Reading",slug:"/Binary Introduction/Assembly Language/Reading/reading-assembly",permalink:"/essentials-security/7/Binary Introduction/Assembly Language/Reading/reading-assembly",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Dereferencing Addresses",permalink:"/essentials-security/7/Binary Introduction/Assembly Language/Reading/dereferencing-addresses"},next:{title:"Summary",permalink:"/essentials-security/7/Binary Introduction/Assembly Language/Reading/summary"}},o={},p=[{value:"<code>objdump</code>",id:"objdump",level:2},{value:"GDB",id:"gdb",level:2}],y={toc:p},d="wrapper";function g(e){let{components:n,...a}=e;return(0,i.yg)(d,(0,t.A)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"reading-assembly"},"Reading Assembly"),(0,i.yg)("h2",{id:"objdump"},(0,i.yg)("inlineCode",{parentName:"h2"},"objdump")),(0,i.yg)("p",null,"Starting from an executable file, we can read its Assembly code by ",(0,i.yg)("strong",{parentName:"p"},"disassembling")," it.\nThe standard tool for doing this is ",(0,i.yg)("inlineCode",{parentName:"p"},"objdump"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~$ objdump -M intel -d <binary> | less\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Use ",(0,i.yg)("inlineCode",{parentName:"li"},"-M intel")," for Intel syntax.\nThe default syntax is AT&T."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-d"),' stands for "disassembly".'),(0,i.yg)("li",{parentName:"ul"},"pipe the output to ",(0,i.yg)("inlineCode",{parentName:"li"},"less")," so you can navigate the Assembly code more easily.")),(0,i.yg)("p",null,"Notice that every line contains an address, an opcode and an instruction.\nThe opcode is simply the binary representation of that instruction."),(0,i.yg)("p",null,"Alternatively, you can use GDB and Ghidra that you learned about ",(0,i.yg)("a",{parentName:"p",href:"../../Binary%20Analysis/"},"in the previous session"),"."),(0,i.yg)("h2",{id:"gdb"},"GDB"),(0,i.yg)("p",null,"The undisputed king of Assembly is by far the ",(0,i.yg)("strong",{parentName:"p"},"GNU DeBugger (GDB)"),".\nIt's just what its name says it is, but its beauty is in its versatility.\nGDB is a command-line debugger that allows us to print registers, variables, dump memory from any address, step through the code, go back through the call stack and much more.\nToday we will only get a glimpse of its power."),(0,i.yg)("p",null,"We are using the ",(0,i.yg)("inlineCode",{parentName:"p"},"pwndbg")," extension for GDB as it allows us to view the assembly code, stack (you'll learn about it in the ",(0,i.yg)("a",{parentName:"p",href:"../../Taming%20the%20Stack/"},"next session"),") and registers.\nFollow the instructions ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/pwndbg/pwndbg#how"},"here")," to install it if you haven't done so already."),(0,i.yg)("p",null,"GDB can run Assembly instructions one by one and stops after each instruction.\nThe current instruction is also clearly displayed.\nBelow is a reduced list of useful GDB commands to get you going.\nUse it as a cheatsheet when you get stuck:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"start")," = start running the program from ",(0,i.yg)("inlineCode",{parentName:"p"},"main"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"list")," = decompile and display C code\nOnly works for executables compiled with ",(0,i.yg)("inlineCode",{parentName:"p"},"-g"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"pdis")," = disassemble and display instructions with nice syntax highlighting")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"next")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"n")," = run the current C code\nIf it is a function call, it is executed without stepping into the function.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"nexti")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"ni")," = run the current Assembly instruction")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"step")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"s")," = if the debugger has reached a function call, step into it.\nOtherwise, it behaves like ",(0,i.yg)("inlineCode",{parentName:"p"},"next")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"stepi")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"si")," = step into function (used for the ",(0,i.yg)("inlineCode",{parentName:"p"},"call")," instruction in Assembly)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"break")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"b <n>")," = place a breakpoint at line ",(0,i.yg)("inlineCode",{parentName:"p"},"n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"break")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"b *<address>")," = place breakpoint at address")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"continue")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"c")," = run code until next breakpoint")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"info registers <name>")," = display the values in all registers.\nIf a name is specified, only the value in that register is displayed")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"p <variable>")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"<name>")," = print the variable / number; similar to ",(0,i.yg)("inlineCode",{parentName:"p"},"printf")))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},'p/d = printf("%d")\np/c = printf("%c")\np/x = printf(\u201c%x\u201d)\np/u = printf(\u201c%u\u201d)\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"x <address>")," = print data at the address (dereference it).\nBy default, the output is represented in hex"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"x/<n><d><f> <address>")," -> print ",(0,i.yg)("inlineCode",{parentName:"li"},"n")," memory areas of size ",(0,i.yg)("inlineCode",{parentName:"li"},"d")," with format ",(0,i.yg)("inlineCode",{parentName:"li"},"f"),":")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"n = any number; default = 1\nd = b (byte - default) / h (half-word = short) / w (word = int)\nf = (like p): x (hex - default)  / c (char) / d (int, decimal) / u (unsigned)  / s (string)\n")),(0,i.yg)("p",null,"Examples:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"x/20wx = 20 hex words (ints)\nx/10hd = 10 decimal half-words (shorts)\nx/10c = 10 ASCII characters\nx/10b = 10 hex bytes (because x is the default)\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"set $<register> <value>")," = sets the register to that value")))}g.isMDXComponent=!0}}]);