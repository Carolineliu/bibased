$(function() {
  $(".userSubmit").on("click", function() {
    var email = $(".inputEmail").val();
    var info = $(".findPasswordInfo");
    $.post("findPassword/findPassword", {
      email: email
    }, function(result) {
      info.show();
      if (result.status == 10200) {
        alert("发送成功，请注意查收邮件");
        location.href="login";
      } else {
        info.html("请检查邮箱是否正确");
      }
    });
  });

});
