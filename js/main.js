//smartFloat()来自于:http://www.cnblogs.com/bobodeboke/p/4565382.html
$.fn.smartFloat = function (para) {
    var position = function (element) {
        var top = element.offset().top; //当前元素element距浏览器上边距
        $(window).scroll(function () { //侦听滚动
            var scrolls = $(this).scrollTop();
            if (scrolls - top > para) { //如果滚动到页面超出了当前元素element的相对页面顶部的高度 
                element.addClass("navbar-fixed-top");
            } else {
                element.removeClass("navbar-fixed-top");
            };
        });
    };
    return $(this).each(function () {
        position($(this));
    });
};

$(function () {
    $("#bgimg").height($(window).height());
    $(".headerbox").height($(window).height() - 75);
    $(".side-bar").height($(window).height() - 150);
    $(".navbar").smartFloat(0);
});