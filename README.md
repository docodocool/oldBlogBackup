# blog
自己做的blog页面
## 10-25
修改了navbar使其可以在刷新时出现在屏幕底部,增加了header的高度以使main-panel在最开始的时候在屏幕最下面,添加了navbar的三个nav-item并调整样式
## 10-26
修改了navbar使其可以在向上滚动到屏幕顶端的时候固定  
优化了smartFloat()~~从另一个地方抄来的~~
## 10-28
对导航栏的"首页|blog|小练习"做了几个v-on,ajax做了主内容栏.  
Q:为什么第一次ajax那么慢  
A:可能是因为网速慢
## 10-29
修改了side-bar的定位方式
## 11-6
修改了side-bar的宽度,  
修改了side-bar上avatar内容,  
修改了bgimg的显示方式
## 11-8
加了个锚点  
其他的我也不知道自己改了什么
## 11-9
添加了两个页面,作为blog和小练习部分的框架.  
如何把框架套到页面中去?
## 11-21
改名为coolucifer.github.io,这样可以在coolucifer.github.io直接访问而不用再/blog.  
调整了部分样式
## 11-22
添加了第一篇'博客'
## 11-24
给首页加了个vue-router,不用ajax了.  
## 11-26
做了个favicon凑合用,画工感人.
## 12-8
为右侧导航添加了滚动效果,并且可以在地址栏的url中不显示"#"锚点~~然而并看不懂在网上抄的函数~~  
为右侧导航栏的Mailto,QQ添加了正确的功能,不再是占位了
## 12-10
修改了一下滚动函数,使其只有在点击侧栏的链接时起作用  
将博客列表变成了一个组件  
添加了代码高亮插件highlight.js,主题为atom-one-dark,不过我还是觉得VSCode的one-dark-pro比较好看
## 12-22
把两个页面嵌进了blog框架里,iframe不是很好用呃...  
## 12-23
不用affix了,总出bug还搞不明白要怎么解决.还是smartFloat()好用
## 12-24
不用iframe了,直接把框架写进index.html  
添加了html转义函数replaceHTML(),这样就可以高亮HTML代码了