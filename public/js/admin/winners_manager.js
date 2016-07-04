$(function() {
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
    '<td>{{contests.contestScore}}</td>' +
    '<td>{{contests.isWin}}</td>' +
    '<td class="deletes" contests-name= {{contests.contestId}}>删除</td>' +
    '<td class="puts" data-name= {{contests.contestId}}>修改</td>' +
    '</tr>' +
    '{{/each}}';


  $(".participatingContent").on("click", function() {
    var school = $(".schools .open a").html();
    var year = $(".years option:selected").html();
    var award = $(".awardType .open a").html();
    var data = {
      school: school,
      year: year,
      award: award
    };
    $.post("winners_manager", {
      data: data
    }, function(data) {
      if (data.data.length) {
        $("table").show();
        $(".noResult").hide();
        $("#releaseWinners").show();
        var render = template.compile(model);
        var html = render(data);
        $("tbody").empty().append(html);
        length = data.data.length;
      } else {
        $("table").hide();
        $(".noResult").show();
        $("#releaseWinners").hide();
      }

    });
  });

  $(".releaseWinners").on("click", function() {
    $.post("winners_manager/release", function(result) {});
  });


});
