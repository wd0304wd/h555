/**
 * Created by yunhe3 on 2016/11/18.
 */
$(function () {
    $("body").height( $(window).height() );
    document.body.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);
    setTimeout(function () {
        $(".loading").fadeOut(1500);
        $("canvas").hide(2000);
        $("#myVideo").get(0).play();
    },7000)
    setTimeout(function () {
        $("#myVideo").get(0).pause();
    },9400)
    $("#myVideo").on("tap", function () {
        $("#myVideo").get(0).play();
        return false;
    })
    $('#myVideo')[0].addEventListener('ended',function(){
        $(".enter").hide();
        $(".train-word li:eq(0)").animate({opacity:"1"},1000);
        $(".train-word li:eq(1)").animate({opacity:"1"},1800);
        $(".train-word li:eq(2)").animate({opacity:"1"},2500);
    })

    $(".train").on("tap", function () {
        $(this).hide();
        $(".projector-word li:eq(0)").animate({opacity:"1"},1000);
        $(".projector-word li:eq(1)").animate({opacity:"1"},1800);
        $(".projector-word li:eq(2)").animate({opacity:"1"},2500);
        $(".projector-word li:eq(3)").animate({opacity:"1"},3500);
        return false;
    })
    $(".projector").on("tap", function () {
        $(this).hide();
        setTimeout(function () {
            $(".tv-video").css({"display":"block"});
            $("#t-video").get(0).play();
        },1200)
        $(".tv img:eq(1)").animate({left:"14%"},1000);
        $(".tv-word li:eq(0)").animate({opacity:"1"},1500);
        $(".tv-word li:eq(1)").animate({opacity:"1"},2300);
        $(".tv-word li:eq(2)").animate({opacity:"1"},3200);
        $(".tv-word li:eq(3)").animate({opacity:"1"},4000);
        return false;
    });
    $("#t-video")[0].addEventListener("ended", function () {
        $(".tv").hide(300);
        $("#weixing").get(0).play();
        return false;
    })
    $('#weixing')[0].addEventListener('ended',function(){
        $(".weixing").hide();
        $(".earthBox").show();
        $("#earth")[0].play();
    })

    $("#earth")[0].addEventListener("ended", function () {
        $("#zhinenghua").css({
            "display":"block",
            "animation":"zhinenghua 4s"
        });
    })
    $("#zhinenghua").on("tap", function () {
        $(this).hide();
        $(".earthBox").hide();
        return false;
    });
    $(".tapBox").on("tap", function () {
        $(".eiv").hide();
        $(".msk-left").animate({top:"-50%"},1000);
        $(".msk-right").animate({top:"100%"},1000);
        return false;
    });
    $(".eiv-info").on("tap", function () {
        $(this).hide();
        $(".end>img").css({
            "animation":"myLeft 3s"
        });
    })
});