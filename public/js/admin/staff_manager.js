$(function() {

  $("#allSelect").on("click", function() {
    var $select = $(".select");
    if ($(this).prop("checked")) {
      $select.prop("checked", true);
    } else {
      $select.prop("checked", false);
    }
  });

  var length = $("#page").data("name");

  var model = '{{each data as staffs}}' +
    '<tr>' + '<td>' +
    '<input type="checkbox" class="select" data-name= {{staffId}}>' +
    '</td>' + '<td>{{staffs.staffId}}</td>' +
    '<td>{{staffs.staffName}}</td>' +
    '<td>{{staffs.schoolName}}</td>' +
    '</tr>' +
    '{{/each}}';

  $("#page").pagination(length, {
    num_edge_entries: 1,
    num_display_entries: 5,
    callback: pageselectCallback,
    item_per_page: 8,
    prev_text: '< 上一页',
    next_text: '下一页 >',
  });

  function pageselectCallback(page_index) {
    $.post("staff_manager/pagination", {
      data: page_index
    }, function(data) {
      var render = template.compile(model);
      var html = render(data);
      $("tbody").empty().append(html);
    });
  }

  $(".tools").on('click', function() {
    var array = [];
    var checked = $("tbody :checked");
    for (var i = 0; i < checked.length; i++) {
      array.push($(checked[i]).data('name'));
    }

    var confirms = confirm("确定要删除这个学校用户吗?");

    if (confirms) {
      $.ajax({
        url: "staff_manager/delete",
        type: "delete",
        data: {
          array: array
        },
        success: function(data) {
          if (data.status === 10200) {
            alert("删除成功");
            checked.parent().parent().empty();
          } else {
            alert("服务器出错，请重试");
          }
        }
      });
    }
  });
});
