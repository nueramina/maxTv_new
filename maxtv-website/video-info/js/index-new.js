
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

/*道琼斯指数*/
$(document).ready(function(){
	var myChart = echarts.init(document.getElementById('mainDao'));
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
      	name:'道琼斯指数',
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


/*倒计时*/
var minutes = $( '#set-time' ).val();
var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
	function() 
	{
		$(".countdown-btn").css("background-image" ,"linear-gradient(-135deg, #FAD961 0%, #F76B1C 100%)");
		$(".countdown-btn").removeAttr("disabled");
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
		if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
			$( '#tiles' ).removeClass('color-full');
			$( '#tiles' ).addClass('color-half');

		} 
		if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
			$( '#tiles' ).removeClass('color-half');
			$( '#tiles' ).addClass('color-empty');
		}
		
		days = pad( parseInt(seconds_left / 86400) );
		seconds_left = seconds_left % 86400;
		
		hours = pad( parseInt(seconds_left / 3600) );
		seconds_left = seconds_left % 3600;
		
		minutes = pad( parseInt(seconds_left / 60) );
		seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
	
}

}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
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

/* 关注*/
$(".guanzhu").each(function(index,element){
	$(this).on('click',function(){
		$(this).toggleClass("guanzhu-no")
	})
})

/*节目切换*/
  window.onload=function(){
    //根据子元素个数和宽度让其父层宽度自适应
    var  getwidth=$(".tvshowlist0inner").width($(".tvshowlist0inner").eq(0).children().length*142+8);
  // 让节目时间列表滚到最后
  if ($(".tvshowlistinner li").hasClass("active")) {
    var active=$(".tvshowlistinner li.active");
    $(".tvshowlist").animate({scrollLeft:active.offset().left - ((active.width()+20)*4)+"px"},"fast");

  }else{
    var te=document.querySelector(".tvshowlist");
    $(".tvshowlist").animate({scrollLeft:te.scrollWidth-te.clientWidth+"px"},"fast");
  }

// 获取当前位置
var currPos;
     // 根据当前位置确认左右滚动
     $(".listshow_btnright").click(function(){
      currPos=$(".tvshowlist").scrollLeft();
      $(".tvshowlist").animate({scrollLeft:currPos+144+"px"},"fast");
    });

     $(".listshow_btnleft").click(function(){
      currPos=$(".tvshowlist").scrollLeft();
      $(".tvshowlist").animate({scrollLeft:currPos-144+"px"},"fast");
    });

// 时间列表
$(".tvshowlist li").click(function(){

  if( $(this).hasClass("active")  ||  $(this).hasClass("list")) {
    $(".tvshowlist li").css({border:"2px solid #333"});
    if($(this).hasClass("active")){
      $(this).css({"border":"2px solid #e42626"});
    }
    if($(this).hasClass("list")){
      $(this).css({"border":"2px solid #1e63b0"});
    }
  }

  else return ;
})

}