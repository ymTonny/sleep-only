/**
 * Created by Mr.袁 on 2017/8/10.
 */
$(document).ready(function () {
    /*移入移出效果*/
    $("#more").mouseenter(function () {
        $("#more-ch").show();
    });
    $("#more").mouseleave(function () {
        $("#more-ch").hide();
    });
    $(".more-ch-ft").mouseenter(function () {
        $(this).css({"background": "rgba(104,94,78,1)", "color": "rgba(66,188,158,1)"})
    });
    $(".more-ch-ft").mouseleave(function () {
        $(this).css({"background": "rgba(86,73,56,1)", "color": "rgba(255,255,255,0.8)"})
    });
    $("#email").focus(function () {
        $(this).css({"background": "#111111"});
    });
    $("#email").blur(function () {
        $(this).css("background", "#1c1c1c");
    });
    $("#scroll_top").click(function () {
        $("html,body").animate({scrollTop: '0px'}, 900);
    });
    /*鼠标滚动改变导航颜色*/
    $(window).scroll(function () {
        if ($("body").scrollTop() > 150) {
            $("#navigation").css("background", "#323232");
            $("#more-ch").css("background", "#323232");
            $(".register").css("background", "#5b5b5b");
            $(".login").css("background", "#5b5b5b");
            $(".more-ch-ft").mouseenter(function () {
                $(this).css({"background": "#464646", "color": "rgba(66,188,158,1)"})
            });
            $(".more-ch-ft").mouseleave(function () {
                $(this).css({"background": "#323232", "color": "rgba(255,255,255,0.8)"})
            });
            $("#scroll_top").slideDown();
        } else {
            $("#navigation").css("background", "rgba(0,0,0,0.5)");
            $("#more-ch").css("background", "#564938");
            $(".register").css("background", "#786d60");
            $(".login").css("background", "#786d60");
            $(".more-ch-ft").mouseenter(function () {
                $(this).css({"background": "rgba(104,94,78,1)", "color": "rgba(66,188,158,1)"})
            });
            $(".more-ch-ft").mouseleave(function () {
                $(this).css({"background": "rgba(86,73,56,1)", "color": "rgba(255,255,255,0.8)"})
            });
            $("#scroll_top").slideUp();
        }
    });
    /*动态页数*/
    $("#text-Go").focus(function () {
        $(this).css({"borderColor": "#00c3b6", "outline": "none"});
        $("#Go").css({"background": "#00c3b6", "color": "white", "borderColor": "#00c3b6"});
    });
    $("#text-Go").blur(function () {
        $(this).css({"borderColor": "#d8d8d8", "outline": "none"});
        $("#Go").css({"background": "white", "color": "rgba(162,154,165,1)", "borderColor": "#d8d8d8"});
    });
    /*轮播图*/
    $(".carousel").mouseenter(function () {
        $(this).css("cursor", "pointer");
        $(".left").show().animate({left: "0px"});
        $(".right").show().animate({right: "0px"});
    });
    $(".carousel").mouseleave(function () {
        $(".left").hide().animate({left: "-30px"});
        $(".right").hide().animate({right: "-30px"});
    });
    $(".carousel").unslider({dots: true});
    var lb = $(".carousel").unslider(),
        data = lb.data('unslider');
    $(".left").click(function () {
        data.prev()
    });
    $(".right").click(function () {
        data.next();
    })
    $(".dot").text("");
    /*图片详情鼠标移入效果*/
    $(".picture li").mouseenter(function () {
        $('.picture-mc', this).animate({"opacity": "0.7"})

    });
    $(".picture li").mouseleave(function () {
        $('.picture-mc', this).animate({"transform": "scale(1.5)", "opacity": "0"})
    });
    $(".picture li").hover(function () {
        $('.picture-mc-bt', this).stop().animate({height: '55px'})
    }, function () {
        $('.picture-mc-bt', this).stop().animate({height: '0'})
    })
})