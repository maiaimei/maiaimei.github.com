(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{559:function(a,s,t){a.exports=t.p+"assets/img/20211209221631.45c7a47f.jpg"},649:function(a,s,t){"use strict";t.r(s);var e=t(7),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[a._v("#")]),a._v(" 环境准备")]),a._v(" "),e("p",[a._v("1、下载"),e("a",{attrs:{href:"https://gradle.org/releases/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Gradle"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("2、安装Gradle，解压后配置环境变量。")]),a._v(" "),e("p",[a._v("​      GRADLE_HOME=D:\\gradle\\gradle-7.3")]),a._v(" "),e("p",[a._v("​      GRADLE_USER_HOME=D:\\gradle.gradle")]),a._v(" "),e("p",[a._v("​      Path 添加 %GRADLE_HOME%\\bin")]),a._v(" "),e("p",[a._v("GRADLE_USER_HOME决定了 gradle.zip 和 jar 的存放位置，若不指定默认为$USER_HOME/.gradle。不能跟Maven仓库同一目录，管理jar方式不一样？GRADLE_USER_HOME目录如下所示：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("├─.tmp \n├─caches    \n│  ├─modules-2 \n│  │  ├─files-2.1\t# jar 的下载位置             \n│  │  │  ├─org.junit\n│  │  │  │  └─junit-bom\n│  │  │  │      ├─5.7.0\n│  │  │  │      │  ├─6c667331d41729ca3c8e02d1c26ae1334a81357f\n│  │  │  │      │  │      junit-bom-5.7.0.pom\n│  │  │  │      │  │      \n│  │  │  │      │  └─e367e0daba4786db56807fb88f568a9b2c0f60d6\n│  │  │  │      │          junit-bom-5.7.0.module  \n├─daemon\n├─jdks\n├─native\n└─wrapper\n    └─dists\t\t\t# gradle.zip 的下载位置\n        └─gradle-7.3-bin\n            └─4k8crh8c1l5dqjy9s11eq5s7y\n                │  gradle-7.3-bin.zip\n                │  gradle-7.3-bin.zip.lck\n                │  gradle-7.3-bin.zip.ok\n                │  \n                └─gradle-7.3\n                    │  LICENSE\n                    │  NOTICE\n                    │  README\n                    │  \n                    ├─bin\n                    │      gradle\n                    │      gradle.bat\n                    │      \n                    ├─init.d\n                    │      readme.txt\n                    │      \n                    └─lib\n                        └─plugins\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br"),e("span",{staticClass:"line-number"},[a._v("30")]),e("br"),e("span",{staticClass:"line-number"},[a._v("31")]),e("br"),e("span",{staticClass:"line-number"},[a._v("32")]),e("br"),e("span",{staticClass:"line-number"},[a._v("33")]),e("br"),e("span",{staticClass:"line-number"},[a._v("34")]),e("br"),e("span",{staticClass:"line-number"},[a._v("35")]),e("br"),e("span",{staticClass:"line-number"},[a._v("36")]),e("br"),e("span",{staticClass:"line-number"},[a._v("37")]),e("br")])]),e("p",[a._v("3、验证")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("gradle -v\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("4、配置Gradle仓库源")]),a._v(" "),e("p",[a._v("​      在Gradle安装目录下的 init.d 文件夹下，新建一个 init.gradle 文件。init.gradle相当于maven中的settings.xml。")]),a._v(" "),e("div",{staticClass:"language-groovy line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code")]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("p",[a._v("5、IDEA配置Gradle user home")]),a._v(" "),e("ul",[e("li",[a._v("File -> Settings -> Build, Execution, Deployment")]),a._v(" "),e("li",[a._v("File -> New Projects Setup -> Settings for New Projects")])]),a._v(" "),e("p",[e("img",{attrs:{src:t(559),alt:""}})]),a._v(" "),e("h2",{attrs:{id:"项目文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目文件"}},[a._v("#")]),a._v(" 项目文件")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("文件")]),a._v(" "),e("th",[a._v("说明")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v(".gradle")]),a._v(" "),e("td",[a._v("gradle 项目产生的文件（自动编译工具产生的文件）")])]),a._v(" "),e("tr",[e("td",[a._v("build")]),a._v(" "),e("td",[a._v("自动构建时生成文件的地方")])]),a._v(" "),e("tr",[e("td",[a._v("build.gradle")]),a._v(" "),e("td",[a._v("gradle 项目自动编译的配置文件，相当于 pom.xml")])]),a._v(" "),e("tr",[e("td",[a._v("gradle.properties")]),a._v(" "),e("td",[a._v("gradle 运行环境配置文件")])]),a._v(" "),e("tr",[e("td",[a._v("gradle")]),a._v(" "),e("td",[a._v("自动完成 gradle 环境的文件夹，与 gradlew 或 gradlew.bat 配合使用")])]),a._v(" "),e("tr",[e("td",[a._v("gradlew")]),a._v(" "),e("td",[a._v("自动完成 gradle 环境的 linux/mac 脚本，配合 gradle 文件夹使用")])]),a._v(" "),e("tr",[e("td",[a._v("gradlew.bat")]),a._v(" "),e("td",[a._v("自动完成 gradle 环境的 windows 脚本，配合 gradle 文件夹使用")])]),a._v(" "),e("tr",[e("td",[a._v("setting.gradle")]),a._v(" "),e("td",[a._v("gradle 项目的子项目包含文件")])])])]),a._v(" "),e("p",[a._v("project/gradle/wrapper/gradle-wrapper.properties")]),a._v(" "),e("div",{staticClass:"language-properties line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("distributionBase")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("GRADLE_USER_HOME")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("distributionPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("wrapper/dists")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# distributionUrl=https\\://services.gradle.org/distributions/gradle-7.3-bin.zip")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用本地的压缩包")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("distributionUrl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("file:///d:/gradle/gradle-7.3-bin.zip")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("zipStoreBase")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("GRADLE_USER_HOME")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("zipStorePath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("wrapper/dists")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);