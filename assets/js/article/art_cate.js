$(function () {
  var form = layui.form;
  var layer = layui.layer;
  initArtCateList();
  function initArtCateList() {
    $.ajax({
      method: "GET",
      url: "/my/article/cates",
      success: function (res) {
        var htmlsrc = template("tpl-table", res);
        $("tbody").html(htmlsrc);
      },
    });
  }
});
