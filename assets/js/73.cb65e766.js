(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{718:function(s,e,a){"use strict";a.r(e);var t=a(7),_=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("code",[s._v("cp")]),s._v(" 只能在本地硬盘中进行文件复制。")]),s._v(" "),a("p",[a("code",[s._v("rcp")]),s._v("（远程复制）和 "),a("code",[s._v("scp")]),s._v("（安全复制）都是用于不同主机之间传输文件的命令行工具。")]),s._v(" "),a("p",[a("code",[s._v("rcp")]),s._v("  是一种基于传统的 UNIX（远程shell）协议的文件复制工具。它使用不加密的传输方式，将文件从一个主机复制到另一个主机。由于缺乏加密， "),a("code",[s._v("rcp")]),s._v(" 在网络中传输的数据是明文的，容易受到窃听和篡改的风险。")]),s._v(" "),a("p",[a("code",[s._v("scp")]),s._v("（secure copy）是在 "),a("code",[s._v("rcp")]),s._v(" 的基础上发展而来的工具，它使用 SSH（Secure Shell）协议进行安全的文件复制。通过使用 SSH，"),a("code",[s._v("scp")]),s._v("  在传输文件时会进行加密，确保数据的机密性和完整性。它提供了与 "),a("code",[s._v("rcp")]),s._v("  类似的命令行接口，但在传输文件时更加安全可靠。")]),s._v(" "),a("h2",{attrs:{id:"scp-跨机远程拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scp-跨机远程拷贝"}},[s._v("#")]),s._v(" scp 跨机远程拷贝")]),s._v(" "),a("h3",{attrs:{id:"命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令格式"}},[s._v("#")]),s._v(" 命令格式")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("原路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("目标路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"命令参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令参数"}},[s._v("#")]),s._v(" 命令参数")]),s._v(" "),a("ul",[a("li",[s._v("-1 强制scp命令使用协议ssh1")]),s._v(" "),a("li",[s._v("-2 强制scp命令使用协议ssh2")]),s._v(" "),a("li",[s._v("-4 强制scp命令只使用IPv4寻址")]),s._v(" "),a("li",[s._v("-6 强制scp命令只使用IPv6寻址")]),s._v(" "),a("li",[s._v("-B 使用批处理模式（传输过程中不询问传输口令或短语）")]),s._v(" "),a("li",[s._v("-C 允许压缩。（将-C标志传递给ssh，从而打开压缩功能）")]),s._v(" "),a("li",[s._v("-p 留原文件的修改时间，访问时间和访问权限。")]),s._v(" "),a("li",[s._v("-q 不显示传输进度条。")]),s._v(" "),a("li",[s._v("-r 递归复制整个目录。")]),s._v(" "),a("li",[s._v("-v 详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。")]),s._v(" "),a("li",[s._v("-c cipher 以cipher将数据传输进行加密，这个选项将直接传递给ssh。")]),s._v(" "),a("li",[s._v("-F ssh_config 指定一个替代的ssh配置文件，此参数直接传递给ssh。")]),s._v(" "),a("li",[s._v("-i identity_file 从指定文件中读取传输时使用的密钥文件，此参数直接传递给ssh。")]),s._v(" "),a("li",[s._v("-l limit 限定用户所能使用的带宽，以Kbit/s为单位。")]),s._v(" "),a("li",[s._v("-o ssh_option 如果习惯于使用ssh_config(5)中的参数传递方式，")]),s._v(" "),a("li",[s._v("-P port 注意是大写的P, port是指定数据传输用到的端口号")]),s._v(" "),a("li",[s._v("-S program 指定加密传输时所使用的程序。此程序必须能够理解ssh(1)的选项。")])]),s._v(" "),a("h3",{attrs:{id:"使用说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[s._v("#")]),s._v(" 使用说明")]),s._v(" "),a("p",[s._v("从本地服务器复制文件到远程服务器：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scp")]),s._v(" local_file remote_username@remote_ip:remote_folder\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scp")]),s._v(" local_file remote_username@remote_ip:remote_file\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scp")]),s._v(" local_file remote_ip:remote_folder\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scp")]),s._v(" local_file remote_ip:remote_file\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("从本地服务器复制目录到远程服务器：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scp")]),s._v(" -r local_folder remote_username@remote_ip:remote_folder\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scp")]),s._v(" -r local_folder remote_ip:remote_folder\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果指定了用户名，命令执行后需要输入密码；")]),s._v(" "),a("p",[s._v("如果不指定用户名，命令执行后需要输入用户名和密码；")]),s._v(" "),a("p",[s._v("从远程服务器复制文件或目录到本地服务器的命令与上述命令基本一致，只要将后面2个参数互换顺序即可。")])])}),[],!1,null,null,null);e.default=_.exports}}]);