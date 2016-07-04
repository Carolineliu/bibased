$(function() {
  $(".reset").on("click", function() {
    var oldPass = $("#oldPass").val();
    var newPass = $("#newPass").val();
    var confirmPass = $("#confirmPass").val();
    var error = false;
    var info;
    if (newPass && confirmPass && oldPass) {
      if (newPass == confirmPass) {
        $.post("/update_password/reset", {
          oldPass: oldPass,
          confirmPass: confirmPass
        }, function(result) {
          if (result.status === 10200) {
            error = true;
            alert("修改密码成功");
          } else if (result.status == 10404) {
            info = "原密码有误，请确认";
          } else {
            info = "服务器出错，请稍后再试";
          }
        });
      } else {
        info = "新密码两次输入不一致";
      }
    } else {
      info = "请输入完整信息";
    }
    if (error) {
      $(".info").hide();
    } else {
      $(".info").show().html(info);
    }
  });
});
