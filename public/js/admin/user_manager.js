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


  var model = '{{each data as users}}' +
    '<tr>' + '<td>' + '<input type="checkbox" data-name={{users.userId}}>' +
     '</td>'+'<td>{{users.userId}}</td>' +
    '<td>{{users.userName}}</td>' +
    '<td>{{users.name}}</td>' +
    '<td>{{users.gender}}</td>' +
    '<td>{{users.email}}</td>' +
    '<td>{{users.telephone}}</td>' +
    '</tr>' +
    '{{/each}}';





  $("#page").pagination(length, {
    num_edge_entries: 1,
    num_display_entries: 5,
    callback: pageselectCallback,
    items_per_page: 8,
    prev_text: '< 上一页',
    next_text: '下一页 >',
  });

  function pageselectCallback(page_index) {
    $.post("user_manager/pagination", {
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

    var confirms = confirm("确定要删除这个用户吗?");

    if (confirms) {
      $.ajax({
        url: "user_manager/delete",
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
