// 错误即提示信息
function showMsg(msg, type, time)
{
	if (type == 'success') var color = '#3D8C2E';
	if (type == 'warn') var color = '#D43535'
	var html = '<div style="z-index:999999;width: 100%;height:40px;position: fixed;top: 0px;background-color: ' + color + ';text-align: center;padding-top: 10px;">';
	html += '<span class="font14" style="color: #FFFFFF;">' + msg + '</span></div>';
	$('#tip').append(html);
	setTimeout(function() {
		$('#tip').html('');
	}, time * 1000);
}

// 更换验证码
function changeCode() {
	$("#vrify").attr("src", "/login/checkCode?t=" + new Date().getTime());
}



/*我加的js代码块开始*/
$(".xianchang").on('click',function(){
	$(this).addclass("active");
})