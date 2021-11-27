(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{536:function(a,s,e){a.exports=e.p+"assets/img/20210307141420.f336dbea.png"},537:function(a,s,e){a.exports=e.p+"assets/img/20210410215351.ecab41f9.png"},538:function(a,s,e){a.exports=e.p+"assets/img/20210307153547.5edb6af9.png"},590:function(a,s,e){"use strict";e.r(s);var t=e(7),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"jvm图解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm图解"}},[a._v("#")]),a._v(" JVM图解")]),a._v(" "),t("img",{attrs:{src:e(536)}}),a._v(" "),t("img",{attrs:{src:e(537)}}),a._v(" "),t("img",{attrs:{src:e(538)}}),a._v(" "),t("p",[a._v("堆、Heap")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("线程共享。\n用于存放对象实例、数组等。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("方法区、Method Area")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("线程共享。\n存储已经被虚拟机加载的类信息、常量、静态变量等。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("程序计数器、PC寄存器、Program Counter Register")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("线程私有，一小块内存区域，唯一一个不会报内存溢出的区域。\n如果线程正在执行Java方法，则程序计数器的值为当前正在执行的指令地址。\n如果线程正在执行Native方法，则程序计数器的值为undefined。\n\nThe Java Virtual Machine can support many threads of execution at once (JLS §17). Each Java Virtual Machine thread has its own pc (program counter) register. At any point, each Java Virtual Machine thread is executing the code of a single method, namely the current method (§2.6) for that thread. If that method is not native, the pc register contains the address of the Java Virtual Machine instruction currently being executed. If the method currently being executed by the thread is native, the value of the Java Virtual Machine's pc register is undefined. The Java Virtual Machine's pc register is wide enough to hold a returnAddress or a native pointer on the specific platform. \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("虚拟机栈、VM Stack")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("线程私有。\n为虚拟机执行Java方法服务。\n每个方法在执行的时候都会创建一个栈帧，栈帧包含：局部变量表、操作数栈、动态链接和返回地址。\n每个方法从调用到执行完毕，对应一个栈帧在虚拟机栈的入栈和出栈。\n如果线程请求的栈深度大于虚拟机所允许的深度，则会报StackOverflowError。\n如果虚拟机栈可以动态扩展，扩展到无法申请足够的内存，则会报OutOfMemoryError。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("本地方法栈、Native Method Stack")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("线程私有，和虚拟机栈类似。\n为虚拟机执行Native方法服务。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("运行时常量池")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('线程共享。\n存放常量、"字符串"字面值等。\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"jvm参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm参数"}},[a._v("#")]),a._v(" JVM参数")]),a._v(" "),t("h3",{attrs:{id:"标准参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标准参数"}},[a._v("#")]),a._v(" 标准参数")]),a._v(" "),t("h3",{attrs:{id:"x参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x参数"}},[a._v("#")]),a._v(" X参数")]),a._v(" "),t("h3",{attrs:{id:"xx参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xx参数"}},[a._v("#")]),a._v(" XX参数")]),a._v(" "),t("p",[a._v("XX参数主要分两类：")]),a._v(" "),t("p",[a._v("Boolean类型")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启用name参数")]),a._v("\njava -XX:+"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 禁用name参数")]),a._v("\njava -XX:-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("Key-Value类型")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将name参数值设置为value")]),a._v("\njava -XX:"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("table",[t("thead",[t("tr",[t("th",[a._v("XX参数")]),a._v(" "),t("th",[a._v("说明")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("-Xms，即 -XX:InitialHeapSize")]),a._v(" "),t("td",[a._v("堆初始值")])]),a._v(" "),t("tr",[t("td",[a._v("-Xmx，即 -XX:MaxHeapSize")]),a._v(" "),t("td",[a._v("堆最大值")])]),a._v(" "),t("tr",[t("td",[a._v("-Xss，即 -XX:ThreadStackSize")]),a._v(" "),t("td",[a._v("线程堆栈大小")])])])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打印XX参数的初始值")]),a._v("\njava -XX:+PrintFlagsInitial -version\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打印XX参数的最终值，=表示默认值，:=表示被修改了")]),a._v("\njava -XX:+PrintFlagsFinal -version\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打印被用户或JVM修改过的详细的参数和值")]),a._v("\njava -XX:+PrintCommandLineFlags -version\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);