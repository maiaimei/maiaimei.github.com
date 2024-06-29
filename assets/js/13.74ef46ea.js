(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{628:function(t,v,s){t.exports=s.p+"assets/img/20240317155509.747d577d.png"},629:function(t,v,s){t.exports=s.p+"assets/img/20240317155644.844f0916.png"},630:function(t,v,s){t.exports=s.p+"assets/img/20240317160606.9173e2fd.png"},631:function(t,v,s){t.exports=s.p+"assets/img/20240317161126.237e07d5.png"},632:function(t,v,s){t.exports=s.p+"assets/img/20240623113624.ff9f777d.jpg"},732:function(t,v,s){"use strict";s.r(v);var _=s(7),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"mkdir-新建文件夹"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mkdir-新建文件夹"}},[t._v("#")]),t._v(" mkdir 新建文件夹")]),t._v(" "),_("p",[t._v("格式："),_("code",[t._v("mkdir [选项] 目录")])]),t._v(" "),_("p",[t._v("例子："),_("code",[t._v("mkdir -p /path/to/directory")]),t._v("，递归创建/path/to/directory")]),t._v(" "),_("h2",{attrs:{id:"cd-切换目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cd-切换目录"}},[t._v("#")]),t._v(" cd 切换目录")]),t._v(" "),_("p",[t._v("格式： "),_("code",[t._v("cd 目录")])]),t._v(" "),_("p",[t._v("例子： "),_("code",[t._v("cd ..")]),t._v(" ，进入上一级父目录")]),t._v(" "),_("h2",{attrs:{id:"pwd-显示当前路径"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pwd-显示当前路径"}},[t._v("#")]),t._v(" pwd 显示当前路径")]),t._v(" "),_("p",[t._v("格式： "),_("code",[t._v("pwd [选项]")])]),t._v(" "),_("p",[t._v("例子： "),_("code",[t._v("pwd")]),t._v(" ，查看当前所在目录")]),t._v(" "),_("h2",{attrs:{id:"ls-列出文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ls-列出文件"}},[t._v("#")]),t._v(" ls 列出文件")]),t._v(" "),_("p",[t._v("ll 是 ls -l 的别名，参数 -l 成为长格式，列出当前文件夹下的详细内容。")]),t._v(" "),_("p",[t._v("从左到右依次是：文件类型、权限模式、硬连接数、所有者、组、文件大小和文件的最后访问（修改）时间等。")]),t._v(" "),_("p",[t._v("第一部分是文件类型：- 普通文件 ， d 目录文件，I 链接文件，p 管理文件， b 块设备文件， c 文件， s 套接字文件")]),t._v(" "),_("p",[_("img",{attrs:{src:s(628),alt:""}})]),t._v(" "),_("p",[t._v("第二部分是权限模式：r表示读取(read)、w表示写入(write)，x表示执行(execute)")]),t._v(" "),_("p",[_("img",{attrs:{src:s(629),alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:s(630),alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:s(631),alt:""}})]),t._v(" "),_("p",[t._v("ls -a， a为all的首字母缩写，该命令可以列出系统的隐藏文件，隐藏文件以“.”开头。")]),t._v(" "),_("h2",{attrs:{id:"find-查找文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#find-查找文件"}},[t._v("#")]),t._v(" find 查找文件")]),t._v(" "),_("p",[t._v("find 命令在指定目录查找文件。语法：")]),t._v(" "),_("div",{staticClass:"language-shell line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" path -option "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-print"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-exec -ok command"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ul",[_("li",[t._v("path 表示查找目录的范围，即在哪里找文件，可以用Linux默认目录表示，例如：. (当前目录)，~ （家目录），/ (根目录)。")]),t._v(" "),_("li",[t._v("option 表示查找规则条件，例如：按文件名（-name）查找文件。")]),t._v(" "),_("li",[t._v("print 表示把查找结果标准输出，一般为默认选项，可以不写。")]),t._v(" "),_("li",[t._v("exec 和 ok 可以对查找结果做进一步的指令操作，它们两者的不同在于 ok 在操作前询问用户，而 exec 不会。")]),t._v(" "),_("li",[t._v('"{} ;"为固定格式，它们之间有空格。')])]),t._v(" "),_("p",[t._v("按照文件名（-name）查找文件")]),t._v(" "),_("div",{staticClass:"language-shell line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找家目录中扩展名为“.log”的文件")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" ~ -name "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.log"')]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找 /etc/ 目录下以c开头或以conf结尾的文件")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" /etc/ -name "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c*"')]),t._v(" -o -name "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*conf"')]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br")])]),_("p",[t._v("按文件大小（-size）查找文件")]),t._v(" "),_("div",{staticClass:"language-shell line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找/tmp目录下小于512KB的文件")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" /tmp -size -512k\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("p",[t._v("按时间戳（-atime/-mtime/-ctime）查找文件")]),t._v(" "),_("p",[t._v("atime：access time，通常为最后读文件的时间；")]),t._v(" "),_("p",[t._v("mtime：modified time，通常为最后写文件的时间；")]),t._v(" "),_("p",[t._v("ctime：change time，通常为最后改变文件权限属性的时间。")]),t._v(" "),_("p",[t._v("时间戳参数还可以用分钟为单位，-atime/-mtime/-ctime对应-amin/-mmin/-cmin")]),t._v(" "),_("p",[t._v("可以通过 stat 命令查看文件的信息")]),t._v(" "),_("div",{staticClass:"language-shell line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost0131 ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stat /etc/ssh/sshd_config ")]),t._v("\n  File: ‘/etc/ssh/sshd_config’\n  Size: "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("3907")]),t._v("            Blocks: "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("          IO Block: "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("   regular "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\nDevice: fd00h/64768d    Inode: "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("354805")]),t._v("      Links: "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nAccess: "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0600/-rw-------"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  Uid: "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("    "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("/    root"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   Gid: "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("    "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("/    root"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nContext: system_u:object_r:etc_t:s0\nAccess: "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v("-06-23 09:15:10.048000526 +0800\nModify: "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-08-09 09:40:39.000000000 +0800\nChange: "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v("-11-28 "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(":45:26.638590177 +0800\n Birth: -\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br")])]),_("h2",{attrs:{id:"touch-新建空文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#touch-新建空文件"}},[t._v("#")]),t._v(" touch 新建空文件")]),t._v(" "),_("p",[t._v("touch命令可以新建空文件，更新文件修改时间")]),t._v(" "),_("p",[t._v("格式： "),_("code",[t._v("touch [选项] 文件")])]),t._v(" "),_("p",[t._v("例子： "),_("code",[t._v("touch foo.txt")]),t._v(" ，创建foo.txt空文件")]),t._v(" "),_("h2",{attrs:{id:"mv-剪贴或重命名文件或文件夹"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mv-剪贴或重命名文件或文件夹"}},[t._v("#")]),t._v(" mv 剪贴或重命名文件或文件夹")]),t._v(" "),_("p",[t._v("格式： "),_("code",[t._v("mv [选项] 源文件或目录 目标文件或目录")])]),t._v(" "),_("p",[t._v("例子： "),_("code",[t._v("mv foo.txt foo.txt.backup")]),t._v(" ，将文件foo.txt重命名为foo.txt.backup")]),t._v(" "),_("p",[t._v("​             "),_("code",[t._v("mv foo.txt backup")]),t._v(" ，将文件foo.txt移动到目录backup中")]),t._v(" "),_("h2",{attrs:{id:"cp-复制文件或文件夹"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cp-复制文件或文件夹"}},[t._v("#")]),t._v(" cp 复制文件或文件夹")]),t._v(" "),_("p",[t._v("格式： "),_("code",[t._v("cp [选项] 源文件或目录 目标文件或目录")])]),t._v(" "),_("p",[t._v("例子： "),_("code",[t._v("cp foo.txt foo.txt.backup")]),t._v(" ，将文件foo.txt拷贝一份副本foo.txt.backup")]),t._v(" "),_("p",[t._v("​             "),_("code",[t._v("cp foo.txt backup")]),t._v(" ，将文件foo.txt复制到目录backup中")]),t._v(" "),_("h2",{attrs:{id:"rm-删除文件或文件夹"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rm-删除文件或文件夹"}},[t._v("#")]),t._v(" rm 删除文件或文件夹")]),t._v(" "),_("p",[t._v("格式： "),_("code",[t._v("rm [选项] 文件或目录")])]),t._v(" "),_("p",[t._v("例子： "),_("code",[t._v("rm foo.txt")]),t._v(" ，删除文件foo.txt")]),t._v(" "),_("p",[t._v("​             "),_("code",[t._v("rm -rf foo")]),t._v(" ，将文件夹foo及其子文件夹中所有内容删除，其不用一一确认")]),t._v(" "),_("h2",{attrs:{id:"cat-查看文件全部内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cat-查看文件全部内容"}},[t._v("#")]),t._v(" cat 查看文件全部内容")]),t._v(" "),_("p",[t._v("cat将一个文件的内容发送到标准输出设备，例如显示屏。")]),t._v(" "),_("p",[t._v("格式： "),_("code",[t._v("cat [选项] 文件")])]),t._v(" "),_("p",[t._v("例子： "),_("code",[t._v("cat /etc/ssh/sshd_config")]),t._v(" ，显示文件sshd_config的内容")]),t._v(" "),_("p",[t._v("​            "),_("code",[t._v("cat -n /etc/ssh/sshd_config")]),t._v(" ，显示文件sshd_config的内容，同时在文件每行前进行编号")]),t._v(" "),_("h2",{attrs:{id:"more-与-less-分屏查看长文件内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#more-与-less-分屏查看长文件内容"}},[t._v("#")]),t._v(" more 与 less 分屏查看长文件内容")]),t._v(" "),_("p",[t._v("more 命令从前向后读取文件。")]),t._v(" "),_("p",[t._v("格式： "),_("code",[t._v("more [选项] 文件")])]),t._v(" "),_("p",[t._v("例子： "),_("code",[t._v("more /etc/ssh/sshd_config")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[t._v("按键")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("用途")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("按【Space】空格键")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("向下翻页")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("按【B】键")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("向上翻页")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("按【Q 】键 或 【Ctrl+C】组合键")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("退出当前界面")])])])]),t._v(" "),_("p",[t._v("less是more命令的改良版，对more的交互快捷键是兼容的，支持【PgUp】和【PgDn】逐行阅读。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[t._v("按键")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("用途")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("按【PgUp】键")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("向上一行")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("按【PgDn】键")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("向下一行")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("按【Enter】键")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("向下一行")])])])]),t._v(" "),_("h2",{attrs:{id:"head-与-tail-查看文件指定内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#head-与-tail-查看文件指定内容"}},[t._v("#")]),t._v(" head 与 tail 查看文件指定内容")]),t._v(" "),_("p",[t._v("head 命令后直接跟文件名称默认会显示文件的前10行，如果想指定查看的行数可以使用参数-n。")]),t._v(" "),_("p",[t._v("tail 命令，查看文件的后几行。-f 参数可以用来动态查看文件的最后几行，一般用于监控日志文件或实时文件，占用提示符窗口而不会退出。")]),t._v(" "),_("div",{staticClass:"language-shell line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" nohub.out\t\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看文件nohub.out的前10行内容")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" -20 nohub.out\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看文件nohub.out的前20行内容")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -20 nohub.out\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看文件nohub.out的后20行内容")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -n "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" -f nohub.out\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 动态查看文件nohub.out的后20行内容")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br")])]),_("h2",{attrs:{id:"vi-与-vim-编辑文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vi-与-vim-编辑文件"}},[t._v("#")]),t._v(" vi 与 vim 编辑文件")]),t._v(" "),_("p",[t._v("vi 有三种基本工作模式：命令模式、插入模式和末行模式。")]),t._v(" "),_("p",[_("img",{attrs:{src:s(632),alt:""}})]),t._v(" "),_("p",[t._v("插入模式的常用快捷键：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("快捷键")]),t._v(" "),_("th",[t._v("功能")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("i")]),t._v(" "),_("td",[t._v("在光标前插入")])]),t._v(" "),_("tr",[_("td",[t._v("a")]),t._v(" "),_("td",[t._v("在光标后插入")])]),t._v(" "),_("tr",[_("td",[t._v("I")]),t._v(" "),_("td",[t._v("在光标所在行行首插入")])]),t._v(" "),_("tr",[_("td",[t._v("A")]),t._v(" "),_("td",[t._v("在光标所在行行尾插入")])]),t._v(" "),_("tr",[_("td",[t._v("o")]),t._v(" "),_("td",[t._v("在当前行的下面另起一行，并变为插入模式")])]),t._v(" "),_("tr",[_("td",[t._v("O")]),t._v(" "),_("td",[t._v("在当前行的上面另起一行，并变为插入模式")])])])]),t._v(" "),_("p",[t._v("插入模式的常用命令：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("x")]),t._v(" "),_("td",[t._v("删除光标所在处字符")])]),t._v(" "),_("tr",[_("td",[t._v("nx")]),t._v(" "),_("td",[t._v("删除光标所在处后n个字符")])]),t._v(" "),_("tr",[_("td",[t._v("dd")]),t._v(" "),_("td",[t._v("剪切当前行/删除光标所在行")])]),t._v(" "),_("tr",[_("td",[t._v("ndd")]),t._v(" "),_("td",[t._v("剪切当前行以下n行/删除光标所在行后n行")])]),t._v(" "),_("tr",[_("td",[t._v("D")]),t._v(" "),_("td",[t._v("删除光标所在处到行尾的内容")])]),t._v(" "),_("tr",[_("td",[t._v("dG")]),t._v(" "),_("td",[t._v("删除光标所在行到文件末尾的内容")])]),t._v(" "),_("tr",[_("td",[t._v(":n1,n2d")]),t._v(" "),_("td",[t._v("删除指定范围的行")])]),t._v(" "),_("tr",[_("td",[t._v("yy")]),t._v(" "),_("td",[t._v("复制当前行")])]),t._v(" "),_("tr",[_("td",[t._v("nyy")]),t._v(" "),_("td",[t._v("复制当前行以下n行")])]),t._v(" "),_("tr",[_("td",[t._v("yw")]),t._v(" "),_("td",[t._v("复制单词")])]),t._v(" "),_("tr",[_("td",[t._v("y$")]),t._v(" "),_("td",[t._v("复制光标到行尾")])]),t._v(" "),_("tr",[_("td",[t._v("y^")]),t._v(" "),_("td",[t._v("复制行首到光标")])]),t._v(" "),_("tr",[_("td",[t._v("p")]),t._v(" "),_("td",[t._v("粘贴在光标所在行下")])]),t._v(" "),_("tr",[_("td",[t._v("P")]),t._v(" "),_("td",[t._v("粘贴在光标所在行上")])]),t._v(" "),_("tr",[_("td",[t._v("fC")]),t._v(" "),_("td",[t._v("快速移动到字符C")])]),t._v(" "),_("tr",[_("td",[t._v("rC")]),t._v(" "),_("td",[t._v("替换光标所在处字符为字母C")])]),t._v(" "),_("tr",[_("td",[t._v("R")]),t._v(" "),_("td",[t._v("从光标所在处开始替换字符，按Esc结束")])]),t._v(" "),_("tr",[_("td",[t._v("u")]),t._v(" "),_("td",[t._v("取消上一步操作")])])])]),t._v(" "),_("p",[t._v("末行模式的常用命令：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("功能")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v(":set nu")]),t._v(" "),_("td",[t._v("设置行号")])]),t._v(" "),_("tr",[_("td",[t._v(":set nonu")]),t._v(" "),_("td",[t._v("取消行号")])]),t._v(" "),_("tr",[_("td",[t._v(":wq!")]),t._v(" "),_("td",[t._v("保存退出。"),_("code",[t._v(":wq")]),t._v(" 是 write (存盘) 和 quit (退出) 的组合命令。")])]),t._v(" "),_("tr",[_("td",[t._v(":q!")]),t._v(" "),_("td",[t._v("不保存强制退出")])])])]),t._v(" "),_("p",[t._v("在末行模式中，值得一提的命令是查找与替换。")]),t._v(" "),_("p",[t._v("查找命令以 “/” 字符开始，后接被查找的字符，与 less 命令的查找快捷键相同。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("功能")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("n")]),t._v(" "),_("td",[t._v("跳转到下一个匹配字符串")])]),t._v(" "),_("tr",[_("td",[t._v("N")]),t._v(" "),_("td",[t._v("跳转到上一个匹配字符串")])])])]),t._v(" "),_("p",[t._v("例如查找字母t，输入“/t”，屏幕中就会反白显示查找的内容。")]),t._v(" "),_("p",[t._v("替换命令由三个反斜杠（///）连接而成，第一个反斜杠之前表示替换的范围，第一个和第二个反斜杠之间表示需要被替换的字符串，第二个和第三个反斜杠之间表示替换成的字符串。")]),t._v(" "),_("p",[t._v("例如："),_("code",[t._v(":20,30s/set/SET/g")]),t._v(" 表示替换20~30行的所有set为SET，参数g表示全局替换，如果不加参数g，表示只替换本行的第一个匹配的字符串。")]),t._v(" "),_("p",[t._v("常用的定位命令：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("功能")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("gg")]),t._v(" "),_("td",[t._v("跳到第一行")])]),t._v(" "),_("tr",[_("td",[t._v("G")]),t._v(" "),_("td",[t._v("跳到最后一行")])]),t._v(" "),_("tr",[_("td",[t._v("nG")]),t._v(" "),_("td",[t._v("跳到第n行")])]),t._v(" "),_("tr",[_("td",[t._v(":n")]),t._v(" "),_("td",[t._v("跳到第n行")])]),t._v(" "),_("tr",[_("td",[t._v("0")]),t._v(" "),_("td",[t._v("移至光标所在行行首")])]),t._v(" "),_("tr",[_("td",[t._v("$")]),t._v(" "),_("td",[t._v("移至光标所在行行尾")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);