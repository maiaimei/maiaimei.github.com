(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{665:function(s,a,n){"use strict";n.r(a);var e=n(7),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"在linux上编译jdk17源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在linux上编译jdk17源码"}},[s._v("#")]),s._v(" 在Linux上编译JDK17源码")]),s._v(" "),n("p",[s._v("安装Ubuntu 18")]),s._v(" "),n("p",[s._v("下载JDK17："),n("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.oracle.com/java/technologies/downloads/"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("下载JDK17源码包："),n("a",{attrs:{href:"https://jdk.java.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://jdk.java.net/"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("解压JDK17源码包")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" openjdk-17+35_src.zip\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("（可选步骤）卸载系统自带的JDK或之前安装的JDK，确保Boot JDK为16或17")]),s._v(" "),n("p",[s._v("安装jdk17，解压即可")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf jdk-17_linux-x64_bin.tar.gz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("安装JRE，主要是利用jlink去生成")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" jdk17解压目录\n./bin/jlink --module-path jmods --add-modules java.desktop --output jre\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("配置环境变量，修改文件")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("添加以下内容")]),s._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("JAVA_HOME")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/opt/jdk-17.0.7")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("CLASSPATH")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("$JAVA_HOME/lib:$JAVA_HOME/jre/lib")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("PATH")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("$PATH:$JAVA_HOME/bin:$JAVA_HOME/jre/bin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("PATH CLASSPATH JAVA_HOME")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("使环境变量生效")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("安装编译器gcc/g++/clang")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("gcc -v\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("g++ -v\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" g++ -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("clang --version\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" clang -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一次性安装gcc/g++/clang")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc g++ clang -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("安装make/autoconf/automake")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" --version\nautoconf --version\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" autoconf automake -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("进去JDK17源码包解压目录")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" openjdk\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("配置，用来生成 Makefile")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" configure\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("安装相关类库")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Could not find X11 libraries")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libx11-dev libxext-dev libxrandr-dev libxrender-dev libxtst-dev libxt-dev -y\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Could not find cups!")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libcups2-dev -y\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Could not find fontconfig!")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libfontconfig1-dev -y\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Could not find alsa!")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libasound2-dev -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("全量编译")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" all\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("测试编译结果")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("/opt/openjdk/build/linux-x86_64-server-release/jdk/bin/java -version\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("编译成品在/opt/openjdk/build/linux-x86_64-server-release/images/jdk，")]),s._v(" "),n("p",[s._v("相当于"),n("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.oracle.com/java/technologies/downloads/"),n("OutboundLink")],1),s._v("下载的免安装包")]),s._v(" "),n("h2",{attrs:{id:"在windows上编译jdk17源码-未通过"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在windows上编译jdk17源码-未通过"}},[s._v("#")]),s._v(" 在Windows上编译JDK17源码（未通过）")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /cygdrive/e/code/java-source-learning/jdk17/openjdk\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --with-toolchain-version：指定Microsoft Visual Studio版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --with-tools-dir：指定Microsoft Visual Studio C的库文件位置，这里使用转义路径会出问题")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" configure --with-toolchain-version"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" --with-tools-dir"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/cygdrive/d/MicrosoftVisualStudio/2019/Community/VC/Auxiliary\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);