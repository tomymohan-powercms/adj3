(function ($) {
  Drupal.behaviors.panel = {
    attach: function (context, settings) {
      $('.view-adj3-view .views-row .views-field img').hover(function() {
        $(this).addClass('transition');
      }, function() {
        $(this).removeClass('transition');
      });
      $(".col-first").hover(function() {
        $('.col-first').css({"-webkit-transition-duration": "2s", "-webkit-transition-property":"width"});
        $(this).addClass('panel-second');
        $('.col-first img').css({"width": "100%"});
        $('.col-2').css({"width": "100px"});
      }, function() {
        $(this).removeClass('panel-second');
        // $('.col-first').css({"-webkit-transition-duration": "", "-webkit-transition-property":""});
        $('.col-first img').css({"width": "100%"});
        $('.col-2').css({"width": ""});
      });
      $(".col-2").hover(function() {
        $(this).addClass('panel-second');
        $('.col-2 img').css({"width": "100%"});
        $('.col-first').css({"width": "150px"});
        $('.col-2').css({"-webkit-transition-duration": "2s", "-webkit-transition-property":"width"});
      }, function() {
        $(this).removeClass('panel-second');
        $('.col-2').css({"-webkit-transition-duration": "", "-webkit-transition-property":""});
        $('.col-2 img').css({"width": ""});
        $('.col-first').css({"width": ""});
      });
      $(".col-3").hover(function() {
        $(this).addClass('panel-second');
        $('.col-3 img').css({"-webkit-transition-duration": "2s", "-webkit-transition-property":"width"});
        $('.col-3 img').css({"width": "100%"});
        $('.col-2').css({"width": "100px"});
      }, function() {
        $(this).removeClass('panel-second');
        $('.col-3 img').css({"-webkit-transition-duration": "", "-webkit-transition-property":""});
        $('.col-3 img').css({"width": ""});
        $('.col-2').css({"width": ""});
      });
      $(".col-4").hover(function() {
        $(this).addClass('panel-second');
        $('.col-4 img').css({"-webkit-transition-duration": "2s", "-webkit-transition-property":"width"});
        $('.col-4 img').css({"max-width": "100%"});
        $('.col-3').css({"width": "100px"});
      }, function() {
        $(this).removeClass('panel-second');
        $('.col-4 img').css({"-webkit-transition-duration": "", "-webkit-transition-property":"width"});
        $('.col-4 img').css({"max-width": ""});
        $('.col-3').css({"width": ""});
      });
    }
  }
})(jQuery);

