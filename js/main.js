$(document).ready(function(){

    $('.background').height( $(window).height() + 100 );
    $('.fancybox').fancybox();
    $(window).resize(function(){
        $('.background').height( $(window).height() + 100 );
    });	

    $('.phone-input').mask("+7 (999) 999-99-99");

    $('.country-list .country-item').click(function(){
        if ( $(window).width() < 1280 ) {
            if ( $(this).hasClass("active") ) {
                $(this).removeClass("active");
            } else {
                $('.country-list .country-item').removeClass("active");
                $(this).addClass("active");
            }
        }
    });

    $('.mobile-background').click(function(){
        $('.mobile-background').removeClass("active");
        $('.mobile-menu').removeClass('active');
        $('.mobile-menu-btn').removeClass('active');
    });

    $('.b-1-submit a').click(function(){
        if ( $('.b-1 .button-list').hasClass("active") ) {
            var el = $(this).attr('href');
            var el_2 = $('.b-1 .button-list li.false-btn').data("text");
            var next = $(el).data('next');
            var text_block = $(el).data('text');
            $('.b-1 .submit-text').removeClass("active");
            $(next).addClass("active");
            $('.b-1 ' + text_block).addClass("active");
            $(this).attr("href",next);
            $('.b-1 .button-list li').removeClass("active");
            $('.b-1 .button-list').removeClass("active");
            if ( $('.b-1 .submit-list li:last-child').hasClass("active") ) {
                $('.b-1 .button-list').css('display','none');
                $('.b-1 .submit-btn').css('display','none');
            }
            $('.b-1 .button-list li.false-btn').data("text",$(el_2).data("next"));
            $('.b-1 .button-list li.true-btn').data("text",$(el_2).data("next"));
        } else {
            $('.b-1 .submit-btn-error').addClass("active");
            $('.b-1 .button-list li').addClass("error");
        }
        return false;
    });

    $('.mobile-menu-btn').click(function(){
        if ( $(this).hasClass("active") ) {
            $(this).removeClass("active");
            $('.mobile-menu').removeClass('active');
        } else {
            $(this).addClass("active");
            $('.mobile-menu').addClass("active");
        }
    });

    $('.popup-more a').click(function(){
        if ( $('.popup-more .button-list').hasClass("active") ) {
            var el = $(this).attr('href');
            var next = $(el).data('next');
            var text_block = $(el).data('text');
            $('.popup-more .submit-text').removeClass("active");
            $(next).addClass("active");
            $('.popup-more ' + text_block).addClass("active");
            $(this).attr("href",next);
            $('.popup-more .button-list li').removeClass("active");
            $('.popup-more .button-list').removeClass("active");
            if ( $('.popup-more .submit-list li:last-child').hasClass("active") ) {
                $('.popup-more .button-list').css('display','none');
                $('.popup-more .submit-btn').css('display','none');
            }
        } else {
            $('.popup-more .submit-btn-error').addClass("active");
            $('.popup-more .button-list li').addClass("error");
        }
        return false;
    });

    $('.popup-more .button-list li').click(function(){
        if ( $(this).hasClass("active") ) {
            $('.popup-more .button-list li').removeClass("active");
            $('.popup-more .button-list').removeClass("active");
        } else {
            $('.popup-more .button-list li').removeClass("active");
            $('.popup-more .button-list').addClass("active");
            $(this).addClass("active");
            $('.popup-more .submit-btn-error').removeClass("active");
            $('.popup-more .button-list li').removeClass("error");
        }
    });

});