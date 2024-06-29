(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{713:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("启动Java应用时，提前设置 "),t("code",[s._v("-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/path/to/xxx.hprof")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Dump Java heap to /path/to/xxx.hprof when an OutOfMemoryError exception is thrown")]),s._v("\njava -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/path/to/xxx.hprof -jar xxx.jar\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"jdk-tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk-tools"}},[s._v("#")]),s._v(" JDK Tools")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/17/",target:"_blank",rel:"noopener noreferrer"}},[s._v("JDK 17 Documentation"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.oracle.com/javase/8/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java Platform, Standard Edition (Java SE) 8"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/17/docs/specs/man/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java® Development Kit Version 17 Tool Specifications"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/tools/unix/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java SE Tools Reference for UNIX"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"jps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jps"}},[s._v("#")]),s._v(" jps")]),s._v(" "),t("p",[s._v("jps（Java Virtual Machine Process Status Tool）是JDK 1.5提供的一个显示当前所有java进程pid的命令。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("jps\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"jinfo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jinfo"}},[s._v("#")]),s._v(" jinfo")]),s._v(" "),t("p",[s._v("jinfo（Java Virtual Machine Configuration Information）是JDK提供的查看进程信息的命令。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Usage:\n    jinfo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("option"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("to connect to a running process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nwhere "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("option"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" is one of:\n    -flag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("         to print the value of the named VM flag\n    -flag "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    to "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" or disable the named VM flag\n    -flag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" to "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" the named VM flag to the given value\n    -flags               to print VM flags\n    -sysprops            to print Java system properties\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("no option"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("          to print both VM flags and system properties\n    -? "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -h "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" --help "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -help to print this "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" message\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"jstat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jstat"}},[s._v("#")]),s._v(" jstat")]),s._v(" "),t("p",[s._v("jstat，是java虚拟机统计信息工具。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("jstat -options\n-class             显示classLoader的相关信息\n-compiler          显示JIT编译的相关信息\n-printcompilation  输出JIT编译的方法信息\n-gc                显示一GC有关的堆信息\n-gccapacity        显示各个代的容量及使用情况\n-gccause           显示垃圾收集相关信息，同时显示最后一次或者当前正在发生的垃圾收集诱发原因\n-gcmetacapacity\n-gcnew             显示新生代信息\n-gcnewcapacity     显示新生代大小与使用情况\n-gcold             显示老年代和永久代的信息\n-gcoldcapacity     显示永久代的大小\n-gcutil            显示垃圾收集信息\n\njstat -compiler -t -h10 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15256")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n\njstat -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("option"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-h"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("lines"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("vmid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("interval"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n-t        时间戳\n-h"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("lines"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 隔lines行显示标题\nvmid      vm进程id\ninterval  监控间隔\ncount     监控次数\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示每1000毫秒收集一次gc信息，共收集100次，每隔10行显示一次标题，且标题行带时间戳")]),s._v("\njstat -gc -t -h10 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17480")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nTimestamp           S0C         S1C         S0U         S1U          EC           EU           OC           OU          MC         MU       CCSC      CCSU     YGC     YGCT     FGC    FGCT     CGC    CGCT       GCT\n          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("254.6")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024.0")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5120.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4572.1")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("832.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("634.7")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.6")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.013")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.007")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.021")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.6")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024.0")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5120.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4572.1")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("832.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("634.7")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.6")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.013")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.007")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.021")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256.6")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024.0")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5120.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4572.1")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("832.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("634.7")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.6")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.013")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.007")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.021")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("257.7")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024.0")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5120.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4572.1")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("832.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("634.7")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.6")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.013")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.007")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.021")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("258.7")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024.0")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5120.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4572.1")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("832.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("634.7")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.6")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.013")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.007")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.021")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("259.7")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024.0")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5120.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4572.1")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("832.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("634.7")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.6")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.013")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.007")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.021")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("260.7")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024.0")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5120.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4572.1")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("832.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("634.7")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.6")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.013")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.007")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.021")]),s._v("\nS0C  - Heap上的 Survivor space "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 幸存0区总容量\nS1C  - Heap上的 Survivor space "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 幸存1区总容量\nS0U  - Heap上的 Survivor space "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 幸存0区已使用容量\nS1U  - Heap上的 Survivor space "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 幸存1区已使用容量\nEC   - Heap上的 Eden space 伊甸园区总容量\nEU   - Heap上的 Eden space 伊甸园区已使用容量\nOC   - Heap上的 Old space 老年代总容量\nOU   - Heap上的 Old space 老年代已使用容量\nMC   - 元数据区总容量\nMU   - 元数据区已使用容量\nCCSC - 压缩类空间总容量\nCCSU - 压缩类空间已使用容量\nYGC  - 从应用程序启动到采样时发生 Full GC 的次数\nYGCT - 从应用程序启动到采样时 Full GC 所用的时间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("单位秒"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \nFGC  - 从应用程序启动到采样时发生 Full GC 的次数 \nFGCT - 从应用程序启动到采样时 Full GC 所用的时间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("单位秒"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \nCGC  - 从应用程序启动到采样时 Concurrent GC 的次数  \nCGCT - 从应用程序启动到采样时 Concurrent GC 所用的时间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("单位秒"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nGCT  - 从应用程序启动到采样时 GC 所用的总时间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("单位秒"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示每1000毫秒收集一次jvm内存和gc信息，共收集100次，每隔10行显示一次标题，且标题行带时间戳")]),s._v("\njstat -gcutil -t -h10 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9928")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nTimestamp         S0     S1     E      O      M     CCS    YGC     YGCT     FGC    FGCT     CGC    CGCT       GCT\n           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("81.59")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("42.82")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("76.29")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("38.73")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.005")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.005")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.1")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("81.59")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("42.82")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("76.29")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("38.73")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.005")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.005")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.1")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("81.59")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("42.82")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("76.29")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("38.73")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.005")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.005")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.1")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("81.59")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("42.82")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("76.29")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("38.73")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.005")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.005")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21.1")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("81.59")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("42.82")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("76.29")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("38.73")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.005")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.005")]),s._v("\nS0   — Heap上的 Survivor space "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 幸存0区当前使用比例     \nS1   — Heap上的 Survivor space "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 幸存1区当前使用比例     \nE    — Heap上的 Eden space 伊甸园区当前使用比例    \nO    — Heap上的 Old space 老年代当前使用比例     \nM    - 元数据区当前使用比例 \nCCS  - 压缩使用比例\nYGC  — 从应用程序启动到采样时发生 Young GC 的次数 \nYGCT – 从应用程序启动到采样时 Young GC 所用的时间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("单位秒"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     \nFGC  — 从应用程序启动到采样时发生 Full GC 的次数 \nFGCT – 从应用程序启动到采样时 Full GC 所用的时间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("单位秒"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \nCGC  - 从应用程序启动到采样时 Concurrent GC 的次数 \nCGCT - 从应用程序启动到采样时 Concurrent GC 所用的时间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("单位秒"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \nGCT  — 从应用程序启动到采样时 GC 所用的总时间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("单位秒"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br")])]),t("h3",{attrs:{id:"jstack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jstack"}},[s._v("#")]),s._v(" jstack")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/17/docs/specs/man/jstack.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("jstack"),t("OutboundLink")],1),s._v(" - print Java stack traces of Java threads for a specified Java process")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("jstack pid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"jmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmap"}},[s._v("#")]),s._v(" jmap")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/17/docs/specs/man/jmap.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("jmap"),t("OutboundLink")],1),s._v(" - print details of a specified process")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印前20行堆中对象的统计信息，包括实例个数、大小、类名")]),s._v("\njmap -histo pid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出堆转储快照，使用jvisualvm等图形化工具分析")]),s._v("\njmap -dump:live,format"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("b,file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("heap.hprof pid\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"arthas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arthas"}},[s._v("#")]),s._v(" Arthas")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://arthas.aliyun.com/doc/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://arthas.aliyun.com/doc/"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"jvm调优"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm调优"}},[s._v("#")]),s._v(" JVM调优")]),s._v(" "),t("ol",[t("li",[s._v("定位消耗系统资源的进程，使用Linux的 "),t("code",[s._v("top")]),s._v(" 命令；")]),s._v(" "),t("li",[s._v("定位是否有线程在吃CPU、占内存、发生死锁等等。")])]),s._v(" "),t("h2",{attrs:{id:"cpu过高"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu过高"}},[s._v("#")]),s._v(" CPU过高")]),s._v(" "),t("ol",[t("li",[s._v("使用 "),t("code",[s._v("top")]),s._v(" 定位消耗系统资源的进程；")]),s._v(" "),t("li",[s._v("使用 "),t("code",[s._v("top -H -p pid")]),s._v(" 定位CPU占用过高的线程tid；")]),s._v(" "),t("li",[s._v("使用 "),t("code",[s._v("pstack tid")]),s._v(" 或者 "),t("code",[s._v("strace -f -p tid")]),s._v(" 定位线程堆栈。")])]),s._v(" "),t("h2",{attrs:{id:"oom定位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oom定位"}},[s._v("#")]),s._v(" OOM定位")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("使用 "),t("code",[s._v("top")]),s._v(" 定位消耗系统资源的进程；")])]),s._v(" "),t("li",[t("p",[s._v("使用 "),t("code",[s._v("jmap -histo pid | head -n 20")]),s._v(" 找出占内存的类；")])]),s._v(" "),t("li",[t("p",[s._v("使用 "),t("code",[s._v("jmap -dump:live,format=b,file=heap.hprof pid")]),s._v(" 导出堆转储，使用jvisualvm等图形化工具分析。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);