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

});