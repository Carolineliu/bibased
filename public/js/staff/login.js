$(function() {
  $(".submit").on('click', function() {
    var staffName = $('#staffName').val();
    var password = $('#passwordName').val();
    var schoolName = $("#schoolName").val();
    var error = false;
    if (staff && password && schoolName) {
      $.post('login/confirm', {
          staffName: staffName,
          password: password,
          schoolName: schoolName
        },
        function(data) {
          if (data.status === 10200) {
            location.href = "./home_page";
            error=false;
          } else {
            $(".info").html("用户名或者密码错误");
            $("#password").val("");
            error = true;
          }
        });
    } else {
      $(".info").html("请填写完整信息");
      error = true;
    }
    if (error) {
      $(".info").show();
    } else {
      $(".info").hide();
    }
  });
});
