$(function() {

  $('#registerInfo').validate({
    rules: {
      username: {
        required: true,
        rangelength: [5, 15],
        remote: {
          url: "register/register",
          type: "get",
          cache: false,
          data: {
            name: function() {
              return $("#userContent").val();
            },
            dataFilter: function(data, type) {
              if (data === 10200)
                return true;
              else
                return false;
            }
          }
        }
      },
      password: {
        required: true,
        rangelength: [6, 30]
      },
      confirmContent: {
        required: true,
        rangelength: [6, 15],
        equalTo: "#passwordContent"
      },
      nameContent: {
        required: true,
        rangelength: [2, 10],
      },
      telContent: {
        required: true,
        isMobile: true
      },
      email: {
        required: true,
        email: true,
        remote: {
          url: "register/isSameEmail",
          type: "get",
          cache: false,
          data: {
            name: function() {
              return $("#emailContent").val();
            },
            dataFilter: function(data, type) {
              if (data === 10200)
                return true;
              else
                return false;
            }
          }
        }
      }
    },
    messages: {
      username: {
        required: "请输入用户名",
        rangelength: "用户名长度在5-15位之间",
        remote: "用户名已存在"
      },
      password: {
        required: "请输入密码",
        rangelength: "密码长度在6-15位之间"
      },
      confirmContent: {
        required: "请再次输入密码",
        rangelength: "确认密码不能小于6个字符",
        equalTo: "两次输入密码不一致不一致"
      },
      nameContent: {
        required: "请输入名字",
        rangelength: "名字输入不合法，请重新输入",
      },
      email: {
        required: "请输入邮箱地址",
        email: "请输入正确的邮箱格式",
        remote: "此邮箱已经注册过了"
      },
      telContent: {
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

  var validator = $("#registerInfo").validate({
    meta: "validate"
  });

  $.validator.addMethod("isMobile", function(value, element) {
    var tel = /13[0-9]{9}/;
    return this.optional(element) || (tel.test(value));
  });

  $("#submit").on('click', function() {
    var userName = $("#userContent").val();
    var password = $("#passwordContent").val();
    var name = $("#nameContent").val();
    var gender = $(".sex:checked").val();
    var telephone = $("#telContent").val();
    var email = $("#emailContent").val();
    if (validator.form()) {
      $.post('register/register', {
          userName: userName,
          password: password,
          name: name,
          gender: gender,
          telephone: telephone,
          email: email
        },
        function(data) {
          if (data.status === 10200) {
            alert("注册成功");
            location.href = "/login";
          } else {
            alert("注册失败");
          }
        });
    }
  });

});
