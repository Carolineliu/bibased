$(function() {
  $(".submit").on("click", function() {
    var judgeName = $("#judgeName").val();
    var password = $("#password").val();
    console.log($.cookie("userName"));
    if (judgeName && password) {
      $.get("login/verify", {
        judgeName: judgeName,
        password: password
      }, function(data) {
        if (data.status === 10200) {
          location.href = "./home_page";
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
