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
    '<td>{{contests.year}}</td>' +
    '<td>{{contests.schoolName}}</td>' +
    '<td>{{contests.contestScore}}</td>' +
    '<td>{{contests.isWin}}</td>' +
    '<td><a href="contest_detail?data={{contests.contestId}}">查看</a>' +'</td>'+
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
    $.post("winner", {
      data: data
    }, function(data) {
      if (data.data.length) {
        $("table").show();
        $(".noResult").hide();
        var render = template.compile(model);
        var html = render(data);
        $("tbody").empty().append(html);
      } else {
        $("table").hide();
        $(".noResult").show();
      }
    });
  });







});
