/* 关注*/
$(".guanzhu").each(function(index,element){
  $(this).on('click',function(){
    $(this).toggleClass("guanzhu-no");
    $(this).html() == "关注" ? $(this).html('已关注') : $(this).html('关注');
  })
})

function showMsg(msg, type, time) {
  if (type == 'success') var color = '#3D8C2E';
  if (type == 'warn') var color = '#D43535'
    var html = '<div style="z-index:999999;width: 100%;height:40px;position: fixed;top: 0px;background-color: ' + color + ';text-align: center;padding-top: 10px;">';
  html += '<span style="color: #FFFFFF;">' + msg + '</span></div>';
  $('#tip').append(html);
  setTimeout(function () {
    $('#tip').html('');
  }, time * 1000);
}


/*去提问*/
function questionAlert(id){
  $("#question").modal('show');
  $.ajax({
    url: url,
    type: 'post',
    dataType: 'json',
    data: {},
    success: function (data) {
      if (data == "success") {

      }
    }
  })
}

/*诊股*/
$('.zhengu').on('click',function(){
  var user_id=$('.ifuser_id').attr('user_id');
  if (!user_id) {
    $("#questionStack").modal("show");
    evaluate_teacherName= $(this).parents('li').siblings('li').find('.evaluate_teacherName').html();
    imgid= $(this).parents('li').siblings('li').find('img').attr('id');
    teacherJob= $(this).parents('li').siblings('li').find('.teacherJob').html();
    imgSrc= $(this).parents('li').siblings('li').find('img').attr('src');

    $('#questionStack .popularity-info-md p').eq(0).html(evaluate_teacherName);
    $('#questionStack .popularity-info-md p').eq(1).html(teacherJob);
    $('#questionStack .modal-body li img').attr('src',imgSrc);
    $('#questionStack .modal-body li img').attr('id',imgid);

  }else{
    showMsg('请登录！','warn',1.5);
  }
  console.log(evaluate_teacherName,teacherJob +"amina")
})



/*提交诊股*/
$('.question-submit .btn').on('click',function(){
    var stackCode=$('#questionStack .stackCode').val();
    console.log(stackCode+"aaaaa")
    var option=$('#sel').val();
    var question=$('#questionStack textarea').val();
    var glods=$('#questionStack label.active input').val()
    console.log(evaluate_teacherName,teacherJob,imgSrc,stackCode,option,question,glods)
    if (stackCode == '') {
      showMsg('您的股票关键字为空！','warn',1.5);
    }else if(question == ''){
      showMsg('您的问题描述为空！','warn',1.5);
    }else if(question.length > 130){
      showMsg('您的问题描述过多！请控制字数','warn',1.5);
    }else if(stackCode.length > 50){
      showMsg('输入的关键字过多！请控制字数','warn',1.5);
    }else{
          $.ajax({
              type:"POST",
                  url:"/Home/Stock/question",
                  data:{
                    "title":stackCode,
                    "question":question,
                    "id":imgid,
                    "gold":glods
                  },
                  dataType:"JSON",
                 success:function(data){
                  if(data.status == 4){
                    showMsg(data.msg,'success',1.5);
                  $("#question").modal("hide");
                  removeForm();

                  }else{
                    showMsg(data.msg,'warn',1.5);
                    $("#question").modal("hide");
                    removeForm()
                  }
                 }

          });
    }
  })


$(".smal-caption").on('click',function(){
  var user_id=$('.ifuser_id').attr('user_id');
  if (!user_id) {
    $("#questionStack").modal("show");
    t_name= $(this).parents('div').siblings('div').find('.t_name').html();
    t_id= $(this).parents('div').siblings('div').find('.t_id').val();
    t_job= $(this).parents('div').siblings('div').find('.teacherJob').html();
    imgSrc= $(this).parents('div').siblings('div').find('img').attr('src');
      console.log(imgSrc + "aaaa")

    $('#questionStack .popularity-info-md p').eq(0).html(t_name);
    $('#questionStack .popularity-info-md p').eq(1).html(t_job);
    $('#questionStack .modal-body li img').attr('src',imgSrc);
    $('#questionStack .modal-body li img').attr('id',t_id);

  }else{
    showMsg('请登录！','warn',1.5);
  }
  console.log(t_name,t_job,t_id ,imgSrc+"amina")
})


/*订阅*/
$('.take').on('click',function(){
  $("#new_Dy").modal("show");
    d_name= $(this).parents('li').siblings('li').find('.evaluate_teacherName').html();
    imgid= $(this).parents('li').siblings('li').find('img').attr('id');
    teacherJob= $(this).parents('li').siblings('li').find('.teacherJob').html();
    imgSrc= $(this).parents('li').siblings('li').find('img').attr('src');
  $("#dingYueName").html(d_name);
  $('#questionStack .popularity-info-md p').eq(1).html(teacherJob);
  $('#dingYueP').attr('src',imgSrc);
  $('#questionStack .modal-body li img').attr('id',imgid);
  console.log(d_name,imgid,imgSrc);
})

//订阅选择时长
$(".new_long").each(function(index,element){
  $(this).on('click',function(){
    $(this).addClass("new_long_active");
    $(this).siblings(".new_long").removeClass("new_long_active");
    var pay_glod=$(this).children('.new_gold').html();
    $('.pay_gold').html(pay_glod.replace('金币',''));
  })
})

  // 提交订阅
$('#new_Dy #viewEnsure').on('click',function(){
  var teacherId = $('#questionStack .modal-body li img').attr('id');
  var duration=$('.new_long_active .new_mum').html();
  console.log("sssss" + duration);
  var gold=$('.pay_gold').html();
  console.log(teacherId,duration,gold);
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

/*抢虚拟座席*/
$('#seat').on("click",function(){
  $(".virtual-seat").css({"display":"block"});
})

/*关闭抢虚拟座席*/
$(".close-x").on("click",function(){
  $(this).parent().css({"display":"none"});
})


$(".virtual-btn").on('click',function(){
  $(".virtual-seat").css({"display":"none"});
  $(".virtual-seat-ok").css({"display":"block"});
})

$(".ok-btn").on("click",function(){
  $(this).parent().css({"display":"none"});
})


/*<报名观察团上传照片*/
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#blah')
        .attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }


/*表单提交和表单验证 */
  function sub(){
    var url = "url";
    var uName = $("form #inputname").val();
    var uAge = $("form #inputage").val();
    var iPhone = $("form #inputphone").val();
    var uStack = $("form #inputstack").val();
    var Uimg = $("form #upload-file-selector").val();
    var reg = /^1[3|4|5|6|7|8][0-9]{9}$/;

    if(uName == ""){
      $(".valid-name").text("姓名不能为空！");
    } else if(iPhone == ""){
      $(".valid-phone").text("电话号码不能为空！");
    }else if (reg.test(iPhone) == false){
      $(".valid-phone").text("请输入正确的手机号码！");
    } else if(uAge == ""){
      $(".valid-age").text("年龄不能为空！");
    } else if (uStack == ""){
      $(".valid-phone").text("股龄不能为空！");
    } else if(Uimg == ""){
      alert("请上传头像！")
    } else {

      $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
      //data: $('form#shareForm').serialize(),
      data: {},
      success: function (data) {
        if (data == "success") {

        }
      }
    })
    }

  }

/*上证指数*/
$(document).ready(function(){
	var myChart = echarts.init(document.getElementById('main'));
	var base = +new Date(1968, 9, 3);
	var oneDay = 24 * 3600 * 1000;
	var date = [];

	var data = [Math.random() * 300];

	for (var i = 1; i < 20000; i++) {
		var now = new Date(base += oneDay);
		date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
		data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
	}

	option = {
		tooltip: {
			trigger: 'axis',
			position: function (pt) {
				return [pt[0], '10%'];
			}
		},
		title: {
			left: 'center',
			text: '',
				textStyle:{//标题内容的样式
        			color:'#e4393c',//京东红
					fontStyle:'normal',//主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
					fontWeight:"lighter",//可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
					fontFamily:"san-serif",//主题文字字体，默认微软雅黑
					fontSize:18//主题文字字体大小，默认为18px
				},
			},
			toolbox: {
				show: false,
				feature: {
					dataZoom: {
						yAxisIndex: 'none'
					},
					restore: {},
					saveAsImage: {}
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
  			splitLine: {           // 分隔线
            show: false,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            	color: ['#ccc'],
            	width: 1,
            	type: 'solid'
            }
          },
          axisTick: {
          	show: false
          },
          axisLine: {
          	show: false
          },
          axisLabel : { 
          	formatter : '' 
          }, 
          axisLine:{  
          	lineStyle:{  
          		color:'#aaa',  
            width:0,//这里是为了突出显示加上的  
          }  
        },  
        data: date
      },
      yAxis: {
      	type: 'value',
				splitLine: {           // 分隔线
            show: false,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            	color: ['#ccc'],
            	width: 1,
            	type: 'solid'
            }
          },
          axisTick: {
          	show: false
          }, 
          axisLine:{  
          	lineStyle:{  
          		color:'#aaa',  
            width:0,//这里是为了突出显示加上的  
          }  
        }, 

        boundaryGap: [0, '100%']
      },
      dataZoom: [{
      	type: 'inside',
      	start: 0,
      	end: 10
      }],
      series: [
      {
      	name:'上证指数',
      	type:'line',
      	smooth:true,
      	symbol: 'none',
      	sampling: 'average',
      	itemStyle: {
      		normal: {
      			color: 'rgb(255, 70, 131)'
      		}
      	},
      	areaStyle: {
      		normal: {
      			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      				offset: 0,
      				color: 'rgb(255, 158, 68)'
      			}, {
      				offset: 1,
      				color: 'rgb(255, 70, 131)'
      			}])
      		}
      	},
      	data: data
      }
      ]
    };
    myChart.setOption(option);
  })


/*	深证指数*/
$(document).ready(function(){
	var myChart = echarts.init(document.getElementById('mainShen'));
	var base = +new Date(1968, 9, 3);
	var oneDay = 24 * 3600 * 1000;
	var date = [];

	var data = [Math.random() * 300];

	for (var i = 1; i < 20000; i++) {
		var now = new Date(base += oneDay);
		date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
		data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
	}

	option = {
		tooltip: {
			trigger: 'axis',
			position: function (pt) {
				return [pt[0], '10%'];
			}
		},
		title: {
			left: 'center',
			text: '',
				textStyle:{//标题内容的样式
        			color:'#e4393c',//京东红
					fontStyle:'normal',//主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
					fontWeight:"lighter",//可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
					fontFamily:"san-serif",//主题文字字体，默认微软雅黑
					fontSize:18//主题文字字体大小，默认为18px
				},
			},
			toolbox: {
				show: false,
				feature: {
					dataZoom: {
						yAxisIndex: 'none'
					},
					restore: {},
					saveAsImage: {}
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
  			splitLine: {           // 分隔线
            show: false,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            	color: ['#ccc'],
            	width: 0,
            	type: 'solid'
            }
          },
          axisTick: {
          	show: false
          },
          axisLine: {
          	show: false
          },
          axisLabel : { 
          	formatter : '' 
          }, 
          axisLine:{  
          	lineStyle:{  
          		color:'#aaa',  
            width:0,//这里是为了突出显示加上的  
          }  
        },  
        data: date
      },
      yAxis: {
      	type: 'value',
				splitLine: {           // 分隔线
            show: false,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            	color: ['#ccc'],
            	width: 0,
            	type: 'solid'
            }
          },
          axisLine:{  
          	lineStyle:{  
          		color:'#aaa',  
            width:0,//这里是为了突出显示加上的  
          }  
        }, 

        axisTick: {
        	show: false
        }, 
        boundaryGap: [0, '100%']
      },
      dataZoom: [{
      	type: 'inside',
      	start: 0,
      	end: 10
      }],
      series: [
      {
      	name:'深证指数',
      	type:'line',
      	smooth:true,
      	symbol: 'none',
      	sampling: 'average',
      	itemStyle: {
      		normal: {
      			color: 'rgb(255, 70, 131)'
      		}
      	},
      	areaStyle: {
      		normal: {
      			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      				offset: 0,
      				color: 'rgb(255, 158, 68)'
      			}, {
      				offset: 1,
      				color: 'rgb(255, 70, 131)'
      			}])
      		}
      	},
      	data: data
      }
      ]
    };
    myChart.setOption(option);
  })

/*创业板指数*/
$(document).ready(function(){
	var myChart = echarts.init(document.getElementById('mainChuang'));
	var base = +new Date(1968, 9, 3);
	var oneDay = 24 * 3600 * 1000;
	var date = [];

	var data = [Math.random() * 300];

	for (var i = 1; i < 20000; i++) {
		var now = new Date(base += oneDay);
		date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
		data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
	}

	option = {
		tooltip: {
			trigger: 'axis',
			position: function (pt) {
				return [pt[0], '10%'];
			}
		},
		title: {
			left: 'center',
			text: '',
				textStyle:{//标题内容的样式
        			color:'#e4393c',//京东红
					fontStyle:'normal',//主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
					fontWeight:"lighter",//可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
					fontFamily:"san-serif",//主题文字字体，默认微软雅黑
					fontSize:18//主题文字字体大小，默认为18px
				},
			},
			toolbox: {
				show: false,
				feature: {
					dataZoom: {
						yAxisIndex: 'none'
					},
					restore: {},
					saveAsImage: {}
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
  			splitLine: {           // 分隔线
            show: false,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            	color: ['#ccc'],
            	width: 1,
            	type: 'solid'
            }
          },
          axisTick: {
          	show: false
          },
          axisLine: {
          	show: false
          },
          axisLabel : { 
          	formatter : '' 
          }, 
          axisLine:{  
          	lineStyle:{  
          		color:'#aaa',  
            width:0,//这里是为了突出显示加上的  
          }  
        },  
        data: date
      },
      yAxis: {
      	type: 'value',
				splitLine: {           // 分隔线
            show: false,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            	color: ['#ccc'],
            	width: 1,
            	type: 'solid'
            }
          },
          axisTick: {
          	show: false
          },
          axisLine:{  
          	lineStyle:{  
          		color:'#aaa',  
            width:0,//这里是为了突出显示加上的  
          }  
        }, 

        boundaryGap: [0, '100%']
      },
      dataZoom: [{
      	type: 'inside',
      	start: 0,
      	end: 10
      }],
      series: [
      {
      	name:'创业板指数',
      	type:'line',
      	smooth:true,
      	symbol: 'none',
      	sampling: 'average',
      	itemStyle: {
      		normal: {
      			color: 'rgb(255, 70, 131)'
      		}
      	},
      	areaStyle: {
      		normal: {
      			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      				offset: 0,
      				color: 'rgb(255, 158, 68)'
      			}, {
      				offset: 1,
      				color: 'rgb(255, 70, 131)'
      			}])
      		}
      	},
      	data: data
      }
      ]
    };
    myChart.setOption(option);
  })

/*表情*/
$('.msg-face').click(function () {
    var i = 0,
    arr = [],
    $faceList = $('.face-list');
    while(i<135){
      arr.push('<li><img title="'+i+'" src="/Public/face/'+i+'.gif" /></li>');
      i++;
    }
    $faceList.empty().append('<ul>'+arr.join('')+'</ul>');
    $faceList.find('img').click(function () {
      $('.input-msg textarea').insertString('[em_'+$(this).attr('title')+']');
    });
    $('.face-list').show();
  });

