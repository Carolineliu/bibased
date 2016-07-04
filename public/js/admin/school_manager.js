$(function() {
  $("#addSchool").on("click", function() {
    var schoolId = $(".addschoolId").val();
    var schoolName = $(".addschoolName").val();
    $.post("school_manager/add", {
      schoolId: schoolId,
      schoolName: schoolName
    }, function(result) {
      if (result.status === 10200) {
        alert("添加成功");
        $("tbody").append('<tr>' + '<td>' +
          '<input class="select" type="checkbox" data-name=' + schoolId +
          '>' + '</td>' + '<td>' + schoolId + '</td>' + '<td>' +
          '<input type="text"  class ="schoolName" value =' + schoolName +
          '>' + '</td>' + ' <td>' +
          '<input type = "submit" data-name =' + schoolId +
          ' class = "save"  value="保存">' +
          '</td></tr > "');
      } else if (result.status == 10504) {
        alert("学校编号或者学校名重复");
      } else {
        alert("服务器出错，请稍后再试");
      }
    });
  });


  $(".save").on("click", function() {
    var schoolId = $(this).data("name");
    var parent = $(this).parent().parent();
    var schoolName = $(parent).find(".schoolName").val();
    $.post("school_manager/save", {
        schoolId: schoolId,
        schoolName: schoolName
      },
      function(result) {
        if (result.status === 10200) {
          alert("修改成功");
        } else {
          alert("保存失败，请稍后再试");
        }
      });
  });

  $("#allSelect").on("click", function() {
    var $select = $(".select");
    if ($(this).prop("checked")) {
      $select.prop("checked", true);
    } else {
      $select.prop("checked", false);
    }
  });

  $(".schoolTableHeader .tools").on("click", function() {
    var array = [];
    var checked = $("tbody :checked");
    for (var i = 0; i < checked.length; i++) {
      array.push($(checked[i]).data('name'));
    }

    $.ajax({
      url: "school_manager/delete",
      type: "delete",
      data: {
        array: array
      },
      success: function(result) {
        if (result.status == 10200) {
          checked.parent().parent().remove();
          alert("删除成功");
        } else {
          alert("服务器出了点故障，请稍后再试");

        }
      }
    });







  });


});
