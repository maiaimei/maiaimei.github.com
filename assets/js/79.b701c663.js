(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{724:function(t,e,a){"use strict";a.r(e);var l=a(7),n=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"脏读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脏读"}},[t._v("#")]),t._v(" 脏读")]),t._v(" "),a("p",[t._v("脏读，读取到未提交的数据。脏读一般针对的是update操作。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("时间点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("事务T1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("事务T2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("开启事务")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("开启事务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("第一次查询，数据为100条")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("插入一条数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("第二次查询，数据为101条")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("回滚事务")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("时间点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("事务T1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("事务T2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("开启事务")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("开启事务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("第一次查询，某字段值为X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("更新某字段值为Y")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("第二次查询，某字段值为Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("回滚事务")])])])]),t._v(" "),a("h2",{attrs:{id:"不可重复读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可重复读"}},[t._v("#")]),t._v(" 不可重复读")]),t._v(" "),a("p",[t._v("不可重复读，一个事务范围内多个相同的查询返回了不同的结果。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("时间点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("事务T1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("事务T2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("开启事务")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("开启事务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("第一次查询，数据为100条")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("插入一条数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("提交事务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("第二次查询，数据为101条")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("时间点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("事务T1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("事务T2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("开启事务")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("开启事务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("第一次查询，某字段值为X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("更新某字段值为Y")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("提交事务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("第二次查询，某字段值为Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h2",{attrs:{id:"幻读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#幻读"}},[t._v("#")]),t._v(" 幻读")]),t._v(" "),a("p",[t._v("幻读是指当事务不是独立执行时发生的一种现象。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("时间点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("事务T1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("事务T2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("开启事务")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("开启事务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("查询数据“张三”，不存在")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("插入数据“张三”")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("提交事务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("查询数据“张三”，不存在")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("插入数据“张三”，不成功")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("p",[t._v("事务T1查询“张三”，查询不到，插入又不成功，“张三”这条数据就像幻觉一样出现。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("时间点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("事务T1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("事务T2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("开启事务")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("开启事务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("修改全部行，某字段由“1”改为“2”")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("新增行，某字段为“1”")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("提交事务")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("提交事务")])])])]),t._v(" "),a("p",[t._v("操作事务T1的用户，如果再查刚刚修改的数据，会发现还有一条数据没有修改，其实这行是由事务T2新增的，就好像产生幻觉一样。")]),t._v(" "),a("blockquote",[a("p",[t._v("不可重复读和幻读都是读取了已提交事务的数据，这一点与脏读不一样。")])]),t._v(" "),a("h2",{attrs:{id:"数据库的隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库的隔离级别"}},[t._v("#")]),t._v(" 数据库的隔离级别")]),t._v(" "),a("ul",[a("li",[t._v("读未提交（read uncommitted）：允许读取未提交的数据，即“读脏”。并发最高，一致性最差的隔离级别。")])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" table_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NOLOCK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[t._v("读已提交（read committed）：只读取已提交的数据，但不要求可重复读。可避免脏读的发生。这是许多数据库系统默认的隔离级别，除了MySQL。")])]),t._v(" "),a("li",[a("p",[t._v("可重复读（repeatable read）：只允许读取已提交的数据，而且在一个事务两次读取一个数据项期间，其他事务不得更新该数据。但该事务不要求与其他事务可串行化。可避免脏读、不可重复读的发生。MySQL默认的隔离级别。")])]),t._v(" "),a("li",[a("p",[t._v("可串行化（serializable ）：通常保证可串行化调度。事务T1、T2、T3排着队来执行。一致性最好，性能最差。可避免脏读、不可重复读、幻读的发生。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("在MySQL数据库中，支持上面四种隔离级别，默认的为repeatable read (可重复读) ；而在 Oracle数据库 中，只支持serializable (可串行化) 级别和 read committed (读已提交) 这两种级别，其中默认的为 read committed（读已提交） 级别。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);