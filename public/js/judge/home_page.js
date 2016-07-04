$(function() {
  $(".download").on("click", function() {
    var contestId = $(".contestId").data("name");
    console.log(contestId);
   contestId = 15;
    $.post("home_page", {
      contestId: contestId
    }, function(data) {

    });
  });


});
