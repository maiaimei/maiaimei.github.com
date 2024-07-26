(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{635:function(s,e,t){s.exports=t.p+"assets/img/20240623141828.6fc4adcb.jpg"},636:function(s,e,t){s.exports=t.p+"assets/img/20240621232903.e7edab1d.png"},737:function(s,e,t){"use strict";t.r(e);var n=t(7),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"ssh-简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssh-简介"}},[s._v("#")]),s._v(" SSH 简介")]),s._v(" "),n("p",[s._v("SSH（Secure Shell）是一种能够以安全方式提供远程登录的协议，也是目前远程管理Linux系统的首选方式。")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.openssh.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("OpenSSH"),n("OutboundLink")],1),s._v(" 是 SSH 协议的免费开源实现。")]),s._v(" "),n("p",[s._v("OpenSSH is the premier connectivity tool for remote login with the SSH protocol. It encrypts all traffic to eliminate eavesdropping, connection hijacking, and other attacks. In addition, OpenSSH provides a large suite of secure tunneling capabilities, several authentication methods, and sophisticated configuration options.")]),s._v(" "),n("p",[s._v("The OpenSSH suite consists of the following tools:")]),s._v(" "),n("ul",[n("li",[s._v("Remote operations are done using "),n("a",{attrs:{href:"https://man.openbsd.org/ssh.1",target:"_blank",rel:"noopener noreferrer"}},[s._v("ssh"),n("OutboundLink")],1),s._v(", "),n("a",{attrs:{href:"https://man.openbsd.org/scp.1",target:"_blank",rel:"noopener noreferrer"}},[s._v("scp"),n("OutboundLink")],1),s._v(", and "),n("a",{attrs:{href:"https://man.openbsd.org/sftp.1",target:"_blank",rel:"noopener noreferrer"}},[s._v("sftp"),n("OutboundLink")],1),s._v(".")]),s._v(" "),n("li",[s._v("Key management with "),n("a",{attrs:{href:"https://man.openbsd.org/ssh-add.1",target:"_blank",rel:"noopener noreferrer"}},[s._v("ssh-add"),n("OutboundLink")],1),s._v(", "),n("a",{attrs:{href:"https://man.openbsd.org/ssh-keysign.8",target:"_blank",rel:"noopener noreferrer"}},[s._v("ssh-keysign"),n("OutboundLink")],1),s._v(", "),n("a",{attrs:{href:"https://man.openbsd.org/ssh-keyscan.1",target:"_blank",rel:"noopener noreferrer"}},[s._v("ssh-keyscan"),n("OutboundLink")],1),s._v(", and "),n("a",{attrs:{href:"https://man.openbsd.org/ssh-keygen.1",target:"_blank",rel:"noopener noreferrer"}},[s._v("ssh-keygen"),n("OutboundLink")],1),s._v(".")]),s._v(" "),n("li",[s._v("The service side consists of "),n("a",{attrs:{href:"https://man.openbsd.org/sshd.8",target:"_blank",rel:"noopener noreferrer"}},[s._v("sshd"),n("OutboundLink")],1),s._v(", "),n("a",{attrs:{href:"https://man.openbsd.org/sftp-server.8",target:"_blank",rel:"noopener noreferrer"}},[s._v("sftp-server"),n("OutboundLink")],1),s._v(", and "),n("a",{attrs:{href:"https://man.openbsd.org/ssh-agent.1",target:"_blank",rel:"noopener noreferrer"}},[s._v("ssh-agent"),n("OutboundLink")],1),s._v(".")])]),s._v(" "),n("h2",{attrs:{id:"ssh-环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssh-环境搭建"}},[s._v("#")]),s._v(" SSH 环境搭建")]),s._v(" "),n("p",[s._v("查看系统是否已经安装OpenSSH：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查系统上是否存在sshd进程")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" sshd\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查系统是否安装了OpenSSH客户端，如果SSH客户端已安装并正确配置，它将显示路径：/usr/bin/ssh")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查系统是否安装了OpenSSH")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" openssh\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查系统是否安装了OpenSSH服务端")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" openssh-server\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查系统是否安装了OpenSSH客户端")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" openssh-clients\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -V\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("如果在一台Linux主机上通过ssh命令登录另一台主机，需要安装SSH的客户端，这在最小化系统中并不默认安装，所以需要手动更新安装。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssh-clients -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("被登录的主机，需要安装SSH的服务端，可以按照以下步骤进行操作：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("安装OpenSSH软件包（通常在Linux系统中已经默认安装）。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssh-server -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v('打开SSH服务的配置文件，该文件位于/etc/ssh/sshd_config目录下，名为"sshd_config"。sshd_config 是 SSH 守护程序（sshd）的配置文件，用于定义 SSH 服务器的行为。')]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从根目录开始递归搜索所有目录，查找名为 sshd_config 的文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -name sshd_config\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("使用编辑器（比如vi或nano）打开sshd_config文件并修改相关设置。")])]),s._v(" "),n("li",[n("p",[s._v("常见的配置选项：")]),s._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定SSH连接所使用的端口号，默认为22")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("Port")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("22")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许root用户登录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("PermitRootLogin")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("yes")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用密码认证")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("PasswordAuthentication")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("yes")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用公钥认证")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("PubkeyAuthentication")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("yes")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公钥认证文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("AuthorizedKeysFile")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v(".ssh/authorized_keys")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用RSA认证")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("RSAAuthentication")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("yes")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Match配置：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://www.cnblogs.com/joshua317/p/14148694.html")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://segmentfault.com/a/1190000014822400")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("保存并关闭sshd_config文件。")])]),s._v(" "),n("li",[n("p",[s._v("重新启动SSH服务。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看SSH服务运行状态")]),s._v("\nsystemctl status sshd.service\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动SSH服务")]),s._v("\nsystemctl start sshd.service\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止SSH服务")]),s._v("\nsystemctl stop sshd.service\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启SSH服务")]),s._v("\nsystemctl restart sshd.service\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])]),s._v(" "),n("h3",{attrs:{id:"远程登录命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#远程登录命令"}},[s._v("#")]),s._v(" 远程登录命令")]),s._v(" "),n("p",[s._v("远程登录命令格式：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" 用户名@主机地址\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("远程登录可以使用密码登录和无密码登录（公钥登录）。")]),s._v(" "),n("h3",{attrs:{id:"使用密码登录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用密码登录"}},[s._v("#")]),s._v(" 使用密码登录")]),s._v(" "),n("p",[s._v("使用密码登录远程主机：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost0132 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh root@192.168.1.31")]),s._v("\nThe authenticity of "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.1.31 (192.168.1.31)'")]),s._v(" can"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t be established.\nECDSA key fingerprint is SHA256:NLUDWgWXkB6X0A2032EYKLX2kIOHTutiRnhPE8ik3Jg.\nECDSA key fingerprint is MD5:c6:72:64:93:07:2d:b5:fd:d5:2b:5e:31:c7:03:da:16.\nAre you sure you want to continue connecting (yes/no)? yes\nWarning: Permanently added '")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.31"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' (ECDSA) to the list of known hosts.\nroot@192.168.1.31'")]),s._v("s password: \nLast login: Sun Jun "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":43:22 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v(" from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.102\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost0131 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"使用公钥登录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用公钥登录"}},[s._v("#")]),s._v(" 使用公钥登录")]),s._v(" "),n("p",[s._v("SSH 公钥登录的原理涉及到公钥和私钥的生成以及使用。SSH 公钥登录的过程如下：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("用户生成一对公钥和私钥。")])]),s._v(" "),n("li",[n("p",[s._v("用户将自己的公钥添加到远程服务器的~/.ssh/authorized_keys文件中。")])]),s._v(" "),n("li",[n("p",[s._v("用户尝试通过SSH登录远程服务器时，服务器收到用户的公钥请求。")])]),s._v(" "),n("li",[n("p",[s._v("服务器检查~/.ssh/authorized_keys文件中是否有用户提供的公钥，如果有，则生成一个随机字符串，并使用用户的公钥加密。")])]),s._v(" "),n("li",[n("p",[s._v("服务器将加密的字符串发送给用户。")])]),s._v(" "),n("li",[n("p",[s._v("用户接收到加密字符串后，使用自己的私钥解密，然后将解密后的字符串发送回服务器。")])]),s._v(" "),n("li",[n("p",[s._v("服务器验证解密后的字符串与原始字符串匹配，如果匹配，则授权用户登录。")])])]),s._v(" "),n("p",[n("img",{attrs:{src:t(635),alt:""}})]),s._v(" "),n("p",[n("strong",[s._v("从A登录到B和C，需要在A上生成密钥对，把A的公钥复制到B和C上，就可以实现A免密登录B和C。命令主要是：")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -al\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果 ~/.ssh 不存在，创建 .ssh 并设置文件夹权限为700")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .ssh\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),s._v(" ~/.ssh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成密钥对")]),s._v("\nssh-keygen -t rsa -b "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将公钥上传到远程服务器。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 原理是把当前登录用户的 ~/.ssh/id_rsa.pub 追加到要访问的远程服务器的 ~/.ssh/authorized_kes 文件中。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh-copy-id user@remote_server")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果远程服务器的 ~/.ssh/authorized_kes 不存在，需要先创建并设置文件夹权限为600")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" authorized_keys\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" ~/.ssh/authorized_keys\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公钥登录远程服务器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" user@remote_server\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公钥登录远程服务器，-i或--identity-file 指定私钥路径")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -i /path/to/your/private_key user@remote_server\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h2",{attrs:{id:"ssh-生成密钥对"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssh-生成密钥对"}},[s._v("#")]),s._v(" SSH 生成密钥对")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.ssh.com/academy/ssh/keygen",target:"_blank",rel:"noopener noreferrer"}},[s._v("ssh-keygen"),n("OutboundLink")],1),s._v(" is a tool for creating new authentication key pairs for SSH. Such key pairs are used for automating logins, single sign-on, and for authenticating hosts.")]),s._v(" "),n("p",[s._v("The simplest way to generate a key pair is to run "),n("code",[s._v("ssh-keygen")]),s._v(" without arguments.")]),s._v(" "),n("p",[s._v("First, the tool asked where to save the file. SSH keys for user authentication are usually stored in the user's "),n("code",[s._v(".ssh")]),s._v(" directory under the home directory. However, in enterprise environments, the location is often different. The default key file name depends on the algorithm, in this case "),n("code",[s._v("id_rsa")]),s._v(" when using the default RSA algorithm. It could also be, for example, "),n("code",[s._v("id_dsa")]),s._v(" or "),n("code",[s._v("id_ecdsa")]),s._v(".")]),s._v(" "),n("p",[s._v("Then it asks to enter a "),n("a",{attrs:{href:"https://www.ssh.com/ssh/passphrase",target:"_blank",rel:"noopener noreferrer"}},[s._v("passphrase"),n("OutboundLink")],1),s._v(". The passphrase is used for encrypting the key, so that it cannot be used even if someone obtains the private key file. The passphrase should be cryptographically strong. Our "),n("a",{attrs:{href:"https://www.ssh.com/iam/password/generator",target:"_blank",rel:"noopener noreferrer"}},[s._v("online random password generator"),n("OutboundLink")],1),s._v(" is one possible tool for generating strong passphrases.")]),s._v(" "),n("p",[s._v("SSH supports several public key algorithms for authentication keys. These include:")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("rsa")]),s._v(" - an old algorithm based on the difficulty of factoring large numbers. A key size of at least 2048 bits is recommended for RSA; 4096 bits is better. RSA is getting old and significant advances are being made in factoring. Choosing a different algorithm may be advisable. It is quite possible the RSA algorithm will become practically breakable in the foreseeable future. All SSH clients support this algorithm.")]),s._v(" "),n("li",[n("code",[s._v("dsa")]),s._v(" - an old US government Digital Signature Algorithm. It is based on the difficulty of computing discrete logarithms. A key size of 1024 would normally be used with it. DSA in its original form is no longer recommended.")]),s._v(" "),n("li",[n("code",[s._v("ecdsa")]),s._v(" - a new Digital Signature Algorithm standarized by the US government, using elliptic curves. This is probably a good algorithm for current applications. Only three key sizes are supported: 256, 384, and 521 (sic!) bits. We would recommend always using it with 521 bits, since the keys are still small and probably more secure than the smaller keys (even though they should be safe as well). Most SSH clients now support this algorithm.")]),s._v(" "),n("li",[n("code",[s._v("ed25519")]),s._v(" - this is a new algorithm added in OpenSSH. Support for it in clients is not yet universal. Thus its use in general purpose applications may not yet be advisable.")])]),s._v(" "),n("p",[s._v("The algorithm is selected using the "),n("code",[s._v("-t")]),s._v(" option and key size using the "),n("code",[s._v("-b")]),s._v(" option. The following commands illustrate:")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ssh-keygen -t rsa -b "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\nssh-keygen -t dsa \nssh-keygen -t ecdsa -b "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("521")]),s._v("\nssh-keygen -t ed25519\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("Normally, the tool prompts for the file in which to store the key. However, it can also be specified on the command line using the "),n("code",[s._v("-f <filename>")]),s._v(" option.")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ssh-keygen -f ~/tatu-key-ecdsa -t ecdsa -b "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("521")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("To use public key authentication, the public key must be copied to a server and installed in an "),n("a",{attrs:{href:"https://www.ssh.com/ssh/authorized_keys",target:"_blank",rel:"noopener noreferrer"}},[s._v("authorized_keys"),n("OutboundLink")],1),s._v(" file. This can be conveniently done using the "),n("a",{attrs:{href:"https://www.ssh.com/ssh/copy-id",target:"_blank",rel:"noopener noreferrer"}},[s._v("ssh-copy-id"),n("OutboundLink")],1),s._v(" tool. Like this:")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ssh-copy-id -i ~/.ssh/tatu-key-ecdsa user@host\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("Once the public key has been configured on the server, the server will allow any connecting user that has the private key to log in. During the login process, the client proves possession of the private key by digitally signing the key exchange.")]),s._v(" "),n("p",[s._v("Here's a summary of commonly used options to the keygen tool:")]),s._v(" "),n("p",[n("strong",[s._v("-b")]),s._v(" “Bits” This option specifies the number of bits in the key. The regulations that govern the use case for SSH may require a specific key length to be used. In general, 2048 bits is considered to be sufficient for RSA keys.")]),s._v(" "),n("p",[n("strong",[s._v("-e")]),s._v(" “Export” This option allows reformatting of existing keys between the OpenSSH key file format and the format documented in "),n("a",{attrs:{href:"https://tools.ietf.org/html/rfc4716",target:"_blank",rel:"noopener noreferrer"}},[s._v("RFC 4716"),n("OutboundLink")],1),s._v(", “SSH Public Key File Format”.")]),s._v(" "),n("p",[n("strong",[s._v("-p")]),s._v(" “Change the passphrase” This option allows changing the passphrase of a private key file with "),n("code",[s._v("**[-P old_passphrase]**")]),s._v(" and "),n("code",[s._v("**[-N new_passphrase]**")]),s._v(", "),n("code",[s._v("**[-f keyfile]**")]),s._v(".")]),s._v(" "),n("p",[n("strong",[s._v("-t")]),s._v(" “Type” This option specifies the type of key to be created. Commonly used values are: "),n("strong",[s._v("- rsa")]),s._v(" for "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/RSA_(cryptosystem)",target:"_blank",rel:"noopener noreferrer"}},[s._v("RSA"),n("OutboundLink")],1),s._v(" keys "),n("strong",[s._v("- dsa")]),s._v(" for "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Digital_Signature_Algorithm",target:"_blank",rel:"noopener noreferrer"}},[s._v("DSA"),n("OutboundLink")],1),s._v(" keys "),n("strong",[s._v("- ecdsa")]),s._v(" for "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm",target:"_blank",rel:"noopener noreferrer"}},[s._v("elliptic curve DSA"),n("OutboundLink")],1),s._v(" keys")]),s._v(" "),n("p",[n("strong",[s._v("-i")]),s._v(' "Input" When '),n("em",[s._v("ssh-keygen")]),s._v(" is required to access an existing key, this option designates the file.")]),s._v(" "),n("p",[n("strong",[s._v("-f")]),s._v(' "File" Specifies name of the file in which to store the created key.')]),s._v(" "),n("p",[n("strong",[s._v("-N")]),s._v(' "New" Provides a new passphrase for the key.')]),s._v(" "),n("p",[n("strong",[s._v("-P")]),s._v(' "Passphrase" Provides the (old) passphrase when reading a key.')]),s._v(" "),n("p",[n("strong",[s._v("-c")]),s._v(' "Comment" Changes the comment for a keyfile.')]),s._v(" "),n("p",[n("strong",[s._v("-p")]),s._v(" Change the passphrase of a private key file.")]),s._v(" "),n("p",[n("strong",[s._v("-q")]),s._v(" Silence ssh-keygen.")]),s._v(" "),n("p",[n("strong",[s._v("-v")]),s._v(" Verbose mode.")]),s._v(" "),n("p",[n("strong",[s._v("-l")]),s._v(' "Fingerprint" Print the fingerprint of the specified public key.')]),s._v(" "),n("p",[n("strong",[s._v("-B")]),s._v(' "Bubble babble" Shows a "bubble babble" (Tectia format) fingerprint of a keyfile.')]),s._v(" "),n("p",[n("strong",[s._v("-F")]),s._v(" Search for a specified hostname in a known_hosts file.")]),s._v(" "),n("p",[n("strong",[s._v("-R")]),s._v(" Remove all keys belonging to a hostname from a known_hosts file.")]),s._v(" "),n("p",[n("strong",[s._v("-y")]),s._v(" Read a private OpenSSH format file and print an OpenSSH public key to stdout.")]),s._v(" "),n("p",[s._v("This only listed the most commonly used options. For full usage, including the more exotic and special-purpose options, use the "),n("code",[s._v("man ssh-keygen")]),s._v(" command.")]),s._v(" "),n("h2",{attrs:{id:"sftp-服务器搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sftp-服务器搭建"}},[s._v("#")]),s._v(" SFTP 服务器搭建")]),s._v(" "),n("p",[s._v("SFTP（Secure File Transfer Protocol ）是一个可以为文件进行安全传输的网络协议。")]),s._v(" "),n("p",[n("img",{attrs:{src:t(636),alt:""}})]),s._v(" "),n("p",[s._v("SFTP和FTP的区别")]),s._v(" "),n("ul",[n("li",[s._v("链接方式：FTP 使用 TCP 端口21建立连接。SFTP 是在客户端和服务器之间通过SSH协议(TCP端口22)建立的安全连接来传输文件。")]),s._v(" "),n("li",[s._v("安全性：SFTP 使用加密传输认证信息和传输的数据，使用 SFTP 相对于 FTP 安全")]),s._v(" "),n("li",[s._v("效率：SFTP 使用加密解密技术，传输效率比普通的 FTP 要低得多。")])]),s._v(" "),n("h3",{attrs:{id:"创建sftp用户与组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建sftp用户与组"}},[s._v("#")]),s._v(" 创建SFTP用户与组")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" javgrp\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -G javgrp root\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -G javgrp -m -d /home/javadm -s /bin/bash javadm\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -G javgrp -m -d /home/appadm -s /bin/bash appadm\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /appl/sftp-staging/jd/inbound\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R javadm:javgrp /appl/sftp-staging\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("750")]),s._v(" /appl/sftp-staging\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("750")]),s._v(" /appl/sftp-staging/jd\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("770")]),s._v(" /appl/sftp-staging/jd/inbound\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /appl/sftp-staging/jd /home/appadm/jd\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/appadm/.ssh\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" appadm:javgrp /home/appadm/.ssh\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("750")]),s._v(" /home/appadm/.ssh\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /home/appadm/.ssh/authorized_keys\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" appadm:javgrp /home/appadm/.ssh/authorized_keys\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("750")]),s._v(" /home/appadm/.ssh/authorized_keys\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /home/appadm/.ssh/authorized_keys\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"配置sshd-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置sshd-config"}},[s._v("#")]),s._v(" 配置sshd_config")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#Subsystem       sftp    /usr/libexec/openssh/sftp-server\n#Subsystem sftp /usr/lib/openssh/sftp-server\n#Subsystem sftp internal-sft \t # 指定使用sftp服务使用系统自带的internal-sftp\n#Match Group sftpgroup           # 匹配sftp组的用户，若要匹配多个组，可用逗号分开\n#X11Forwarding no                # 禁止用户使用端口转发\n#AllowTcpForwarding no           # 禁止用户使用端口转发 \n#ChrootDirectory /home/sftp/%u   # 限制用户的根目录\n#ForceCommand internal-sftp      # 只能用于sftp登录\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("sftp-server和internal-sftp都是OpenSSH的一部分。")]),s._v(" "),n("p",[s._v("sftp-server是一个独立的二进制文件。")]),s._v(" "),n("p",[s._v("internal-sftp是一个配置关键字，无需外部二进制文件额外启动一个进程，整合在sshd进程内了。")]),s._v(" "),n("p",[s._v("internal-sftp相较于 /usr/lib/openssh/sftp-server 优点在于：")]),s._v(" "),n("ol",[n("li",[s._v("性能好，无需额外进程；")]),s._v(" "),n("li",[s._v("安全性好，无需用户登录shell，且可使用ChrootDirectory 限制sftp行为活动的目录；")]),s._v(" "),n("li",[s._v("sftp-server 的存在主要是向后兼容。")])]),s._v(" "),n("h3",{attrs:{id:"连通性测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#连通性测试"}},[s._v("#")]),s._v(" 连通性测试")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sftp")]),s._v(" -oPort"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" sftpusr@192.168.1.31\nput /opt/foo.txt /home/sftpusr/sftp-staging/tms/inbound\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);