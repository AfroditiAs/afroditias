var main=function(){

    $(".drop_down").click(function() {
    $('html, body').animate({
       scrollTop: $(".social-media").offset().top
    }, 3000);
});

    //---------------SLIDE-SHOW-----------------//
   var controls = document.querySelectorAll('.controls');
    for(var i=0; i<controls.length; i++){
        controls[i].style.display = 'inline-block';
    }

    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,6000);

    function nextSlide(){
        goToSlide(currentSlide+1).slow();
    }

    function previousSlide(){
        goToSlide(currentSlide-1);
    }

    function goToSlide(n){
        slides[currentSlide].className = 'slide';
        currentSlide = (n+slides.length)%slides.length;
        slides[currentSlide].className = 'slide active-slide';
    }
    var next = document.getElementById('next');
    var previous = document.getElementById('previous');

    next.onclick = function(){
        nextSlide();
    };
    previous.onclick = function(){
        previousSlide();
    };

    //---------------FOOTER-----------------//
    $('.fa-twitter').hover(function(){
        $('.fa-twitter').addClass('twitter',400);
        },
        function(){
        $('.fa-twitter').removeClass('twitter',400);
    });
    
    $('.fa-instagram').hover(function(){
        $('.fa-instagram').addClass('instagram',400);
        },
        function(){
        $('.fa-instagram').removeClass('instagram',400);
    });
    
    $('.fa-linkedin').hover(function(){
        $('.fa-linkedin').addClass('linkedin',400);
        },
        function(){
        $('.fa-linkedin').removeClass('linkedin',400);
    });
    
    $('.fa-google-plus').hover(function(){
        $('.fa-google-plus').addClass('google-plus',400);
        },
        function(){
        $('.fa-google-plus').removeClass('google-plus',400);
    });

    $('.name_day').click(function(){
            $('.ticket_details').toggle();
    });

    $('.about_ticket li').click(function () {

        var text = $(this).children('div.ticket_time');

        if (text.is(':hidden')) {
            text.slideDown('200');
            $(this).children('span').html('-');     
        } else {
            text.slideUp('200');
            $(this).children('span').html('+');     
        }
        
    });
}

$(document).ready(main);