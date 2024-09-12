(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{632:function(s,a,t){s.exports=t.p+"assets/img/20240623132314.a4c803f0.jpg"},735:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"源码安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#源码安装"}},[s._v("#")]),s._v(" 源码安装")]),s._v(" "),n("h3",{attrs:{id:"configure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure"}},[s._v("#")]),s._v(" configure")]),s._v(" "),n("p",[s._v("configure是一个在编译软件源代码之前运行的脚本，用于检查系统中的环境变量、编译器和其他依赖项，并生成适合当前系统的Makefile文件。")]),s._v(" "),n("p",[s._v("以下是一些常用的configure参数及其说明：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("--build：指定编译该软件所使用的平台，即当前运行configure脚本的机器类型。例如，如果在Intel Pentium机器上编译，该参数可能是i686-pc-linux-gnu。")])]),s._v(" "),n("li",[n("p",[s._v("--host：指定软件将运行的平台，即生成的程序将运行在什么平台上。在交叉编译过程中，这个参数需要明确指定，因为它决定了编译好的程序在哪个平台上运行。")])]),s._v(" "),n("li",[n("p",[s._v("--target：指定软件所处理的目标平台，这在建立交叉编译环境时特别重要。它表示使用build主机上的编译器编译一个新的编译器（如binutils, gcc, gdb等），以便编译出的程序能在target指定的系统上运行。")])]),s._v(" "),n("li",[n("p",[s._v("CC：指定C编译器命令，如果不配置则默认为host对应的GCC工具。例如，如果配置了--host=arm-xilinx-linux-gnueabi，则默认CC的编译器为arm-xilinx-linux-gnueabi-gcc。")])]),s._v(" "),n("li",[n("p",[s._v("--prefix：指定编译后文件安装的目录。如果不指定prefix，则可执行文件默认放在/usr/local/bin，库文件默认放在/usr/local/lib，配置文件默认放在/usr/local/etc。")])]),s._v(" "),n("li",[n("p",[s._v("--sysconfdir：用于指定配置文件的安装目录。默认情况下，配置文件通常会被安装到 /etc 目录下。如果你想要将配置文件安装到其他目录，可以使用 --sysconfdir 参数来指定这个目录。")])]),s._v(" "),n("li",[n("p",[s._v("--disable-FEATURE 和 --enable-FEATURE[=ARG]：这些选项用于在编译时配置软件包的功能。--disable-FEATURE用于禁用某些默认提供的特性，而--enable-FEATURE[=ARG]用于启用这些特性，其中FEATURE是特性的名字。例如，可以使用--disable-gui来禁用图形用户界面功能。")])]),s._v(" "),n("li",[n("p",[s._v("--with-PACKAGE[=ARG] 和 --without-PACKAGE：这些选项用于指定软件包依赖的其他已安装的软件包和库。例如，当配置依赖于Tcl和Tk的BLT器件工具包时，可能需要提供关于Tcl和Tk安装位置的信息。使用--without-PACKAGE可以禁止软件包与系统已有的软件包交互。")])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src/your_package\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置安装信息及检测安装环境")]),s._v("\n./configure --prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/your_package\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果make出现错误，使用make clean清除编译文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make clean")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载：直接删除安装目录")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"二进制安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二进制安装"}},[s._v("#")]),s._v(" 二进制安装")]),s._v(" "),n("h3",{attrs:{id:"rpm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rpm"}},[s._v("#")]),s._v(" rpm")]),s._v(" "),n("p",[s._v("rpm（redhat package manager） 原本是 Red Hat Linux 发行版专门用来管理 Linux 各项套件的程序，由于它遵循 GPL 规则且功能强大方便，因而广受欢迎。逐渐受到其他发行版的采用。RPM 套件管理方式的出现，让 Linux 易于安装，升级，间接提升了 Linux 的适用度。")]),s._v(" "),n("p",[s._v("rpm包文件名含义")]),s._v(" "),n("p",[n("img",{attrs:{src:t(632),alt:""}})]),s._v(" "),n("p",[s._v("rpm语法：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("package "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("常用选项：")]),s._v(" "),n("ul",[n("li",[s._v("-i install 表示安装")]),s._v(" "),n("li",[s._v("-v verbose 表示输出详细信息")]),s._v(" "),n("li",[s._v("-h hase 表示显示进度条")])]),s._v(" "),n("p",[s._v("常用命令：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 i(install安装) v(verbose显示详细信息) h(hase显示进度)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh 包全名\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 升级 U(upgrade升级)")]),s._v("\nrmp -Uvh 包全名\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载 e(erase)")]),s._v("\nrmp -e 包名\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询已安装的软件包列表")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询一个包是否被安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" package_keyword\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询 q(query) a(all)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询是否已安装某软件包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -q 包名\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询已安装软件包的位置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ql 包名\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询已安装软件包的信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qi 包名\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h3",{attrs:{id:"yum"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[s._v("#")]),s._v(" yum")]),s._v(" "),n("p",[s._v("yum（ Yellow dog Updater, Modified）是一个在 Fedora 和 RedHat 以及 CentOS 中的 Shell 前端软件包管理器。")]),s._v(" "),n("p",[s._v("基于 RPM 包管理，能够从指定的服务器自动下载 RPM 包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。")]),s._v(" "),n("p",[s._v("yum 提供了查找、安装、删除某一个、一组甚至全部软件包的命令。")]),s._v(" "),n("p",[s._v("yum 语法：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("package "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v('options：可选，选项包括-h（帮助），-y（当安装过程提示选择全部为 "yes"），-q（不显示安装的过程）等等。')]),s._v(" "),n("li",[s._v("command：要进行的操作。")]),s._v(" "),n("li",[s._v("package：安装的包名。")])]),s._v(" "),n("p",[s._v("yum常用命令：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅安装指定的软件命令")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅更新指定的软件命令")]),s._v("\nyum update "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除软件包命令")]),s._v("\nyum remove "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找软件包命令")]),s._v("\nyum search "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("keyword"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Enabling a Yum Repository")]),s._v("\nyum-config-manager --enable repository\nyum-config-manager --enable glob_expression\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Disabling a Yum Repository")]),s._v("\nyum-config-manager --disable repository\nyum-config-manager --disable glob_expression\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("使用 yum install 命令在线安装 Linux系统的软件，这种方式可以自动处理依赖性关系，并且一次安装所有依赖的软件包。从国外下载软件速度非常慢，很多情况下都无法下载。国内一些大公司做镜像同步国外的软件，我们可以使用国内的下载地址，下载需要的软件。yum源就是yum命令获取rpm包的地方。也被称作yum仓库。")]),s._v(" "),n("p",[s._v("yum的配置文件有两种，一个是主配置文件（/etc/yum.conf），一个是各个仓库的配置文件，在/etc/yum.repos.d/目录下。主配置文件里面的配置针对各个仓库的配置文件(/etc/yum.repos.d/)都生效，各个仓库的配置文件里面的配置可以覆盖主配置文件，也就是说优先级比主配置文件yum.conf高。")]),s._v(" "),n("p",[s._v("国内yum源镜像站：")]),s._v(" "),n("p",[s._v("清华大学："),n("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://mirrors.tuna.tsinghua.edu.cn/"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("阿里云 ："),n("a",{attrs:{href:"https://developer.aliyun.com/mirror/centos",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://developer.aliyun.com/mirror/centos"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("中科大 ："),n("a",{attrs:{href:"https://mirrors.ustc.edu.cn/help/centos.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://mirrors.ustc.edu.cn/help/centos.html"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("浙大："),n("a",{attrs:{href:"https://mirrors.zju.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://mirrors.zju.edu.cn/"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("网易："),n("a",{attrs:{href:"http://mirrors.163.com/.help/centos.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://mirrors.163.com/.help/centos.html"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看主配置文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/yum.conf\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有仓库配置文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /etc/yum.repos.d\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum -y install wget")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载新的 CentOS-Base.repo 到 /etc/yum.repos.d/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 升级所有软件包")]),s._v("\nyum -y update\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# epel-release的主要用途是提供一个额外的软件源，用于安装那些在官方软件源中不可用或难以找到的软件包。EPEL（Extra Packages for Enterprise Linux）是一个由Fedora社区创建的项目，旨在为RHEL（Red Hat Enterprise Linux）及其衍生版本（如CentOS、Scientific Linux等）提供高质量的软件包。通过安装epel-release软件包，用户实际上是在他们的系统中添加了一个第三方的yum源，这个源提供了比官方rpm仓库更丰富的软件包资源。这在官方源中软件包不足或缺少某些特定软件时非常有用，避免了用户自行编译软件的繁琐过程。")]),s._v("\nyum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行 yum makecache 生成缓存")]),s._v("\nyum clean all\nyum makecache\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有启用的源, 等同于yum repolist enabled")]),s._v("\nyum repolist\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有禁用的源")]),s._v("\nyum repolist disabled\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出启用（禁用）源的更详细信息")]),s._v("\nyum repoinfo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("enabled"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("disabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从指定源安装/搜索软件；“–disablerepo”和”–enablerepo”选项可独立或配合使用，动态启用和禁用源。")]),s._v("\nyum --disablerepo"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v(" --enablerepo"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxx"')]),s._v(" install/search\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("p",[s._v("YUM configuration basics")]),s._v(" "),n("p",[s._v("Yum configuration has repositories defined. Repositories are the places where package files "),n("code",[s._v(".rpm")]),s._v(" are located and yum searches, downloads files from repositories for installations. Repositories can be the local mount point file://path, remote FTP location "),n("code",[s._v("ftp://link")]),s._v(", HTTP location link "),n("code",[s._v("http://link")]),s._v(" or "),n("code",[s._v("http://login:password@link")]),s._v(", https link or remote NFS mount point.")]),s._v(" "),n("p",[s._v("Yum configuration file is "),n("code",[s._v("/etc/yum.conf")]),s._v(" and repository configuration files are located under "),n("code",[s._v("/etc/yum.repos.d/")]),s._v(" directory. All repository configuration files must have "),n("code",[s._v(".repo")]),s._v(" extension so than yum can identify them and read their configurations.")]),s._v(" "),n("p",[s._v("The following is a bare-minimum example of the form a "),n("code",[s._v("[*repository*]")]),s._v(" section takes:")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("repository"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("repository_name\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("repository_url\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("Typical repo configuration file entry looks like below :")]),s._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[s._v("[rhel-source-beta]\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("Red Hat Enterprise Linux $releasever Beta - $basearch - Source")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("baseurl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("ftp://ftp.redhat.com/pub/redhat/linux/beta/$releasever/en/os/SRPMS/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("enabled")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gpgcheck")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gpgkey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[n("code",[s._v("[rhrl-source-beta]")]),s._v(" is a unique repository id.")]),s._v(" "),n("li",[n("code",[s._v("name")]),s._v(" is a human readable repository name")]),s._v(" "),n("li",[n("code",[s._v("baseurl")]),s._v(" is the location from where packages should be scanned and fetched")]),s._v(" "),n("li",[n("code",[s._v("enabled")]),s._v(" denotes if this repo is enabled or not i.e. yum should use it or not")]),s._v(" "),n("li",[n("code",[s._v("gpgcheck")]),s._v(" enable/disable GPG signature check")]),s._v(" "),n("li",[n("code",[s._v("gpgkey")]),s._v(" is the location of GPG key")])]),s._v(" "),n("p",[s._v("Out of these first 4 entries are mandatory for every repo location.")]),s._v(" "),n("p",[s._v("More details refer to "),n("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/deployment_guide/sec-configuring_yum_and_yum_repositories",target:"_blank",rel:"noopener noreferrer"}},[s._v("Configuring Yum and Yum Repositories"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"apt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apt"}},[s._v("#")]),s._v(" apt")]),s._v(" "),n("p",[s._v("apt（Advanced Packaging Tool）是一个在 Debian 和 Ubuntu 中的 Shell 前端软件包管理器。")]),s._v(" "),n("p",[s._v("apt 命令提供了查找、安装、升级、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。")]),s._v(" "),n("p",[s._v("apt 命令执行需要超级管理员权限(root)。")]),s._v(" "),n("p",[s._v("apt 语法：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("package "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v('options：可选，选项包括 -h（帮助），-y（当安装过程提示选择全部为"yes"），-q（不显示安装的过程）等等。')]),s._v(" "),n("li",[s._v("command：要进行的操作。")]),s._v(" "),n("li",[s._v("package：安装的包名。")])]),s._v(" "),n("p",[s._v("apt 常用命令：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装指定软件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装多个软件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package_"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package_"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package_"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新指定软件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除指定软件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" remove "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找指定软件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" search "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("keyword"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"打包、压缩和解压"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打包、压缩和解压"}},[s._v("#")]),s._v(" 打包、压缩和解压")]),s._v(" "),n("p",[s._v("打包：将一堆文件或一个目录变成一个文件；")]),s._v(" "),n("p",[s._v("压缩：将一个大文件通过压缩算法变成一个小文件。以下是常见压缩/解压工具：")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[s._v("压缩工具")]),s._v(" "),n("th",{staticStyle:{"text-align":"left"}},[s._v("文件扩展名")]),s._v(" "),n("th",{staticStyle:{"text-align":"left"}},[s._v("解压工具")])])]),s._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("code",[s._v("zip")])]),s._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[s._v(".zip")])]),s._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[s._v("unzip")])])]),s._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("code",[s._v("gzip")])]),s._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[s._v(".gz")])]),s._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[s._v("gunzip")])])]),s._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("code",[s._v("bzip2")])]),s._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[s._v(".bz2")])]),s._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("code",[s._v("bunzip2")])])])])]),s._v(" "),n("h3",{attrs:{id:"tar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tar"}},[s._v("#")]),s._v(" tar")]),s._v(" "),n("p",[s._v("tar，可以将目录打包成一个文件。常用选项如下：")]),s._v(" "),n("ul",[n("li",[s._v("-c 建立新的备份文件")]),s._v(" "),n("li",[s._v("-x 从备份文件中还原文件")]),s._v(" "),n("li",[s._v("-f 指定备份文件")]),s._v(" "),n("li",[s._v("-v 显示操作过程")]),s._v(" "),n("li",[s._v("-z 通过gzip指令处理备份文件")]),s._v(" "),n("li",[s._v("-j 支持bzip2解压文件")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅打包，不压缩")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -cvf test.tar "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压 test.tar")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf test.tar\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包后，以 gzip 压缩")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zcvf test.tar.gz "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压 test.tar.gz")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf test.tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包后，以 bzip2 压缩")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -jcvf test.tar.bz2 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压 test.tar.bz2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -jxvf test.tar.bz2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"zip-unzip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zip-unzip"}},[s._v("#")]),s._v(" zip, unzip")]),s._v(" "),n("p",[s._v("zip，压缩比率不如gzip")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("-bash: zip: "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" not found\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" -y\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" 压缩后的文件名 文件\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" -r 压缩后的文件名 目录 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -r 递归处理，将指定目录下的所有文件和子目录一并处理。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" 解压文件\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"gzip-gunzip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gzip-gunzip"}},[s._v("#")]),s._v(" gzip, gunzip")]),s._v(" "),n("p",[s._v("gzip，压缩后文件格式：.gz，"),n("strong",[s._v("，只能压缩文件，不能压缩目录，不保留原文件")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" 文件\ngunzip 文件\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"bzip2-bunzip2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bzip2-bunzip2"}},[s._v("#")]),s._v(" bzip2, bunzip2")]),s._v(" "),n("p",[s._v("bzip2，gzip的升级版")]),s._v(" "),n("p",[s._v("bzip2，压缩后文件格式：.bz2")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bzip2")]),s._v(" 文件\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bzip2")]),s._v(" -k 文件 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -k 产生压缩文件的同时保留原文件")]),s._v("\n\nbunzip2 文件\nbunzip2 -k 文件 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -k 解压的同时保留原文件")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);