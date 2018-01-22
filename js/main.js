//smartFloat()来自于:http://www.cnblogs.com/bobodeboke/p/4565382.html
$.fn.smartFloat = function (dis, cla) {
    var position = function (element) {
        var top = element.offset().top; //当前元素element距浏览器上边距
        $(window).scroll(function () { //侦听滚动
            var scrolls = $(window).scrollTop();
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

//html标签转义
var replaceHTML = function () { //替换'<'
    if ($(".code-html").length && $(".code-html").length>0) {  //若存在.code-html
        var html = $(".code-html").html();
        var result = html.replace(/</g, '&lt;');
        $(".code-html").html(result);
    }
}

$(function () {
    // $("#bgimg").height($(window).height());
    $(".headerbox").height($(window).height() - 65);
    $(".contain").css("min-height", ($(window).height() - 85 < 537) ? 537 : ($(window).height() - 85));
    $(".main-column").css("min-height", ($(window).height() - 85 < 537) ? 537 : ($(window).height() - 85));
    $(".fix-nav").smartFloat(0, "navbar-fixed-top");
    $(".side-bar").smartFloat(-75, "side-bar-fixed"); //因为side-bar最开始在屏幕外,滚动距离应该是屏幕大小+屏幕外距离...可能


    $(window).resize(function () {
        $(".side-bar").width($(".outline").width());
        // $(".side-bar-fixed").css("left", ($('.outline').position().left));
        $(".avatar").width($(".outline").width() - 20);
        $(".avatar").height($(".outline").width() - 20);
    });
    $(window).resize();

    // $("side-bar").attr("class", "side-bar affix-top shadowbox"); //初始化side-bar

    // $(".side-bar").affix({
    //     offset: {
    //         top: $(".side-bar").offset().top - 75,
    //         bottom: ($("footer").outerHeight(true)) + 40,
    //     }
    // });

    console.log($(".side-bar").offset().top);

    // 页面平滑滚动到锚点 && 地址栏url后缀不带锚点
    //http://www.jb51.net/article/65320.htm

    $('.contact > a[href*="#"]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    500);
                return false;
            }
        }
    });

    //转义HTM标签
    replaceHTML();

    $(document).ready(function () { //highlight.js
        $('pre').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    });
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
            template: '#blog-list'
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
          <a href="./projects/vue-list.html" class="list-group-item">Vue-list</a>
          <a href="https://coolucifer.github.io/2048" class="list-group-item">2048</a>
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