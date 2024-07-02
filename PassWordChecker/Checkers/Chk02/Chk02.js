function chkPW(){

 var pw = $("#password").val();
 var num = pw.search(/[0-9]/g);
 var eng = pw.search(/[a-z]/ig);
 var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

 if(pw.length < 10 || pw.length > 20){
  alert("10자리 ~ 20자리 이내로 입력해주세요.");
  return false;
 }else if(pw.search(/\s/) != -1){
  alert("비밀번호는 공백 없이 입력해주세요.");
  return false;
 }else if( (num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0) ){
  alert("영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
  return false;
 }else {
	console.log("통과");	 
 }

}
