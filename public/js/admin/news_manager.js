$(function() {

  $("#allSelect").on("click", function() {
    var $select = $(".select");
    if ($(this).prop("checked")) {
      $select.prop("checked", true);
    } else {
      $select.prop("checked", false);
    }
  });


  $(".contentPanel li").on("click", function() {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });


  $(".release #submit").on("click", function() {
    var newsUrl = $(".newsUrl").val();
    var newsTitle = $(".newsTitle").val();
    $.post("release_news/release", {
      newsUrl: newsUrl,
      newsTitle: newsTitle
    }, function(result) {
      if (result.status === 10200) {
        alert("新闻发布成功");
        $("tbody").append('<tr>' + '<td>' + result.data.newsId + '</td>' +
          '<td>' + newsTitle + '</td>' +
          '<td>' + '<a href=' + newsUrl + '>查看新闻</a>' + '</td>' +
          '<td class="deletes" data-name=' + result.data.newsId + '>' +
          '删除</td>' + '</tr>');
      } else {
        alert("服务器出了点小问题");
      }
    });
  });

  $(".newsTableHeader .delete").on("click", function() {
    var array = [];
    var checked = $("tbody :checked");
    for (var i = 0; i < checked.length; i++) {
      array.push($(checked[i]).data('name'));
    }

    $.ajax({
      url: "news_manager/delete",
      data: {
        newsId: array
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
        url: "news_manager/homePage",
        data: {
          newsId: array
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


  $(".dropdown-menu .becomeNews").on("click", function() {
    var checked = $("tbody :checked");
    var array = [];
    for (var i = 0; i < checked.length; i++) {
      array.push($(checked[i]).data('name'));
    }
    if (array.length) {
      $.ajax({
        url: "news_manager/newsPage",
        data: {
          newsId: array
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
