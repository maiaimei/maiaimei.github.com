(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{674:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"在linux下安装postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在linux下安装postgresql"}},[s._v("#")]),s._v(" 在Linux下安装PostgreSQL")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.postgresql.org/download/linux/redhat/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.postgresql.org/download/linux/redhat/"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("0、安装JDK11")]),s._v(" "),a("p",[s._v("1、下载安装包")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、安装postgresql")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y postgresql13-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、初始化数据库")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /usr/pgsql-13/bin/postgresql-13-setup initdb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4、设置开机启动postgresql")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" postgresql-13\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5、启动postgresql")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start postgresql-13\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("6、检查postgresql是否运行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方式一：查看服务状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status postgresql-13 \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方式二：查postgres的进程信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" postgres\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方式三：查postgres的端口号5432是否已经打开")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tpnl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("7、停止postgresql")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop postgresql-13\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status postgresql-13 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("8、开启远程访问")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/lib/pgsql/13/data\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 8.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" postgresql.conf postgresql.conf.bak\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" postgresql.conf\n将 listen_addresses "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" 修改为 listen_addresses "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 8.2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" pg_hba.conf pg_hba.conf.bak\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" pg_hba.conf\n增加一行访问规则，表示允许任何一个客户端使用正确的用户名和密码访问postgresql \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("    all             all             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0/0               trust\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("9、启动postgresql")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start postgresql-13\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status postgresql-13\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("10、使用"),a("a",{attrs:{href:"https://dbeaver.io/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("DBeaver"),a("OutboundLink")],1),s._v("、"),a("a",{attrs:{href:"https://www.pgadmin.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("pgAdmin"),a("OutboundLink")],1),s._v("等客户端连接postgresql")]),s._v(" "),a("p",[s._v("postgresql默认用户：postgres，密码：无")]),s._v(" "),a("p",[s._v("pgAdmin初始主密码：123456")]),s._v(" "),a("p",[s._v("11、其他命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启postgresql-13")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart postgresql-13\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查 PostgreSQL 是否已经安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" postgres    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查 PostgreSQL 安装位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" postgres\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"postgresql-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-使用"}},[s._v("#")]),s._v(" PostgreSQL 使用")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://m.runoob.com/postgresql/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostgreSQL 教程 | 菜鸟教程"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("切换到 postgres 用户来开启命令行工具：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -i -u postgres\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入到 PostgreSQL 的控制台：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("psql -h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("服务器地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("端口号"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("数据库名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-U 用户名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\npsql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("1、数据库操作")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出数据库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("postgres")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \\l")]),s._v("\n                                  List of databases\n   Name    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  Owner   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Encoding "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   Collate   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    Ctype    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   Access privileges   \n-----------+----------+----------+-------------+-------------+-----------------------\n postgres  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" postgres "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" UTF8     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" \n sonarqube "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sonar    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" UTF8     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" \n template0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" postgres "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" UTF8     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c/postgres          +\n           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("postgres")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CTc/postgres\n template1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" postgres "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" UTF8     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c/postgres          +\n           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("postgres")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CTc/postgres\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换数据库")]),s._v("\npostgres-"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \\c testdb")]),s._v("\nYou are now connected to database "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testdb"')]),s._v(" as user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postgres"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\ntestdb-"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("2、数据表操作")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出当前数据库所有表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("d\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看表格信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("d tablename\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("其他操作：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查看pgsql版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查看用户名和密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" pg_authid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 获取服务器上所有数据库信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" pg_database "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" datname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 得到当前db中所有表的信息（pg_tables是系统视图）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pg_tables "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" schemaname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 断开连接到sonar数据库上的所有链接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" pg_terminate_backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pg_stat_activity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" pg_stat_activity\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" datname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sonar'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" pid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v("pg_backend_pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);