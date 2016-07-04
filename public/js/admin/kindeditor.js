$(function() {

  var editor;
  KindEditor.ready(function(K) {
    editor = K.create('#noticeContent', {
      filterMode: false,
      resizeMode: 0,
      uploadJson: "kindeditor/uploadImage",
      afterCreate: function() { //kindeditor创建后，将编辑器的内容设置到原来的textarea控件里
        this.sync();
      }
    });
    $(document.getElementsByTagName('iframe')[0].contentWindow.document.body).html($("#noticeContent").val());
  });


  var contents = $("#noticeContent").val();

  // $("#form_content").on("click", function() {
  //   var content = editor.html();
  //   $.post("kindeditor/page", {
  //     data: content
  //   }, function(result) {
  //     if (result.status === 10200) {}
  //   });
  // });


  $("#submitButton").on("click", function() {
    var title = $("#noticeTitle").val();
    var type = $("#noticeType option:selected").html();
    type = $.trim(type);
    $.post("kindeditor/release", {
      title: title,
      type: type,
      contents: contents,
      noticeId: $("#getNoticeId").val(),
      content: editor.html()
    }, function(data) {
      if (data.status === 10200) {
        if (type == "新闻") {
          $("#form_msg").html("发表成功，可以去" + "<a href=news_manager>" +
            "新闻管理处" + "</a>" + "，对新闻进行管理");
        } else if (type == "公告") {
          $("#form_msg").html("发表成功，可以去" + "<a href=notice_manager>" +
            "公告管理处</a>" + "，对公告进行管理");
        }
      } else {
        $("#form_msg").html("发表失败，请稍后再试.");
      }
      $("#form_msg").show();
    });
  });








  // $('#form_content').ajaxForm({
  //   dataType: 'json',
  //   beforeSerialize: function($form, options) {
  //       editor.sync();
  //   }
  //     ,
  //     beforeSubmit: function() {
  //       $('#FormSubmitButton').attr('disabled', 'disabled');
  //       $('#form_msg').html("<span class='ajax_processing'>ÕýÔÚÌáœ»Žð°ž£¬ÇëÉÔºò...</span>");
  //       $('#form_msg').show();
  //     },
  //     success: function(json) {
  //       $('#FormSubmitButton').removeAttr('disabled');
  //       if (json.msg) {
  //         $('#form_msg').html("<span class='error_msg'>" + json.msg + "</span>");
  //         $('#form_msg').show();
  //       } else if (json.id) {
  //         ajax_get("/question/show_answer?_answer_id=" + json.id, true, function(data) {
  //           $('.QuestionReplies ul.list').append(data);
  //           editor.html('');
  //           $('.answer_count').html(json.answer_count);
  //         });
  //         $('#form_msg').hide();
  //       }
  //     }
  // });

});
