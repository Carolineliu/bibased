$(function() {
  $('.cardContent.hover').hover(function() {
    $(this).addClass('flip');
  }, function() {
    $(this).removeClass('flip');
  });

});