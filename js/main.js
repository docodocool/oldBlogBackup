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

$(function () {
    $("#bgimg").height($(window).height());
    $(".headerbox").height($(window).height() - 65);
    $(".contain").css("min-height", ($(window).height() - 85 < 537) ? 537 : ($(window).height() - 85));
    $(".fix-nav").smartFloat(0, "navbar-fixed-top");


    $(window).resize(function () {
        $(".side-bar").width($(".outline").width());
        $(".avatar").width($(".outline").width() - 20);
        $(".avatar").height($(".outline").width() - 20);
    });
    $(window).resize();

    $("side-bar").attr("class", "side-bar affix-top shadowbox");  //初始化side-bar

    $(".side-bar").affix({
        offset: {
            top: $(".side-bar").offset().top - 75,
            bottom: ($("footer").outerHeight(true)) + 40,
        }
    });

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