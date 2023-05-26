$(document).ready(function() {
    let newOption = $("<option>").val("wmxz").text("渠道一");
    $('.select_option').append(newOption);
    let newOption2 = $("<option>").val("okjx").text("渠道二");
    $('.select_option').append(newOption2)
});

function start() {
    if ($("input").val() != "") {
        let options = $('.select_option option:selected').val();
        let uri = '';
        if (options == '' || options == 'wmxz') {
            uri = '://www.wmxz.wang/admin.php';
        } else {
            uri = '://okjx.cc/';
        }
        if (location.protocol === 'https:') {
            var schedule = 'https'
        } else {
            var schedule = 'http'
        }
        var url = schedule + uri + "?url=" + $("input").val();
        layui.use("layer", function() {
            layer.open({
                type: 2,
                title: "视频播放器",
                scrollbar: false,
                area: ["100%", "100%"],
                content: url
            })
        })
    } else {
        layui.use("layer", function() {
            layer.msg("播放地址不能为空！", {
                icon: 2
            })
        })
    }
}

function show() {
    layui.use("layer", function() {
        var index = layer.open({
            title: "一路陪伴，捐助",
            content: '<span style="display:block;text-align:center;font-size:20px;">支付宝扫一扫</span><img style="display:block;margin:0 auto;height:200px;width:200px;" src="https://xiaoxuan6.github.io/images/donate/alipayimg.jpg"><span style="display:block;font-size:14px;text-align:center;margin-top:10px;">不捐助也可播放，感谢捐助</span>',
            area: "220px",
            scrollbar: false,
            btn: ["直接播放"],
            btnAlign: "c",
            yes: function(index, layero) {
                layer.close(index);
                start()
            }
        })
    })
}