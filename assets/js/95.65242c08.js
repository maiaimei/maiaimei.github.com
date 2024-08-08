(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{752:function(s,a,e){"use strict";e.r(a);var t=e(7),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Web服务器一般指网站服务器，是指驻留于互联网的某种计算机程序，向浏览器等Web客户端提供文档。它既可以放置网站文件，让全世界浏览；也可以放置数据文件，让全世界下载。服务器使用HTTP（超文本传输协议）与客户端浏览器进行信息交流。")]),s._v(" "),e("p",[s._v("主流的Web服务器有：Apache、Nginx和IIS（Internet Information Services）。")]),s._v(" "),e("h2",{attrs:{id:"apache-的-rpm安装与启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-的-rpm安装与启动"}},[s._v("#")]),s._v(" Apache 的 rpm安装与启动")]),s._v(" "),e("p",[s._v("rpm 包的安装简便、速度快、兼容性好，但安装位置固定分散且不可控、版本较老。")]),s._v(" "),e("p",[s._v("使用yum安装Apache")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" httpd -y\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("启动Apache")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" httpd restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("关闭防火墙")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" ipstables stop\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"apache-的-源码安装与启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-的-源码安装与启动"}},[s._v("#")]),s._v(" Apache 的 源码安装与启动")]),s._v(" "),e("p",[s._v("Apache安装需要下载其他依赖源码包。")]),s._v(" "),e("ol",[e("li",[s._v("Apache，Apache HTTP Server，下载地址："),e("a",{attrs:{href:"https://downloads.apache.org/httpd/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://downloads.apache.org/httpd/"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("apr，Apache Portable Runtime，Apache可移植运行库，主要为上层的应用程序提供一个可以跨越多操作系统平台使用的底层支持接口库。下载地址："),e("a",{attrs:{href:"https://downloads.apache.org/apr/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://downloads.apache.org/apr/"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("apr-util，apr工具。下载地址："),e("a",{attrs:{href:"https://downloads.apache.org/apr/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://downloads.apache.org/apr/"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("pcre，基于perl兼容的正则表达式的支持。下载地址："),e("a",{attrs:{href:"https://sourceforge.net/projects/pcre/files/pcre/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://sourceforge.net/projects/pcre/files/pcre/"),e("OutboundLink")],1)])]),s._v(" "),e("h3",{attrs:{id:"源码安装apache时如何确定apr版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码安装apache时如何确定apr版本"}},[s._v("#")]),s._v(" 源码安装Apache时如何确定apr版本")]),s._v(" "),e("p",[s._v("在源代码安装Apache时，确定APR（Apache Portable Runtime）版本通常涉及查看Apache源代码包中的configure.in或configure.ac文件。APR版本信息通常在configure.in文件中以注释的形式出现，或者可以在Apache的官方文档中找到。")]),s._v(" "),e("p",[s._v("以下是查看configure.in文件以确定APR版本的基本步骤：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("下载Apache源代码。")])]),s._v(" "),e("li",[e("p",[s._v("解压缩源代码包。")])]),s._v(" "),e("li",[e("p",[s._v("查找configure.in或configure.ac文件。")])]),s._v(" "),e("li",[e("p",[s._v("打开文件并查找APR相关的注释或者版本信息。")])])]),s._v(" "),e("p",[s._v("例如，你可以使用grep命令快速搜索APR版本信息：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" apache-source-directory\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'APR'")]),s._v(" configure.in\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("或者，如果是.ac文件：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'APR'")]),s._v(" configure.ac\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在输出中，你应该能找到类似于APR_VERSION的字样，这将告诉你所需的APR版本。")]),s._v(" "),e("p",[s._v("如果你想要编译安装指定版本的APR，你可以从APR的官方网站或者其他可信来源下载所需版本的APR源代码，然后按照APR的安装说明进行编译和安装。")]),s._v(" "),e("p",[s._v("请注意，如果你是在使用预编译的二进制包或者包管理器（如apt或yum）来安装Apache，APR版本通常会被预先决定和安装，你不需要手动确定或选择版本。")]),s._v(" "),e("h3",{attrs:{id:"源码安装apache时如何确定apr-util版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码安装apache时如何确定apr-util版本"}},[s._v("#")]),s._v(" 源码安装Apache时如何确定apr-util版本")]),s._v(" "),e("p",[s._v("在源代码安装Apache时，确定apr-util版本通常涉及以下步骤：")]),s._v(" "),e("p",[s._v("访问Apache HTTP Server项目的官方网站或者其他可靠资源获取最新的apr-util版本信息。")]),s._v(" "),e("p",[s._v("访问apr-util的下载页面或源代码仓库，以查看可用的版本列表。")]),s._v(" "),e("p",[s._v("如果你是从源代码安装，可以查看Apache HTTP Server源代码包中的configure.in或configure.ac文件，通常这些文件会指定所需的apr-util版本。")]),s._v(" "),e("p",[s._v("如果你是从预编译包安装，可以查看安装指南或文档，这里通常会有版本要求。")]),s._v(" "),e("p",[s._v("如果你是从源代码安装Apache，并且想要找到apr-util的版本，你可以在Apache源代码的configure.in或configure.ac文件中查找APR-UTIL相关的行，例如：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check for APR-UTIL")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APR_UTIL_CONFIG")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$withval")]),s._v('"')]),s._v("\nAC_ARG_WITH"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("apr-util"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("AS_HELP_STRING"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--with-apr-util"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("use APR-UTIL, optionally specifying its path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("APR_UTIL_CONFIG"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$withval")]),s._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ... 其他配置代码 ...")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check for APR-UTIL libraries")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ... 代码检查apr-util库 ...")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("在这个例子中，--with-apr-util选项可以用来指定apr-util的路径。如果你需要编译安装，通常需要确保你有合适版本的apr-util库和头文件可供编译使用。")]),s._v(" "),e("p",[s._v("如果你是在编译Apache时遇到了版本不匹配的问题，通常错误信息会提示你需要的apr-util版本。此时，你可以下载并安装所需版本的apr-util，或者修改configure脚本以指向正确的apr-util版本。")]),s._v(" "),e("h3",{attrs:{id:"源码安装apache时如何确定pcre版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码安装apache时如何确定pcre版本"}},[s._v("#")]),s._v(" 源码安装Apache时如何确定pcre版本")]),s._v(" "),e("p",[s._v("在源代码安装Apache时，确定PCRE（Perl Compatible Regular Expressions）版本通常涉及查看Apache源代码包中的配置脚本或INSTALL文件。通常，Apache的源代码包会带有一个configure脚本，你可以通过运行以下命令来检查PCRE的依赖：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("./configure --help\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查找输出中与PCRE有关的选项，通常会有类似于--with-pcre的选项来指定PCRE的安装路径。如果没有找到相关选项，你可能需要查看INSTALL或README文件获取更多信息。")]),s._v(" "),e("p",[s._v("如果你需要确定当前系统中PCRE的版本，可以使用包管理器查询，例如：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对于使用apt的Debian/Ubuntu系统")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" policy libpcre3 libpcre3-dev\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对于使用yum的CentOS/RHEL系统")]),s._v("\nyum list installed "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" pcre\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对于使用zypper的SUSE系统")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zypper")]),s._v(" se pcre\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("如果你需要安装特定版本的PCRE，可以使用相应的包管理器安装，例如：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对于Debian/Ubuntu系统")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libpcre3 libpcre3-dev\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对于CentOS/RHEL系统")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pcre pcre-devel\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对于SUSE系统")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zypper")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pcre pcre-devel\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("确保安装了正确版本的PCRE后，再按照正常流程编译和安装Apache。")]),s._v(" "),e("h3",{attrs:{id:"源码安装与启动apache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码安装与启动apache"}},[s._v("#")]),s._v(" 源码安装与启动Apache")]),s._v(" "),e("p",[s._v("关闭防火墙")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" ipstables stop\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装gcc编译器和make")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc* "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -y\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("解压源码包")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxf apr-1.6.5.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxf apr-util-1.6.3.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxf pcre-8.45.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxf httpd-2.4.59.tar.gz \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("复制apr和apr-util并取消版本号")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -rf apr-1.6.5/ httpd-2.4.59/srclib/apr\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -rf apr-util-1.6.3/ httpd-2.4.59/srclib/apr-util\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("安装pcre")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" pcre-8.45\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置(configure)、编译(make)、安装(make install)")]),s._v("\n./configure "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("配置Apache")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("./configure --prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/apache2 --sysconfdir"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/apache2/etc --with-included-apr --enable-so --enable-deflate"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("shared --enable-expires"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("shared --enable-rewrite"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("shared\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("参数详解：")]),s._v(" "),e("ul",[e("li",[s._v("--with-included-apr 是一个常见的配置选项，用于指示编译系统将一个版本的APR（Apache Portable Runtime）包含在软件包中。APR是Apache HTTP服务器使用的可移植库，它提供了一种方法来执行常见的操作系统服务，例如进程管理、内存管理和文件操作，而不需要为每个操作系统编写特定的代码。使用--with-included-apr配置选项通常意味着你想要编译的软件包将会包含它自己的APR副本，而不是依赖系统上可能存在的APR。这可以确保软件包在不同的环境中具有良好的兼容性，因为它将使用预定义的APR版本。")]),s._v(" "),e("li",[s._v("--enable-so 是在配置 (configure) Apache HTTP 服务器时使用的参数，用于启用动态加载模块支持（DSO，Dynamic Shared Object）。这个参数允许你在不重新编译整个服务器的情况下，动态地加载或卸载模块。这对于需要在运行中更改服务器行为的部署来说，是非常有用的。")]),s._v(" "),e("li",[s._v("--enable-deflate 是在使用 configure 脚本配置软件源代码编译选项时使用的参数。它用于启用对 DEFLATE 压缩算法的支持，通常用于 Web 服务器，如 Apache HTTP Server。这将在编译的服务器中启用 DEFLATE 压缩，这可以减少网络上传输的数据量，从而加快页面加载速度。")]),s._v(" "),e("li",[s._v("--enable-expires 是一个常见于许多软件的配置选项，特别是在编译 Nginx 或 Apache 服务器软件时。它的目的是启用对 HTTP 响应中 Expires 和 Cache-Control 头的自动处理。这些头可以指示浏览器如何缓存页面的内容。启用 --enable-expires 选项通常会让服务器软件能够根据文件的变化频率来设置合适的缓存时间，从而优化性能。")]),s._v(" "),e("li",[s._v("--enable-rewrite 是 Apache HTTP 服务器的配置参数，用于在编译时启用 URL 重写功能。URL 重写允许配置特定的规则，以便根据请求转换 URL，这可以用于实现诸如用户友好的 URL、内容的永久链接(PR)管理、目录结构变化的透明度或者其他 URL 处理需求。启用 URL 重写功能后，Apthon 将包含 mod_rewrite 模块，这个模块在运行时处理 .htaccess 文件中定义的重写规则。")])]),s._v(" "),e("p",[s._v("安装Apache")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"apache-安装后检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-安装后检查"}},[s._v("#")]),s._v(" Apache 安装后检查")]),s._v(" "),e("p",[s._v("查看服务端口号，如果端口列表出现80，说明Apache服务启动正常")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -altp\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("访问Apache服务器，如果出现以下Apache测试页，说明Apache服务已经正常启动。")]),s._v(" "),e("h2",{attrs:{id:"apache-httpd-conf-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpd-conf-配置文件"}},[s._v("#")]),s._v(" Apache httpd.conf 配置文件")]),s._v(" "),e("p",[s._v("Apache的httpd.conf是Apache HTTP服务器的主要配置文件，它控制了服务器的行为。以下是一些常见的配置指令示例：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("设置监听端口：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("Listen "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("设置文档根目录：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("DocumentRoot "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/www/html"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("设置默认索引文件：")]),s._v(" "),e("div",{staticClass:"language-she line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("DirectoryIndex index.html index.php\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("设置服务器名：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("ServerName www.example.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("设置虚拟主机：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VirtualHost *:8"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("\n    ServerName www.example.com\n    DocumentRoot "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/www/example"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/VirtualHost"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("设置日志文件位置：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("CustomLog "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/log/apache2/access_log"')]),s._v(" common\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("设置错误文档：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("ErrorDocument "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(" /errors/notfound.html\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("设置目录权限：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Directory "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/www/html"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    Options Indexes FollowSymLinks\n    AllowOverride None\n    Order allow,deny\n    Allow from all\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/Directory"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("设置CGI目录：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("ScriptAlias "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/cgi-bin/"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/www/cgi-bin/"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"虚拟主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟主机"}},[s._v("#")]),s._v(" 虚拟主机")]),s._v(" "),e("p",[s._v("虚拟主机主要应用于HTTP（Hypertext Transfer Protocol，超文本传输协议）服务，通常又称为网站空间。它把一台运行的物理服务器划分成若干个“虚拟”服务单元，对用户表现为多个独立服务器。")]),s._v(" "),e("p",[s._v("Apache服务实现虚拟主机主要有三种方式：")]),s._v(" "),e("ul",[e("li",[s._v("基于端口的方式")]),s._v(" "),e("li",[s._v("基于域名的方式")]),s._v(" "),e("li",[s._v("基于IP地址的方式")])]),s._v(" "),e("h3",{attrs:{id:"基于端口的虚拟主机实现方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于端口的虚拟主机实现方式"}},[s._v("#")]),s._v(" 基于端口的虚拟主机实现方式")]),s._v(" "),e("p",[s._v("修改配置文件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/httpd/conf/httpd.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("监听默认端口80以及端口8080")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Listen 80\nListen 8080\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("主机配置部分可以包含多个虚拟主机的配置，每个虚拟主机都是一个独立的网站。")]),s._v(" "),e("p",[s._v("需要修改端口号以及该端口号访问的网站主页存放目录DocumentRoot。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VirtualHost *:808"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ServerAdmin webmaster@dummy-host.example.com")]),s._v("\n    DocumentRoot /var/www/html8080\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ServerName dummy-host.example.com")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ErrorLog logs/dummy-host.example.com-error_log")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    CustomLog logs/dummy-host.example.com-access_log common")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/VirtualHost"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("重启服务")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" httpd restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"基于域名的虚拟主机实现方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于域名的虚拟主机实现方式"}},[s._v("#")]),s._v(" 基于域名的虚拟主机实现方式")]),s._v(" "),e("p",[s._v("修改配置文件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/httpd/conf/httpd.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("基于域名的虚拟主机，需要开启NameVirtualHost选项，在默认配置中将这行的注释删掉即可")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("NameVirtualHost *:80\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在配置文件中明确写出通过不同域名访问的主页存放目录DocumentRoot")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VirtualHost *:8"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("\n    DocumentRoot /var/www/a\n    ServerName www.a.com\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/VirtualHost"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VirtualHost *:8"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("\n    DocumentRoot /var/www/b\n    ServerName www.b.com\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/VirtualHost"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("创建www.a.com和www.b.com的主页文件")]),s._v(" "),e("p",[s._v("配合DNS服务或者修改/etc/hosts的主机文件。一般来说，实现域名访问是DNS（域名解析服务器）和Web（网站服务器）协同工作的结果。如果没有配置DNS解析，也可以通过修改/etc/hosts主机名文件来实现域名和IP地址之间的映射。")]),s._v(" "),e("div",{staticClass:"language-she line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("192.168.1.100 www.a.com www.b.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("重启服务")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" httpd restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"基于ip地址的虚拟主机实现方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于ip地址的虚拟主机实现方式"}},[s._v("#")]),s._v(" 基于IP地址的虚拟主机实现方式")]),s._v(" "),e("p",[s._v("在Linux中，如果要为网卡eth0多绑定一个IP地址，可以用ifconfig命令临时配置eth0:0地址，但这种方式配置的地址在重新启动网卡后失效。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" eth0:0 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.101\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" eth0:0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果想永久生效，只要在/etc/sysconfig/network-scripts目录中创建一个名为ifcfg-eth0:0的文件。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 待补充\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("修改配置文件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/httpd/conf/httpd.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("通过VirtualHost设置网卡捆绑的两组IP地址对应的主页根目录DocumentRoot")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<VirtualHost *:80>\n    DocumentRoot /var/www/html100\n    ServerName 192.168.1.100\n</VirtualHost>\n<VirtualHost *:80>\n    DocumentRoot /var/www/html101\n    ServerName 192.168.1.101\n</VirtualHost>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("重启服务")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" httpd restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);