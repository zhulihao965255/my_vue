# my_vue

### test

##### Vue 是一个渐进式框架  ， 是一个双向数据绑定的框架，即数据与页面是交互的。

./vue_stu.html是一个利用vue基本指令写的一个购物车例子，里面综合了学到的指令。例如 v-for,v-bind,v-model,v-on,还有vue的一些基本语法。在做这个粒子的时候也遇到了不少坑，并一一解决。

&&&1:checkbox 必须要设置不同的value,不然会选择一个时候会选择全部的。

&&&2:删除商品的时候注意index的变化。

#### vue-cli  脚手架，帮助快速创建项目。
$$$ npm install -g vue-cli(安装vue-cli脚手架) vue init webpack(初始化基于webpack构建工具的项目) npm run dev(在服务器上运行)

vue-router(路由，组件与路径的配合，构键单页面应用必备)

vuex(状态管理 即vue的全局数据管理)

复习一下vue  ,顺便复习一下基础知识

父组件与子组件是单向数据流动的，即只能父向子

 自定义指令  set   生命周期钩子函数 组件   父子组件嵌套(.native调用实例的方法 is切换组键) slot与name的对应 等等。

 复习一下axios，vue跨域请求资源使用axios，还有一个比较好的工具
 [小例子](https://github.com/zhulihao965255/my_vue/blob/master/testAxios.html)
 ```
    一个get请求的小例子:
    window.API_PROXY='https://bird.ioliu.cn/v2/?url=';
    axios.get(API_PROXY+`http://m.maoyan.com/movie/list.json?type=hot
            &offset=2&limit=10`).then(function(res){
                console.log(res);
                let oUl=document.getElementsByTagName('ul')[0]; 
                let data=res.data.data.movies;
                for(let movie of data){
                    oUl.innerHTML+=`<li><img src=${movie.img}></img>
                    <p>${movie.nm}</p></li>`
                }
        });    
 ```
 Object.defineProperty方法是vue成为响应式系统的根本。它的双向数据绑定原理就是基于它，[defineProperty](https://github.com/zhulihao965255/my_vue/blob/master/9_defineProperty.html)

 做了几个小例子.[轮番图](https://github.com/zhulihao965255/my_vue/blob/master/11_imagecg.html)
 [弹出层组件](https://github.com/zhulihao965255/my_vue/blob/master/7_dialog.html)

 利用vuecli构建了项目，进入vue_cli目录，更加的详细。关于url传参，vue-router的使用
 组件化的一些细节，例如传参，重定向，别名，父子路由的调转，传参，还有一些过渡状态。
 具体详细看[官网](https://vuejs.org/)
 

 vuex：状态管理模块  一个响应式插件 四大模块 主要在中大型项目中使用.有详细叙述。
 state mutations getters actions 多做例子   改变时明式提交修改，提交的是mutation的方法


 [我的个人网站](http://www.zhulihao.cn)


