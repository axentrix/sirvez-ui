jQuery(function($) {


  
  var $bodyEl = $('body'),
      $sidedrawerEl = $('#sidedrawer');
      $summaryEl = $('#project-summary');

  function showSidedrawer() {
    // show overlay
    var options = {
      onclose: function() {
        $sidedrawerEl
          .removeClass('active')
          .appendTo(document.body);
      }
    };



   

    var $overlayEl = $(mui.overlay('on', options));

    // show element
    $sidedrawerEl.appendTo($overlayEl);
    setTimeout(function() {
      $sidedrawerEl.addClass('active');
    }, 20);
  }

  function showSummary() {
   $(this).toggleClass("active");
    $summaryEl.toggleClass("active");

   
  }



  function hideSidedrawer() {
    $bodyEl.toggleClass('hide-sidedrawer');
  }


  $('.js-show-sidedrawer').on('click', showSidedrawer);
  $('.js-hide-sidedrawer').on('click', hideSidedrawer);

  $('.summary-toggle').on('click', showSummary);



  var $titleEls = $('span', $sidedrawerEl);

  $titleEls
    .next()
    .hide();
  
  $titleEls.on('click', function() {
    $('span', $sidedrawerEl).next()
    .hide();
    $('span', $sidedrawerEl).removeClass("active");

    $(this).toggleClass("active");

    $(this).next().slideToggle(200);
  });






  //Define Defaults - Elements to be targets by user interaction/events
  var $defaults = {
    
    actionbutton: $('.action-btn'),
    
}

$defaults.actionbutton.on('click', function(e) {
 
  $(this).next(".actions").fadeIn();
  $(this).next(".actions").addClass("open");
  e.stopPropagation();
});

$('body').on('click', function(e) {
  if( $(".actions").hasClass("open")) {
    $(".actions").removeClass("open")
    $(".actions").fadeOut();
  }
});

$('#proposal-product-1').click(function() {
  $("#individual-actions-proposal").toggleClass("open");
});



$('#product-1').click(function() {
  $("#individual-actions").toggleClass("open");
});


$('[data-mdb-toggle=tab]').click(function(){

  if ($(this).hasClass('active')){
    var url = $(this).attr('href');
    var tid = url.split('#')[1];
    console.log(tid);
    //$('#'+tid).toggleClass('active');
    $(this).closest(".tab-content").children().slideToggle();
    $('#'+tid).slideToggle();

    document.location.hash = '';
  

  }
});



});