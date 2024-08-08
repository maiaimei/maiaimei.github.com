(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{732:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("可以使用 "),t("a",{attrs:{href:"https://github.com/electerm/electerm/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("electerm"),t("OutboundLink")],1),s._v("、Xshell 连接 Linux 系统。")]),s._v(" "),t("h2",{attrs:{id:"系统管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统管理"}},[s._v("#")]),s._v(" 系统管理")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关机")]),s._v("\npoweroff\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看操作系统信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看磁盘使用情况")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -hl\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内存使用情况")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/meminfo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -h\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -g\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理缓存")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/vm/drop_caches\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"进程管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程管理"}},[s._v("#")]),s._v(" 进程管理")]),s._v(" "),t("p",[s._v("ps （英文全拼：process status）命令用于显示进程的状态。")]),s._v(" "),t("h4",{attrs:{id:"查找进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找进程"}},[s._v("#")]),s._v(" 查找进程")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -le\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找指定进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" 关键字\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以树状图显示进程间的关系")]),s._v("\npstree -p\npstree -p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" 关键字\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h4",{attrs:{id:"查看系统健康状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看系统健康状态"}},[s._v("#")]),s._v(" 查看系统健康状态")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("table",[t("thead",[t("tr",[t("th",[s._v("选项")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("-d 秒数")]),s._v(" "),t("td",[s._v("指定top命令每隔几秒更新。默认是3秒")])])])]),s._v(" "),t("p",[s._v("在top交互模式下可以执行以下命令")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("命令")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("?或h")]),s._v(" "),t("td",[s._v("显示交互模式的帮助")])]),s._v(" "),t("tr",[t("td",[s._v("P")]),s._v(" "),t("td",[s._v("以CPU使用率排序，默认是此项")])]),s._v(" "),t("tr",[t("td",[s._v("M")]),s._v(" "),t("td",[s._v("以内存使用率排序")])]),s._v(" "),t("tr",[t("td",[s._v("N")]),s._v(" "),t("td",[s._v("以PID排序")])]),s._v(" "),t("tr",[t("td",[s._v("q")]),s._v(" "),t("td",[s._v("退出top")])])])]),s._v(" "),t("h4",{attrs:{id:"终止进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#终止进程"}},[s._v("#")]),s._v(" 终止进程")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程可用信号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -l\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制终止进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 pid\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pkill")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"工作管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作管理"}},[s._v("#")]),s._v(" 工作管理")]),s._v(" "),t("p",[s._v("将进程放在后台的方式：")]),s._v(" "),t("ol",[t("li",[s._v("在命令后面加 &，此方式该命令后台运行")]),s._v(" "),t("li",[s._v("执行命令后，按Ctrl+Z，此方式该命令后台暂停")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有工作进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v(" -l\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将后台暂停的工作进程恢复到前台运行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fg")]),s._v(" 工作号\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将后台暂停的工作进程恢复到后台运行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bg")]),s._v(" 工作号\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"定时任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定时任务"}},[s._v("#")]),s._v(" 定时任务")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/qq_22172133/article/details/81263736",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux的基本操作——crond定时任务"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" crontabs\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" crond status\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态\t")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" crond start\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" crond stop\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" crond restart\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" crond reload\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新载入配置")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("系统任务调度")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@gitlab ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /etc/crontab")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SHELL")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/bash\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/sbin:/bin:/usr/sbin:/usr/bin\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAILTO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For details see man 4 crontabs")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example of job definition:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .---------------- minute (0 - 59)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  .------------- hour (0 - 23)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  .---------- day of month (1 - 31)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  |  |  |")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# *  *  *  *  * user-name  command to be executed")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[t("strong",[s._v("用户任务调度")])]),s._v(" "),t("p",[s._v("所有用户定义的任务调度保存在 /var/spool/cron 目录中，以用户名命名。")]),s._v(" "),t("h2",{attrs:{id:"文件管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件管理"}},[s._v("#")]),s._v(" 文件管理")]),s._v(" "),t("h3",{attrs:{id:"文本分析-awk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文本分析-awk"}},[s._v("#")]),s._v(" 文本分析 - awk")]),s._v(" "),t("p",[s._v("awk '{print $2}'")]),s._v(" "),t("p",[s._v("$2：表示第二个字段")]),s._v(" "),t("p",[s._v("print $2 ： 打印第二个字段")]),s._v(" "),t("p",[s._v("awk '{print $2}'  $fileName :   一行一行的读取指定的文件， 以空格作为分隔符，打印第二个字段")]),s._v(" "),t("h3",{attrs:{id:"全局替换-sed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局替换-sed"}},[s._v("#")]),s._v(" 全局替换 - sed")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/源字符串/新字符串/g'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"输入输出-tee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入输出-tee"}},[s._v("#")]),s._v(" 输入输出 - tee")]),s._v(" "),t("p",[s._v("读取标准输入数据，并将内容输出到文件")]),s._v(" "),t("p",[s._v("-a 追加，不加表示覆盖")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" test.txt\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" -a test.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"文件传输"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件传输"}},[s._v("#")]),s._v(" 文件传输")]),s._v(" "),t("h3",{attrs:{id:"scp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scp"}},[s._v("#")]),s._v(" scp")]),s._v(" "),t("p",[s._v("Linux scp 命令用于 Linux 之间复制文件和目录。")]),s._v(" "),t("p",[s._v("scp 是 secure copy 的缩写, scp 是 linux 系统下基于 ssh 登陆进行安全的远程文件拷贝命令。")]),s._v(" "),t("p",[s._v("scp 是加密的，rcp 是不加密的，scp 是 rcp 的加强版。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" local_file remote_username@remote_ip:remote_folder  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" local_file remote_username@remote_ip:remote_file \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" local_file remote_ip:remote_folder \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" local_file remote_ip:remote_file \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -P 端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -r 递归")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -P remote_port local_file remote_username@remote_ip:remote_folder\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -P remote_port -r local_folder remote_username@remote_ip:remote_folder\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"搜索命令-find-locate-whereis-which"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搜索命令-find-locate-whereis-which"}},[s._v("#")]),s._v(" 搜索命令 - find, locate, whereis, which")]),s._v(" "),t("p",[t("strong",[s._v("whereis")]),s._v(" 和 "),t("strong",[s._v("which")]),s._v(" 都是"),t("strong",[s._v("查找可执行文件路径")]),s._v("的命令。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux opt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# whereis cp")]),s._v("\ncp: /usr/bin/cp /usr/share/man/man1/cp.1.gz\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux opt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# which cp")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cp -i'")]),s._v("\n        /usr/bin/cp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"eof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eof"}},[s._v("#")]),s._v(" EOF, >, >>, <, <<")]),s._v(" "),t("p",[s._v("EOF是END Of File的缩写，表示自定义终止符。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始")])]),s._v("\n…\nEOF")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结束")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("<   : 输入重定向")]),s._v(" "),t("p",[s._v("<< : 标准输入来自命令行的一对分隔号的中间内容")]),s._v(" "),t("p",[s._v(">   : 输出重定向")]),s._v(" "),t("p",[s._v(">> : 输出重定向，进行追加，不会覆盖之前内容")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n  "registry-mirrors": ["https://4uv4xvt5.mirror.aliyuncs.com"]\n}\nEOF')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"ssh-ssh-keygen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh-ssh-keygen"}},[s._v("#")]),s._v(" ssh & ssh-keygen")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接远程服务器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -p port username@ip\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看安装 ssh-keygen 的程序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qf "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" ssh-keygen"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成密钥对")]),s._v("\nssh-keygen\nssh-keygen -t rsa -P "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" -f /root/.ssh/id_rsa\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布公钥")]),s._v("\nssh-copy-id -i /root/.ssh/id_rsa.pub root@192.168.1.17\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("ssh 免密登录，scp免密传输，使用ssh-keygen生成密钥对，然后将公钥发布出去即可。")]),s._v(" "),t("p",[s._v("注意：A服务器连B服务器，在A服务器使用ssh-keygen生成密钥对，然后使用ssh-copy-id将公钥发布到B服务器。")]),s._v(" "),t("h2",{attrs:{id:"grep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[s._v("#")]),s._v(" grep")]),s._v(" "),t("p",[s._v("grep 用于查找文件里符合条件的字符串。")]),s._v(" "),t("ul",[t("li",[s._v("-v 不显示匹配到的行")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v 字符串\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"实用脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实用脚本"}},[s._v("#")]),s._v(" 实用脚本")]),s._v(" "),t("h3",{attrs:{id:"如果文件存在-则删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果文件存在-则删除"}},[s._v("#")]),s._v(" 如果文件存在，则删除")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("log_path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/webapp/uuap-api-ssh/log.log\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f log_path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${log_path}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"如果目录不存在-则创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果目录不存在-则创建"}},[s._v("#")]),s._v(" 如果目录不存在，则创建")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("backup_path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/webapp_backup/uuap-api-ssh/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BUILD_NUMBER}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${backup_path}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${backup_path}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"相关链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[s._v("#")]),s._v(" 相关链接")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://mirrors.aliyun.com/gnu/",target:"_blank",rel:"noopener noreferrer"}},[s._v("阿里云开源镜像站"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV1mW411i7Qf",target:"_blank",rel:"noopener noreferrer"}},[s._v("史上最牛的Linux视频教程—兄弟连"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);