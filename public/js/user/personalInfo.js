$(function() {

  $('#personalInfo').validate({
    rules: {
      userName: {
        required: true,
        rangelength: [5, 15]
      },
      name: {
        required: true,
        rangelength: [2, 10],
      },
      telephone: {
        required: true,
        isMobile: true
      }
    },
    messages: {
      userName: {
        required: "请输入用户名",
        rangelength: "用户名长度在5-15位之间",
        remote: "用户名已存在"
      },
      name: {
        required: "请输入名字",
        rangelength: "名字输入不合法，请重新输入",
      },
      telephone: {
        required: "请输入电话",
        isMobile: "请确认电话是否输入错误",
      }
    },
    submitHandler: function(form) {
      $(form).ajaxSubmit();
    },
    errorPlacement: function(error, element) {
      (element.parent().parent()).append(error);
    }
  });

  var validator = $("#personalInfo").validate({
    meta: "validate"
  });

  $.validator.addMethod("isMobile", function(value, element) {
    var tel = /13[0-9]{9}/;
    return this.optional(element) || (tel.test(value));
  });

  $(".saveInfos").on('click', function() {
    var userName = $(".personalInfoUserName").val();
    var name = $(".personalInfoName").val();
    var telephone = $(".personalInfoTel").val();


    if (validator.form()) {
      $.post('personalInfo/save', {
          userName: userName,
          name: name,
          telephone: telephone
        },
        function(data) {
          if (data.status === 10200) {
            alert("修改信息成功");
          } else {
            alert("服务器出了点问题，请稍后再试");
          }
        });
    }

  });

});






$(".saveInfos").on("click", function() {
  var userName = $(".personalInfoUserName").val();
  var name = $(".personalInfoName").val();
  var tel = $(".personalInfoTel").val();
  $.ajax({
    url: "personalInfo/save",
    type: "put",
    data: {
      userName: userName,
      name: name,
      email: email,
      tel: tel
    },
    success: function(data) {


    }
  });

});
