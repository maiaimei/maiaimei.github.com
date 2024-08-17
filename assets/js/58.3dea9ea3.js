(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{688:function(a,s,t){"use strict";t.r(s);var e=t(7),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("GitLab，由GitLabInc.开发，使用MIT许可证的基于网络的Git仓库管理工具，且具有wiki和issue跟踪功能。使用Git作为代码管理工具，并在此基础上搭建起来的web服务。可以理解为Github的私服版。")]),a._v(" "),t("h2",{attrs:{id:"install-gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-gitlab"}},[a._v("#")]),a._v(" Install GitLab")]),a._v(" "),t("p",[a._v("Linux 安装包安装是一种快速的安装方式，而且容易升级。安装包中包含了运行极狐GitLab 所需要的所有服务和工具，这种方式也被称之为 Omnibus 安装。Omnibus 安装所需的最少内存为 4GB（可查阅"),t("a",{attrs:{href:"https://docs.gitlab.com/ee/install/requirements.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("最低安装需求"),t("OutboundLink")],1),a._v("）。")]),a._v(" "),t("p",[a._v("各操作系统对应的不同版本的安装包可以在"),t("a",{attrs:{href:"https://packages.gitlab.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("极狐GitLab 安装包仓库"),t("OutboundLink")],1),a._v("进行查看和下载。")]),a._v(" "),t("p",[a._v("极狐GitLab 对于不同 OS 的支持策略可以查看"),t("a",{attrs:{href:"https://docs.gitlab.cn/jh/administration/package_information/supported_os.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("极狐GitLab 官方文档"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"installation-system-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-system-requirements"}},[a._v("#")]),a._v(" Installation system requirements")]),a._v(" "),t("p",[a._v("推荐使用 Ubuntu 或 CentOS 等主流Linux发行版。 最低推荐配置：")]),a._v(" "),t("ol",[t("li",[a._v("内存 ： 至少2GB RAM（推荐4GB或更多） 。")]),a._v(" "),t("li",[a._v("存储空间 ：至少20GB的可用存储空间（根据需求可适当增加）。")])]),a._v(" "),t("p",[a._v("此外，你还需要拥有root或sudo权限，以便在服务器上执行命令。")]),a._v(" "),t("h3",{attrs:{id:"install-gitlab-by-using-linux-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-gitlab-by-using-linux-package"}},[a._v("#")]),a._v(" Install GitLab by using Linux package")]),a._v(" "),t("p",[a._v("Linux package, previously known as "),t("a",{attrs:{href:"https://docs.gitlab.com/omnibus/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Omnibus"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("The official "),t("code",[a._v("deb")]),a._v(" and "),t("code",[a._v("rpm")]),a._v(" packages. The Linux package has GitLab and dependent components, including PostgreSQL, Redis, and Sidekiq.")]),a._v(" "),t("p",[a._v("Install "),t("code",[a._v("pygpgme")]),a._v(", a package which allows "),t("code",[a._v("yum")]),a._v(" to handle "),t("a",{attrs:{href:"https://www.gnupg.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("gpg"),t("OutboundLink")],1),a._v(" signatures, and a package called "),t("code",[a._v("yum-utils")]),a._v(" which contains the tools you need for installing source RPMs.")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" pygpgme yum-utils\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("You may need to install the "),t("a",{attrs:{href:"https://fedoraproject.org/wiki/EPEL",target:"_blank",rel:"noopener noreferrer"}},[a._v("EPEL repository"),t("OutboundLink")],1),a._v(" for your system to install these packages. If you do not install "),t("code",[a._v("pygpgme")]),a._v(", GPG verification will not work.")]),a._v(" "),t("p",[a._v("Create a file named "),t("code",[a._v("/etc/yum.repos.d/gitlab_gitlab-ce.repo")]),a._v(" that contains the repository configuration below.")]),a._v(" "),t("p",[a._v("Make sure to replace "),t("strong",[a._v("el")]),a._v(" and "),t("strong",[a._v("6")]),a._v(" in the config below with your "),t("a",{attrs:{href:"https://packagecloud.io/docs#os_distro_version",target:"_blank",rel:"noopener noreferrer"}},[a._v("Linux distribution and version"),t("OutboundLink")],1),a._v(":")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[a._v("[gitlab_gitlab-ce]\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("gitlab_gitlab-ce")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("https://packages.gitlab.com/gitlab/gitlab-ce/el/6/$basearch")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("repo_gpgcheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("https://packages.gitlab.com/gitlab/gitlab-ce/gpgkey")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("       https")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("//packages.gitlab.com/gitlab/gitlab-ce/gpgkey/gitlab-gitlab-ce-3D645A26AB9FBD22.pub.gpg")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("sslverify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("sslcacert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/etc/pki/tls/certs/ca-bundle.crt")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("metadata_expire")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("300")]),a._v("\n\n[gitlab_gitlab-ce-source]\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("gitlab_gitlab-ce-source")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("https://packages.gitlab.com/gitlab/gitlab-ce/el/6/SRPMS")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("repo_gpgcheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("https://packages.gitlab.com/gitlab/gitlab-ce/gpgkey")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("       https")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("//packages.gitlab.com/gitlab/gitlab-ce/gpgkey/gitlab-gitlab-ce-3D645A26AB9FBD22.pub.gpg")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("sslverify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("sslcacert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/etc/pki/tls/certs/ca-bundle.crt")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("metadata_expire")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("300")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br")])]),t("p",[a._v("A simple gitlab_gitlab-ce.repo:")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[a._v("[gitlab_gitlab-ce]\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("gitlab_gitlab-ce")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("0")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("Valid options for "),t("code",[a._v("os")]),a._v(" and "),t("code",[a._v("dist")]),a._v(" parameters can be found "),t("a",{attrs:{href:"https://packagecloud.io/docs#os_distro_version",target:"_blank",rel:"noopener noreferrer"}},[a._v("in our supported OS list in the docs"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("Update your local yum cache by running.")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# sudo yum -q makecache -y --disablerepo='*' --enablerepo='gitlab_gitlab-ce'")]),a._v("\nyum clean all\nyum makecache\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("You can now install packages from your repository.")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gitlab-ce\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#安装最新版")]),a._v("\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gitlab-ce-17.0.1-ce.0.el7.x86_64\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#安装指定版本")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("Configure and start GitLab.")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("gitlab-ctl reconfigure\ngitlab-ctl status\ngitlab-ctl start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"install-gitlab-by-using-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-gitlab-by-using-docker"}},[a._v("#")]),a._v(" Install GitLab by using Docker")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://docs.gitlab.com/ee/install/docker.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitLab Docker"),t("OutboundLink")],1),a._v("镜像是GitLab在单个容器中运行所有必要服务的整体镜像。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker pull gitlab/gitlab-ce\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /srv/gitlab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GITLAB_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/srv/gitlab\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#   --restart always \\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#\t--hostname gitlab.example.com \\")]),a._v("\ndocker run --detach "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --publish "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v(":443 --publish "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 --publish "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8022")]),a._v(":22 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --name gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --volume "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GITLAB_HOME")]),a._v("/config:/etc/gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --volume "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GITLAB_HOME")]),a._v("/logs:/var/log/gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --volume "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GITLAB_HOME")]),a._v("/data:/var/opt/gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --privileged "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  gitlab/gitlab-ce:latest\n  \ndocker logs -f gitlab\n\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it gitlab /bin/bash\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br")])]),t("h3",{attrs:{id:"configure-gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-gitlab"}},[a._v("#")]),a._v(" Configure GitLab")]),a._v(" "),t("p",[a._v("停止 GitLab")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gitlab-ctl stop\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("修改配置")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /etc/gitlab\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" gitlab.rb gitlab.rb.backup\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" gitlab.rb\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("域名配置")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("external_url")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("'http://gitlab.example.com'")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("邮件配置")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_enable']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_address']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"smtp.qq.com"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_port']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("465")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_user_name']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"1211674185@qq.com"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_password']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"smtp password"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_domain']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"qq.com"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_authentication']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"login"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_enable_starttls_auto']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_tls']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['gitlab_email_enabled']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['gitlab_email_from']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("'1211674185@qq.com'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['gitlab_email_display_name']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("'gitlab'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['gitlab_email_reply_to']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("'1211674185@qq.com'")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("p",[a._v("性能调优")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("prometheus['enable']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("false")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("postgresql['shared_buffers']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"128MB"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("postgresql['max_worker_processes']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("2")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("重新配置 GitLab")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gitlab-ctl reconfigure\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("启动 GitLab")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gitlab-ctl start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"reset-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reset-password"}},[a._v("#")]),a._v(" Reset password")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("打开Rails控制台。")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# For Omnibus installations (Linux package)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" gitlab-rails console\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# For source installations")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" -u "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rails console -e production\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# For docker")]),a._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("container-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" gitlab-rails console\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("查找用户。")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# By username:")]),a._v("\nuser "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" User.find_by_username "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# By user ID:")]),a._v("\nuser "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" User.find"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# By email address:")]),a._v("\nuser "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" User.find_by"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("email: "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root@example.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("通过设置user.password和user.password_confirmation的值重置密码。")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置新的随机密码")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# new_password = ::User.random_password")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 为新密码设置特定值")]),a._v("\nnew_password "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'123456'")]),a._v("\nuser.password "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" new_password\nuser.password_confirmation "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" new_password\nuser.password_automatically_set "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("保存更改。")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("user.save"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("退出控制台。")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])]),a._v(" "),t("h2",{attrs:{id:"use-gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-gitlab"}},[a._v("#")]),a._v(" Use GitLab")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gitlab-ctl start\ngitlab-ctl stop\ngitlab-ctl restart\ngitlab-ctl status\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重新配置")]),a._v("\ngitlab-ctl reconfigure\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看日志")]),a._v("\ngitlab-ctl "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("h3",{attrs:{id:"use-ssh-keys-to-communicate-with-gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-ssh-keys-to-communicate-with-gitlab"}},[a._v("#")]),a._v(" Use SSH keys to communicate with GitLab")]),a._v(" "),t("p",[a._v("refer to "),t("a",{attrs:{href:"https://docs.gitlab.com/ee/user/ssh.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.gitlab.com/ee/user/ssh.html"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"store-git-data-in-an-alternative-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#store-git-data-in-an-alternative-directory"}},[a._v("#")]),a._v(" Store Git data in an alternative directory")]),a._v(" "),t("p",[a._v("By default, Linux package installations store the Git repository data under "),t("code",[a._v("/var/opt/gitlab/git-data")]),a._v(". The repositories are stored in a subfolder called "),t("code",[a._v("repositories")]),a._v(".")]),a._v(" "),t("p",[a._v("refer to "),t("a",{attrs:{href:"https://docs.gitlab.com/omnibus/settings/configuration.html#store-git-data-in-an-alternative-directory",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.gitlab.com/omnibus/settings/configuration.html#store-git-data-in-an-alternative-directory"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[a._v("#")]),a._v(" Reference")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://docs.gitlab.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.gitlab.com/"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://docs.gitlab.com/omnibus/installation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.gitlab.com/omnibus/installation/"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://docs.gitlab.com/ee/security/reset_user_password.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.gitlab.com/ee/security/reset_user_password.html"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://packages.gitlab.com/gitlab/gitlab-ce/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://packages.gitlab.com/gitlab/gitlab-ce/"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);