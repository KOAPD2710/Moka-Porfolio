$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var height = $(window).innerHeight();
    var up = scroll / height;
    var numlock = 30;
    /* Up run form 1 and up to ...*/
    var p = $( "p" ).first();
    $( ".textscroll p" ).text( up );

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

    if ( 2 <= up && up <= 3 ) {
        $(".welcome h1").css({
            transform: 'translateX(' +(120 - up*60) + '%)'
        });
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
