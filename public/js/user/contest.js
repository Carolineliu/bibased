$(function() {
  $(".contestsType").on("click", function() {
    var that = $(this);
    that.addClass("open");
    that.siblings().removeClass("open");
  });

  var model = '{{each data as contests}}' +
    '<li class="everyPicture">' +
    '<a href="contest_detail?data={{contests.contestId}}">' +
    '<img src="../../images/slide1.png" />' +
    '<h3>{{contests.contestName}}</h3>' +
    '</a>' + '</li>' + '{{/each}}';

  var length = $(".contestShow ul").data("length");

  $("#page").pagination(length, {
    num_edge_entries: 1,
    num_display_entries: 5,
    items_per_page: 8,
    callback: pageselectCallback,
    prev_text: '< 上一页',
    next_text: '下一页 >',
  });

  function pageselectCallback(page_index) {
    $.post("contest/pagination", {
      data: page_index
    }, function(data) {
      if (data.data.length) {
        $(".contestShow ul").show();
        var render = template.compile(model);
        var html = render(data);
        $(".contestShow ul").empty().append(html);
      } else {
        $(".contestShow ul").hide();
      }
    });
  }

  function pageselectCallbacks(page_index) {
    $.post("contest/selectPagination", {
      data: page_index
    }, function(data) {
      $(".contestShow ul").show();
      var render = template.compile(model);
      var html = render(data);
      $(".contestShow ul").empty().append(html);
    });
  }


  $("#contestContent").on("click", function() {

    var school = $(".schools .open a").html();
    var year = $(".years option:selected").html();
    var data = {
      schoolName: school,
      year: year
    };

    $.post("contest/getTypes", {
      data: data
    }, function(data) {
      if (data.data.length) {
        $("#page").pagination(data.length, {
          num_edge_entries: 1,
          num_display_entries: 5,
          callback: pageselectCallbacks,
          items_per_page: 8,
          prev_text: '<上一页',
          next_text: '下一页 >',
        });
        $(".contestShow ul").show();
        var render = template.compile(model);
        var html = render(data);
        $(".contestShow ul").empty().append(html);
      } else {
        $(".contestShow ul").hide();
      }
    });
  });
});
