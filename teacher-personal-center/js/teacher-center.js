$(function(){
	$("#footer_page ul li").on('click',function(){
		$(this).addClass('active').siblings('li').removeClass('active');
	});

	$(".myIndex_topT p span b:contains('否')").css("color","red");
	$(".write_back:contains('未')").css("color","red");
	$(".fensi_contain table tbody tr td:contains('超级会员')").css("color","#0097FF");
})

// 错误即提示信息  提示消息封装
function showMsg(msg, type, time){
	if (type == 'success') var color = '#3D8C2E';
	if (type == 'warn') var color = '#D43535'
		var html = '<div style="z-index:999999;width: 100%;height:40px;position: fixed;top: 0px;background-color: ' + color + ';text-align: center;padding-top: 10px;">';
	html += '<span style="color: #FFFFFF;">' + msg + '</span></div>';
	$('#tip').append(html);
	setTimeout(function() {
		$('#tip').html('');
	}, time * 1000);
}

$("header ul li a").on('click',function(){
	$(this).addClass("active");
	$(this).siblings("li a").removeClass("active");
})


/*体现表单提交*/
$('#tixianSubmit').on('click',function(){
	var name = $("#realName").val();
	var bank=$('#bank').val();
	var cardNumber = $("#cardNumber").val();
	var tixian = $("#tixian").val();
	console.log(name,bank,cardNumber,tixian)
	if (name.length == 0) {
		showMsg('真实姓名不能为空，请输入真实姓名','warn',1.5);
		return false;
	}else if (bank.length == 0) {
		showMsg('开户银行名称不能为空，请输入开户银行名称！','warn',1.5);
		return false;
	}else if(cardNumber.length == 0) {
		showMsg('银行卡号不能为空，请输入正确的银行卡号！','warn',1.5);
		return false;
	}else if(tixian.length == 0){
		showMsg('提现金额不能为空，请输入提现金额！','warn',1.5);
		return false;
	}else{
		$.ajax({
			type:"POST",
			url:"",
			data:{
				"name": name,
				"bank": bank,
				"cardNumber": cardNumber,
				"tixian": tixian
			},
			dataType:"JSON",
			success:function(data){
				showMsg(data,'warn',1.5);
			}
		})
	}
});

/*删除粉丝*/
function fensiDelete(id){
	alert("aaa")
	$.ajax({
		type:"POST",
		url:"",
		data:{
			"id": id
		},
		dataType:"JSON",
		success:function(data){
			showMsg(data,'warn',1.5);
		}
	})
}

/*我的粉丝 加载更多*/
newPag=1;
$('#fensiLoadMore').on('click',function(){
	$.ajax({
		type:"GET",
		url:"/Home/Trend/moreTrends",
		data:{ "p":newPag},
		dataType:"JSON",
		success:function(data){
			var datas=data;
			var statuss= parseInt(datas.status);
			console.log(statuss);
			if (statuss == 0) {
				$('#fensiLoadMore').off('click').html('暂无更多');
			}else{
				$.each(datas.msg,function(){
					var fensiTr= '<tr>'+
					'<td>'+
					'<span>'+
					'<img width="40" class="img-circle" alt="User Avatar" src="https://t.hizliresim.com/njJnNR-s.jpg ">'+
					'</span>'+
					'</td>'+
					'<td>Hendrix</td>'+
					'<td>普通会员</td>'+
					'<td>地址：北京 朝阳</td>'+
					'<td>'+
					'<span>关注 : <b>2</b></span><span>订阅：<b>5</b></span>'+
					'</td>'+
					'<td>'+
					'<button class="btn btn-default parents tablodugmeler pull-right"  lang="yorum" data-id= > 删除</button>'+
					'</td>'+
					'</tr>';

					$('.fensi_contain table tbody').append(fensiTr);
				})
				newPag++;
			}
		}
	})
});

/*接单大厅抢单倒计时*/
var minutes = $( '#set-time' ).val();
var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
	function()
	{
		$(".rush_btn").css("background-image","linear-gradient(#ccc 0%,#ddd 100%)");
		$(".rush_btn").attr("disabled","true")
	}, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	if ( seconds_left >= 0 ) {
		console.log(time_limit);
		days = pad( parseInt(seconds_left / 86400) );
		seconds_left = seconds_left % 86400;

		hours = pad( parseInt(seconds_left / 3600) );
		seconds_left = seconds_left % 3600;

		minutes = pad( parseInt(seconds_left / 60) );
		seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + "：</span><span>" + minutes + "：</span><span>" + seconds + "</span>";

}

}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}


/*立即抢单按钮*/
function subRush(id){
	$(".rush_modal").modal("show");
	/*$.ajax({
		type:"POST",
		url:"",
		data:{ id:id},
		dataType:"",
		success:function(data){
			var datas=data;
			var statuss= parseInt(datas.status);
			console.log(statuss);
			if (statuss == 0) {   //成功
				$(".rush_sucsess").css("display","block")
				window.location.href = "../order-respon.html"
			}if (statuss == 1){  //已被其他人抢
				$(".rush_eroor").css("display","block")
			}else{
				console.log(statuss)
			}
		}
	})*/
}

/*抢单回复*/
$("#subOrderBack").on("click",function(){
	var contain = $("#orderBackText").val();
	console.log(contain);
	/*$.ajax({
		type:"POST",
		url:"",
		data:{
			"": contain
		},
		dataType:"JSON",
		success:function(data){
			showMsg(data,'warn',1.5);
		}
	})*/
})


/*删除有问必答*/
function questionIsdDelete(id){
	alert("aaa")
	/*$.ajax({
		type:"POST",
		url:"",
		data:{
			"id": id
		},
		dataType:"JSON",
		success:function(data){
			showMsg(data,'warn',1.5);
		}
	})*/
}


/*有问必答回复*/
$("#subQuestionBack").on("click",function(){
	var contain = $("#questionBackText").val();
	console.log(contain);
	/*$.ajax({
		type:"POST",
		url:"",
		data:{
			"": contain
		},
		dataType:"JSON",
		success:function(data){
			showMsg(data,'warn',1.5);
		}
	})*/
})

$(".edit_title li").each(function(){
	var new_edit = $(".new_edit");
	var old_edit =$(".old_edit");
	$(this).on('click',function(){
		$(this).addClass("active");
		$(this).siblings("li").removeClass("active");
		if(new_edit.hasClass("active")){
			$(".new_edit-page").css("display","block");
			$(".old_edit-page").css("display","none");
		}else if(old_edit.hasClass("active")){
			$(".old_edit-page").css("display","block");
			$(".new_edit-page").css("display","none");
		}
	})
})

// 账户设置切换
$('.accountSetting_show .accountSetting_List').eq(0).css({'display':'block'});
$('.messageNotification_list .notifierproPlus').eq(0).css({'display':'block'});
$('.accountSetting_tab span').on('click',function(){
	$(this).addClass('active').siblings('span').removeClass('active');
	$('.accountSetting_show .accountSetting_List').eq($(this).index()).css({'display':'block'})
	.siblings('.accountSetting_List').css({'display':'none'});
	$('.messageNotification_list .notifierproPlus').eq($(this).index()).css({'display':'block'})
	.siblings('.notifierproPlus').css({'display':'none'});

})

 var newSuspended = document.getElementById('newSuspended'),
	 bac_top = document.getElementById('bac_top');
	var time = null;
	var pos = 0;
	window.onmousewheel = function(){
		clearInterval(time)
		var sct = document.body.scrollTop||document.documentElement.scrollTop;
			if(sct>=200){
				newSuspended.style.display = "block";
			}else{
				newSuspended.style.display = "block";
			}

	}
	bac_top.onclick = function(){
		function back(){
			var sct = document.body.scrollTop||document.documentElement.scrollTop;
			if(sct<=0){
				clearInterval(time);
			}
			var speed = sct/10;
			sct -= speed;
			document.body.scrollTop = sct;
			document.documentElement.scrollTop = sct;
		}
		time = setInterval(back,1);
		newSuspended.style.display = "block";
	}


$('.dow_app').hover(function(){
	$('.dow_app_p').css({'display':'block'})
},function(){
	$('.dow_app_p').css({'display':'none'})
})





