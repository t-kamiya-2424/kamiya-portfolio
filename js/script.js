// header > nav
// ==================================================
$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});

// works > a
// ==================================================
$(function(){
    $('.works-caption').hover(function(){
        $(this).css("opacity","1");
    },function() {
        $(this).css("opacity","0");
    });
});

// header > nav-list
// ==================================================
$(function(){
    $('.scroll-skill').on('click',function(){
        $("html,body").animate({scrollTop:($('.skill').offset().top)-100});
        $('#nav-btn').removeClass('-active');
        $('#nav').removeClass('-active');
    });
});
$(function(){
    $('.scroll-service').on('click',function(){
        $("html,body").animate({scrollTop:($('.service').offset().top)-100});
        $('#nav-btn').removeClass('-active');
        $('#nav').removeClass('-active');
    });
});
$(function(){
    $('.scroll-works').on('click',function(){
        $("html,body").animate({scrollTop:($('.works').offset().top)-100});
        $('#nav-btn').removeClass('-active');
        $('#nav').removeClass('-active');
    });
});
$(function(){
    $('.scroll-flow').on('click',function(){
        $("html,body").animate({scrollTop:($('.flow').offset().top)-100});
        $('#nav-btn').removeClass('-active');
        $('#nav').removeClass('-active');
    });
});
$(function(){
    $('.scroll-contact').on('click',function(){
        $("html,body").animate({scrollTop:($('.contact').offset().top)-100});
        $('#nav-btn').removeClass('-active');
        $('#nav').removeClass('-active');
    });
});
