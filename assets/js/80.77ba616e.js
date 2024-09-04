(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{734:function(t,s,v){"use strict";v.r(s);var a=v(7),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("在Linux中，文件名和文件的数据是分开保存的。")]),t._v(" "),v("p",[t._v("链接是一种文件共享的方式。")]),t._v(" "),v("p",[v("code",[t._v("ln")]),t._v("（link）命令功能是为某一个文件/目录在另外一个位置建立一个同步的链接。")]),t._v(" "),v("h2",{attrs:{id:"硬链接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#硬链接"}},[t._v("#")]),t._v(" 硬链接")]),t._v(" "),v("p",[t._v("硬链接（Hard Link），是对原文件起了一个别名。")]),t._v(" "),v("p",[t._v("特性：")]),t._v(" "),v("p",[t._v("（1）文件有相同的 inode 及 data block；")]),t._v(" "),v("p",[t._v("（2）只能对已存在的文件进行创建；")]),t._v(" "),v("p",[t._v("（3）不能交叉文件系统进行硬链接的创建；")]),t._v(" "),v("p",[t._v("（4）不能对目录进行创建，只可对文件创建；")]),t._v(" "),v("p",[t._v("（5）删除一个硬链接文件并不影响其他有相同inode 号的文件；")]),t._v(" "),v("p",[t._v("（6）只有文件的硬链接数等于零，文件才会被删除。")]),t._v(" "),v("p",[t._v("创建硬链接：")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" 被链接的源文件 链接文件\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("查找指定文件的硬链接：")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取文件的inode号码")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("stat")]),t._v(" test.txt\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据Inode号码查找，把错误提示丢弃")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" / -inum "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1486772")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/dev/null\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br")])]),v("h2",{attrs:{id:"软连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#软连接"}},[t._v("#")]),t._v(" 软连接")]),t._v(" "),v("p",[t._v("软链接（Soft Link），也叫符号链接（Symbolic  Link），它包含了到原文件的路径信息，类似于Windows的快捷方式。")]),t._v(" "),v("p",[t._v("特性：")]),t._v(" "),v("p",[t._v("（1）软链接有自己的文件属性及权限等；")]),t._v(" "),v("p",[t._v("（2）可对不存在的文件或目录创建软链接；")]),t._v(" "),v("p",[t._v("（3）软链接可交叉文件系统；")]),t._v(" "),v("p",[t._v("（4）软链接可对文件或目录创建；")]),t._v(" "),v("p",[t._v("（5）创建软链接时，链接计数 i_nlink 不会增加；")]),t._v(" "),v("p",[t._v("（6）删除软链接并不影响被指向的文件，但若被指向的原文件被删除，则相关软连接被称为死链接（即 dangling link，若被指向路径文件被重新创建，死链接可恢复为正常的软链接）。")]),t._v(" "),v("p",[t._v("创建软链接：")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s 被链接的源文件 链接文件\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("查找指定文件的软连接：")]),t._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" ./  -type l -exec "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test.txt'")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("h2",{attrs:{id:"硬链接和软链接的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#硬链接和软链接的区别"}},[t._v("#")]),t._v(" 硬链接和软链接的区别")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th",[t._v("硬链接")]),t._v(" "),v("th",[t._v("软链接")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("本质")]),t._v(" "),v("td",[t._v("本质是同一个文件")]),t._v(" "),v("td",[t._v("本质不是同一个文件")])]),t._v(" "),v("tr",[v("td",[t._v("inode号")]),t._v(" "),v("td",[t._v("相同")]),t._v(" "),v("td",[t._v("不同")])]),t._v(" "),v("tr",[v("td",[t._v("跨设备")]),t._v(" "),v("td",[t._v("不支持")]),t._v(" "),v("td",[t._v("支持")])]),t._v(" "),v("tr",[v("td",[t._v("文件夹")]),t._v(" "),v("td",[t._v("不支持")]),t._v(" "),v("td",[t._v("支持")])]),t._v(" "),v("tr",[v("td",[t._v("相对路径")]),t._v(" "),v("td",[t._v("原始文件相对路径是相对于当前工作目录")]),t._v(" "),v("td",[t._v("原始文件的相对路径是相对于链接文件的相对路径")])]),t._v(" "),v("tr",[v("td",[t._v("文件类型")]),t._v(" "),v("td",[t._v("和原文件相同")]),t._v(" "),v("td",[t._v("链接文件，和原文件无关")])]),t._v(" "),v("tr",[v("td",[t._v("文件大小")]),t._v(" "),v("td",[t._v("和原文件相同")]),t._v(" "),v("td",[t._v("原文件的路径的长度")])]),t._v(" "),v("tr",[v("td",[t._v("链接数目")]),t._v(" "),v("td",[t._v("创建新的硬链接，链接数会增加，删除硬链接，链接数减少")]),t._v(" "),v("td",[t._v("创建或删除，链接数不会变化")])]),t._v(" "),v("tr",[v("td",[t._v("删除源文件")]),t._v(" "),v("td",[t._v("只是链接数减一，但链接文件的访问不受影响")]),t._v(" "),v("td",[t._v("链接文件将无法访问")])])])])])}),[],!1,null,null,null);s.default=_.exports}}]);