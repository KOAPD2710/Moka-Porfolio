$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var height = $(window).innerHeight();
    var up = scroll / height;
    var numlock = 30;
    /* Up run form 1 and up to ...*/

    $(".olipop").css({
        width: ' ' + (50 + (up)*50) + '% '
    });

    if ( up >= 1) {
        $(".olipop").css({
            transform: 'translate3d(-50%, ' + ((-50 - (numlock)) + (up)*(numlock)) + '%, 0)'
        });
        document.body.style.backgroundColor = 'var(--gr)';
    } else{
        document.body.style.backgroundColor = 'black';
    }
});

$(document).ready(function(val){
    $('.navisticky .navlinksm .menuicon').click(function(val){
        if ( $(this).hasClass("checked") ) {
            $(this).removeClass("checked");
            document.body.style.overflow = '';
        } else {
            $(this).addClass("checked");
            document.body.style.overflow = 'hidden';
        }
    });
});
