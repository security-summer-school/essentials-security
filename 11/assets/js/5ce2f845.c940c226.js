"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[4373],{5680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>c});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=d(t),y=r,c=p["".concat(s,".").concat(y)]||p[y]||m[y]||i;return t?a.createElement(c,o(o({ref:n},g),{},{components:t})):a.createElement(c,o({ref:n},g))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},3986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(8168),r=(t(6540),t(5680));const i={},o="Assembly Instructions",l={unversionedId:"Binary Introduction/Assembly Language/Reading/assembly-instructions",id:"Binary Introduction/Assembly Language/Reading/assembly-instructions",title:"Assembly Instructions",description:"We've now learned what assembly is theoretically and what registers are, but how do we use them?",source:"@site/docs/Binary Introduction/Assembly Language/Reading/assembly-instructions.md",sourceDirName:"Binary Introduction/Assembly Language/Reading",slug:"/Binary Introduction/Assembly Language/Reading/assembly-instructions",permalink:"/essentials-security/11/Binary Introduction/Assembly Language/Reading/assembly-instructions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Registers",permalink:"/essentials-security/11/Binary Introduction/Assembly Language/Reading/registers"},next:{title:"Dereferencing Addresses",permalink:"/essentials-security/11/Binary Introduction/Assembly Language/Reading/dereferencing-addresses"}},s={},d=[{value:"<code>mov</code>",id:"mov",level:2},{value:"Data Manipulation",id:"data-manipulation",level:2},{value:"Control Flow",id:"control-flow",level:2},{value:"<code>jmp</code>",id:"jmp",level:3},{value:"<code>eflags</code>",id:"eflags",level:3},{value:"Conditional jumps",id:"conditional-jumps",level:3},{value:"<code>cmp</code> and <code>test</code>",id:"cmp-and-test",level:4},{value:"Loops",id:"loops",level:3}],g={toc:d},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"assembly-instructions"},"Assembly Instructions"),(0,r.yg)("p",null,"We've now learned what assembly is theoretically and what registers are, but how do we use them?\nEach CPU exposes an ",(0,r.yg)("strong",{parentName:"p"},"ISA (Instruction Set Architecture)"),": a set of instructions with which to modify and interact with its registers and with the RAM.\nThere are over 1000 instructions in the x64 ISA.\nThere are even instructions for efficiently encrypting data.\nFind out more about them by enrolling in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/security-summer-school/hardware-sec/"},"Hardware Assisted Security track"),"."),(0,r.yg)("p",null,"Before we dive into the instructions themselves, it's useful to first look at their generic syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-asm"},"instruction_name destination, source\n")),(0,r.yg)("p",null,"Most Assembly instructions have 2 operands: a source and a destination.\nFor some operations, such as arithmetic, the destination is also an operand.\nThe result of each instruction is always stored in the destination."),(0,r.yg)("p",null,"Below we'll list some fundamental instructions.\nWe will be using the Intel Assembly syntax."),(0,r.yg)("h2",{id:"mov"},(0,r.yg)("inlineCode",{parentName:"h2"},"mov")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"mov")," is the most basic instruction in Assembly.\nIt ",(0,r.yg)("em",{parentName:"p"},"copies")," (or ",(0,r.yg)("em",{parentName:"p"},"moves"),") data from the source to the destination.\nAlso note that comments in Assembly are preceded by ",(0,r.yg)("inlineCode",{parentName:"p"},";")," and that the language is case-insensitive."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-asm"},'mov eax, 3              ; eax = 3\n\nmov rbx, "SSS Rulz"     ; place the string "SSS Rulz" in `rbx`\n; This places each byte of the string "SSS Rulz" in rbx.\n\nmov r8b, bh             ; r8b = bh\n; The sizes of the operands must be equal (1 byte each in this case).\n')),(0,r.yg)("h2",{id:"data-manipulation"},"Data Manipulation"),(0,r.yg)("p",null,"Now that we've learnt how to place data in registers we need to learn how to do math with it.\nAs you've seen so far, Assembly instructions are really simple.\nBelow is a table with the most common and useful arithmetic instructions.\nTry to figure out what each example does.\nUse the fact that the general anatomy of an instruction is usually ",(0,r.yg)("inlineCode",{parentName:"p"},"instruction destination, source"),".\nThe result is always stored in the ",(0,r.yg)("inlineCode",{parentName:"p"},"destination")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Instruction"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Description"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Examples"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"add <dest>, <src>")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"dest += src")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"add rbx, 5"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"add r11, 0x99"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"sub <dest>, <src>")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"dest -= src")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"sub ecx, 'a'"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"sub r9, r8"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"shl <dest>, <bits>")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"dest <<= bits")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"shl rax, 3"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"shl rdi, cl"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"shr <dest>, <bits>")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"dest >>= bits")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"shr r15, 5"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"shr rsi, cl"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"and <dest> <src>")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"dest &= src")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"and al, ah"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"and bx, 13"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"or <dest> <src>")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"dest \\|= src")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"or r10b, cl"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"or r14, 0x2000"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"xor <dest> <src>")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"dest ^= src")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"xor ebx, edx"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"xor rcx, 1"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"inc <dest>")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"dest++")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"inc rsi"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"dec <dest>")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"dest--")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"dec r10w"))))),(0,r.yg)("h2",{id:"control-flow"},"Control Flow"),(0,r.yg)("p",null,"Now we know how to do maths and move bits around.\nThis is all good, but we still can't write full programs.\nWe need a mechanism similar to ",(0,r.yg)("inlineCode",{parentName:"p"},"if"),"s from Python and also loops in order to make the code run based on conditions."),(0,r.yg)("h3",{id:"jmp"},(0,r.yg)("inlineCode",{parentName:"h3"},"jmp")),(0,r.yg)("p",null,"The simplest instruction for control flow is the ",(0,r.yg)("inlineCode",{parentName:"p"},"jmp")," instruction.\nIt simply loads an address into the ",(0,r.yg)("inlineCode",{parentName:"p"},"rip")," register.\nBut when Assembly code is generated or written either by the compiler or by us, instructions don't have addresses yet.\nThese addresses are assigned during the ",(0,r.yg)("strong",{parentName:"p"},"linking")," or ",(0,r.yg)("strong",{parentName:"p"},"loading")," phase, as you know from the ",(0,r.yg)("a",{parentName:"p",href:"../../Application%20Lifetime/"},"Application Lifetime session"),"."),(0,r.yg)("p",null,"For this reason, we use ",(0,r.yg)("strong",{parentName:"p"},"labels")," as some sort of anchors.\nWe ",(0,r.yg)("inlineCode",{parentName:"p"},"jmp")," to them and then the assembler will replace them with relative addresses which are then replaced with full addresses during linking.\nThe way in which ",(0,r.yg)("inlineCode",{parentName:"p"},"jmp")," and labels function is very simple.\nRemember that in the absence of ",(0,r.yg)("inlineCode",{parentName:"p"},"jmp"),"s, Assembly code is executed linearly just like a script."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-asm"},"    jmp skip_next_section\n\n    ; Whatever code is here is never executed.\n\nskip_next_section:\n    ; Only the code below this label is executed.\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Warning"),"\nDo not confuse labels with functions.\nA label does not stop the execution of code when it's reached.\nThey are simply ignored by anything except for ",(0,r.yg)("inlineCode",{parentName:"p"},"jmp"),".")),(0,r.yg)("p",null,"For example, in the following code, both instructions are executed in the absence of ",(0,r.yg)("inlineCode",{parentName:"p"},"jmp"),"s:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-asm"},"    mov rax, 2\nsome_label:\n    mov rbx, 3\n    ; rax = 2; rbx = 3\n")),(0,r.yg)("h3",{id:"eflags"},(0,r.yg)("inlineCode",{parentName:"h3"},"eflags")),(0,r.yg)("p",null,"Each instruction (except for ",(0,r.yg)("inlineCode",{parentName:"p"},"mov"),") changes the ",(0,r.yg)("strong",{parentName:"p"},"inner state of the CPU"),".\nIn other words, several aspects regarding the result of the instruction are stored in a special register that we cannot access directly, called ",(0,r.yg)("inlineCode",{parentName:"p"},"eflags"),".\nThere are ",(0,r.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1406783/how-to-read-and-write-x86-flags-registers-directly"},"instructions")," that can set or clear some flags in ",(0,r.yg)("inlineCode",{parentName:"p"},"eflags"),", but we cannot write something like ",(0,r.yg)("inlineCode",{parentName:"p"},"mov eflags, 2"),"."),(0,r.yg)("p",null,"As its name implies, each bit in ",(0,r.yg)("inlineCode",{parentName:"p"},"eflags")," is a flag that is activated (i.e. set to 1) if a certain condition is true about the result of the last executed instruction.\nWe won't be using these flags per se with one exception: ",(0,r.yg)("inlineCode",{parentName:"p"},"ZF")," - the ",(0,r.yg)("strong",{parentName:"p"},"zero flag"),".\nWhen active, it means that the result of the last instruction was... 0, duh!\nThis is useful for testing if numbers are equal for example.\nWe'll talk about this in the next section."),(0,r.yg)("h3",{id:"conditional-jumps"},"Conditional jumps"),(0,r.yg)("p",null,"Now we know that there is an internal state of the CPU which is modified by each instruction, except for ",(0,r.yg)("inlineCode",{parentName:"p"},"mov"),".\nWe still need a way to leverage this state.\nWe can do this via ",(0,r.yg)("strong",{parentName:"p"},"conditional jumps"),"."),(0,r.yg)("p",null,"They are like ",(0,r.yg)("inlineCode",{parentName:"p"},"jmp")," instructions, but the jump is made only when certain conditions are met.\nOtherwise, code execution continues from the next instruction.\nThe general syntax of a conditional jump is"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-asm"},"j[n]<cond> label\n")),(0,r.yg)("p",null,"where the letter ",(0,r.yg)("inlineCode",{parentName:"p"},"n")," is optional and means the jump will be made if the condition is ",(0,r.yg)("strong",{parentName:"p"},"not")," met."),(0,r.yg)("h4",{id:"cmp-and-test"},(0,r.yg)("inlineCode",{parentName:"h4"},"cmp")," and ",(0,r.yg)("inlineCode",{parentName:"h4"},"test")),(0,r.yg)("p",null,"We can use the regular arithmetic instructions that we've learned so far to modify ",(0,r.yg)("inlineCode",{parentName:"p"},"eflags"),".\nBut this has the drawback of also modifying our data.\nIt would be great if we had a means to modify ",(0,r.yg)("inlineCode",{parentName:"p"},"eflags")," without changing the data that we evaluate.\nWe can do this using ",(0,r.yg)("inlineCode",{parentName:"p"},"cmp")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"test"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"cmp dest, src")," modifies ",(0,r.yg)("inlineCode",{parentName:"p"},"eflags")," as if you were ",(0,r.yg)("strong",{parentName:"p"},"subtracting")," ",(0,r.yg)("inlineCode",{parentName:"p"},"src")," from ",(0,r.yg)("inlineCode",{parentName:"p"},"dst"),", but without modifying ",(0,r.yg)("inlineCode",{parentName:"p"},"dst"),".\nThis is great for testing if 2 things are equal, or for testing which is greater or lower."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"test dest, src")," is similar to ",(0,r.yg)("inlineCode",{parentName:"p"},"cmp"),", but modifies ",(0,r.yg)("inlineCode",{parentName:"p"},"eflags")," according to the ",(0,r.yg)("inlineCode",{parentName:"p"},"and")," instruction.\nThis comes in handy when we want to check if a register is 0."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-asm"},"test rax, rax\njz rax_is_zero\n")),(0,r.yg)("p",null,"is equivalent to"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-asm"},"cmp rax, 0\njz rax_is_zero\n")),(0,r.yg)("p",null,"Now let's have a look at some conditional jumps:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Conditional jump"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Meaning"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"jz")," / ",(0,r.yg)("inlineCode",{parentName:"td"},"je")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Jump if the Zero Flag is active")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"jnz")," / ",(0,r.yg)("inlineCode",{parentName:"td"},"jne")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Jump if the Zero Flag is not active")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"cmp rax, rbx"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"j[n]g")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Jump if ",(0,r.yg)("inlineCode",{parentName:"td"},"rax")," is (not) greater (signed) than ",(0,r.yg)("inlineCode",{parentName:"td"},"rbx"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"cmp rax, rbx"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"j[n]a")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Jump if ",(0,r.yg)("inlineCode",{parentName:"td"},"rax")," is (not) greater (unsigned) than ",(0,r.yg)("inlineCode",{parentName:"td"},"rbx"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"cmp rax, rbx"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"j[n]ge")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Jump if ",(0,r.yg)("inlineCode",{parentName:"td"},"rax")," is (not) greater (signed) or equal than ",(0,r.yg)("inlineCode",{parentName:"td"},"rbx"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"cmp rax, rbx"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"j[n]ae")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Jump if ",(0,r.yg)("inlineCode",{parentName:"td"},"rax")," is (not) greater (unsigned) or equal than ",(0,r.yg)("inlineCode",{parentName:"td"},"rbx"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"cmp rax, rbx"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"j[n]l")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Jump if ",(0,r.yg)("inlineCode",{parentName:"td"},"rax")," is (not) lower (signed) than ",(0,r.yg)("inlineCode",{parentName:"td"},"rbx"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"cmp rax, rbx"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"j[n]b")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Jump if ",(0,r.yg)("inlineCode",{parentName:"td"},"rax")," is (not) lower (unsigned) than ",(0,r.yg)("inlineCode",{parentName:"td"},"rbx"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"cmp rax, rbx"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"j[n]le")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Jump if ",(0,r.yg)("inlineCode",{parentName:"td"},"rax")," is (not) lower (signed) or equal than ",(0,r.yg)("inlineCode",{parentName:"td"},"rbx"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"cmp rax, rbx"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"j[n]be")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Jump if ",(0,r.yg)("inlineCode",{parentName:"td"},"rax")," is (not) lower (unsigned) or equal than ",(0,r.yg)("inlineCode",{parentName:"td"},"rbx"))))),(0,r.yg)("h3",{id:"loops"},"Loops"),(0,r.yg)("p",null,"We can create loops simply by combining labels and conditional jumps.\nFor example, ",(0,r.yg)("inlineCode",{parentName:"p"},"for i in range(0, 10)")," from Python is equivalent to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-asm"},"    xor rcx, rcx    ; i = rcx; same as mov rcx, 0\nfor_loop:\n    cmp rcx, 10\n    je done_loop    ; verify i < 10\n\n    ; The body of the for loop.\n\n    inc rcx         ; rcx++\n    jmp for_loop    ; re-evaluate the condition\n\ndone_loop:\n")),(0,r.yg)("p",null,"Or alternatively, we can verify ",(0,r.yg)("inlineCode",{parentName:"p"},"rcx < 10")," at the end of the loop:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-asm"},"    xor rcx, rcx\nfor_loop:\n    ; The body of the for loop.\n\n    inc rcx         ; rcx++\n    cmp rcx, 10\n    jb for_loop    ; verify i < 10\n\n    ; The code here is executed only after the loop ends.\n")))}m.isMDXComponent=!0}}]);