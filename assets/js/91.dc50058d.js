(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{748:function(P,t,e){"use strict";e.r(t);var v=e(7),_=Object(v.a)({},(function(){var P=this,t=P.$createElement,e=P._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":P.$parent.slotKey}},[e("p",[P._v("POP3（或IMAP服务器，与之性质相同）更多的是起一个中转作用，它将存储在邮件服务器硬盘中的邮件转移回邮件客户端（user agent），它只负责从邮件服务器到邮件客户端这段路径，而邮件在广域网上的收发则是SMTP要做的事，与POP3没有关系。")]),P._v(" "),e("p",[P._v("POP3与SMTP的区别是，POP3将邮件拉回本地后，即与服务器脱钩了。SMTP则更先进一些，它能做到实时将你在邮件客户端的操作反馈回邮件服务器，比如：删除邮件，标记已读等，服务器上的邮件也会做相应的动作。所以无论从浏览器登录邮箱或者客户端软件登录邮箱，看到的邮件以及状态都是一致的。")]),P._v(" "),e("p",[e("strong",[P._v("什么是 SMTP/POP3/IMAP 服务")])]),P._v(" "),e("p",[P._v("SMTP （Simple Mail Transfer Protocol）简单邮件传输协议，用于支持使用电子邮件客户端发送电子邮件。端口号：25。")]),P._v(" "),e("p",[P._v("POP3 （Post Office Protocol - Version 3）协议用于支持使用电子邮件客户端获取并删除在服务器上的电子邮件。")]),P._v(" "),e("p",[P._v("IMAP （Internet Message Access Protocol）协议用于支持使用电子邮件客户端交互式存取服务器上的邮件。")]),P._v(" "),e("p",[e("strong",[P._v("POP 和 IMAP 有什么区别")])]),P._v(" "),e("p",[P._v("POP允许电子邮件客户端下载服务器上的邮件，但是你在电子邮件客户端上的操作（如：移动邮件、标记已读等）不会反馈到服务器上的。需要特别注意的是，第三方客户端通过POP收取邮件时，也是有可能同步删除服务端邮件。在第三方客户端设置 POP 时，请留意是否有 保留邮件副本/备份 相关选项。如有该选项，且要保留服务器上的邮件，请勾选该选项。")]),P._v(" "),e("p",[P._v("在IMAP协议上，电子邮件客户端的操作都会反馈到服务器上，你对邮件进行的操作（如：移动邮件、标记已读、删除邮件等）服务器上的邮件也会做相应的动作。也就是说，IMAP 是“双向”的。同时，IMAP 可以只下载邮件的主题，只有当你真正需要的时候，才会下载邮件的所有内容。")]),P._v(" "),e("p",[e("strong",[P._v("SMTP协议的工作过程")])]),P._v(" "),e("p",[P._v("(1)建立连接：在这一阶段，SMTP客户请求与服务器的25端口建立一个TCP连接。一旦连接建立，SMTP服务器和客户就开始相互通告自己的域名，同时确认对方的域名。")]),P._v(" "),e("p",[P._v("(2)邮件传送：利用命令，SMTP客户将邮件的源地址、目的地址和邮件的具体内容传递给SMTP服务器，SMTP服务器进行相应的响应并接收邮件。")]),P._v(" "),e("p",[P._v("(3)连接释放：SMTP客户发出退出命令，服务器在处理命令后进行响应，随后关闭TCP连接。")])])}),[],!1,null,null,null);t.default=_.exports}}]);