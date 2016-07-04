$(function() {
  // $(".dropdown-menu").on("click", function() {
  //   $("#schoolName").empty().html($(".dropdown-menu .schoolName").html());
  // });

  $(".submit_message").on("click", function() {
    var contestName = $("#contestName").val();
    var leader = $("#leader").val();
    var leaderTel = $("#leaderTel").val();
    var studentCount = $("#studentCount").val();
    var tutor = $("#tutor").val();
    var intro = $("#intro").val();
    var studentTel = $("#studentTel").val();
    var introduce = $("#introduce").val();
    var schoolName = $("#schoolName option:selected").html();
    schoolName = $.trim(schoolName);
    if (contestName && leader && leaderTel && studentCount && tutor && studentTel && introduce && schoolName) {
      $.post("online_registration/submit", {
        contestName: contestName,
        leader: leader,
        leaderTel: leaderTel,
        studentCount: studentCount,
        tutor: tutor,
        intro: intro,
        studentTel: studentTel,
        introduce: introduce,
        schoolName: schoolName
      }, function(data) {
        if (data.status === 10200) {
          alert("报名成功");
          location.href = "submit_message";
        } else {
          alert("提交错误，请检查是否有填写错误");
        }
      });
    } else {
      alert("请输入完整信息");
    }
  });

});
