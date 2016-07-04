$(function() {

  $(".releaseCompetitionTime").on("click", function() {
    var applyBegin = $(".applyBegin").val();
    var applyOver = $(".applyOver").val();
    var prelimBegin = $(".prelimBegin").val();
    var prelimOver = $(".prelimOver").val();
    var finalBegin = $(".finalBegin").val();
    var finalOver = $(".finalOver").val();
    var submitOver = $(".submitOver").val();

    $.post("competition_time", {
      applyBegin: pplyBegin,
      applyOver: applyOver,
      prelimBegin: prelimBegin,
      prelimOver: prelimOver,
      finalBegin: finalBegin,
      finalOver: finalOver,
      submitOver: submitOver
    }, function(data) {
      if(data.status===10200){
        alert("设置成功");
      }
      else{
        alert("设置失败，请重试");
      }






    });


  });









});
