$(function() {

  $(".registrateRecord .nav li").on("click", function() {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $.post("registrate_record/getContestArray",function(data){


      
    });


    if ($(this).data('name') === "recordHistory") {
      $(".recordHistory").show();
      $(".record").hide();
    } else {
      $(".recordHistory").hide();
      $(".record").show();
    }
  });
});
