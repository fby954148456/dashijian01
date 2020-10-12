$(function () {
  // 调用 getUserInfo 获取用户基本信息
  getUserInfo();
});

// 获取用户的基本信息
function getUserInfo() {
  $.ajax({
    method: "GET",
    url: "/my/userinfo",
    success: function (res) {
      console.log(res);
      if (res.status !== 0) {
        return layui.layer.msg("获取用户信息失败！");
      }
    },
  });
}
