$(function(){
  
  // Setup scrollspy 
  
  $('#lists').scrollspy({target: '#spy-nav'});

  // Control font sizes
  
  $(".masthead h3").fitText(1.2, {minFontSize: '15px', maxFontSize: '40px'});
  $(".masthead h2").fitText(1.0, {minFontSize: '30px', maxFontSize: '60px'});      
  $(".masthead h5").fitText(1.5, {minFontSize: '10px', maxFontSize: '30px'}); 

  
  // Push body for overlay
  
  windowWidth    = $(window).width();  
  mastheadHeight = $(".masthead").height();
  
  // Set initial height 
  
  if (windowWidth < 992) {
    $(".content").css("margin-top", "0px");
  } else {
    $(".content").css("margin-top", mastheadHeight + 100);
    $('.resource-section-nav').affix({
      offset: {
        top: mastheadHeight + 100
      }
    });
  }
  
  // Reset on window resize 
  
  $(window).resize(function(){
  
    windowWidth    = $(window).width();  
    mastheadHeight = $(".masthead").height();
    
    if (windowWidth < 992) {
      $(".content").css("margin-top", "0px");
      $(".resource-section-nav").removeClass("affix");
    } else {
      $(".content").css("margin-top", mastheadHeight + 100);

      $('.resource-section-nav').affix({
        offset: {
          top: mastheadHeight + 100
        }
      });
    }

  });

      
  $(window).scroll(function(){
    
    scrollTop = $(window).scrollTop();
    
    if(scrollTop >= (mastheadHeight + 100)) {
      $(".content").addClass("push");
    } else {
      $(".content").removeClass("push");
    }
    
  });
    
});
