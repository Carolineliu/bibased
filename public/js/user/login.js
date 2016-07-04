$(function() {
  $(".userSubmit").on("click", function() {
    var userName = $("#userName").val();
    var userPass = $("#userPass").val();
    if (userName && userPass) {
      $.post("login/confirm", {
        userName: userName,
        password: userPass
      }, function(data) {
        if (data.status === 10200) {
          $(".subreg").hide();
          $(".loginSuccess").show();
          location.href = "/";
        } else {
          $(".info").html("用户名或者密码错误");
          $("#password").val("");
        }
      });
    } else {
      $(".info").html("请输入用户名或密码");
    }
  });


});
