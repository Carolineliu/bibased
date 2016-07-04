$(function() {
  $(".submit").on("click", function() {
    var judgeId = $("#judgeId").val();
    var judgeName = $("#judgeName").val();
    var trueName = $("#trueName").val();
    var judgePassword = $("#judgePassword").val();
    var school = $("#school").val();
    var professions = $("#professions").val();
    var profession = $("#profession").val();

    $.post("judge_manager/addJudge", {
      judgeId: judgeId,
      judgeName: judgeName,
      trueName: trueName,
      judgePassword: judgePassword,
      school: school,
      professions: professions,
      profession: profession
    }, function(result) {
      console.log(result);
      if(result.status===10200){
        alert("操作成功");
      }
      else{
        alert("增加失败，请稍后再试");
      }
    });
  });

  $(".deletes").on("click", function(data) {
    var judgeId = $(this).data('name');
    $.ajax({
      url: "judge_manager/deleteJudge",
      judgeId: judgeId,
      success: function(result) {

      }
    });

  });



});
