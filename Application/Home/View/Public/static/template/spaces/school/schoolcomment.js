function SchoolCommentFormCheck(){
	if (document.SchoolCommentForm.content.value=="") {
		alert('����/�������ݲ���Ϊ�գ�');
		document.SchoolCommentForm.content.focus();
		return false;
	}
	return true;
}