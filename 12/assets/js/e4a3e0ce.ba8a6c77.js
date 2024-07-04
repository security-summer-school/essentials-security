"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[4795],{5680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>g});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},y=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return t?a.createElement(g,r(r({ref:n},y),{},{components:t})):a.createElement(g,r({ref:n},y))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8651:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(8168),i=(t(6540),t(5680));const o={},r="Enter Python",s={unversionedId:"Scratch Linux/Welcome to Linux/Reading/enter-python",id:"Scratch Linux/Welcome to Linux/Reading/enter-python",title:"Enter Python",description:"The Basics",source:"@site/docs/Scratch Linux/Welcome to Linux/Reading/enter-python.md",sourceDirName:"Scratch Linux/Welcome to Linux/Reading",slug:"/Scratch Linux/Welcome to Linux/Reading/enter-python",permalink:"/essentials-security/12/Scratch Linux/Welcome to Linux/Reading/enter-python",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Working with Linux",permalink:"/essentials-security/12/Scratch Linux/Welcome to Linux/Reading/working-with-linux"},next:{title:"Summary",permalink:"/essentials-security/12/Scratch Linux/Welcome to Linux/Reading/summary"}},l={},p=[{value:"The Basics",id:"the-basics",level:2},{value:"Variables",id:"variables",level:3},{value:"If Statements",id:"if-statements",level:3},{value:"Loops",id:"loops",level:3},{value:"Functions",id:"functions",level:3},{value:"Data Structures",id:"data-structures",level:2},{value:"Lists",id:"lists",level:3},{value:"Dictionaries",id:"dictionaries",level:3},{value:"Working with Files",id:"working-with-files",level:2},{value:"Strings or Bytes?",id:"strings-or-bytes",level:3}],y={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,a.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"enter-python"},"Enter Python"),(0,i.yg)("h2",{id:"the-basics"},"The Basics"),(0,i.yg)("p",null,"Python is a programming language designed with simplicity in mind.\nIt's meant to be simple and fast to read, understand and write.\nThis is evident even from the language's syntax."),(0,i.yg)("p",null,"To get accustomed to Python, take a look at the code in the ",(0,i.yg)("inlineCode",{parentName:"p"},"activities/demo-python")," directory.\nFeel free to fiddle with any of the code snippets.\nAdd your own, try things out and experiment!"),(0,i.yg)("p",null,"In order to run a Python script, just type the name of the script preceded by ",(0,i.yg)("inlineCode",{parentName:"p"},"python3"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~/essentials/welcome-to-linux/activities/demo-python# python3 variables.py\n")),(0,i.yg)("h3",{id:"variables"},"Variables"),(0,i.yg)("p",null,"Let's start with ",(0,i.yg)("a",{parentName:"p",href:"./activities/demo-python/variables.py"},"variables.py"),".\nThis file explains how variables such as integers, floats and strings work in Python.\nIt also introduces the ",(0,i.yg)("inlineCode",{parentName:"p"},"print")," function.\nInspect and run the code.\nNote that, unlike C code, in Python there is no need for a ",(0,i.yg)("inlineCode",{parentName:"p"},";")," at the end of each line."),(0,i.yg)("h3",{id:"if-statements"},"If Statements"),(0,i.yg)("p",null,"Now that we know how to create and print variables, let's learn some more of the language's syntax, starting with the ",(0,i.yg)("inlineCode",{parentName:"p"},"if")," keyword.\nA typical ",(0,i.yg)("inlineCode",{parentName:"p"},"if")," statement looks like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"if condition:\n    # run some code\n")),(0,i.yg)("p",null,"Notice that there are no ",(0,i.yg)("inlineCode",{parentName:"p"},"{}"),", like you would use in C.\nThis is because Python relies on ",(0,i.yg)("strong",{parentName:"p"},"indentation")," to determine which instructions make up the body of the ",(0,i.yg)("inlineCode",{parentName:"p"},"if")," statement and which don't.\nMoreover, a colon (",(0,i.yg)("inlineCode",{parentName:"p"},":"),") needs to be used after every ",(0,i.yg)("inlineCode",{parentName:"p"},"if"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"for")," or function declaration, as we'll see shortly.\nTo make things clearer, check out and run the code in ",(0,i.yg)("inlineCode",{parentName:"p"},"activities/demo-python/if.py"),"."),(0,i.yg)("p",null,"As stated above, this code would not work because the ",(0,i.yg)("inlineCode",{parentName:"p"},"print")," instruction is not correctly indented and the ",(0,i.yg)("inlineCode",{parentName:"p"},"if")," statement appears to have no body:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"if a == 0:\n    print('This is an incorrect if statement. You will get an IndentationError.')\n")),(0,i.yg)("p",null,"But don't take our word for granted.\nRun this code too!"),(0,i.yg)("h3",{id:"loops"},"Loops"),(0,i.yg)("p",null,"Loops, be they ",(0,i.yg)("inlineCode",{parentName:"p"},"for")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"while")," loops, use the same syntax as ",(0,i.yg)("inlineCode",{parentName:"p"},"if")," statements:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"for var in set_of_objects:\n    # for body\n\nwhile condition:\n    # while body\n")),(0,i.yg)("p",null,"Once again, note the usage of the ",(0,i.yg)("inlineCode",{parentName:"p"},":")," after each loop declaration and the indentation of their bodies."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"in")," keyword present in the ",(0,i.yg)("inlineCode",{parentName:"p"},"for")," loop above signifies that the ",(0,i.yg)("inlineCode",{parentName:"p"},"var")," variable will act as an ",(0,i.yg)("strong",{parentName:"p"},"iterator"),".\nAt every step of the loop, ",(0,i.yg)("inlineCode",{parentName:"p"},"var")," will be assigned to each consecutive element of  the collection ",(0,i.yg)("inlineCode",{parentName:"p"},"set_of_objects"),"."),(0,i.yg)("p",null,"As before, take a look at, run and play with the code in ",(0,i.yg)("inlineCode",{parentName:"p"},"activities/01-demo-python/loops.py")," until you feel you get the hang of ",(0,i.yg)("inlineCode",{parentName:"p"},"for"),"s and ",(0,i.yg)("inlineCode",{parentName:"p"},"while"),"s."),(0,i.yg)("h3",{id:"functions"},"Functions"),(0,i.yg)("p",null,"You've already seen the ",(0,i.yg)("inlineCode",{parentName:"p"},"print"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"range")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"reversed")," functions.\nIt is natural that we now try to create our own functions.\nThey follow the same syntax as before:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"# As expected, the types of the parameters need not be specified.\n# But you can do it if you want/need to.\ndef func(param1, param2):\n    # function body\n")),(0,i.yg)("p",null,"We can also specify a ",(0,i.yg)("strong",{parentName:"p"},"default")," value that a parameter can take when none is specified:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"def foo(param1, param2=5):  # param2 defaults to 5 when not specified\n    # function body\n\n# Both of these function calls are correct\nfoo('whatever')  # Here param2 = 5, by default\nfoo('whatever', 2)\n")),(0,i.yg)("p",null,"By now, you already know what to do.\nThe demo for Python functions is in ",(0,i.yg)("inlineCode",{parentName:"p"},"activities/demo-python/functions.py"),".\nGo to town on it!"),(0,i.yg)("h2",{id:"data-structures"},"Data Structures"),(0,i.yg)("p",null,"Python comes equipped with built-in data structures, such as lists and dictionaries."),(0,i.yg)("h3",{id:"lists"},"Lists"),(0,i.yg)("p",null,"Lists are indexed arrays that can store any type of data.\nYou can create a list by specifying its elements enclosed in ",(0,i.yg)("inlineCode",{parentName:"p"},"[]"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"lst = [1, 'some string', True, 2.9]\n")),(0,i.yg)("p",null,"Accessing the lists elements is similar to C: ",(0,i.yg)("inlineCode",{parentName:"p"},"lst[0]"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"lst[1]")," and so on.\nYes, lists in Python are indexed from 0."),(0,i.yg)("p",null,"Now go ahead and get some practice with lists by using the ",(0,i.yg)("inlineCode",{parentName:"p"},"activities/demo-python/lists.py")," script."),(0,i.yg)("h3",{id:"dictionaries"},"Dictionaries"),(0,i.yg)("p",null,"Conceptually, dictionaries are mappings between a set of ",(0,i.yg)("strong",{parentName:"p"},"keys")," and a set of ",(0,i.yg)("strong",{parentName:"p"},"values"),".\nThis means that ",(0,i.yg)("strong",{parentName:"p"},"each key")," is associated to ",(0,i.yg)("strong",{parentName:"p"},"one value"),".\nThe opposite does not always hold true.\nThus, each ",(0,i.yg)("strong",{parentName:"p"},"key")," in a dictionary is unique, but there is no such rule for ",(0,i.yg)("strong",{parentName:"p"},"values"),"."),(0,i.yg)("p",null,"Let's construct a dictionary and see what it does:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'my_dict = {\n    "SSS": "Rullz",\n    "Essentials": 10,\n    True: 0.2,\n    2.2: 99\n}\n\n')),(0,i.yg)("p",null,"As you can see, neither the keys, nor the values in a dictionary need to be of the same type."),(0,i.yg)("p",null,"In order to access the value associated to a key, the syntax is the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"print(my_dict['SSS'])  # Will print \"Rullz\"\n")),(0,i.yg)("h2",{id:"working-with-files"},"Working with Files"),(0,i.yg)("p",null,"Reading input from and writing output to is essential for any programmer.\nWe'll make heavy use of this feature in the future."),(0,i.yg)("p",null,"The main function for interacting with files is ",(0,i.yg)("inlineCode",{parentName:"p"},"open"),".\nIts simplified signature is the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"def open(filename, mode='rt'):\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"filename")," parameter is self-evident.\nThe ",(0,i.yg)("inlineCode",{parentName:"p"},"mode"),' however, answers the question: "What do you want to do with this file?"\nThe ',(0,i.yg)("inlineCode",{parentName:"p"},"mode")," parameter is a string, where each character has its own meaning.\nThe list of the most common characters is specified in ",(0,i.yg)("a",{parentName:"p",href:"https://docs.python.org/3/library/functions.html#open"},"Python's official documentation"),"."),(0,i.yg)("p",null,"Use ",(0,i.yg)("a",{parentName:"p",href:"https://docs.python.org"},"https://docs.python.org")," whenever you need to look up some of Python's features.\nFor a quick intro into handling files in Python, consult the ",(0,i.yg)("inlineCode",{parentName:"p"},"activities/demo-python/files.py")," script.\nRun it, and then check the contents of the ",(0,i.yg)("inlineCode",{parentName:"p"},"output.txt")," file it creates."),(0,i.yg)("h3",{id:"strings-or-bytes"},"Strings or Bytes?"),(0,i.yg)("p",null,"In the previous section, we saw how we can read ",(0,i.yg)("strong",{parentName:"p"},"strings")," from and write them to files.\nHowever, the more frequent way of interacting with files is by using ",(0,i.yg)("strong",{parentName:"p"},"byte arrays"),"."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Byte arrays")," are very similar to strings, supporting nearly the same operations, but differ in representation.\nWhile strings can also encode non-ASCII characters, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"\xe4"),", or even emoji, bytes are restricted to ASCII characters.\nFor this reason, one letter in a byte array is exactly one byte in size, whereas a letter in a string could use more space, depending on its encoding.\nAs a result, the main reason they exist is to process data, regardless of encoding.\nNetwork packet data, binary file contents, images are all to be processed as bytes, not as strings."),(0,i.yg)("p",null,"You can create a byte array just like you would create a regular string ",(0,i.yg)("strong",{parentName:"p"},"and adding a ",(0,i.yg)("inlineCode",{parentName:"strong"},"b")," in front"),", like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"my_bytes = b'SSS Rulz, but in bytes!'\n")),(0,i.yg)("p",null,"As always, the demo ",(0,i.yg)("inlineCode",{parentName:"p"},"activities/demo-python/strings_bytes.py")," provides a more in-depth presentation of byte array and string operations.\nGo take a look."))}d.isMDXComponent=!0}}]);