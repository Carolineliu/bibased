$(function() {
  $(".navsContent li").on("click", function() {
    var that = $(this);
    that.siblings().removeClass("tag");
    that.addClass("tag");
  });

  var state = $(".state").html();
  if (state == 1) {
    var cookie = $.cookie("userName");
    $(".loginSuccess .welcome").append(cookie);
    $(".loginInfo .settings").append(cookie);
  }

  $(".submit").on("click", function() {
    var userName = $(".userName").val();
    var password = $(".password").val();
    if (userName && password) {
      $.post("login/confirm", {
        userName: userName,
        password: password
      }, function(data) {
        if (data.status === 10200) {
          alert("登录成功");
          window.location.reload();
        } else {
          $(".info").show();
          $(".password").val("");
          $(".info").html("用户名或者密码错误");
        }
      });
    } else {
      $(".info").html("请输入用户名或密码");
    }
  });


  $(".logout").on("click", function() {
    $.ajax({
      url: "logout",
      type: "delete",
      success: function(data) {
        alert(23);

      }
    });
  });




});
