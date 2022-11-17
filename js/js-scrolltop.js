$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".olipop").css({
        width: ' ' + (50 + scroll /20) + '% '
    });
});

