$(document).ready(function(){
	$("#neirong").find(".Tab_nr").each(function(){
		$(this)	.find('.scroll-pane').jScrollPane({showArrows:true,scrollbarWidth:27,animateTo:true,animateInterval:0,animateStep:5});
	})

	/*选项卡*/
	$('#IntroductionTab li').each(function(index){
		if (!$(this).is(".change"))
		{$("#IntroductionTab").parent().find(".Tab_nr:eq("+index+")").hide();
		}
	 
	  $(this).mouseover(function()
		{ 
		
		  $('#IntroductionTab li').removeClass('change');
		  $(this).addClass('change');
		  $("#IntroductionTab").parent().find(".Tab_nr").hide();
		  $("#IntroductionTab").parent().find(".Tab_nr:eq("+index+")").show();
		}
	  )								   
	  })	
	
	if ($("#Product_gundong").length>0)
	{
		$('#Product_gundong').jCarouselLite({
			btnPrev: '#btn_prev',
			btnNext: '#btn_next',
			visible:3,
			scroll:3,
			auto: 6500 ,
			speed: 1000
		});	
		
	}	
	
	
	if ($("#playBanner").length>0)
	{
	
			$("#playBanner").Xslider({
				speed: 1200, //动画速度
				space: 3000, //时间间隔
				auto: false, //自动滚动
				affect:'fade',
				ctag: 'div'
			});	
	
	
		
	}	
	
	
	


})