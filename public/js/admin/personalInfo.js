$(function() {
  var adminId = 1;
  $.get("personalInfo", {
    adminId: adminId
  }, function(result) {
    // alert(result.personalInfos[0].adminId);
    // $(".adminId").html(result.personalInfos[0].adminId);
  });


});
