$(function() {
  var length = $("#page").data("name");
  console.log(length);

  $(".contestsType").on("click", function() {
    var that = $(this);
    that.addClass("open");
    that.siblings().removeClass("open");
  });


  var model = '{{each data as contests}}' +
    '<tr>' +
    '<td>{{contests.contestId}}</td>' +
    '<td>{{contests.contestName}}</td>' +
    '<td>{{contests.leader}}</td>' +
    '<td>{{contests.studentCount}}</td>' +
    '<td>{{contests.tutor}}</td>' +
    '<td>{{contests.year}}</td>' +
    '<td>{{contests.schoolName}}</td>' +
    '<td>{{contests.prelim}}</td>' +
    '<td>{{contests.final}}</td>' +
    '<td>{{contests.isWin}}</td>' +
    '<td class="deletes" data-name= {{contests.contestId}}>删除</td>' +
    '<td class="puts" data-name= {{contests.contestId}}>修改</td>' +
    '</tr>' +
    '{{/each}}';


  $("#page").pagination(length, {
    num_edge_entries: 1,
    num_display_entries: 5,
    callback: pageselectCallback,
    items_per_page: 8,
    prev_text: '<上一页',
    next_text: '下一页 >',
  });

  function pageselectCallback(page_index) {
    $.post("contest_manager/pagination", {
      data: page_index
    }, function(data) {
      var render = template.compile(model);
      var html = render(data);
      $("tbody").empty().append(html);
    });
  }


  function pageselectCallbacks(page_index) {
    $.post("contest_manager/selectPagination", {
      data: page_index
    }, function(data) {
      $("#page").show();
      $("table").show();
      $(".noResult").hide();
      var render = template.compile(model);
      var html = render(data);
      $("tbody").empty().append(html);
    });
  }

  $(".participatingContent").on("click", function() {
    var school = $(".schools .open a").html();
    var year = $(".years option:selected").html();
    var data = {
      school: school,
      year: year,
    };
    $.post("contest_manager", {
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
      } else {
        $("table").hide();
        $(".noResult").show();
        $("#page").hide();
      }
    });
  });

});
