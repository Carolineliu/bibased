$(function() {
  $("#allSelect").on("click", function() {
    var $select = $(".select");
    if ($(this).prop("checked")) {
      $select.prop("checked", true);
    } else {
      $select.prop("checked", false);
    }
  });

  $(".tools").on('click', function() {
    var array = [];
    var checked = $("tbody :checked");
    for (var i = 0; i < checked.length; i++) {
      array.push($(checked[i]).data('name'));
    }

    var confirms = confirm("确定要删除这个用户吗?");

    if (confirms) {
      $.ajax({
        url: "viewlist/delete",
        type: "delete",
        data: {
          array: array
        },
        success: function(data) {
          if (data.status === 10200) {
            checked.parent().parent().empty();
          }
        }
      });
    }
  });



});
