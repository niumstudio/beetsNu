$(document).ready(function(){

    // sitewide and activeLinking
    /*
    var str = window.location.pathname;
    if (str.indexOf('/en/') >= 0) {
        $('div.containMNav').load("inc-mobNavEN.html");
        $('div#masthead').load("inc-topNavEN.html");
        $('footer#siteWide').load("inc-footerEN.html");
    } else if (str.indexOf('/de/') >= 0) {
        $('div.containMNav').load("inc-mobNavDE.html");
        $('div#masthead').load("inc-topNavDE.html");
        $('footer#siteWide').load("inc-footerDE.html");
    } else {
        $('div.containMNav').load("/de/inc-mobNavDE.html");
        $('div#masthead').load("/de/inc-topNavDE.html");
        $('footer#siteWide').load("/de/inc-footerDE.html");
    }
    */
  



    $.localScroll({
            target: 'body',
            queue: false,
            hash: false,
            duration: 600,
            easing: 'easeOutQuad'
    });

    // mobile top scroll
    //$('#navMobile').hide();
    
    new Waypoint({
    element: document.getElementsByTagName('body'),
    handler: function(direction) {
        if (direction === 'down') {
            $('#navMobile').fadeTo(1000,'1.0');
        }
        else {
            $('#navMobile').hide();
        }
    },
        offset: '-50%'
    });
    new Waypoint({
        element: document.getElementById('inpageNav'),
        handler: function(direction) {
            if (direction === 'down') {
                //$('header.sticky').animate({opacity: "show"}, {queue : false, duration:250});
                $('header.sticky').fadeTo(250,'1.0');

            }
            else {
                $('header.sticky').animate({opacity: "hide"}, {queue : false, duration:250});
            }
        },
            offset: '-100%'
        })


       


    $(".slickSlider").slick({
        autoplay:true,
        autoplaySpeed:5000,
        arrows:false,
        dots:true,
        fade:true,
        speed:2000,
        pauseOnHover:false
    });


    


    // mobile nav
    $('#navClose').hide();
    $('#navClose').click(function(){
        $(this).hide();
        $('#navCart').show();
        $('#navTrigger').show();
        $("div.mblnavContainer").scrollTo(0);
        $('div.mblnav').hide();
        $('html, body').removeClass('noscroll');
        return false;
    });

    $('#navTrigger').click(function(){
        $(this).hide();
        $('#navCart').hide();
        $('#navClose').show();
        $('div.mblnav').show();
        $('html, body').addClass('noscroll');
        return false;

    });

    $('.mblnav a.inpage').click(function(){
        $('#navClose').hide();
        $('#navCart').show();
        $('#navTrigger').show();
        $("div.mblnavContainer").scrollTo(0);
        $('div.mblnav').hide();
        $('html, body').removeClass('noscroll');
        return false;
    });


    // slideNav
    $('.slideOutDrawer').hide();
    $('.slideOutTrigger').click(function(){
        $(this).toggleClass('faded');
        $(this).parent().parent('.slider').find('.slideOutDrawer').slideToggle();
        return false;
    });




    // show random div
    var elems = $(".randomShow");
    if (elems.length) {
    var keep = Math.floor(Math.random() * elems.length);
    for (var i = 0; i < elems.length; ++i) {
        if (i !== keep) {
        $(elems[i]).hide();
        }
    }
    }



    // named anchor scrollTo and offset
    var anchorLink = $(window.location.hash);
    if ( anchorLink.length ) {
        $("html, body").animate({scrollTop: anchorLink.offset().top - 50 }, 500);
    }




    // onOff waypoints content area
    $('.onOff').each(function() {
        var inview = new Waypoint.Inview({
        element: this,
        enter: function(direction) {
            // alert('Enter triggered with direction ' + direction)
            },
            entered: function(direction) {     
                $(this[0,'element']).find('.onOffTarget').removeClass('stateInactive');                            
                $(this[0,'element']).find('.onOffTarget').addClass('stateActive');
                    
            },
            exit: function(direction) {
                $(this[0,'element']).find('.onOffTarget').removeClass('stateActive');                            
                $(this[0,'element']).find('.onOffTarget').addClass('stateInactive');
            },
            exited: function(direction) {
                // alert('Exited triggered with direction ' + direction)
            }
        })
    });






    $('.slickSliderBG').slick({
        fade: true,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed:2000,  
        speed: 3000,      
        dots: false,
        arrows: false
    });
    $('.slickSliderContent').slick({
        fade: true,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed:5500,  
        speed: 1000,      
        dots: true,
        arrows: false
    });

    var inview = new Waypoint.Inview({
    element: $('#s1 .inview')[0],
        enter: function(direction) {
            //
        },
        entered: function(direction) {
            $('.positionObj1').delay(500).animate({opacity: 0.9}, {queue : true, duration:1000});
            $('.positionObj2').delay(700).animate({opacity: 0.9}, {queue : true, duration:1000});
            $('.positionObj3').delay(1200).animate({opacity: 0.9}, {queue : true, duration:1000});
        },
        exit: function(direction) {
            //
        },
        exited: function(direction) {
            //
        }
    });

    var inview = new Waypoint.Inview({
    element: $('#start')[0],
        enter: function(direction) {
            //
        },
        entered: function(direction) {
            $('.positionObj1').stop().animate({opacity: 0.0}, {queue : false, duration:500});
            $('.positionObj2').stop().animate({opacity: 0.0}, {queue : false, duration:500});
            $('.positionObj3').stop().animate({opacity: 0.0}, {queue : false, duration:500});
        },
        exit: function(direction) {
            //
        },
        exited: function(direction) {
            //
        }
    });
    

    var inview = new Waypoint.Inview({
    element: $('.vaultTrigger')[0],
        enter: function(direction) {
            //
        },
        entered: function(direction) {
            $('.vault').animate({opacity: 1.0}, {queue : false, duration:1500});
        },
        exit: function(direction) {
            //$('.vault').delay(500).animate({opacity: 0.0}, {queue : false, duration:0});
        },
        exited: function(direction) {
            $('.vault').stop().animate({opacity: 0.0}, {queue : false, duration:500});
            
        }
    });


    // hide all on scroll to top
    $('#toTop').click(function(){
        $('.vault').stop().animate({opacity: 0.0},{queue : false, duration:0});
        return false;
    });







    
});

