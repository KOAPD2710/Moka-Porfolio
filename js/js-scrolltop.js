$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".firstview").css({
        transform: 'translate3d(-50%, ' + (-50 + scroll / 100) + '%, 0) scale(' + (100 + scroll / 10) / 100 + ')'
    });
});