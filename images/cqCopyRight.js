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
//ʢ����ϷLOGO�ͺ���ý��LOGO
+'		<div class="SDGCOPYRIGHT-logo" style="width:200px;">'
+'			<a href="#" target="_blank" title="����" ><img src="images/bomlogo.png"></a>'
+'		</div>'


//��Ȩ������Ϣ
+'		<div class="SDGCOPYRIGHT-con">'


//ÿ����Ŀ���Լ��İ�Ȩ��
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3">���Ʋ�����Ϸ �ܾ�������Ϸ ע�����ұ��� ������ƭ�ϵ� �ʶ���Ϸ���� ������Ϸ���� ������ʱ�� ���ܽ�������</span>'
+'			</p>'

//��˾ͳһ�İ�Ȩ��
+'			<p>'
+'				<span class="SDGCOPYRIGHT-pr3">����Ϸ�� �����ŷ��ơ� ������Ӫ All rights reserved. ��Ȩ���� ��������һ��ȫ����ĺô��棡</span>'
+'			</p>'
+'			<p class="SDGCOPYRIGHT-sdlogo">'
+'				<span class="SDGCOPYRIGHT-pr3">����վ��Ƽ������� <a href="http://www.zqxtjx.com" target="_blank" title="���ŷ���" >���ŷ��ƺϻ�</a> �����������</span>'
+'			</p>'
+'		</div>'
//�Ҳ����羯��3��ͼ��
+'		<div class="SDGCOPYRIGHT-priv">'
+'			<a href="#" class="SDGCOPYRIGHT-priv1" target="_blank">���羯��</a>'
+'			<span>'
+'			</span>'
+'		</div>'

+'	</div>'
+'</div>'

document.write(_sdgCopyrightHtml);
