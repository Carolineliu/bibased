$(function() {
  $(".downloadModelContent .downloadPrelim").on("click", function() {
    var that = $(this);
    $.get("logging/downloadPrelim", function(data) {
      if (data.status === 10200) {
        window.open("../a.xlsx", "_blank");
      }
    });
  });

  $(".uploadModelContent .uploadPrelim input[type='file']").on("click", function() {
    var data = $(".uploadPrelim input[type='file']").val();
    if (data) {
      $(".submits").trigger("click");
    }

  });
  $(".downloadModelContent .downloadFinal").on("click", function() {

    $.get("logging/downloadFinal", function(data) {
      if (data.status === 10200) {
        window.open("../b.xlsx", "_blank");

      }


    });

  });

  $(".uploadModelContent .uploadFinal").on("click", function() {
    $.post("logging/uploadFinal", function(data) {
      if (data.status) {
        alert("成绩录入成功");
      }
    });

  });


});
