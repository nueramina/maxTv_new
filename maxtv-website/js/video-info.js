/*最新视频 全部-当前热播-最新*/
$(".all-hot-new").on("click",function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
})

$(".video-players-right .media").on('click',function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
})