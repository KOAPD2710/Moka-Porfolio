$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var height = $(window).innerHeight();
    $(".olipop").css({
        width: ' ' + (50 + (scroll / height)*50) + '% '
    });
});

