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
  var indexAdd = null;
  $("#btnAddCate").on("click", function () {
    indexAdd = layer.open({
      type: 1,
      area: ["500px", "250px"],
      title: "添加文章分类",
      content: $("#dialog-add").html(),
    });
  });
  $("body").on("submit", "#form-add", function (e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/my/article/addcates",
      data: $(this).serialize(),
      success: function (res) {
        if (res.status !== 0) {
          return layer.msg("新增分类失败！");
        }
        initArtCateList();
        layer.msg("新增分类成功！");
        // 根据索引，关闭对应的弹出层
        layer.close(indexAdd);
      },
    });
  });
  var indexEdit = null;
  $("tbody").on("click", ".btn-edit", function () {
    // 弹出一个修改文章分类信息的层
    indexEdit = layer.open({
      type: 1,
      area: ["500px", "250px"],
      title: "修改文章分类",
      content: $("#dialog-edit").html(),
    });

    var id = $(this).attr("data-id");
    var name = $(this).attr("data-name");
    var alias = $(this).attr("data-alias");
    // console.log(id, name, alias)
    form.val("form-edit", {
      Id: id,
      name: name,
      alias: alias,
    });
    // 发起请求获取对应分类的数据
    // $.ajax({
    //   method: 'GET',
    //   url: '/my/article/cates/' + id,
    //   success: function(res) {
    //     form.val('form-edit', res.data)
    //   }
    // })
  });

});
