//  $(function () {
//    'use strict';
//    // Adjust Slider Height
//    var winH    = $(window).height(),
//        upperH  = $('.upper-bar').innerHeight(),
//        navH    = $('.navbar').innerHeight();
//        navH    = $('#header').innerHeight();
//        navH=parseInt(navH);
// //    $('.slider, .carousel-item').height(winH - ( upperH + navH ));
//    $('.carousel, carousel .item').height(winH - ( navH ));
//    $('.carousel, carousel .item').css("margin-top",navH);
//  });

//Products and solutions List Visibility


function prodsolnav(){
    let soli=2,solnb=5;
  let winwidth=$(window).width();
if (winwidth<567) 
 solnb=1;
 else if (winwidth<678) 
 solnb=2;
 else if (winwidth<992) 
 solnb=3;
 else 
 solnb=4;
 console.log(winwidth);
 console.log(solnb);
$('.prod-sol-sec .tab-switch li:not(:nth-child(n+ ' + soli + '):nth-child(-n+ ' + (soli+solnb) + '))').fadeOut(0);
$('.prod-sol-sec .faprev').click(function(){
    if (soli>2)     soli--;
    console.log('soli=' + soli);
    $('.prod-sol-sec .tab-switch li').show();
    // $('.prod-sol-sec .tab-switch li').fadeIn(0);
    $('.prod-sol-sec .tab-switch li:not(:nth-child(n+ ' + soli + '):nth-child(-n+ ' + (soli+solnb) + '))').hide();
    // $('.prod-sol-sec .tab-switch li:not(:nth-child(n+ ' + soli + '):nth-child(-n+ ' + (soli+solnb) + '))').fadeOut(0);
    });
    $('.prod-sol-sec .fanext').click(function(){
        console.log($('.prod-sol-sec .tab-switch li').length);
        if ((soli+4)==$('.prod-sol-sec .tab-switch li').length) return;
        soli++;
        $('.prod-sol-sec .tab-switch li').show();
        // $('.prod-sol-sec .tab-switch li').fadeIn(0);
        $('.prod-sol-sec .tab-switch li:not(:nth-child(n+ ' + soli + '):nth-child(-n+ ' + (soli+solnb) + '))').hide();
        // $('.prod-sol-sec .tab-switch li:not(:nth-child(n+ ' + soli + '):nth-child(-n+ ' + (soli+solnb) + '))').fadeOut(0);
        });
    };
    $(window).on('resize', prodsolnav);
prodsolnav();
  // Our Auto Slider 1 Code
    
  (function autoSlider() {
        
    $('.slider1 .slider .active').each(function () {
       
        if (!$(this).is(':last-child')) {
            
            $(this).delay(3000).fadeOut(1000, function () {
               
                $(this).removeClass('active').next().addClass('active').fadeIn();
                
                autoSlider();
                
            });
            
        } else {
            
            $(this).delay(3000).fadeOut(1000, function () {
                
                $(this).removeClass('active');
                
                $('.slider1 .slider div').eq(0).addClass('active').fadeIn();
                
                autoSlider();
                
            });
            
        }
        
    });
    
}());

// Our Auto Slider 2 Code
    
(function autoSlider() {
        
  $('.slider2 .slider .active').each(function () {
     
      if (!$(this).is(':last-child')) {
          
          $(this).delay(3000).fadeOut(1000, function () {
             
              $(this).removeClass('active').next().addClass('active').fadeIn();
              
              autoSlider();
              
          });
          
      } else {
          
          $(this).delay(3000).fadeOut(1000, function () {
              
              $(this).removeClass('active');
              
              $('.slider2 .slider div').eq(0).addClass('active').fadeIn();
              
              autoSlider();
              
          });
          
      }
      
  });
  
}());

