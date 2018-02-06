/**
 * Created by 369 on 2017/12/29.
 */


//rem换算
(function(doc,win){
    "use strict";

    win.resize = {};

    var timer = null;
    var rem = 12;
    var doc = win.document;
    var docEl = doc.documentElement;

    /**
     * 刷新页面REM值
     */
    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        width = width > 1024 ? 640 : width;
        rem = width / 7.5;
        docEl.style.fontSize = rem + 'px';
    }

    /**
     * 页面缩放或重载时刷新REM
     */
    win.addEventListener('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(refreshRem, 300);
        }
    }, false);

    refreshRem();
})(document,window);


//底部tab--点击时换图
window.onload = function(){
    $('.catalog-tab').click(function(){
        $(this).addClass("bar-active").siblings().removeClass("bar-active");
        $(this).find('span:last-child').addClass("active-text").parent().siblings().find('span:last-child').removeClass("active-text");
    });
    $('.catalog-tabs').click(function(){
        $(this).addClass("bar-active").siblings().removeClass("bar-active");
        $(this).find('span:last-child').addClass("active-text").parent().siblings().find('span:last-child').removeClass("active-text");
    });
    $('.catalogs-tab').click(function(){
        $(this).addClass("bar-active").siblings().removeClass("bar-active");
        $(this).find('span:last-child').addClass("active-text").parent().siblings().find('span:last-child').removeClass("active-text");
    })
};































