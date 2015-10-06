$(document).ready(function () {
    setTimeout(function () {
        var height1 = $(".height-img").height();
        $(".height-img-weight").css("height", height1);
        var height_menu = $("body").height();
        if (height_menu < 460)
            $(".dropdown-menu").css("height", height_menu - 100);
    }, 1);

    $('.content-opera a').hover(function () {
        var id = $(this).attr("data-id");
        $('.content-opera a').find('.data-' + id).removeClass('hover-like');
    })
    $('.content-opera a').mouseout(function () {
        var id = $(this).attr("data-id");
        $('.content-opera a').find('.data-' + id).addClass('hover-like');
    })

    $('.content-opera a').mousemove(function () {
        var id = $(this).attr("data-id");
        $('.content-opera a').find('.data-' + id).removeClass('hover-like');
    })

    $(function () {
        $(".dropdown-menu > li > a.trigger").on("click", function (e) {
            var current = $(this).next();
            var grandparent = $(this).parent().parent();
            if ($(this).hasClass('left-caret') || $(this).hasClass('right-caret'))
                $(this).toggleClass('right-caret left-caret');
            grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
            grandparent.find(".sub-menu:visible").not(current).hide();
            current.toggle();
            e.stopPropagation();
        });
        $(".dropdown-menu > li > a:not(.trigger)").on("click", function () {
            var root = $(this).closest('.dropdown');
            root.find('.left-caret').toggleClass('right-caret left-caret');
            root.find('.sub-menu:visible').hide();
        });
    });

    var width_menu = $("body").width();
    var nav = $('.header-main');
    if (width_menu < 640) {
        nav.addClass('fixed');
    }

    $('.toggle-view span').click(function () {
        if ($(this).is('.list-view')) {
            $('#full-map').hide();
            $(this).addClass('active').siblings().removeClass('active');
            $('#items').children('div').removeClass('col-sm-6').addClass('col-sm-12');
        }
        else {
            $('#full-map').fadeIn();
            $(this).addClass('active').siblings().removeClass('active');
            $('#items').children('div').removeClass('col-sm-12').addClass('col-sm-6');
        }
    });

    $('#widget .toggle').click(function () {
        var getInputs = $(this).children('input');
        getInputs.toggle();
    });


})

$(window).scroll(function () {
    var width_menu = $("body").width();
    var nav = $('.header-main');
    if (width_menu > 640) {
        if ($(window).scrollTop() >= 70) {
            nav.addClass('fixed');
        } else {
            nav.removeClass('fixed');
        }
    } else {
        nav.addClass('fixed');
    }
});