//smartFloat()来自于:https://www.helloweba.com/view-blog-194.html
$.fn.smartFloat = function () {
    var position = function (element) {
        var top = element.position().top; //当前元素element距浏览器上边距
        var pos = element.css("position"); //元素距document顶部距离
        $(window).scroll(function () { //侦听滚动
            var scrolls = $(this).scrollTop();
            if (scrolls > top) { //如果滚动到页面超出了当前元素element的相对页面顶部的高度 
                if (window.XMLHttpRequest) { //如果不是ie6
                    element.css({
                        position: "fixed",
                        top: 0,
                    });
                } else {
                    element.css({
                        top: scrolls,
                    });
                };
            } else {
                element.css({
                    position: pos,
                    top: top,
                });
            };
        });
    };
    return $(this).each(function () {
        position($(this));
    });
};

$(function () {
    $("#bgimg").height($(window).height());
    $(".headerbox").height($(window).height());
    $(".navbar").smartFloat();
});