(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{563:function(s,a,t){s.exports=t.p+"assets/img/20220120103041.62c7aa90.jpg"},564:function(s,a,t){s.exports=t.p+"assets/img/20220120115815.1d7b67ff.jpg"},565:function(s,a,t){s.exports=t.p+"assets/img/20211009231107.c78f06ad.png"},652:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"windows系统安装jdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows系统安装jdk"}},[s._v("#")]),s._v(" Windows系统安装JDK")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("下载["),n("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/#license-lightbox",target:"_blank",rel:"noopener noreferrer"}},[s._v("jdk-8u321-windows-x64.exe"),n("OutboundLink")],1),s._v("]"),n("img",{attrs:{src:t(563),alt:""}})])]),s._v(" "),n("li",[n("p",[s._v("双击运行，安装到指定路径")])]),s._v(" "),n("li",[n("p",[s._v("配置环境变量")])])]),s._v(" "),n("p",[s._v("​\t\t3.1 新建 JAVA_HOME 环境变量，指向JDK安装目录")]),s._v(" "),n("p",[s._v("​\t\t3.2 编辑 Path 环境变量，添加 %JAVA_HOME%\\bin")]),s._v(" "),n("p",[s._v("​\t\t3.3 如果是 JDK8 ，Path环境变量需要添加 %JAVA_HOME%\\bin 和 %JAVA_HOME%\\jre\\bin")]),s._v(" "),n("h2",{attrs:{id:"linux系统安装jdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux系统安装jdk"}},[s._v("#")]),s._v(" Linux系统安装JDK")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("下载"),n("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/#license-lightbox",target:"_blank",rel:"noopener noreferrer"}},[s._v("jdk-8u321-linux-x64.rpm"),n("OutboundLink")],1),s._v("或"),n("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/#license-lightbox",target:"_blank",rel:"noopener noreferrer"}},[s._v("jdk-8u321-linux-x64.tar.gz"),n("OutboundLink")],1),s._v("，并上传到/usr/local")]),s._v(" "),n("p",[n("img",{attrs:{src:t(564),alt:""}})])]),s._v(" "),n("li",[n("p",[s._v("卸载JDK")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否已经安装jdk")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" jdk\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载默认安装的jdk")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e --nodeps jdk名称\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e --nodeps java-1.7.0-openjdk-headless-1.7.0.261-2.6.22.2.el7_8.x86_64\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e --nodeps copy-jdk-configs-3.3-10.el7_5.noarch\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e --nodeps java-1.8.0-openjdk-headless-1.8.0.262.b10-1.el7.x86_64\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e --nodeps java-1.8.0-openjdk-1.8.0.262.b10-1.el7.x86_64\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e --nodeps java-1.7.0-openjdk-1.7.0.261-2.6.22.2.el7_8.x86_64\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("使用rpm安装或tar解压下载的文件，安装或解压完成，删除该文件")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh jdk-8u321-linux-x64.rpm\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf jdk-8u321-linux-x64.tar.gz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("配置环境变量")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("添加以下内容")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("JAVA_HOME=/usr/local/jdk1.8.0_321\nCLASSPATH=%JAVA_HOME%/lib:%JAVA_HOME%/jre/lib\nPATH=$PATH:$JAVA_HOME/bin:$JAVA_HOME/jre/bin\nexport PATH CLASSPATH JAVA_HOME\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("使环境变量生效")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"同一台电脑配置多版本jdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#同一台电脑配置多版本jdk"}},[s._v("#")]),s._v(" 同一台电脑配置多版本JDK")]),s._v(" "),n("p",[s._v("多版本JDK，配置 JAVA_8_HOME、JAVA_17_HOME，将 JAVA_HOME 指向 %JAVA_X_HOME%")]),s._v(" "),n("p",[s._v("执行 java -version 结果可能不是我们预期的，这是因为在 JDK 安装时会自动将 Java.exe，javaw.exe，javaws.exe 复制到 C 盘，可以在 cmd 中使用 where java 查看它们的位置并删除，然后重新打开一个cmd，执行 java -version")]),s._v(" "),n("img",{attrs:{src:t(565)}}),s._v(" "),n("h2",{attrs:{id:"查看系统是否安装jdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看系统是否安装jdk"}},[s._v("#")]),s._v(" 查看系统是否安装JDK")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@java jdk1.8.0_321"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# java -version")]),s._v("\njava version "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.8.0_321"')]),s._v("\nJava"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SE Runtime Environment "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".0_321-b07"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nJava HotSpot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("-Bit Server VM "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25.321")]),s._v("-b07, mixed mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@java jdk1.8.0_321"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# whereis java")]),s._v("\njava: /usr/local/jdk1.8.0_321/bin/java /usr/local/jdk1.8.0_321/jre/bin/java\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"命令行窗口配置临时jdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令行窗口配置临时jdk"}},[s._v("#")]),s._v(" 命令行窗口配置临时JDK")]),s._v(" "),n("div",{staticClass:"language-powershell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[s._v("path D:\\Java\\jdk"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("11"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("13\\bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("path"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);