//<![CDATA[
var tips; 
var theTop = 145/*����Ĭ�ϸ߶�,Խ��Խ����*/; 
var old = theTop;
function initFloatTips() {
	tips = document.getElementById('divQQbox');
	moveTips();
};
function moveTips() {

	var tt=50;
	if (window.innerHeight) {
		pos = window.pageYOffset
	} else if (document.documentElement && document.documentElement.scrollTop) {
		pos = document.documentElement.scrollTop
	} else if (document.body) {
		pos = document.body.scrollTop;
	}

	pos=pos-tips.offsetTop+theTop;

	pos=tips.offsetTop+pos/10;

	if (pos < theTop) pos = theTop;

	if (pos != old) {
		tips.style.top = pos+"px";
		tt=10;
	//alert(tips.style.top);
	}
	old = pos;
	setTimeout(moveTips,tt);
}

//!]]>
initFloatTips();


function OnlineOver(){
	document.getElementById("divMenu").style.display = "none";
	document.getElementById("divOnline").style.display = "";
	document.getElementById("divQQbox").style.width = "170px";
}

function OnlineOut(){
	document.getElementById("divMenu").style.display = "";
	document.getElementById("divOnline").style.display = "none";
}

if(typeof(HTMLElement)!="undefined")    //��firefox����contains()������ie�²�������
{   
      HTMLElement.prototype.contains=function(obj)   
      {   
          while(obj!=null&&typeof(obj.tagName)!="undefind"){ //ͨ��ѭ���Ա����ж��ǲ���obj�ĸ�Ԫ��
   ��������if(obj==this) return true;   
   ��������obj=obj.parentNode;
   ����}   
          return false;   
      };   
}

function hideMsgBox(theEvent){ //theEvent���������¼���Firefox�ķ�ʽ

	if (theEvent){
		var browser=navigator.userAgent; //ȡ�����������
		if (browser.indexOf("Firefox")>0||browser.indexOf("Chrome")>0||browser.indexOf("Safari")>0){ //�����Firefox
			if (document.getElementById('divOnline').contains(theEvent.relatedTarget)) { //�������Ԫ��
	����		return; //������ʽ
			}
		}
		if (browser.indexOf("MSIE")>0){ //�����IE
			if (document.getElementById('divOnline').contains(event.toElement)) { //�������Ԫ��
				return; //������ʽ
			}
		}
	}
	/*Ҫִ�еĲ���*/
	document.getElementById("divMenu").style.display = "";
	document.getElementById("divOnline").style.display = "none";
}