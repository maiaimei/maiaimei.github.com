(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{624:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"安装-gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-gitlab"}},[s._v("#")]),s._v(" 安装 GitLab")]),s._v(" "),t("h3",{attrs:{id:"在-centos-上安装-gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-centos-上安装-gitlab"}},[s._v("#")]),s._v(" 在 CentOS 上安装 GitLab")]),s._v(" "),t("p",[s._v("配置yum源")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/yum.repos.d/gitlab-ce.repo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("添加以下内容")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[s._v("[gitlab-ce]\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("gitlab-ce")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("http://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el6")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("Repo_gpgcheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("Enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("Gpgkey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("https://packages.gitlab.com/gpg.key")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("更新本地yum缓存")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum makecache\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装GitLab社区版")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gitlab-ce\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装最新版")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gitlab-ce-x.x.x\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装指定版本")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"在-docker-上安装-gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-docker-上安装-gitlab"}},[s._v("#")]),s._v(" 在 Docker 上安装 GitLab")]),s._v(" "),t("p",[s._v("TODO：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker pull gitlab/gitlab-ce\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /srv/gitlab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GITLAB_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/srv/gitlab\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   --restart always \\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t--hostname gitlab.example.com \\")]),s._v("\ndocker run --detach "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --publish "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(":443 --publish "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 --publish "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8022")]),s._v(":22 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --name gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --volume "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GITLAB_HOME")]),s._v("/config:/etc/gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --volume "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GITLAB_HOME")]),s._v("/logs:/var/log/gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --volume "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GITLAB_HOME")]),s._v("/data:/var/opt/gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --privileged "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  gitlab/gitlab-ce:latest\n  \ndocker logs -f gitlab\n\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it gitlab /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h2",{attrs:{id:"启动-gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-gitlab"}},[s._v("#")]),s._v(" 启动 GitLab")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gitlab-ctl start\ngitlab-ctl stop\ngitlab-ctl restart\ngitlab-ctl status\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/gitlab/gitlab.rb\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新载入配置")]),s._v("\ngitlab-ctl reconfigure\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看日志")]),s._v("\ngitlab-ctl "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份恢复")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"配置-gitlab-rb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-gitlab-rb"}},[s._v("#")]),s._v(" 配置 gitlab.rb")]),s._v(" "),t("p",[s._v("停止 GitLab")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gitlab-ctl stop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("修改配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/gitlab/gitlab.rb /etc/gitlab/gitlab.rb.backup\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/gitlab/gitlab.rb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("修改以下内容")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 宿主机要做域名映射")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("external_url")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("'http://gitlab.example.com'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 性能调优")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("prometheus['enable']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("postgresql['shared_buffers']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"128MB"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("postgresql['max_worker_processes']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("unicorn['worker_timeout']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("60")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("unicorn['worker_processes']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("2")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 邮件功能")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gitlab_rails['smtp_enable']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gitlab_rails['smtp_address']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"smtp.qq.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gitlab_rails['smtp_port']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("465")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gitlab_rails['smtp_user_name']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"1211674185@qq.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gitlab_rails['smtp_password']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"smtp password"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gitlab_rails['smtp_domain']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"qq.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gitlab_rails['smtp_authentication']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"login"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gitlab_rails['smtp_enable_starttls_auto']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gitlab_rails['smtp_tls']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gitlab_rails['gitlab_email_enabled']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gitlab_rails['gitlab_email_from']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("'1211674185@qq.com'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gitlab_rails['gitlab_email_display_name']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("'gitlab'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("gitlab_rails['gitlab_email_reply_to']")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("'1211674185@qq.com'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("重新载入配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gitlab-ctl reconfigure\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("启动 GitLab")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gitlab-ctl start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"重置密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重置密码"}},[s._v("#")]),s._v(" 重置密码")]),s._v(" "),t("p",[s._v("原文链接：https://blog.csdn.net/qq_44895681/article/details/120530904")]),s._v(" "),t("p",[s._v("官方文档：https://docs.gitlab.com/ee/security/reset_user_password.html")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("重置密码之前，需先使用root用户登录到gitlab所在服务器。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("gitlab-rails console -e production\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("等待控制台加载完毕，有多种找到用户的方法，您可以搜索电子邮件或用户名。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" User.where"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".first\nuser "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" User.find_by"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("email: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin@example.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("现在更改密码。注意，必须同时更改密码和password_confirmation才能使其正常工作。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("user.password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'新密码'")]),s._v("\nuser.password_confirmation "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'新密码'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("保存更改。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("user.save\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);