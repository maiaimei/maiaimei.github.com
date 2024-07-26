(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{754:function(e,i,r){"use strict";r.r(i);var o=r(7),n=Object(o.a)({},(function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("@ConfigurationProperties 注解用于将配置文件中的属性值绑定到Java对象上。")]),e._v(" "),r("p",[e._v("使用 @ConfigurationProperties 注入属性的方式：")]),e._v(" "),r("ul",[r("li",[e._v("使用 @Component + @ConfigurationProperties 标记类")]),e._v(" "),r("li",[e._v("使用 @Bean + @ConfigurationProperties 标记方法")]),e._v(" "),r("li",[e._v("使用 @ConfigurationProperties 标记普通类，使用 @EnableConfigurationProperties 激活该普通类")])]),e._v(" "),r("p",[e._v("@EnableConfigurationProperties 工作原理：")]),e._v(" "),r("ol",[r("li",[e._v("@EnableConfigurationProperties 导入了 EnableConfigurationPropertiesRegistrar")]),e._v(" "),r("li",[e._v("EnableConfigurationPropertiesRegistrar 功能是读取配置文件并转换为 Bean 对象，EnableConfigurationPropertiesRegistrar 利用 ImportBeanDefinitionRegistrar 动态注册了 ConfigurationPropertiesBindingPostProcessor。")]),e._v(" "),r("li",[e._v("在 getBean -> createBean -> applyBeanPostProcessorsBeforeInitialization -> bind 方法中根据当前实例化的 Bean 上的 @ConfigurationProperties 完成注册。")])]),e._v(" "),r("p",[e._v("注意：在测试类中，如果使用 @ConfigurationProperties 无法注入属性，请检查是否已经加载指定配置文件，是否已经启用 @EnableConfigurationProperties 注解。")])])}),[],!1,null,null,null);i.default=n.exports}}]);