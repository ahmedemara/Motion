/*global $, alert, console */

$(document).ready(function () {

    "use strict";

    // Loader
    $(window).load(function () {
        $(".loader").fadeOut("slow");
    });

    // Scroll Top 

    var scrollButton = $("#scroll-top");

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 400) {
            scrollButton.show();
        } 
        else {
            scrollButton.hide();
        }


    });

    $("#scroll-top").click(function () {

        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });



    // start owl carasouel
    $("#owl-demo3").owlCarousel({
        items: 1,
        autoplay: 4000,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            300: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1028: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
    // start owl carasouel
    $("#owl-demo1,#owl-demo2").owlCarousel({
        items: 1,
        autoplay: 4000,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {

            1200: {
                items: 1
            }
        }
    });

    // scroll to decrease header
    $(window).scroll(function () {

        if ($(this).scrollTop() >= 80){
            $('.navbar .nav ').addClass('fix');
            $('.navbar-brand img').height(50);
        }

        else {
            $('.navbar .nav ').removeClass('fix');
            $('.navbar-brand img').height(65);
        }

    });


    //Adjest Add Active
    
    $("ul li a").click(function () {
        
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    // Smooth Scroll to div 
    
    $(".navbar ul li a ").click(function () {
        
        $("html , body").animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top-60
            
        }, 1000);
        
    });

});