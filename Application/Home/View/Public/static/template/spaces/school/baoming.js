<!--
$().ready(function() {
$('form#bmform').checkForm(1);
});
var CusCheckForm = function()
{
var tel = $("input[name='tel']");
var mbl = $("input[name='mobile']");
if(tel.val() == "" && mbl.val() == "")
{
$("span#mbltips").addClass("no");
$("span#mbltips").html("电话号码和手机号必须填写一个");
return false;
}
else return true;
}
//-->