//smartFloat()来自于:http://www.cnblogs.com/bobodeboke/p/4565382.html
$.fn.smartFloat = function (dis, cla) {
    var position = function (element) {
        var top = element.offset().top; //当前元素element距浏览器上边距
        $(window).scroll(function () { //侦听滚动
            var scrolls = $(this).scrollTop();
            if (scrolls - top > dis) { //如果滚动到页面超出了当前元素element的相对页面顶部的高度 
                element.addClass(cla);
            } else {
                element.removeClass(cla);
            };
        });
    };
    return $(this).each(function () {
        position($(this));
    });
};

var if_less=function(){
    if($(window).height-85<537){
        return 537;
    }else{
        return $(window).height-85;
    }
}

$(function () {
    $("#bgimg").height($(window).height());
    $(".headerbox").height($(window).height() - 65);
    $(".contain").css("min-height",if_less);
    $(".fix-nav").smartFloat(0, "navbar-fixed-top");


    $(window).resize(function () {
        $(".side-bar").width($(".outline").width());
        $(".avatar").width($(".outline").width() - 20);
        $(".avatar").height($(".outline").width() - 20);
    });
    $(window).resize();

    $(".side-bar").affix({
        offset: {
            top: $(".side-bar").offset().top - 75,
            bottom: ($("footer").outerHeight(true)) + 40,
        }
    });

    console.log($(".side-bar").offset().top);
});

//--------------------Vue--------------------------------

/*
//主页导航栏三个按钮[首页|blog|小练习]
var mainpage = new Vue({
    el: "#mainpage",
    methods: {
        onClick: function () {
            var loaded = false;
            if (!loaded) {
                $("#show").load('./mainpage.html');
                loaded = true;
            }
        }
    }
});

var shwoblog = new Vue({
    el: "#showblog",
    methods: {
        onClick: function () {
            var loaded = false;
            if (!loaded) {
                $("#show").load('./blog.html');
                loaded = true;
            }
        }
    }
});

var shwopractices = new Vue({
    el: "#showpractices",
    methods: {
        onClick: function () {
            var loaded = false;
            if (!loaded) {
                $("#show").load('./practices.html');
                loaded = true;
            }
        }
    }
});
*/

// -----------------Vue-router-----------------
var routes = [{
        path: '/',
        component: {
            template: `
        <div>
            <h1>Hello World!</h1>
            <h1>Hello World!</h1>
            <h1>Hello World!</h1>
        </div>
        `
        },
    },
    {
        path: '/blog',
        component: {
            template: `
        <div>
        <ul class="post-list list-unstyled">
        <li class="post-list-item shadowbox">
          <article id="第一篇blog" class="article-card">
            <div class="post-meta">
              <time class="post-time" title="2017-11-21" datetime="2017-11-21">2017-11-21</time>
            </div>
            <h3 class="post-title">
              <a href="./2017-11-21.html" class="post-title-link">第一篇blog</a>
            </h3>
          </article>
        </li>
        <li class="post-list-item shadowbox">
          <article id="jQuery实战: 表单验证(上)" class="article-card">
            <div class="post-meta">
              <time class="post-time" title="2017-11-26" datetime="2017-11-26">2017-11-26</time>
            </div>
            <h3 class="post-title">
              <a href="./2017-11-26.html" class="post-title-link">jQuery实战: 表单验证(上)</a>
            </h3>
          </article>
        </li>
        <li class="post-list-item shadowbox">
          <article id="jQuery实战: 表单验证(下)" class="article-card">
            <div class="post-meta">
              <time class="post-time" title="2017-11-29" datetime="2017-11-29">2017-11-29</time>
            </div>
            <h3 class="post-title">
              <a href="./2017-11-29.html" class="post-title-link">jQuery实战: 表单验证(下)</a>
            </h3>
          </article>
        </li>
        <li class="post-list-item shadowbox">
          <article id="Vue.js实战: 清单应用" class="article-card">
            <div class="post-meta">
              <time class="post-time" title="2017-12-06" datetime="2017-12-06">2017-12-06</time>
            </div>
            <h3 class="post-title">
              <a href="./2017-12-06.html" class="post-title-link">Vue.js实战: 清单应用</a>
            </h3>
          </article>
        </li>
      </ul>
      </div>
        `
        },

    },
    {
        path: '/practices',
        component: {
            template: `
        <div class="nav">
        <div class="list-group">
          <a href="https://coolucifer.github.io/mogujie/index.html" class="list-group-item">蘑菇街</a>
          <a href="https://coolucifer.github.io/newswebsite/index.html" class="list-group-item">新闻页</a>
          <a href="https://coolucifer.github.io/simpleblog/index.html" class="list-group-item">简单博客</a>
          <a href="https://coolucifer.github.io/jQuery-Form-Validation/index.html" class="list-group-item">JQuery实战:表单验证</a>
          <a href="https://coolucifer.github.io/xiuzhentasks/变色九宫格/index.html" class="list-group-item">变色九宫格</a>
          <a href="https://coolucifer.github.io/vue-list/index.html" class="list-group-item">Vue-list</a>
        </div>
      </div>
        `
        },
    },
];

var router = new VueRouter({
    routes: routes,
});

new Vue({
    el: '#app',
    router: router,
});