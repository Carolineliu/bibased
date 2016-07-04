$(function() {
  $("#publishSubmit").on("click", function() {
    var title = $(".publishTitle").val();
    var content = $(".publishContent").val();
    $.post("url", {}, function(result) {

    });

  });

});
