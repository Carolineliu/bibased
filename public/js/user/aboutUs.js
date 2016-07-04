$(function() {
  $(".sort h4").on("click", function() {
    var content = $(this).find(".aboutUsSort").html();
    if (content == "赛事介绍") {
      $(".eventIntroduce").removeClass("aboutUsHide");
      $(".eventRule").addClass("aboutUsHide");
    } else if (content == "比赛安排") {
      $(".eventIntroduce").addClass("aboutUsHide");
      $(".eventRule").removeClass("aboutUsHide");
    }
  });

});
