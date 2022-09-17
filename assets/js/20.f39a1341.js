(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{617:function(t,e,r){t.exports=r.p+"assets/img/20210303163430.9e59e181.png"},618:function(t,e,r){t.exports=r.p+"assets/img/20210304233755.e88997c8.png"},677:function(t,e,r){"use strict";r.r(e);var _=r(7),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"缓存流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存流程"}},[t._v("#")]),t._v(" 缓存流程")]),t._v(" "),_("img",{attrs:{src:r(617)}}),t._v(" "),_("h2",{attrs:{id:"缓存穿透"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[t._v("#")]),t._v(" 缓存穿透")]),t._v(" "),_("p",[t._v("缓存穿透是指缓存和数据库中都没有数据，而用户不断地发起请求。")]),t._v(" "),_("p",[t._v("解决方案：")]),t._v(" "),_("ol",[_("li",[t._v("校验参数、用户身份；")]),t._v(" "),_("li",[t._v("不存在的数据设置空缓存；（浪费内存）")]),t._v(" "),_("li",[t._v("布隆算法（布隆过滤器）")])]),t._v(" "),_("blockquote",[_("p",[t._v("哈希函数：将任意大小的数据转换成特定大小的数据的函数，转换后的数据称为哈希值或哈希编码。原始数据经过哈希函数的映射后称为了一个个的哈希编码，数据得到压缩。")]),t._v(" "),_("p",[t._v("哈希函数是实现哈希表和布隆过滤器的基础。")]),t._v(" "),_("img",{attrs:{src:r(618)}})]),t._v(" "),_("h2",{attrs:{id:"缓存击穿"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[t._v("#")]),t._v(" 缓存击穿")]),t._v(" "),_("p",[t._v("缓存击穿是指缓存中没有但是数据库中有的数据（一般是缓存时间到期），这时由于并发用户特别多，同时读取缓存没读到数据，又同时去查数据库，造成数据库压力过大。缓存击穿是并发查询同一条数据。")]),t._v(" "),_("p",[t._v("解决方案：")]),t._v(" "),_("ol",[_("li",[t._v("设置热点数据永不过期；")]),t._v(" "),_("li",[t._v("定时任务刷新缓存时间；")]),t._v(" "),_("li",[t._v("加互斥锁/分布式锁，访问数据库。")])]),t._v(" "),_("h2",{attrs:{id:"缓存雪崩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[t._v("#")]),t._v(" 缓存雪崩")]),t._v(" "),_("p",[t._v("缓存雪崩是指缓存中不同的数据在某一时刻突然失效，导致大量的请求打到数据库中。")]),t._v(" "),_("p",[t._v("引起原因：")]),t._v(" "),_("ol",[_("li",[t._v("缓存数据的有效期一致；")]),t._v(" "),_("li",[t._v("Redis挂了；")])]),t._v(" "),_("p",[t._v("解决方案：")]),t._v(" "),_("ol",[_("li",[t._v("设置热点数据永不过期；")]),t._v(" "),_("li",[t._v("缓存数据的有效期随机，防止同一时间大量数据过期现象发生；（缓存数据的有效期一致）")]),t._v(" "),_("li",[t._v("定时任务刷新缓存时间；")]),t._v(" "),_("li",[t._v("加互斥锁/分布式锁，访问数据库；")]),t._v(" "),_("li",[t._v("Redis集群：切片集群模式（分布式，每个节点存部分数据）、副本集群模式（即主从/主备）。（Redis挂了）")])]),t._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://blog.csdn.net/kongtiao5/article/details/82771694",target:"_blank",rel:"noopener noreferrer"}},[t._v("缓存穿透、缓存击穿、缓存雪崩区别和解决方案"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.bilibili.com/video/BV1ii4y1t7oP",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis缓存穿透的终极解决方案，手写布隆过滤器"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.cnblogs.com/cpselvis/p/6265825.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("布隆过滤器(Bloom Filter)的原理和实现"),_("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);