"use strict";(self.webpackChunkessentials_security=self.webpackChunkessentials_security||[]).push([[4562],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=p(t),d=i,y=g["".concat(l,".").concat(d)]||g[d]||c[d]||o;return t?a.createElement(y,r(r({ref:n},m),{},{components:t})):a.createElement(y,r({ref:n},m))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5673:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(8168),i=(t(6540),t(5680));const o={},r="Working with Linux",s={unversionedId:"Scratch Linux/Welcome to Linux/Reading/working-with-linux",id:"Scratch Linux/Welcome to Linux/Reading/working-with-linux",title:"Working with Linux",description:"I Command Thee",source:"@site/docs/Scratch Linux/Welcome to Linux/Reading/working-with-linux.md",sourceDirName:"Scratch Linux/Welcome to Linux/Reading",slug:"/Scratch Linux/Welcome to Linux/Reading/working-with-linux",permalink:"/essentials-security/Scratch Linux/Welcome to Linux/Reading/working-with-linux",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Welcome to Linux",permalink:"/essentials-security/Scratch Linux/Welcome to Linux/Reading/introduction"},next:{title:"Enter Python",permalink:"/essentials-security/Scratch Linux/Welcome to Linux/Reading/enter-python"}},l={},p=[{value:"I Command Thee",id:"i-command-thee",level:2},{value:"The Prompt",id:"the-prompt",level:3},{value:"The File System",id:"the-file-system",level:3},{value:"Traversing the File System",id:"traversing-the-file-system",level:3},{value:"Be a Man",id:"be-a-man",level:3},{value:"I&#39;ll Make My Own Hierarchy",id:"ill-make-my-own-hierarchy",level:3},{value:"Absolute or Relative?",id:"absolute-or-relative",level:3},{value:"Inspecting File Contents",id:"inspecting-file-contents",level:3},{value:"The Root User",id:"the-root-user",level:2},{value:"Processes",id:"processes",level:2},{value:"Scripts",id:"scripts",level:2}],m={toc:p},g="wrapper";function c(e){let{components:n,...o}=e;return(0,i.yg)(g,(0,a.A)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"working-with-linux"},"Working with Linux"),(0,i.yg)("h2",{id:"i-command-thee"},"I Command Thee"),(0,i.yg)("p",null,"The most important shortcut when using a Linux operating system is ",(0,i.yg)("inlineCode",{parentName:"p"},"Ctrl + Alt + t"),".\nTry it now!\nThe dark box that has appeared is called a ",(0,i.yg)("strong",{parentName:"p"},"terminal"),".\nA terminal is a means by which we can tell the operating system what to do for us.\nIn other words, we use the terminal in order to give ",(0,i.yg)("strong",{parentName:"p"},"commands")," to the operating system using a text interface, without the use of a mouse or fancy graphics.\nHence the terminal's alternative name: the ",(0,i.yg)("strong",{parentName:"p"},"Command-Line Interface (CLI)"),".\nWhat you've been using until now, namely navigating the desktop environment by clicking on shortcuts, files and links is called the ",(0,i.yg)("strong",{parentName:"p"},"Graphical User Interface (GUI)"),"."),(0,i.yg)("p",null,"Here are a few useful key shortcuts for navigating the terminal more easily:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"open another terminal window: ",(0,i.yg)("inlineCode",{parentName:"p"},"Shift + Alt + t"),";")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"navigate between open terminal windows: ",(0,i.yg)("inlineCode",{parentName:"p"},"Alt + N"),", where ",(0,i.yg)("inlineCode",{parentName:"p"},"N")," is the index of the tab you want to switch to ",(0,i.yg)("strong",{parentName:"p"},"(starting from 1)"),";")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"close the current window: ",(0,i.yg)("inlineCode",{parentName:"p"},"Ctrl + d"),";")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"copy text from the terminal: ",(0,i.yg)("inlineCode",{parentName:"p"},"Ctrl + Shift + c"),";")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"paste text to the terminal: ",(0,i.yg)("inlineCode",{parentName:"p"},"Ctrl + Shift + v"),"."))),(0,i.yg)("p",null,"It's kind of like a web browser, if you think about it, but with different key combinations.\nDon't worry about memorising them now, though.\nYou'll get plenty of time to practice them in today's activities and in the sessions to come.\nFor more terminal shortcuts, see the section ",(0,i.yg)("a",{parentName:"p",href:"/essentials-security/Scratch%20Linux/Welcome%20to%20Linux/Reading/further-reading"},"More Terminal Tricks")," below."),(0,i.yg)("h3",{id:"the-prompt"},"The Prompt"),(0,i.yg)("p",null,"Note that the line begins with ",(0,i.yg)("inlineCode",{parentName:"p"},"root@kali:~#"),".\nThis is what is called a ",(0,i.yg)("strong",{parentName:"p"},"prompt"),".\nIt's like a sign that the current terminal is waiting for commands to execute."),(0,i.yg)("p",null,"The format of the prompt is the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"user@host_name: current_working_directory #\n")),(0,i.yg)("p",null,"Now let's look at each of these components one by one."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"user")," is the name of the current user.\nIn our case, it says ",(0,i.yg)("inlineCode",{parentName:"li"},"root"),".\nWe'll see what this means in its dedicated ",(0,i.yg)("a",{parentName:"li",href:"#the-root-user"},"section")," below.\nWe chan check that the user truly is ",(0,i.yg)("inlineCode",{parentName:"li"},"root")," using the command ",(0,i.yg)("inlineCode",{parentName:"li"},"whoami"),":")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# whoami\nroot\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"host_name")," is the name of the current system.\nOnce again, we can check if ",(0,i.yg)("inlineCode",{parentName:"li"},"kali")," truly is our hostname by running the command ",(0,i.yg)("inlineCode",{parentName:"li"},"hostname"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# hostname\nkali\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"#")," is a sign that tells us that the prompt is over and that you can start typing commands.\nIt can also be ",(0,i.yg)("inlineCode",{parentName:"p"},"$")," or ",(0,i.yg)("inlineCode",{parentName:"p"},">"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"current_working_directory")," is the ",(0,i.yg)("strong",{parentName:"p"},"path")," in the file system where we are currently located.\nIf this sounds confusing, don't worry.\nWe'll explain the file hierarchy right now."))),(0,i.yg)("h3",{id:"the-file-system"},"The File System"),(0,i.yg)("p",null,"One of the most important things when we're using the CLI and after hacking a remote system is to know where we are in its file hierarchy.\nThis hierarchy is more commonly known as the ",(0,i.yg)("strong",{parentName:"p"},"file system"),".\nThe path separator in Linux is ",(0,i.yg)("inlineCode",{parentName:"p"},"/"),", unlike Windows, where it's ",(0,i.yg)("inlineCode",{parentName:"p"},"\\"),".\nAt the same time, ",(0,i.yg)("inlineCode",{parentName:"p"},"/")," is the root of the file system."),(0,i.yg)("p",null,"The file hierarchy looks like this:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Sample File Hierarchy",src:t(8373).A})),(0,i.yg)("p",null,"Going back to the ",(0,i.yg)("inlineCode",{parentName:"p"},"current_working_directory"),' in the prompt, the terminal can also be seen as a file walker.\nThis means that at each moment it is "placed" in a certain directory, i.e. at some point in the file hierarchy.\nWe can see that the prompt shows ',(0,i.yg)("inlineCode",{parentName:"p"},"~"),".\nThis stands for ",(0,i.yg)("strong",{parentName:"p"},"the home directory of the current user"),".\nOur current user is ",(0,i.yg)("inlineCode",{parentName:"p"},"root")," and its home directory is ",(0,i.yg)("inlineCode",{parentName:"p"},"/root"),".\nLet's check this by running the command ",(0,i.yg)("inlineCode",{parentName:"p"},"pwd")," (print working directory):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# pwd\n/root\n")),(0,i.yg)("h3",{id:"traversing-the-file-system"},"Traversing the File System"),(0,i.yg)("p",null,"Great!\nSo now we know ",(0,i.yg)("strong",{parentName:"p"},"where")," we are in the file system.\nLet's see what's here in ",(0,i.yg)("inlineCode",{parentName:"p"},"/root"),".\nFor this, we use ",(0,i.yg)("inlineCode",{parentName:"p"},"ls"),", that simply lists the contents of the current directory:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# ls\nDesktop    ghidra_9.1.2_PUBLIC  peda      %SystemDrive%\nDocuments  libc-database        Pictures  Templates\nDownloads  Music                Public    Videos\n")),(0,i.yg)("p",null,"That's quite a bit of stuff, but there's no need to look into each of these now.\nLet's focus on navigating the file system for now."),(0,i.yg)("p",null,"Almost every linux command, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"ls"),", can take various parameters that alter its behaviour.\n",(0,i.yg)("inlineCode",{parentName:"p"},"ls")," for instance can list any given directory, not just the current directory.\nThis requires the use of the path to list as a parameter:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# ls /  # list the contents of the / (root) directory\n0     dev   initrd.img      lib32   lost+found  proc  sbin  tmp  vmlinuz\nbin   etc   initrd.img.old  lib64   media       root  srv   usr  vmlinuz.old\nboot  home  lib             libx32  opt         run   sys   var\nroot@kali:~# ls /media  # list the contents of the /media directory\ncdrom  cdrom0\n")),(0,i.yg)("p",null,"Notice the second ",(0,i.yg)("inlineCode",{parentName:"p"},"#")," symbol in each command.\nThis one is different from the one in the prompt.\nIt marks the beginning of a comment, just like ",(0,i.yg)("inlineCode",{parentName:"p"},"//")," does in C."),(0,i.yg)("p",null,"So we can now see what a given directory contains, but we're still stuck in ",(0,i.yg)("inlineCode",{parentName:"p"},"/root"),".\nLet's change our current directory. For this, we use ",(0,i.yg)("inlineCode",{parentName:"p"},"cd"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# ls libc-database/  # list the contents of libc-database\nadd  common  db  dump  find  get  identify  README.md  tmp\n\nroot@kali:~# cd libc-database/  # move to libc-database\n\nroot@kali:~/libc-database# ls  # list the contetns of the current directory (now libc-database)\nadd  common  db  dump  find  get  identify  README.md  tmp\n\nroot@kali:~/libc-database# pwd  # check that we really are in libc-database\n/root/libc-database\n")),(0,i.yg)("p",null,"Notice the prompt change to ",(0,i.yg)("inlineCode",{parentName:"p"},"~/libc-database")," after ",(0,i.yg)("inlineCode",{parentName:"p"},"cd")," because the current directory changes."),(0,i.yg)("p",null,"Stop!\n",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Tab")," Time!"),"\nAlmost every CLI is capable of autocompletion and that of Linux is no different.\nType ",(0,i.yg)("inlineCode",{parentName:"p"},"cd l")," and then press ",(0,i.yg)("inlineCode",{parentName:"p"},"Tab"),".\nNotice that the rest of the directory's name has been autofilled: ",(0,i.yg)("inlineCode",{parentName:"p"},"cd libc-database/"),".\nNow type ",(0,i.yg)("inlineCode",{parentName:"p"},"cd D")," and press ",(0,i.yg)("inlineCode",{parentName:"p"},"Tab")," ",(0,i.yg)("strong",{parentName:"p"},"twice"),".\nNotice that 3 options have appeared.\nWhat happened is that the terminal found 3 directories that start with ",(0,i.yg)("inlineCode",{parentName:"p"},"D")," and is asking you for more information.\nType ",(0,i.yg)("inlineCode",{parentName:"p"},"e")," and press ",(0,i.yg)("inlineCode",{parentName:"p"},"Tab")," once more.\nNow the terminal sees there is only one option, ",(0,i.yg)("inlineCode",{parentName:"p"},"Desktop/")," and autofills it for you."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Tab")," allows you to use the terminal very efficiently.\nIt's one of the most powerful tools at our disposal, so remember to abuse it as much as possible.\n",(0,i.yg)("strong",{parentName:"p"},"Keep in mind: there is no such thing as pressing ",(0,i.yg)("inlineCode",{parentName:"strong"},"Tab")," too many times"),"."),(0,i.yg)("p",null,"Now back to our directories.\nSo we're in ",(0,i.yg)("inlineCode",{parentName:"p"},"libc-database"),", but how do we get back to ",(0,i.yg)("inlineCode",{parentName:"p"},"/root"),"?\nSimilarly to a browser, the parent of any directory can be accessed using ",(0,i.yg)("inlineCode",{parentName:"p"},"..")," like so:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~/libc-database# ls ..\nDesktop    ghidra_9.1.2_PUBLIC  peda      %SystemDrive%\nDocuments  libc-database        Pictures  Templates\nDownloads  Music                Public    Videos\n\nroot@kali:~/libc-database# cd ..\n\nroot@kali:~# ls\nDesktop    ghidra_9.1.2_PUBLIC  peda      %SystemDrive%\nDocuments  libc-database        Pictures  Templates\nDownloads  Music                Public    Videos\n\nroot@kali:~# pwd\n/root\n")),(0,i.yg)("p",null,"Makes sense?\nAlright.\nSo now we can move anywhere.\nWe can chain paths using the separator (",(0,i.yg)("inlineCode",{parentName:"p"},"/"),"), even adding ",(0,i.yg)("inlineCode",{parentName:"p"},".."),", like so:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~/libc-database# cd ../..  # we are in /root/libc-database\n\nroot@kali:/# ls  # now we are 2 levels up, in /\n0     dev   initrd.img      lib32   lost+found  proc  sbin  tmp  vmlinuz\nbin   etc   initrd.img.old  lib64   media       root  srv   usr  vmlinuz.old\nboot  home  lib             libx32  opt         run   sys   var\n")),(0,i.yg)("h3",{id:"be-a-man"},"Be a Man"),(0,i.yg)("p",null,"Almost every Linux command comes with extensive documentation.\nThis documentation can be read using ",(0,i.yg)("inlineCode",{parentName:"p"},"man <command>"),".\nLet's try reading the manual page for the ",(0,i.yg)("inlineCode",{parentName:"p"},"ls")," command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# man ls\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"\u2191")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"\u2193")," to scroll up and down.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"Space")," to scroll one whole page down.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"/<string>"),' to search for any string.\nTry searching for the string "recursive".\nUse ',(0,i.yg)("inlineCode",{parentName:"p"},"n")," to navigate to the next occurrence of your string and ",(0,i.yg)("inlineCode",{parentName:"p"},"Shfit + n")," to navigate to the previous one.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"q")," to quit the manual"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Task 1:")," Use the parameter you've just found to recursively list the contents of the ",(0,i.yg)("inlineCode",{parentName:"p"},"/root/libc-database")," directory, using both relative and absolute paths."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Task 2:")," Use the man page for ",(0,i.yg)("inlineCode",{parentName:"p"},"ls")," again to learn how to view the contents of a directory in the form of a ",(0,i.yg)("strong",{parentName:"p"},"long listing"),".\nThis parameter will show you more details regarding a file, such as its type, size, owner, access rights, the date when it was last modified etc.\nTest it on the file ",(0,i.yg)("inlineCode",{parentName:"p"},"/root/libc-database/README.md")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Task 3:")," Use the man page for ",(0,i.yg)("inlineCode",{parentName:"p"},"ls")," to find out what parameter to pass to ",(0,i.yg)("inlineCode",{parentName:"p"},"ls")," to list ",(0,i.yg)("strong",{parentName:"p"},"all")," entries in a directory.\nThis option will also show you the ",(0,i.yg)("strong",{parentName:"p"},"hidden")," files in that directory.\nThese files start with ",(0,i.yg)("inlineCode",{parentName:"p"},"."),".\nTest it on the ",(0,i.yg)("inlineCode",{parentName:"p"},"~")," directory.\nNotice our friend ",(0,i.yg)("inlineCode",{parentName:"p"},"..")," is also present."),(0,i.yg)("h3",{id:"ill-make-my-own-hierarchy"},"I'll Make My Own Hierarchy"),(0,i.yg)("p",null,"In order to create directories we use the ",(0,i.yg)("inlineCode",{parentName:"p"},"mkdir")," command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# mkdir demo\n\nroot@kali:~# ls\ndemo     Documents  ghidra_9.1.2_PUBLIC  Music  Pictures  %SystemDrive%  Videos\nDesktop  Downloads  libc-database        peda   Public    Templates\n\nroot@kali:~# cd demo\n\nroot@kali:~/demo# \n")),(0,i.yg)("p",null,"Now let's create a file in our new directory.\nFor this, we use the ",(0,i.yg)("inlineCode",{parentName:"p"},"touch")," command.\nIt creates an ",(0,i.yg)("strong",{parentName:"p"},"empty")," file."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~/demo# touch demo-file\n\nroot@kali:~/demo# ls\ndemo-file\n\nroot@kali:~/demo# cat demo-file  # The file is empty, so nothing is printed.\n\nroot@kali:~/demo# touch demo-file2  # Just because we can.\n\nroot@kali:~/demo# ls\ndemo-file  demo-file2\n")),(0,i.yg)("p",null,"In order to remove a file, we use the ",(0,i.yg)("inlineCode",{parentName:"p"},"rm")," command."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~/demo# rm demo-file2\n\nroot@kali:~/demo# ls\ndemo-file\n")),(0,i.yg)("p",null,"Now let's try to remove our directory the same way."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# rm demo\nrm: cannot remove 'demo': Is a directory\n")),(0,i.yg)("p",null,"Deleting a directory requires that an extra parameter be passed to ",(0,i.yg)("inlineCode",{parentName:"p"},"rm"),".\nFind it in ",(0,i.yg)("inlineCode",{parentName:"p"},"rm"),"'s ",(0,i.yg)("inlineCode",{parentName:"p"},"man"),' page.\nLook for the string "recursively".\nYup, it\'s ',(0,i.yg)("inlineCode",{parentName:"p"},"-r")," (or ",(0,i.yg)("inlineCode",{parentName:"p"},"-R"),", or ",(0,i.yg)("inlineCode",{parentName:"p"},"--recursive"),"; all three work)."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# rm -r demo/\n\nroot@kali:~# ls\nDesktop    ghidra_9.1.2_PUBLIC  peda      %SystemDrive%\nDocuments  libc-database        Pictures  Templates\nDownloads  Music                Public    Videos\n")),(0,i.yg)("p",null,"All clean!"),(0,i.yg)("h3",{id:"absolute-or-relative"},"Absolute or Relative?"),(0,i.yg)("p",null,"There are two ways of expressing a file path: relative and absolute.\n",(0,i.yg)("strong",{parentName:"p"},"Relative")," paths are called so because they refer to the current directory."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# cd libc-database/\n")),(0,i.yg)("p",null,"This command  uses a ",(0,i.yg)("strong",{parentName:"p"},"relative")," path, as ",(0,i.yg)("inlineCode",{parentName:"p"},"libc-database")," only exists in ",(0,i.yg)("inlineCode",{parentName:"p"},"/root")," (",(0,i.yg)("inlineCode",{parentName:"p"},"~"),").\nIf we were to run it from ",(0,i.yg)("inlineCode",{parentName:"p"},"/bin")," for instance, it wouldn't work because there is no ",(0,i.yg)("inlineCode",{parentName:"p"},"libc-datbase")," directory in ",(0,i.yg)("inlineCode",{parentName:"p"},"/bin"),"."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Absolute")," paths however can be used from anywhere in the filesystem.\nThey contain the full path to the file, starting from the root of the file system (",(0,i.yg)("inlineCode",{parentName:"p"},"/"),"):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:/lib/x86_64-linux-gnu/security# cd /root/libc-database/\nroot@kali:~/libc-database# pwd\n/root/libc-database\n")),(0,i.yg)("p",null,"In the snippet above, we were able to navigate to ",(0,i.yg)("inlineCode",{parentName:"p"},"/root/libc-database")," from somewhere completely different in the hierarchy."),(0,i.yg)("p",null,"Let's get some practice:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Navigate to ",(0,i.yg)("inlineCode",{parentName:"p"},"/usr/lib/dpkg/methods/apt/"),", but don't just copy and paste this path.\nUse ",(0,i.yg)("inlineCode",{parentName:"p"},"Tab")," and you'll barely have to type anything.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Now get back to ",(0,i.yg)("inlineCode",{parentName:"p"},"root"),"'s home using the home directory shortcut.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Navigate to ",(0,i.yg)("inlineCode",{parentName:"p"},"~/ghidra_9.1.2_PUBLIC/docs/images")," using its absolute path.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Now move 2 levels up the hierarchy without retyping the path.\nUse ",(0,i.yg)("inlineCode",{parentName:"p"},".."),"."))),(0,i.yg)("h3",{id:"inspecting-file-contents"},"Inspecting File Contents"),(0,i.yg)("p",null,"Up to this point, we've learned how to traverse the file system.\nNow we need to be able to ",(0,i.yg)("em",{parentName:"p"},"inspect")," the files themselves.\nThe simplest ways to view the contents of a file in the terminal is the ",(0,i.yg)("inlineCode",{parentName:"p"},"cat")," command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# cat /etc/hostname \nkali\n")),(0,i.yg)("p",null,"As you've probably guessed, ",(0,i.yg)("inlineCode",{parentName:"p"},"/etc/hostname")," is the file where the machine's hostname is stored."),(0,i.yg)("p",null,"Feel free to consult ",(0,i.yg)("inlineCode",{parentName:"p"},"cat"),"'s man page for further details about the command.\nWe'll introduce more advanced means of outputting the contents of a file in the session dedicated to ",(0,i.yg)("a",{parentName:"p",href:"../data-representation"},"Data Representation"),".\nStay tuned!"),(0,i.yg)("h2",{id:"the-root-user"},"The Root User"),(0,i.yg)("p",null,"As we said previously, the prompt may indicate the current user, in our case ",(0,i.yg)("inlineCode",{parentName:"p"},"root"),".\nBut what exactly is this user?\nWell, Linux systems admit multiple levels of user privileges.\nThese privileges refer to the actions a certain user is allowed to perform, such as installing other apps or reading various files."),(0,i.yg)("p",null,"But among all users, there is ",(0,i.yg)("em",{parentName:"p"},"one to rule them all"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"root"),".\nSimilar to the ",(0,i.yg)("inlineCode",{parentName:"p"},"Administrator")," user in Windows, ",(0,i.yg)("inlineCode",{parentName:"p"},"root")," has no restrictions to the actions he may perform.\nThis is the default user in Kali Linux, so you don't need to worry about permissions.\nHowever, when logging into the remote servers we provide for some of the CTF challenges below, the user will be ",(0,i.yg)("inlineCode",{parentName:"p"},"ctf")," and it ",(0,i.yg)("strong",{parentName:"p"},"does")," have limited permissions."),(0,i.yg)("h2",{id:"processes"},"Processes"),(0,i.yg)("p",null,"Now that we've learned how to use the terminal, let's take a look at the desktop.\nA few common apps are pinned to the left taskbar.\nAny application that is installed on a system is called a ",(0,i.yg)("strong",{parentName:"p"},"program"),".\nOne such program is the web browser ",(0,i.yg)("strong",{parentName:"p"},"Firefox"),"\nBy clicking the Firefox icon, the ",(0,i.yg)("strong",{parentName:"p"},"program")," starts to run.\nAny running program is called a ",(0,i.yg)("strong",{parentName:"p"},"process"),"."),(0,i.yg)("p",null,"Let's test this by learning a new command.\nWith Firefox closed, run the command ",(0,i.yg)("inlineCode",{parentName:"p"},"ps"),".\nUse ",(0,i.yg)("inlineCode",{parentName:"p"},"man")," to learn what it does.\nIf you use it as-is in the terminal, it displays two running processes: ",(0,i.yg)("inlineCode",{parentName:"p"},"bash")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"ps")," itself:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# ps\n    PID TTY          TIME CMD\n   1929 pts/0    00:00:00 bash\n   3304 pts/0    00:00:00 ps\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"bash")," stands for ",(0,i.yg)("em",{parentName:"p"},"Bourne-Again Shell")," and is the command interpreter used by the terminal.\nIn other words, it's what reads your input and executes the commands you type.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"You already know what ",(0,i.yg)("inlineCode",{parentName:"p"},"ps")," is.\nBut why is it here?\nYou see, in order for ",(0,i.yg)("inlineCode",{parentName:"p"},"ps")," to start scanning for what processes are running, it needs to be running itself, which means it's inevitable that it finds itself while scanning."))),(0,i.yg)("p",null,"Now open Firefox from the side bar and run ",(0,i.yg)("inlineCode",{parentName:"p"},"ps")," again:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# ps\n    PID TTY          TIME CMD\n   1929 pts/0    00:00:00 bash\n   3304 pts/0    00:00:00 ps\n")),(0,i.yg)("p",null,"Where is Firefox?\nWell, when run without parameters, ",(0,i.yg)("inlineCode",{parentName:"p"},"ps")," displays the processes that are running ",(0,i.yg)("strong",{parentName:"p"},"inside the current terminal"),", i.e. that have been started from this terminal.\nFirefox was started from the GUI, so it has nothing to do with our terminal.\nUse ",(0,i.yg)("inlineCode",{parentName:"p"},"man")," to learn how to list the ",(0,i.yg)("strong",{parentName:"p"},"full")," output of ",(0,i.yg)("strong",{parentName:"p"},"all")," processes in the system."),(0,i.yg)("p",null,"Hopefully you haven't cheated and did find the ",(0,i.yg)("inlineCode",{parentName:"p"},"-A")," (or ",(0,i.yg)("inlineCode",{parentName:"p"},"-e"),") and ",(0,i.yg)("inlineCode",{parentName:"p"},"-f")," options yourself.\nNow the output is rather huge, but we only care about the final lines:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~# ps -A -f\n[...]\nroot        3367    1612 50 15:54 ?        00:00:01 /usr/lib/firefox-esr/firefox-esr\nroot        3444    3367 20 15:54 ?        00:00:00 /usr/lib/firefox-esr/firefox-esr -contentproc -childID 1 -isForBrowser -prefsLen 1 -prefMapSize 183434 -parentBuildID 20200527211442 -greomni /usr/lib/firefox-esr/omni.ja -appomni /usr/l\nroot        3498    3367 14 15:54 ?        00:00:00 /usr/lib/firefox-esr/firefox-esr -contentproc -childID 2 -isForBrowser -prefsLen 5670 -prefMapSize 183434 -parentBuildID 20200527211442 -greomni /usr/lib/firefox-esr/omni.ja -appomni /us\nroot        3549    3367 35 15:54 ?        00:00:00 /usr/lib/firefox-esr/firefox-esr -contentproc -childID 3 -isForBrowser -prefsLen 6402 -prefMapSize 183434 -parentBuildID 20200527211442 -greomni /usr/lib/firefox-esr/omni.ja -appomni /us\nroot        3590    3367 10 15:54 ?        00:00:00 /usr/lib/firefox-esr/firefox-esr -contentproc -childID 4 -isForBrowser -prefsLen 6402 -prefMapSize 183434 -parentBuildID 20200527211442 -greomni /usr/lib/firefox-esr/omni.ja -appomni /us\nroot        3623    1929  0 15:54 pts/0    00:00:00 ps -A -f\n")),(0,i.yg)("p",null,"Great success!\nWe have seen Firefox move from being a simple program to being a running process.\nIn addition, we've learned a new command that is useful for inspecting what processes might be running on a system.\nOnce you hack into a remote system, you can use ",(0,i.yg)("inlineCode",{parentName:"p"},"ps")," to inspect what potentially exploitable processes are there."),(0,i.yg)("h2",{id:"scripts"},"Scripts"),(0,i.yg)("p",null,"It is often convenient to group together a set of instructions so that you don't have to type them separately each time you want to make use of their combined functionality.\nFor this purpose, you can use Bash scripts.\nThey are text files that simply contain Bash commands.\nBash is also a programming language that comes with ",(0,i.yg)("inlineCode",{parentName:"p"},"if")," statements, ",(0,i.yg)("inlineCode",{parentName:"p"},"for")," loops, functions and more, but we won't be needing those right now."),(0,i.yg)("p",null,"Bash scripts typically bear the extension ",(0,i.yg)("inlineCode",{parentName:"p"},".sh"),", but this is by no means mandatory.\nTake some time to take a look at and run the Bash script in ",(0,i.yg)("inlineCode",{parentName:"p"},"activities/demo-bash/demo.sh"),".\nYou can run it like so:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"root@kali:~/essentials/welcome-to-linux/activities/demo-bash# sh demo.sh\n")))}c.isMDXComponent=!0},8373:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/sample_file_hierarchy-a1e4505765a9147d9c0c1047132bfc01.svg"}}]);