$(function(){
	// 公共头部效果
	$('.newmax_navList ul li').on('click',function(){
		$(this).addClass('active').siblings('li').removeClass('active');
	})
	// 点赞排行
	$('.timeRTab div').eq(0).css({'display':'block'});
	$('.ReadingList .timeRTab div').eq(0).css({'display':'block'});
	$(".teacherViewRTab span").eq(0).css({'borderBottomColor': '#F31111','color': '#F31111'});
	$(".ReadingList .teacherViewRTab span").eq(0).css({'borderBottomColor': '#F31111','color': '#F31111'});

	 	$(".teacherViewRTab span").click(function(){
		 	$(this).css({'borderBottomColor': '#F31111','color': '#F31111'})
		 	.siblings('span').css({'borderBottomColor': '#ffffff','color': '#333333'})
	      	var spaneq=$(this).index();
	    	$(this).parents('.teacherViewRHeadline').siblings('.timeRTab')
	    		   .children().eq(spaneq).css({'display':'block'})
	    		   .siblings('div').css({'display':'none'});
     	})
     // 点击加载
     newPag=1;
     $('.newTeacherMore').on('click',function(){

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
         		$('.newTeacherMore').off('click').html('暂无更多');
         	}else{
         		$.each(datas.msg,function(){
         		// console.log(nickname);
         		//var aa="{:U('News/newsContent')}";
         		var star_img = parseInt(this.favcomment);
         		var aa="trendContent";
         		var naa=aa.replace(".html","");
         		var strli="<li>"+
         		'<div class="ViewListTop">'+'<a href="'+naa+'/id/'+this.trend_id+'.html">'+this.title+'</a></div>'+
										'<div class="ViewListMid">'+this.trends+'</div>'+
										'<div class="ViewListBtm">'+
											'<span class="newTeacherImg"><img src="'+this.icon+'"></span>'+
											'<span class="newTeacherName">'+this.nickname+'</span>'+
											'<span class="newTeacherTitles">'+this.job+'</span>'+
											'<span class="newTeacherRating"><img src="/Public/Home/my/images/star-'+star_img+'.png"></span>'+
											'<span class="newTeacherGrade">5.0</span>'+
											'<span class="newTeacherTime">'+this.addtime+'</span>'+
										'</div>'+
								"</li>";
						$('.teacherViewList').append(strli);


         	})
         	newPag++;
         	}

         }



})

});

//订阅选择时长
$('.new_long').eq(2).css({'color':'#ffffff','background':'#EF5F6B'});
$('.new_long').eq(2).children('.new_mum').css({'color':'#ffffff'});
$('.new_long').eq(2).children('.new_gold').css({'color':'#ffffff'});
$('.new_long').on('click',function(){
	$(this).css({'color':'#ffffff','background':'#EF5F6B'})
	.siblings('.new_long').css({'color':'#333333','background':'#D8D8D8'});
	$(this).children('.new_mum').css({'color':'#ffffff'});
	$(this).children('.new_gold').css({'color':'#ffffff'});
	$(this).siblings('.new_long').children('.new_mum').css({ 'color': '#333333'});
	$(this).siblings('.new_long').children('.new_gold').css({ 'color': '#333333'});
	$(this).addClass('active').siblings('.new_long').removeClass('active');
	var pay_glod=$(this).children('.new_gold').html();
	// pay_glod.replace('金币','')
	$('.pay_gold').html(pay_glod.replace('金币',''));
})
// 关注
// 日周月切换
$('.DataExhibit .new_chart').eq(0).css({'display':'block'});
$('.PublicP').css({'display':'block'});
$('.chartsTab span').on('click',function(){
	var charts=$(this).index();
	$('.DataExhibit .new_chart').eq(charts).css({'display':'block'}).siblings('.new_chart').css({'display':'none'});


})
// 舆情新闻列表加载更多
 	var yuq_news=1;
     $('.yuq_newsListMore').on('click',function(){
     	// $.ajax({
     	//   type:"GET",
      //     url:"https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=15858869428",
      //     data:{ "page":yuq_news},
      //     dataType:"JSONP",
      //    success:function(data){
// var data={"status":1,"0":[{"id":"962703","newsId":"eef3b95547f8376cb87f6de6b75d1391","heatIndex":"95","title":"\u4e03\u661f\u8857\u9053\u6b8b\u75be\u4eba\u5b66\u4e60\u7535\u5b50\u5546\u52a1","upTime":"2017-09-27 08:00:28","srcName":"\u5609\u5174\u65e5\u62a5", "bullFlg":"3","content":"...","stocks":[{ "PctChange":"0","codeName":"\u4e2d\u94a2\u56fd\u9645","ROW_NUMBER":"1"},{"PctChange":"0.002","codeName":"\u56fd\u680b\u5efa\u8bbe","ROW_NUMBER":"2"}], "source_site":"\u5609\u5174\u65e5\u62a5"},{"id":"962702","newsId":"5e4fb478ca49403f127c2f06a54e2493","heatIndex":"100","title":"\u9a6c\u4e91\u674e\u5609\u8bda\u7275\u624b:\u6e2f\u7248\u652f\u4ed8\u5b9d\u5c06\u7531\u8682\u8681\u91d1\u670d\u3001\u957f\u6c5f\u548c\u8bb0\u5171\u540c\u8fd0\u8425","upTime":"2017-09-27 08:02:39","srcName":"\u4eca\u65e5\u7206\u70b9","bullFlg":"3","content":"...","stocks":[{"PctChange":"0","codeName":"\u4e2d\u94a2\u56fd\u9645","ROW_NUMBER":"1"},{"PctChange":"0.002","codeName":"\u56fd\u680b\u5efa\u8bbe","ROW_NUMBER":"2"}],"source_site":"\u4eca\u65e5\u7206\u70b9"},{"id":"962701","newsId":"579a7749d4ef5805ff358078cef547d3","heatIndex":"100","title":"2017-2022\u5e74\u5927\u7406\u5e02\u623f\u5730\u4ea7\u884c\u4e1a\u5e02\u573a\u8c03\u7814\u62a5\u544a","upTime":"2017-09-27 08:02:31","srcName":"\u7b2c\u4e00\u7f51","bullFlg":"3","content":"...","stocks":[{"PctChange":"0","codeName":"\u4e2d\u94a2\u56fd\u9645","ROW_NUMBER":"1"},{"PctChange":"0.002","codeName":"\u56fd\u680b\u5efa\u8bbe","ROW_NUMBER":"2"}],"source_site":"\u7b2c\u4e00\u7f51"},{"id":"962700","newsId":"8d9dc1dc27beed20fed01ef5d15220b9","heatIndex":"93","title":"\u7c89\u9edb\u795b\u6591\u7f8e\u5bb9\u53e3\u670d\u6db2\u771f\u7684\u5047\u7684-\u6548\u679c\u5982\u4f55|\u63ed\u79d8\u66dd\u5149|\u836f\u6548\u600e\u4e48\u6837","upTime":"2017-09-27 08:02:00","srcName":"\u4e2d\u5173\u6751\u79d1\u6280\u56ed\u533a","bullFlg":"3","content":"...","stocks":[{"PctChange":"0","codeName":"\u4e2d\u94a2\u56fd\u9645","ROW_NUMBER":"1"},{"PctChange":"0.002","codeName":"\u56fd\u680b\u5efa\u8bbe","ROW_NUMBER":"2"}],"source_site":"\u4e2d\u5173\u6751\u79d1\u6280\u56ed\u533a"},{"id":"962699","newsId":"42c2d9ae8c200d963cc438daa8a0eb9e","heatIndex":"93","title":"\u6295\u8d44\u5bb6\u5fc5\u76c8\u4e3b\u529b\u76d1\u63a7\u7cfb\u7edf\u30fb\u80a1\u7968 1132","upTime":"2017-09-27 08:01:33","srcName":"\u7b2c\u4e00\u7f51","bullFlg":"1","content":"...","stocks":[{"PctChange":"0","codeName":"\u4e2d\u94a2\u56fd\u9645","ROW_NUMBER":"1"},{"PctChange":"0.002","codeName":"\u56fd\u680b\u5efa\u8bbe","ROW_NUMBER":"2"}],"source_site":"\u7b2c\u4e00\u7f51"},{"id":"962698","newsId":"162437a43350727cf491aab22b793bf7","heatIndex":"101","title":"\u8001\u592a\u63a9\u62a4\u5973\u513f\u78b0\u74f7\u76d1\u63a7\u89c6\u9891 \u4e03\u65ec","upTime":"2017-09-27 08:01:33","srcName":"\u5317\u7f51","bullFlg":"3","content":"...","stocks":[{"PctChange":"0","codeName":"\u4e2d\u94a2\u56fd\u9645","ROW_NUMBER":"1"},{"PctChange":"0.002","codeName":"\u56fd\u680b\u5efa\u8bbe","ROW_NUMBER":"2"}],"source_site":"\u5317\u7f51"},{"id":"962697","newsId":"5184e064ccbcc7df599420a7f903f69c","heatIndex":"97","title":"\u82f1\u7279\u5c14\u6b63\u5728\u7814\u53d1\u795e\u7ecf\u5143AI\u5904\u7406\u5668 \u4f1a\u5b66\u4e60\u66f4\u667a\u80fd","upTime":"2017-09-27 08:01:24","srcName":"\u597d\u4e70\u57fa\u91d1\u7f51","bullFlg":"3","content":"...","stocks":[{"PctChange":"0","codeName":"\u4e2d\u94a2\u56fd\u9645","ROW_NUMBER":"1"},{"PctChange":"0.002","codeName":"\u56fd\u680b\u5efa\u8bbe","ROW_NUMBER":"2"}],"source_site":"\u597d\u4e70\u57fa\u91d1\u7f51"},{"id":"962696","newsId":"a905c1523bb7737e5ca2dcce3bce3e5c","heatIndex":"99","title":"6\/8\u5168\u9762\u5c4f\u6210\u667a\u80fd\u624b\u673a\u65b0\u5ba0\uff0c\u4f46\u5c4f\u540e\u7684\u5dee\u5f02\u624d\u662f\u7126\u70b9\u3010\u84dd\u9cb8TMT11\u5c0f\u65f6\u524d\u3011","upTime":"2017-09-27 08:00:43","srcName":"\u4fe1\u878d\u8d22\u5bcc","bullFlg":"3","content":"...","stocks":[{"PctChange":"0","codeName":"\u4e2d\u94a2\u56fd\u9645","ROW_NUMBER":"1"},{"PctChange":"0.002","codeName":"\u56fd\u680b\u5efa\u8bbe","ROW_NUMBER":"2"}],"source_site":"\u4fe1\u878d\u8d22\u5bcc"}]}

         	// console.log(data);
         	// $.each(data[0],function(){
         		// console.log(this);
         		// console.log(this.title);
         		var  yuq_newsdl='<div class="YQnewList">'+
			 			'<dl>'+
			 				'<dd class="hotOrange">'+
                         		'<p>'+this.heatIndex+'</p>'+
								'<p>热度指数</p>'+
							'</dd>'
			 				'<dt>'+this.title+'</dt>'+
			 				'<dt>'+this.content+'</dt>'+
			 				'<dt>'+
			 					'<span class="newTop">热度指数：2735</span>'+
			 					'<span class="newTime">2017-7-7 15:00 迈视网</span>'+
			 				'</dt>'+
			 			'</dl>'+
			 			'<div class="stockIndex">'+
			 				'<p class="bull">中国平安 10.00%</p>'+
			 				'<p class="badNews">科大讯飞 9.11%</p>'+
			 			'</div>'+
			 		'</div>';
						$('.yuq_newsListMore').before(yuq_newsdl);


         	// })
         	yuq_news++ ;
         	// console.log(yuq_news);
         // }

// })

});
// 舆情切换
$('.yuqTabList').eq(0).css({'display':'block'});
$('.yuqTab span').on('click',function(){
	$('.yuqTabList').eq($(this).index()).css({'display':'block'})
	.siblings('.yuqTabList').css({'display':'none'});
	$('.RDnewListMore').css({'display':'block'})
	.siblings('.dissertation').css({'display':'none'});
})
// 7x24小时消息切换
$('.tab7X24H span').on('click',function(){
	$(this).addClass('active').siblings('span').removeClass('active');
})
//异动和财经切换
// $('.tab7X24List').eq(0).css({'display':'block'});
// $('.tab7X24H span').on('click',function(){
// 	$('.tab7X24List').eq($(this).index()).css({'display':'block'})
// 	.siblings('.tab7X24List').css({'display':'none'});
// })
// 热点分类
// $('.RDtab span').eq(0).on('click',function(){
// 	$('.HQ').parents('dl').css({'display':'block'});
// 	$('.RD').parents('dl').css({'display':'none'});
// 	$('.HQmore').css({'display':'block'}).siblings('.dissertation').css({'display':'none'});
// })
// $('.RDtab span').eq(1).on('click',function(){
// 	$('.RD').parents('dl').css({'display':'block'});
// 	$('.HQ').parents('dl').css({'display':'none'});
// 	$('.RDmore').css({'display':'block'}).siblings('.dissertation').css({'display':'none'});

// })
// 聊天大厅选项
$('.chatHeaderR').on('click',function(){
	if ($('.chatTab').hasClass('chatTaShow')) {
		$('.chatTab').removeClass('chatTaShow');
	}else{
		$('.chatTab').addClass('chatTaShow');
	}
})
// 联系人和聊天记录切换
$('.myChat_tab .linkman').on('click',function(){
	$(this).css({
		"backgroundImage":"url(	img/group@1x.png)",
		"borderColor":"#11418E"
	}).siblings('.chattingRecords').css({
		"backgroundImage":"url(	img/chatlineun@1x.png)",
		"borderColor":"#f7f7f7"
	})
})
$('.myChat_tab .chattingRecords').on('click',function(){
	$(this).css({
		"backgroundImage":"url(	img/chatline@1x.png)",
		"borderColor":"#11418E"
	}).siblings('.linkman').css({
		"backgroundImage":"url(	img/groupun@1x.png)",
		"borderColor":"#f7f7f7"
	})
})
$('.myChat_tab div').on('click',function(){
	$('.ContactAndChat_List').eq($(this).index()).css({
		'display':'block'
	}).siblings('.ContactAndChat_List').css({
		'display':'none'
	})
})
// 联系人列表伸缩
$('.myContactsList .mylistLine').unbind('click').on('click',function(){
	if ($(this).hasClass('show')) {
		$(this).next('ul').slideUp("slow");
		$(this).removeClass('show');
		$(this).css({
			"background":"#f5f5f5 url(img/xialaoff@1x.png)no-repeat 10px 12px"
		})
	}else{
		$(this).addClass('show');
		$(this).next('ul').slideDown("slow");
		$(this).css({
			"background":"#f5f5f5 url(img/xiala@1x.png)no-repeat 10px 16px"
		})
	}
})
// 单击列表效果
$('.ContactAndChat_List li').unbind('click').on('click',function(){
	$(this).css({
		'background':'#F0F0F0'
	}).siblings('li').css({
		'background':'#FFFFFF'
	})
})
$('.JoiningHall li').unbind('click').on('click',function(){
	$(this).css({
		'background':'#F0F0F0'
	}).siblings('li').css({
		'background':'#FFFFFF'
	});
	$('.teacherCalledList li').css({
		'background':'#FFFFFF'
	});
// 获取相应聊天数据
$('.chatShowList li').remove();
var strchatList='<li class="showListLeft">'+
										'<dl>'+
											'<dd><img src="img/tou2@1x.png"></dd>'+
											'<dt>'+
												'<span>硕硕</span>'+
												'<span>厅主</span>'+
											'</dt>'+
											'<dt>'+
												'<p>这支股票目前来看还是不错的，建议逢低适当12.80元左右可以考虑出手。这支股票目前来看还是不错的，建议逢低适当12.80元左右可以考虑出手。这支股票目前来看还是不错的，建议逢低适当12.80元左右可以考虑出手。这支股票目前来看还是不错的，建议逢低适当12.80元左右可以考虑出手。这支股票目前来看还是不错的，建议逢低适当12.80元左右可以考虑出手。</p>'+
											'</dt>'+
										'</dl>'+
									'</li>'+
									'<li class="pullTime">14：36</li>'+
									'<li class="showListRight">'+
										'<dl>'+
											'<dd><img src="img/Oval2@1x.png"></dd>'+
											'<dt>'+
												'<p>刘老师您好，帮忙看看这支票，现在处于犹豫的状态，是否该持仓呢？</p>'+
											'</dt>'+
										'</dl>'+
									'</li>'+
									'<li class="pullTime">14：36</li>'+

									'<li class="showListRight">'+
										'<dl>'+
											'<dd><img src="img/Oval2@1x.png"></dd>'+
											'<dt>'+
												'<p>刘老师您好，帮忙看看这支票，现在处于犹豫的状态，是否该持仓呢？</p>'+
											'</dt>'+
										'</dl>'+
									'</li>'+
									'<li class="pullTime">14：36</li>'+

									'<li class="showListRight">'+
										'<dl>'+
											'<dd><img src="img/Oval2@1x.png"></dd>'+
											'<dt>'+
												'<p>刘老师您好，帮忙看看这支票，现在处于犹豫的状态，是否该持仓呢？</p>'+
											'</dt>'+
										'</dl>'+
									'</li>'+
									'<li class="pullTime">14：36</li>';
									$('.chatShowList').append(strchatList);

// 本地测试
// var thisId=$('this').attr('id');
// $.ajax({
// 		  type:"POST",
//           url:"/Home/Trend/subscribeTrend",
//           data:{ "thisid":thisId},
//           dataType:"JSON",
//          success:function(data){
//          	// console.log(data.msg);
//          	$('.chatShowList li').remove();
//          	// 数据循环开始
//          		var strchatList='<li class="showListLeft">'+
// 										'<dl>'+
// 											'<dd><img src="img/tou2@1x.png"></dd>'+
// 											'<dt>'+
// 												'<span>宋军</span>'+
// 												'<span>厅主</span>'+
// 											'</dt>'+
// 											'<dt>'+
// 												'<p>这支股票目前来看还是不错的，建议逢低适当12.80元左右可以考虑出手。这支股票目前来看还是不错的，建议逢低适当12.80元左右可以考虑出手。这支股票目前来看还是不错的，建议逢低适当12.80元左右可以考虑出手。这支股票目前来看还是不错的，建议逢低适当12.80元左右可以考虑出手。这支股票目前来看还是不错的，建议逢低适当12.80元左右可以考虑出手。</p>'+
// 											'</dt>'+
// 										'</dl>'+
// 									'</li>'+
// 									'<li class="pullTime">14：36</li>'+
// 									'<li class="showListRight">'+
// 										'<dl>'+
// 											'<dd><img src="img/Oval2@1x.png"></dd>'+
// 											'<dt>'+
// 												'<p>刘老师您好，帮忙看看这支票，现在处于犹豫的状态，是否该持仓呢？</p>'+
// 											'</dt>'+
// 										'</dl>'+
// 									'</li>'+
// 									'<li class="pullTime">14：36</li>'+

// 									'<li class="showListRight">'+
// 										'<dl>'+
// 											'<dd><img src="img/Oval2@1x.png"></dd>'+
// 											'<dt>'+
// 												'<p>刘老师您好，帮忙看看这支票，现在处于犹豫的状态，是否该持仓呢？</p>'+
// 											'</dt>'+
// 										'</dl>'+
// 									'</li>'+
// 									'<li class="pullTime">14：36</li>'+

// 									'<li class="showListRight">'+
// 										'<dl>'+
// 											'<dd><img src="img/Oval2@1x.png"></dd>'+
// 											'<dt>'+
// 												'<p>刘老师您好，帮忙看看这支票，现在处于犹豫的状态，是否该持仓呢？</p>'+
// 											'</dt>'+
// 										'</dl>'+
// 									'</li>'+
// 									'<li class="pullTime">14：36</li>';
// 									$('.chatShowList').append(strchatList);

//          	// 数据循环结束
//          },
//          error:function(data){
//          	alert('暂时无法拉取数据!');
//          }
// 	})


});

$('.teacherCalledList li').unbind('click').on('click',function(){
	$(this).css({
		'background':'#F0F0F0'
	}).siblings('li').css({
		'background':'#FFFFFF'
	});
	$('.JoiningHall li').css({
		'background':'#FFFFFF'
	});
});
// 消息免打扰
$('.hallOperation .turn').on('click',function(){
	if($(this).hasClass('on')){
		$(this).removeClass('on').css({
			"background":"url(img/off@1x.png)"
		});
	}else{
		$(this).addClass('on').css({
			"background":"url(img/on@1x.png)"
		})
	}
})
// x
$('.hallSetHead span').on('click',function(){
	$(this).parents('.zIndexs').css({
		'z-index':'-10'
	})
})
$('.logout').on('click',function(){
	$(this).parents('.zIndexs').css({
		'z-index':'-10'
	})
});
$('.chatTab p').eq(1).on('click',function(){
	$('.hallSet').css({
		'z-index':'10'
	})
	$('.hallSet').siblings('.zIndexs').css({
		'z-index':'-10'
	})
	$(this).parent().removeClass('chatTaShow');
});
$('.DThistoryList').on('click',function(){
	$('.hallChatList').css({
		'z-index':'10'
	})
	$('.hallChatList').siblings('.zIndexs').css({
		'z-index':'-10'
	})
});

$('.chatTab p').eq(0).on('click',function(){
	$('.personList').css({
		'z-index':'10'
	})
	$('.personList').siblings('.zIndexs').css({
		'z-index':'-10'
	})
	$(this).parent().removeClass('chatTaShow');
});

// 发送消息给老师
$('.chatPull .pullR').unbind('click').on('click',function(){
	if ($('.chatBox').val()== '') {
		alert('消息不能为空！')
	}else{
		var myChat=$('.chatBox').val()
		console.log(myChat)
		var charts='<li class="showListRight">'+
					'<dl>'+
						'<dd><img src="img/Oval2@1x.png"></dd>'+
						'<dt>'+
							'<p>'+myChat+'</p>'+
						'</dt>'+
					'</dl>'+
				'</li>'+
				'<li class="pullTime">14：36</li>';
				$('.chatShowList').append(charts);
				$('.chatBox').val('');
				$('.chatShowList').scrollTop( $('.chatShowList')[0].scrollHeight );
	}
});

// 大厅人员点击效果
$('.personS ul li').on('click',function(){
	$(this).css({
		'background':'#F0F0F0'
	}).siblings('li').css({
		'background':'#FFFFFF'
	});
})
//搜索
$('#new_search').on('click',function(){
	var searchIpt=$('#new_searchTxt').val()
	if (searchIpt=='') {
		showMsg('请输入你要搜索的内容关键字','warn',1.5);
		return false;
	}else if( searchIpt.length> 50){
		showMsg('你输入的内容过多','warn',1.5);
		return false;
	}
})
// 订阅
$('#new_Dy #ensure').on('click',function(){
	var teacherId=$('.newDY').attr('teacher');
	var duration=$('.dy_time .active .new_mum').html();
	var gold=$('.pay_gold').html();
	$.ajax({
		   type:"POST",
          url:"/Home/Trend/subscribeTrend",
          data:{ "teachers":teacherId,
          		 "time":duration,
          		 "glod":gold
      			},
          dataType:"JSON",
         success:function(data){
         	// console.log(data.msg);
         }
	})

})
// 舆情热点切换
$('.yuqTab span').on('click',function(){
	$(this).addClass('active').siblings('span').removeClass('active');
});
// 曲线图切换
$('.chartsTab span').on('click',function(){
	$(this).addClass('active').siblings('span').removeClass('active');
})
// 清屏
$('.hallOperation p').eq(1).on('click',function(){
	$('.chatShowList li').remove();
})

// 个人中心功能列表
// $('.functionList li').eq(0).css({'color':'#E01937'}).siblings('li').css({'color':'#333333'});
$('.functionList li').on('click',function(){
	$(this).addClass('active').siblings('li').removeClass('active');
	// $(this).siblings('dl').find('dd').css({'color':'#333333'});
});

$('.sed_list dd').on('click',function(){
	$(this).css({'color':'#E01937'}).siblings('dd').css({'color':'#333333'});
	$(this).parents('dl').siblings('li').css({'color':'#333333'});
	$(this).parents('dl').siblings('dl').children('dd').css({'color':'#333333'});
});
$('.personalCenterList').eq(0).css({'display':'block'});
$('.myIndex_topT-R').on('click',function(){
	$('.functionList li').eq(1).css({'color':'#E01937'}).siblings('li').css({'color':'#333333'});
})
// 切换页码
    $('#pagefirst').nextUntil('#pagelast').click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
    });
    $('#pagefirst').click(function(){
        $(this).siblings("li").removeClass("active");
    })
    $('#pagelast').click(function(){
        $(this).siblings("li").removeClass("active");
    })
// 选择充值面额
$('.pag_tab').on('click',function(){
	$(this).css({"background":" url(img/jin.png) no-repeat"}).addClass('active')
	.siblings('.pag_tab').css({"background":" url(img/jinhui.png) no-repeat"}).removeClass('active');
	var cost=$(this).children('.cost').html();
	$('.amountPayable').html(cost.replace('￥',''));
});
$('.myChoose').focus(function(){
	$('.amountPayable').html('0.00');
	$('.pag_tab').css({"background":" url(img/jinhui.png) no-repeat"}).removeClass('active');
});
$('.myChoose').blur(function(){
	var mycost= $(this).val();
	if (mycost%10==0&&mycost !== '') {
		$('.amountPayable').html(mycost+'.00');
		$('.pag_tab').css({"background":" url(img/jinhui.png) no-repeat"}).removeClass('active');
	}else if(mycost == ''){
		showMsg('对不起！充值数量不能为空','warn',1.5);
	}else{
		showMsg('对不起！请你输入10或10的倍数','warn',1.5);
	}
});
$('.Confirm_payment_button').on('click',function(){
	var enterNum=$('.amountPayable').html();
	console.log(enterNum);
	if (enterNum=='0.00') {
		showMsg('对不起！请输入正确充值数量','warn',1.5);
	}else{
		showMsg('成功','success',1.5);
	}
})
// 进度条
var paWid=$('.progress').width();
var SumOfConsumption=parseInt( $('.SumOfConsumption').html());
var wid3=paWid/3;
var px1,w1;
if (0  <= SumOfConsumption&&SumOfConsumption <1200) {
	 px1=wid3/1200;
	 w1=SumOfConsumption*px1;
	$('.progress-bar').width(w1);
	$('.consumptionInformation').css({'left':w1});
	$('.Member_level_display').html('普通会员');
	$('.Grade_gap_amount').html(1200-SumOfConsumption+'元');
}else if (1200 <= SumOfConsumption&&SumOfConsumption <2800) {
	 px1=wid3/1600;
	 w1=(SumOfConsumption-1200)*px1;
	$('.progress-bar').width(w1+228.66666666666666);
	$('.consumptionInformation').css({'left':w1+228.66666666666666});
	$('.Member_level_display').html('专属会员');
	$('.Grade_gap_amount').html(2800-SumOfConsumption+'元');
}else if(2800 <= SumOfConsumption&&SumOfConsumption <4980){
	 px1=wid3/2180;
	 w1=(SumOfConsumption-2800)*px1;
	$('.progress-bar').width(w1+(228.66666666666666*2));
	$('.consumptionInformation').css({'left':w1+(228.66666666666666*2)});
	$('.Member_level_display').html('超级会员');
	$('.Grade_gap_amount').html(4980-SumOfConsumption+'元');
}else{
	// showMsg('已经达到最高等级','success',1.5);
	$('.progress-bar').width(686);
	$('.consumptionInformation').css({'left':686});
	$('.Member_level_display').html('至尊会员');
	$('.Grade_gap_amount').parent('li').html('<span class="Grade_gap_amount">恭喜您！您已是最高等级会员</span>');
	$('.Grade_gap_amount').css({'marginLeft':0})
}


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
// 系统消息查看全文
$('.systemMsg').css({'display':'none'});
$('.Operation .lookAll').on('click',function(){
	if ($(this).parent('.Operation').siblings('.systemMsg').hasClass('active')) {
		$(this).parent('.Operation').siblings('.systemMsg').removeClass('active').css({'display':'none'});
		$(this).html('查看全文');
	}else{
		$(this).parent('.Operation').siblings('.systemMsg').addClass('active').css({'display':'block'});
		$(this).html('收起全文');
	}
})


// 错误即提示信息  提示消息封装
function showMsg(msg, type, time)
{
	if (type == 'success') var color = '#3D8C2E';
	if (type == 'warn') var color = '#D43535'
	var html = '<div style="z-index:999999;width: 100%;height:40px;position: fixed;top: 0px;background-color: ' + color + ';text-align: center;padding-top: 10px;">';
	html += '<span style="color: #FFFFFF;">' + msg + '</span></div>';
	$('#tip').append(html);
	setTimeout(function() {
		$('#tip').html('');
	}, time * 1000);
}

// 提交评论老师
$('.evaluate').on('click',function(){
	$("#evaluate").modal("show");
})
$('.evaluateSubmit').on('click',function(){
	var getStar=$('#star ul .on').length;
	var youevaluate=$('.youevaluate').val();
	if (getStar==0) {
		showMsg('您没有进行评分不能提交','warn',1.5);
		return false;
	}else if (youevaluate.length > 100) {
		showMsg('对不起您输入的字数过多','warn',1.5);
		return false;
	}else{
		var teacherId=$('#evaluate .modal-title').attr('id');
		$.ajax({
		   type:"POST",
          url:"/Home/Trend/subscribeTrend",
          data:{
          	"teachers":teacherId,
          	"evaluate":youevaluate,
          	"star":getStar
          },
          dataType:"JSON",
         success:function(data){
         	showMsg(data,'warn',1.5);
         	$("#evaluate").modal("hide");
         }
	})
	}
});
$('.haveEvaluation').on('click',function(){
	showMsg('您已经评价过了！','warn',1.5);
})
//
// 互动消息加载更多
// var upEvaluatePage=1;
// $('.upEvaluate').on('click',function(){
//      	$.ajax({
//      	  type:"GET",
//           url:"/Home/Newtest/moreTrends",
//           data:{ "p":upEvaluatePage},
//           dataType:"JSON",
//          success:function(data){
// 		 $.each(datas.msg,function(){
//          		var evaluateStr='<li class="myQuestion">我的提问:<span>战狼2大火北京文化股票还能涨吗?</span><li>'+
// 								'<img class="avatar-img techear-go-info" src="http://1.viki.io/a/ph/avatar_profile-acc6c5a5a9d35bd7d292dfd776cfec76.png?s=30x30&amp;f=t&amp;cb=1" alt="">'+
// 								'<div class="examine-contain">'+
// 									'<b class="techear-go-info">对你说:</b>'+
// 									'<p class="techear-go-info">上海证券通投资顾问，证券分析师，期货分析师，经济师，获中国证券业协会颁发的执业资格证书及专业水平二级（最高级别）证书。 顺势而为求发展，互利共赢达天下。互利共赢天下…</p>'+
// 									'<p class="Operation">'+
// 										'<span>2017-09-15  14：27</span>'+
// 										'<span class="label label-danger tiwen examine-contain-fr haveEvaluation">已评价</span>'+
// 										'<span class="label label-danger tiwen examine-contain-fr" data-toggle="modal" data-target="#question">继续提问</span>'+

// 									'</p>'+
// 								'</div>'+
// 							'</li>';
// 					$('.EvaluateList').before(evaluateStr);

//          	})
//          }
// 		upEvaluatePage++;
// })

// });

// 系统消息加载更多
// var systemPage=1;
// $('.lookMoreMsg').on('click',function(){
//      	$.ajax({
//      	  type:"GET",
//           url:"/Home/Newtest/moreTrends",
//           data:{ "p":systemPage},
//           dataType:"JSON",
//          success:function(data){
// 		 $.each(datas.msg,function(){
//          		var systemStr='<li>'+
// 								'<img class="avatar-img techear-go-info" src="http://1.viki.io/a/ph/avatar_profile-acc6c5a5a9d35bd7d292dfd776cfec76.png?s=30x30&amp;f=t&amp;cb=1" alt="">'+
// 									'<div class="examine-contain">'+
// 										'<b class="techear-go-info">对你说:</b>'+
// 										'<p class="techear-go-info">上海证券通投资顾问，证券分析师，期货分析师，经济师，获中国证券业协会颁发的执业资格证书及专业水平二级（最高级别）证书。 顺势而为求发展，互利共赢达天下。互利共赢天下…</p>'+
// 										'<p class="techear-go-info systemMsg">上海证券通投资顾问，证券分析师，期货分析师，经济师，获中国证券业协会颁发的执业资格证书及专业水平二级（最高级别）证书。 顺势而为求发展，互利共赢达天下。互利共赢天下…</p>'+
// 										'<p class="techear-go-info systemMsg">上海证券通投资顾问，证券分析师，期货分析师，经济师，获中国证券业协会颁发的执业资格证书及专业水平二级（最高级别）证书。 顺势而为求发展，互利共赢达天下。互利共赢天下…</p>'+
// 										'<p class="Operation">'+
// 											'<span>2017-09-15  14：27</span>'+
// 											'<span class="lookAll">查看全文</span>'+

// 										'</p>'+
// 									'</div>'+
// 								'</li>';
// 					$('#system').before(systemStr);

//          	})
//          }
// 		systemPage++;
// })

// })

// 专家点评加载更多
var dppage=1;
$('.dpmore').on('click',function(){
//      	$.ajax({
//      	  type:"GET",
//           url:"/Home/Newtest/moreTrends",
//           data:{ "page":dppage},
//           dataType:"JSON",
//          success:function(data){
// 		 $.each(datas.msg,function(){
         		var dpstr='<dl>'+
					 				'<dd><img src="img/yuqList.png" alt="热点新闻列表"></dd>'+
					 				'<dt>专家点评<span class="HQ">行情</span></dt>'+
					 				'<dt>对郭德英而言，酷派相当于含辛茹苦养育多年的孩子，搭上周鸿祎的车，只是希望在退隐之前为酷派寻找一个可靠的保证。但显然，周鸿祎并不是他眼中脚踏七彩祥云的意中人，而后他又试图借助乐视模式，进行最后一搏，但结局同样悲惨。这个曾经的大牌还有翻身的机会吗？</dt>'+
					 				'<dt>'+
					 					'<span class="newTop">阅读：2735</span>'+
					 					'<span class="newTime">2017-7-7 15:00 迈视网</span>'+
					 				'</dt>'+
					 			'</dl>';
					$('.RDnewList').append(dpstr);

//          	})
//          }
		dppage++;
// })

})

$('.tiwen').on('click',function(){

	var user_id=$('.ifuser_id').attr('user_id');
	if (user_id) {
		$("#question").modal("show");
		evaluate_teacherName= $(this).parents('li').find('.evaluate_teacherName').html();
		imgid= $(this).parents('li').find('img').attr('id');
		teacherJob= $(this).parents('li').find('.teacherJob').html();
		imgSrc= $(this).parents('li').find('img').attr('src');

		$('#question .popularity-info-md p').eq(0).html(evaluate_teacherName);
		$('#question .popularity-info-md p').eq(1).html(teacherJob);
		$('#question .modal-body li img').attr('src',imgSrc);
		$('#question .modal-body li img').attr('id',imgid);

	}else{
		showMsg('请登录！','warn',1.5);
	}
})
$('.question-submit .btn').on('click',function(){
		console.log(evaluate_teacherName,imgid,teacherJob,imgSrc)
		var Stock_key=$('#stackCode').val();
		// var option=$('#sel').val();
		// console.log(option);
		var question=$('#question textarea').val();
		var glods=$('#question label.active input').val()
		if (Stock_key == '') {
			showMsg('您的股票关键字为空！','warn',1.5);
		}else if(question == ''){
			showMsg('您的问题描述为空！','warn',1.5);
		}else if(question.length > 130){
			showMsg('您的问题描述过多！请控制字数','warn',1.5);
		}else if(Stock_key.length > 50){
			showMsg('输入的关键字过多！请控制字数','warn',1.5);
		}else{
					$.ajax({
						  type:"POST",
				          url:"/Home/Stock/question",
				          data:{
				          	"title":Stock_key,
				          	"question":question,
				          	"id":imgid,
				          	"gold":glods
				          },
				          dataType:"JSON",
				         success:function(data){
				         	if(data.status == 4){
				         		showMsg(data.msg,'success',1.5);
				         	$("#question").modal("hide");
				         	}else{
					         	showMsg(data.msg,'warn',1.5);
					         	$("#question").modal("hide");
				         	}
				         }

					});
		}
	})
// 语音问股下载App二维码
$('#question .tel-question').hover(function(){
    $("#question .d_App").css("display","block");
},function(){
    $("#question .d_App").css("display","none");
});

// 公共悬浮 返回顶部  二维码 回到首页
/*html 结构
	<ul id="newSuspended">
		<li class="bac_top" id="bac_top"></li>
		<li class="bac_index"></li>
		<li class="dow_app"></li>
	</ul>
	<div class="dow_app_p"></div>
*/
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
	$('.dow_app_p').css({'display':'block'});
},function(){
	$('.dow_app_p').css({'display':'none'});
});
// 聊天
$('.userMsgs').on('click',function(){
	$(this).css({'display':'none'});
	$('.showPlace').css({'display':'block'});
});
$('.outShow').on('click',function(){
	$('.showPlace').css({'display':'none'});
	$('.userMsgs').css({'display':'block'});
	$('.teacherChatLeft').css({'opacity':0});
});
$('.teacherChatLeftShow').on('click',function(){
	$('.teacherChatLeft').css({'opacity':1});
});
// 往期视频加载更多
var WatchRecordMore=1;
$('.WatchRecordMore').on('click',function(){
//      	$.ajax({
//      	  type:"GET",
//           url:"/Home/Newtest/moreTrends",
//           data:{ "page":WatchRecordMore},
//           dataType:"JSON",
//          success:function(data){
// 		 $.each(datas.msg,function(){
         		var WatchRecordMorestr='<div class="today col-md-12 col-xs-12">'+
						'<h1>一周内</h1>'+
						'<div class="col-xs-6 col-md-4 personalCenterListH">'+
							'<a href="#" class="thumbnail">'+
								'<img src="http://1.viki.io/a/ph/avatar_profile-acc6c5a5a9d35bd7d292dfd776cfec76.png?s=30x30&amp;f=t&amp;cb=1">'+
								'<p>财富大魔方全天0820财富大魔方全天0820</p>'+
								'<p>播放次数：1.8万</p>'+
							'</a>'+
						'</div>';
					$('.examine-footer').before(WatchRecordMorestr);

//          	})
			WatchRecordMore++;
//          }
// })

})
//日历插件
;
(function($) {
	var Calendar = function(ele, options) {
		this.ele = ele;
		this.opt = options;
		this.defaults = {
			color: 'blue',
			fontsize: '14px',
		}
		this.obj = $.extend({}, this.defaults, this.opt);
	};
	Calendar.prototype = {
		init: function() {
			return this.ele.on("focus", function() {
				createEle($(this))
			});
		}
	};
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getMonth();

	function createEle(ele) {
		var $parent = ele.parent();
		if (!$parent || $parent[0].tagName == "BODY") {
			throw "Error: this parent() is not defined";
			return
		} else {
			ele.css("border", "1px solid red");
			$parent.css({
				padding: 0,
				margin: 0,
				position: 'relative',
			});
			if ($("#week").length == 0) {
				$parent.append("<div id='week'><h1><span class=\'prev\'>&lt;</span><span class=\'content\'>1</span><span class=\'next\'>&gt;</span></h1></div>");
				$parent.find("#week").css({
					position: "absolute",
					left: 0,
					top: ele.outerHeight(true),
					zIndex: 1000,
					background: "#fff"
				})
				weeklist($parent.find("h1"));
				var $week = ele.next();
				updateDate(currentMonth, $week); //传参数月份
				$week.find(".prev").click(function() {
					updateDate(--currentMonth, $week);
				});
				$week.find(".next").click(function() {
					updateDate(++currentMonth, $week);
				});
			}
		}
	}

	function weeklist(ele) {
		// if (ele.parents($("#week")).find("ul:eq(0)").length == 0) {
			console.log('1111');
			ele.after('<ul></ul>');
			var weekText = ['日', '一', '二', '三', '四', '五', '六'];
			for (var i = 0; i < 7; i++) {
				ele.next().append('<li>' + weekText[i] + '</li>')
			}
			ele.next().after('<ul class=\'calendarList\'></ul>');
		// }
	}

	function updateDate(m, obj) {
		var activeDate = new Date(currentYear, m, 1); //外面传进来的不断变化的日期对象
		var year = activeDate.getFullYear();
		var month = activeDate.getMonth();
		obj.find(".content").html(year + '年' + (month + 1) + '月');
		var $calendarList = obj.find($(".calendarList"));
		$calendarList.html("")
		var n = 1 - activeDate.getDay();
		if (n == 1) {
			n = -6;
		}
		activeDate.setDate(n);
		for (var i = 0; i < 42; i++) {
			var date = activeDate.getDate();
			$calendarList.append('<li>' + date + '</li>');
			var $li = $calendarList.find("li");
			if (activeDate.getMonth() != month) {
				$li.eq(i).css("color", "#ccc");
			}
			$li.eq(i).attr('data-time', year + "-" + (activeDate.getMonth() + 1) + "-" + date);
			$li.eq(i).click(function(event) {
				obj.prev().val($(this).attr('data-time'));
				obj.prev().css('borderColor', '#ccc')
				obj.remove();
			});
			activeDate.setDate(date + 1);
		}
	}
	$.fn.calendar = function(options) {
		var calendares = new Calendar(this, options);
		return calendares.init();
	}
})(jQuery)
// 调用
$("#ele").calendar();

/*观看记录查询*/
$("#searchSubmit").on('click',function(){
	var searchTime = $("form #ele").val();
	var program = $("form #program").val();
	var techear = $("form #techear").val();
	if(searchTime == ""){
		alert("时间不能为空！");
	} else if(program == ""){
		alert("节目不能为空！");
	}else if(techear == ""){
		alert("老师姓名不能为空！");
	} else {
		$.ajax({
			url: url,
			type: 'post',
			dataType: 'json',
			data: $('form#signin').serialize(),
			success: function (data) {
				showMsg(data,'warn',1.5);
			}
		})
	}

})

// 我的关注加载更多
var myAttentionPage=1;
$('.myAttentionMore').on('click',function(){
//      	$.ajax({
//      	 type:"GET",
//           url:"/Home/attention/myAttention",
//           data:{ "page":myAttentionPage},
//           dataType:"JSON",
//          success:function(data){
	// if (data.status==0) {
		// $('.myAttentionMore').html('暂无更多');
	// }else{
// 		 $.each(datas.msg,function(){
         		var myAttentionstr='<li>'+
								'<img class="avatar-img techear-go-info" src="http://1.viki.io/a/ph/avatar_profile-acc6c5a5a9d35bd7d292dfd776cfec76.png?s=30x30&amp;f=t&amp;cb=1" alt="">'+
								'<div class="examine-contain">'+
									'<p class="techear-go-info">'+
										'<b>张军</b>'+
										'<span>股票分析师</span>'+
										'<span class="stars examine-contain-fr">'+
											'<i class="fa fa-star"></i>'+
											'<i class="fa fa-star"></i>'+
											'<i class="fa fa-star"></i>'+
											'<i class="fa fa-star"></i>'+
											'<i class="fa fa-star"></i>'+
										'</span>'+
									'</p>'+
									// if (this.last_trend=='null') {
									// 	myAttentionstr+='<b class="techear-go-info">此讲师暂无观点！敬请期待</b>'+
									// 					'<p class="techear-go-info">此讲师暂无观点！敬请期待</p>';
									// }else{
									// 	myAttentionstr+='<b class="techear-go-info">鞭子落地，逢低加仓</b>'+
									// 					'<p class="techear-go-info">上海证券通投资顾问，证券分析师，期货分析师，经济师，获中国证券业协会颁发的执业资格证书及专业水平二级（最高级别）证书。 顺势而为求发展，互利共赢达天下。互利共赢天下…</p>';
									// }
									'<p class="maTakeTime">'+
										'<span>2017-10-10</span>'+
										'<span>17：41</span>'+
									'</p>'+
								'</div>'+
								'<div class="examine-call-off">'+
									'<h2>还有<span>18</span>就到期</h2>'+
									'<br>'+
									'<button class="btn btn-info"> <a href="topUp.html">立即续费</a></button>'+
								'</div>'+
							'</li>';
					$('.examine-info ul').append(myAttentionstr);

//          	})
//          }
		myAttentionPage++;
		// }
// })

})

// 我的订阅加载更多
var mySubscriptionPage=1;
$('.mySubscriptionMore').on('click',function(){
//      	$.ajax({
//      	 type:"GET",
//           url:" /Home/trend/mySubscription",
//           data:{ "page":mySubscriptionPage},
//           dataType:"JSON",
//          success:function(data){
// 		 $.each(datas.msg,function(){
         		var mySubscriptionstr='<li>'+
								'<img class="avatar-img techear-go-info" src="http://1.viki.io/a/ph/avatar_profile-acc6c5a5a9d35bd7d292dfd776cfec76.png?s=30x30&f=t&cb=1" alt="">'+
								'<div class="examine-contain">'+
									'<p  class="techear-go-info">'+
										'<b>张军</b>'+
										'<span>股票分析师</span>'+
										'<span class="stars examine-contain-fr">'+
											'<i class="fa fa-star"></i>'+
											'<i class="fa fa-star" ></i>'+
											'<i class="fa fa-star" ></i>'+
											'<i class="fa fa-star" ></i>'+
											'<i class="fa fa-star" ></i>'+
										'</span>'+
									'</p>'+
									'<b class="techear-go-info">鞭子落地，逢低加仓</b>'+
									'<p class="techear-go-info">上海证券通投资顾问，证券分析师，期货分析师，经济师，获中国证券业协会颁发的执业资格证书及专业水平二级（最高级别）证书。 顺势而为求发展，互利共赢达天下。互利共赢天下…</p>'+
									'<p>'+
										'<b>粉丝：<em class="red">21668</em></b>'+
										'<span>解决问题：<em class="red">668</em></span>'+
										'<span class="label label-danger tiwen examine-contain-fr" data-toggle="modal" data-target="#question">去提问</span>'+
									'</p>'+
								'</div>'+
								'<div class="examine-call-off">'+
									'<h2>还有<span>28</span>就到期</h2>'+
									'<br>'+
									'<button class="btn btn-info">立即续费</button>'+
								'</div>'+
							'</li>';
					$('.examine-info ul').append(myAttentionstr);

//          	})
//          }
		mySubscriptionPage++;
// })

})
// 取消关注
$('.removed').on('click',function(){
	var sures=confirm('你确认取消关注吗？')
	if (sures==true) {
		alert("确认你的选项！")
		$(this).parent('li').remove();
		showMsg('取消关注成功！','success',1.5);
	}else{
		alert("取消选项？")
	}
})

// 关注
$('.PayAttention').on('click',function(){
	var Attentionid=$(this).attr('teacherId');
	$.get("/Home/attention/newAttention",Attentionid,function(data){});
	     })
// --------jcm------------------------------
});