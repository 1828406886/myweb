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
		alert('����д�û���');
		document.form1.userid.focus();
		return false;
	}
	if (document.form1.userpwd.value=="") {
		alert('����д�û����룡');
		document.form1.userpwd.focus();
		return false;
	}
	if (document.form1.reuserpwd.value=="") {
		alert('���ٴ��������룡');
		document.form1.reuserpwd.focus();
		return false;
	}
	if (document.form1.email.value=="") {
		alert('����д���ĳ������䣡');
		document.form1.email.focus();
		return false;
	}
	document.form1.log_submit.disabled=true;
	document.form1.log_submit.value="���Ժ�...";
	return true;
}