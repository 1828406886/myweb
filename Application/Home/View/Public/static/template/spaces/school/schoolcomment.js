function SchoolCommentFormCheck(){
	if (document.SchoolCommentForm.content.value=="") {
		alert('评价/留言内容不能为空！');
		document.SchoolCommentForm.content.focus();
		return false;
	}
	return true;
}