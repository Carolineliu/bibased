$(function() {
  $(".dropdown-toggle").on("click", function() {
    $(".dropdown-menu").toggle();
  });
  $(".logout").on("click", function() {
    $.get("logout", function(data) {
      if (data.status === 10200) {
        location.href = "login";
      } else {
        alert("服务器出了点小问题请稍后再试");
      }
    });
  });

});
