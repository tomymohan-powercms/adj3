(function ($) {
  Drupal.behaviors.panel = {
    attach: function (context, settings) {
      $('.view-adj3-view .views-row .views-field img').hover(function() {
        $(this).addClass('transition');
      }, function() {
        $(this).removeClass('transition');
      });

      $(".views-column-first").hover(function() {
        $('.views-column-first').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $(this).addClass('panel-second_1');
        $('.views-column-first img').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"opacity"});
        $('.views-column-first img').css({"opacity": "0.01"});
        $('.views-column-2').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-2').css({"width": "22%"});
        $('.views-column-3').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-3').css({"width": "22%"});
        $('.views-column-4').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-4').css({"width": "22%"});

      }, function() {
        $('.views-column-first img').css({"-webkit-transition-duration": "2s", "-webkit-transition-property":"opacity"});
        $('.views-column-first img').css({"opacity": ""});
        $('.views-column-first').css({"-webkit-transition-duration": "2s", "-webkit-transition-property":"width"});
        $(this).removeClass('panel-second_1');
        $('.views-column-2').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-2').css({"width": ""});
        $('.views-column-3').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-3').css({"width": ""});
        $('.views-column-4').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-4').css({"width": ""});
      });

      $(".views-column-2").hover(function() {
        $('.views-column-2').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $(this).addClass('panel-second_2');
        $('.views-column-2 img').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"opacity"});
        $('.views-column-2 img').css({"opacity": "0.01"});
        $('.views-column-first').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-first').css({"width": "22%"});
        $('.views-column-4').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-4').css({"width": "22%"});
        $('.views-column-3').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-3').css({"width": "22%"});

      }, function() {
        $('.views-column-2').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $(this).removeClass('panel-second_2');
        $('.views-column-1').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-1').css({"width": ""});
        $('.views-column-3').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-3').css({"width": ""});
        $('.views-column-4').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-4').css({"width": ""});
        $('.views-column-2 img').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"opacity"});
        $('.views-column-2 img').css({"opacity": ""});
      });


      $(".views-column-3").hover(function() {
        $('.views-column-3').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $(this).addClass('panel-second_3');
        $('.views-column-3 img').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"opacity"});
        $('.views-column-3 img').css({"opacity": "0.01"});
        $('.views-column-first').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-first').css({"width": "22%"});
        $('.views-column-2').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-2').css({"width": "22%"});
        $('.views-column-4').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-4').css({"width": "22%"});

      }, function() {
        $('.views-column-3').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $(this).removeClass('panel-second_3');
        $('.views-column-first').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-first').css({"width": ""});
        $('.views-column-2').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-2').css({"width": ""});
        $('.views-column-4').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-4').css({"width": ""});
        $('.views-column-3 img').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"opacity"});
        $('.views-column-3 img').css({"opacity": ""});
      });


      $(".views-column-4").hover(function() {
        $('.views-column-4').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $(this).addClass('panel-second_4');
        $('.views-column-4 img').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"opacity"});
        $('.views-column-4 img').css({"opacity": "0.01"});
        $('.views-column-first').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-first').css({"width": "22%"});
        $('.views-column-2').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-2').css({"width": "22%"});
        $('.views-column-3').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-3').css({"width": "22%"});

      }, function() {
        $('.views-column-4').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $(this).removeClass('panel-second_4');
        $('.views-column-first').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-first').css({"width": ""});
        $('.views-column-2').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-2').css({"width": ""});
        $('.views-column-3').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"width"});
        $('.views-column-3').css({"width": ""});
        $('.views-column-4 img').css({"-webkit-transition-duration": "1s", "-webkit-transition-property":"opacity"});
        $('.views-column-4 img').css({"opacity": ""});
      });
    }
  }
})(jQuery);

