function ForgetpassFormCheck(){
	if (document.ForgetpassForm.userid.value=="") {
		alert('����д��Ҫ�һ�������û���');
		document.ForgetpassForm.userid.focus();
		return false;
	}
	if (document.ForgetpassForm.userpwd.value=="") {
		alert('����д���������');
		document.ForgetpassForm.userpwd.focus();
		return false;
	}
	if (document.ForgetpassForm.reuserpwd.value=="") {
		alert('��������д���������');
		document.ForgetpassForm.reuserpwd.focus();
		return false;
	}
	if (document.ForgetpassForm.checkcode.value=="") {
		alert('����д��֤�룡');
		document.ForgetpassForm.checkcode.focus();
		return false;
	}
	return true;
}