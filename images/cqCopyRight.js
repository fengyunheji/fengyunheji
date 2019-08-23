document.write('<link rel="stylesheet" type="text/css" href="'+CopyRightcss+'">');

var logoPath = '#';
//var logoPath = '';
var subLogo = logoPath+'pic/cq/logo.jpg';

if(CopyRightcss.indexOf('black') != -1){
	subLogo = logoPath+'pic/cq/logo_black.jpg';
}

var _sdgCopyrightLink = '#';
var _sdgCopyrightHtml = '';
_sdgCopyrightHtml +=''

+'<div class="SDGCOPYRIGHT-wrap20130425">' 
+'	<div id="SDGCOPYRIGHT">'
//盛大游戏LOGO和合作媒体LOGO
+'		<div class="SDGCOPYRIGHT-logo" style="width:200px;">'
+'			<a href="#" target="_blank" title="官网" ><img src="images/bomlogo.png"></a>'
+'		</div>'


//版权主体信息
+'		<div class="SDGCOPYRIGHT-con">'


//每个项目组自己的版权号
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3">抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</span>'
+'			</p>'

//公司统一的版权号
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3">本游戏由 KK工作室 独家运营 All rights reserved. 版权所有 致力打造一个全民激情的好传奇！</span>'
+'			</p>'
+'			<p class="SDGCOPYRIGHT-sdlogo">'
+'				<span class="SDGCOPYRIGHT-pr3">本网站设计及美工由 <a href="http://j8kk.com" target="_blank" title="KK工作室" >KK风云合击</a> 独家设计制作</span>'
+'			</p>'
+'		</div>'
//右侧网络警察3个图标
+'		<div class="SDGCOPYRIGHT-priv">'
+'			<a href="#" class="SDGCOPYRIGHT-priv1" target="_blank">网络警察</a>'
+'			<span>'
+'			</span>'
+'		</div>'

+'	</div>'
+'</div>'

document.write(_sdgCopyrightHtml);
