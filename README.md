# 从零实现react

## 1. 环境搭建

### 1.1 webpack配置

安装依赖

> npm install webpack webpack-cli webpack-dev-server webpack-merge

大致思路是这样的，在根目录创建一个`build`目录，新建四个文件，分别对应*base*、*dev*、*prod*、*config*，*base*公共部分，绝大部分的webpack配置都在该文件中，包括`loader`，`plugins`等等。

简单介绍一些webpack的各个模块

首先`context`是作用域，`webpack.config.js`默认是放在根目录下的，所以它的路径（比如entry入口文件引入）就在根目录下，但像我这里放在自定义的目录中，每次文件引入都要`../`引出到根目录肯定是很不方便的，因此使用`context`把作用域限定在统一的目录就比较方便了。

然后是`entry`入口文件，如果你配置过`babel`工具，你可能会想起在使用`@babel/polyfill`垫片时需要在编译后的文件的顶部引入`core-js@2/3`，实际上你是可以直接类似`entry: ['@babel/polyfill', './index.js']`这样引入的，当然`babel`官网也对`webpack`配置有说明文档。当然像多入口之类的，平时也不会碰到，这里就不再赘述了...

然后是`output`，打包输出的路径和包名，可以是字符串或者对象，建议是对象，自定义路径和包名显然是更明智的选择，然后字符串那么会打包在默认`dist`目录下

之后是`resolve`模块，这里可以自定义你路径别名`alias`，还有文件扩展`extensions`

再然后就是最重要的两个模块——`module`(文件解析)和`plugins`(插件)，`webpack`默认只能解析`js`文件，但我们开发项目肯定不会单指一个文件，比如还有`.css .less .sass .jpag .png`甚至是`.vue`，这时候就需要根据匹配规则来使用对应的`loader`解析文件，一起打包输出。还有就是`plugins`，拿`mini-css-extract-plugin`举例，`loader`只能解析文件，比如`style-loader`他能把`.css`文件解析后形成一个`style`标签放在最终的`html`中，而插件能把打包后的文件直接不同形成`.css`，然后通过`link`标签引入，这就很大程度优化了首屏加载时间。不同插件也有不同的功能，我在`prod`文件中也引入了一个叫`clean-webpack-plugin`的插件，作用就是把每次`build`的目录清空再生成

我觉得学习`webpack`配置比较好的方式是多学习大型项目的`cli`，比如`create-react-app`、`vue-cli`，或者热门的开源项目，像我之前学的`vue-element-admin`中的配置。不过，要提醒自己的是，先求稳再创优
