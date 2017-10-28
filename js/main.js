//smartFloat()来自于:http://www.cnblogs.com/bobodeboke/p/4565382.html
$.fn.smartFloat = function (dis,cla) {
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

// $(".side-bar").affix({
//     offset:{
//         top:$(".side-bar").offset().top-70,
//         bottom:($("footer").outerHeight(true))+40,
//     }
// });

$(function () {
    $("#bgimg").height($(window).height());
    $(".headerbox").height($(window).height() - 65);
    // $(".side-bar").height($(window).height() - 150);
    $(".navbar").smartFloat(0,"navbar-fixed-top");
});


var mainpage=new Vue({
    el:"#mainpage",
    methods:{
        onClick:function(){
            var loaded=false;
            if(!loaded){
                $("#show").load('./mainpage.html');
                loaded=true;
            }
        }
    }
});

var shwoblog=new Vue({
    el:"#showblog",
    methods:{
        onClick:function(){
            var loaded=false;
            if(!loaded){
                $("#show").load('./test.html');
                loaded=true;
            }
        }
    }
});

var shwopractices=new Vue({
    el:"#showpractices",
    methods:{
        onClick:function(){
            var loaded=false;
            if(!loaded){
                $("#show").load('./practices/index.html');
                loaded=true;
            }
        }
    }
});