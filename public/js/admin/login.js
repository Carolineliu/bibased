$(function() {
  $("#submit").on('click', function() {
    var adminName = $('#adminName').val();
    var password = $('#passwordName').val();
    if(admin&&password){
    $.get('login/verify', {
        adminName: adminName,
        password: password
      },
      function(data) {
        if (data.status === 10200) {
          location.href = "./home_page";
        } else {
          $(".info").html("用户名或者密码错误");
          $("#password").val("");
        }
      });
    }
    else {
      $(".info").html("请填写完整信息");
    }
  });
});
