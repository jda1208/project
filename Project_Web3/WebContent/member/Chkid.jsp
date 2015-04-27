<%@page import="com.member.db.MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <title>중복확인</title>
   <%
      request.setCharacterEncoding("utf-8");
      MemberDAO memberdao = new MemberDAO();
      
      int result = 0;
      
      String user_id = request.getParameter("user_id");
      result = memberdao.chkMember(user_id);
      
         if(result==1){
            %>
            <p>ID가 이미 존재합니다.</p>
            <%
         }else if(result == 0){
            %>
            <p>사용가능한 ID입니다.</p>
            <%
         }

   %>
   
   
</head>
<body>
   <form align="center">
      <div id="chkdiv"></div>
      <input type="button" value="확인하기" onclick="location.reload();">
   </form>
</body>
</html>