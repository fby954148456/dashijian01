$(function () {
  var form = layui.form;

  form.verify({
    nickname: function (value) {
      if (value.length > 6) {
        return "昵称长度必须在 1 ~ 6 个字符之间！";
      }
    },
  });
  initUserInfo();
  function initUserInfo() {
    $.get("/my/userinfo", function (res) {
      if (res.status !== 0) {
        return layer.msg("获取用户信息失败！");
      }
      // console.log(res)
      // 调用 form.val() 快速为表单赋值
      form.val("formUserInfo", res.data);
    });
  }
});
