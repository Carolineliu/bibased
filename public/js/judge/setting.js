$(function() {
  $(".submit").on("click", function() {
    var password = $(".password").val();
    var newPass = $(".newPass").val();
    var passConfirm = $(".passConfirm").val();
    if (password === 123) {
      if (newPass === passConfirm) {
        $.ajax({
          url: "setting/modify",
          data: {
            judgeId:1,
            passConfirm: passConfirm
          },
          success: function(data) {
            if (data.status === 10200) {
              $(".info").html("密码修改成功");
            }
          }
        });
      } else {
        $(".info").html("两次密码输入不一致");
      }

    } else {
      $(".info").html("旧密码输入错误");
    }
  });
});
