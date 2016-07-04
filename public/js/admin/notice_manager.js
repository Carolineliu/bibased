$(function() {

  $("#allSelect").on("click", function() {
    var $select = $(".select");
    if ($(this).prop("checked")) {
      $select.prop("checked", true);
    } else {
      $select.prop("checked", false);
    }
  });

  $(".noticeTableHeader .delete").on("click", function() {
    var array = [];
    var checked = $("tbody :checked");
    for (var i = 0; i < checked.length; i++) {
      array.push($(checked[i]).data('name'));
    }

    $.ajax({
      url: "notice_manager/delete",
      data: {
        noticeId: array
      },
      type: "delete",
      success: function(result) {
        if (result.status === 10200) {
          checked.parent().parent().remove();
          alert("删除成功");
        } else {
          alert("删除失败");
        }

      }
    });
  });


  $(".dropdown-menu .becomeHome").on("click", function() {
    var checked = $("tbody :checked");
    var array = [];
    for (var i = 0; i < checked.length; i++) {
      array.push($(checked[i]).data('name'));
    }
    if (array.length) {
      $.ajax({
        url: "notice_manager/homePage",
        data: {
          noticeId: array
        },
        type: "put",
        success: function(data) {
          if (data.status == 10200) {
            alert("设置成功");
          }

        }
      });
    } else {
      alert("抱歉，你没有选中任何新闻");
    }
  });


  $(".dropdown-menu .becomeNotice").on("click", function() {
    var checked = $("tbody :checked");
    var array = [];
    for (var i = 0; i < checked.length; i++) {
      array.push($(checked[i]).data('name'));
    }
    if (array.length) {
      $.ajax({
        url: "notice_manager/newsPage",
        data: {
          noticeId: array
        },
        type: "put",
        success: function(data) {
          if (data.status === 10200) {
            alert("设置成功");
          }
        }
      });
    } else {
      alert("抱歉，你没有选中任何新闻");
    }
  });





});
