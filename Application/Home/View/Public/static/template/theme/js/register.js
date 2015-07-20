function write_corp(type){
	var reg_corp=document.getElementById("reg_corp");
	var corp_more=document.getElementById("corp_more");
	
	if (type == 0){
		corp_more.style.display="none";
	}else{
		corp_more.style.display="";
	}
}

function postcheck(){
	if (document.form1.userid.value=="") {
		alert('请填写用户名');
		document.form1.userid.focus();
		return false;
	}
	if (document.form1.userpwd.value=="") {
		alert('请填写用户密码！');
		document.form1.userpwd.focus();
		return false;
	}
	if (document.form1.reuserpwd.value=="") {
		alert('请再次输入密码！');
		document.form1.reuserpwd.focus();
		return false;
	}
	if (document.form1.email.value=="") {
		alert('请填写您的常用邮箱！');
		document.form1.email.focus();
		return false;
	}
	document.form1.log_submit.disabled=true;
	document.form1.log_submit.value="请稍候...";
	return true;
}