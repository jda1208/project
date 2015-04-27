function jointest(){
   var lastname = document.form.user_lastname.value;
   if(lastname==""){
      alert("성을 입력하세요.");
      document.form.user_lastname.focus();
      return;
   }
   var firstname = document.form.user_firstname.value;
   if(firstname==""){
      alert("이름을 입력하세요.");
      document.form.user_firstname.focus();
      return;
   }
   var id = document.form.user_id.value;
   if(id.length < 3 || id.length > 10){
      alert("ID를 3자이상 10자이하로 입력하세요.");
      document.form.user_id.focus();
      return;
   }
   
   var pwd = document.form.user_password.value;
   var chkpwd = document.form.user_chkpwd.value;
   if(pwd.length < 4 || pwd.length > 10){
      alert("패스워드를 4자이상 10자이하로 입력하세요.");
      document.form.user_password.focus();
      return;
   }
   if(pwd!=chkpwd){
      alert("패스워드가 맞지 않습니다.");
      document.form.user_chkpwd.focus();
      return;
   }
   var reg = new RegExp("(^[0-9]*$)");
   var phone = document.form.user_PhoneNumber.value;
   if(phone=="" || !reg.test(phone)){
      alert("핸드폰번호를 숫자만 입력하세요.");
      document.form.user_PhoneNumber.focus();
      return;
   }
   
   var email = document.form.user_email.value;
   if(email==""){
      alert("이메일을 입력하세요.");
      document.form.user_email.focus();
      return;
   }
   
   var menu = document.form.menu;
   var cnt = 0;
      for(var j=0;j<menu.length;j++){
         if(menu[j].checked){
            cnt++;
            }
         }
      if(cnt==0){
          alert("관심메뉴를 1개이상 선택하세요.");
             return;
      }   

   document.form.submit();
   alert("회원가입이 완료되었습니다.");
}


