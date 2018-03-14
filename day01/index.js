(function ($) {
    $.fn.Scroll = function (options) {
        //默认配置
        var defaults = {
            speed: 60,  //滚动速度,值越大速度越慢
            rowHeight: 41 //每行的高度
        };

        var opts = $.extend({}, defaults, options), intId = [];

        function marquee(obj, step) {

            obj.find("ul").animate({
                marginTop: '-=1'
            }, 0, function () {
                var s = Math.abs(parseInt($(this).css("margin-top")));
                if (s >= step) {
                    $(this).find("li").slice(0, 1).appendTo($(this));
                    $(this).css("margin-top", 0);
                }
            });
        }

        this.each(function (i) {
            var sh = opts["rowHeight"], speed = opts["speed"], _this = $(this);
            intId[i] = setInterval(function () {
                if (_this.find("ul").height() <= _this.height()) {
                    clearInterval(intId[i]);
                } else {
                    marquee(_this, sh);
                }
            }, speed);

            _this.hover(function () {
                clearInterval(intId[i]);
            }, function () {
                intId[i] = setInterval(function () {
                    if (_this.find("ul").height() <= _this.height()) {
                        clearInterval(intId[i]);
                    } else {
                        marquee(_this, sh);
                    }
                }, speed);
            });

        });

    }
})(jQuery);

$(function () {
    slide_img();     //图片信息
    var isMobile=getUrlParam("vclient");
    if(isMobile==null){
        if (!IsPC()) {     //首页浏览器判断 false PC true 跳转到手机端
            window.location = PUBCONFIG.ZHUBIAOJU_WAP_URL;
        }
    }

    $('.bj-panel-block').Scroll();
})
/*
 * 加载图片信息
 * */
function slide_img() {
    var content = $(".ui-switchable-content");
    var nav = $(".ui-switchable-nav");
    $.ajax({
        url: "/img/advert?json=1&holder_id=18",
        type: "get",
        dataType: "json",
        success: function (res) {
            var data = res.ad;
            for (var i = 0; i < data.length; i++) {
                var html = "<li class='ui-switchable-panel '><a class='middle-banner' alt='" + data[i].alt + "' href='" + data[i].href + "' target='_blank'><img src='" + data[i].src + "' alt='" + data[i].alt + "'title='" + data[i].alt + "'></a></li>";
                content.append(html);
                nav.append("<li class='ui-switchable-trigger'>●</li>");
            }
            if (data.length != 1) nav.show();


            seajs.use('slide', function (slide) {
                new slide({
                    element: '#slide-index',
                    effect: 'fade',
                    interval: 3000,
                    activeIndex: 0
                }).render();
            })
        }
    })
}

/*
 * 检测是否为浏览器 PC
 * */
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

/*
 * 获取url参数
 * */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURIComponent(r[2]); return null; //返回参数值
}
