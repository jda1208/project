
<%@page import="com.member.db.MemberBean"%>
<%@page import="com.restaurant.db.RestaurantBean"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
   List memberlist=(List)request.getAttribute("memberlist");

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   <title>Member List</title>
   <link rel="icon" href="img/favicon.ico" type="image/x-icon">
   <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
   <meta name="description" content="Your description">
   <meta name="keywords" content="Your keywords">
   <meta name="author" content="Your name">
   <link rel="stylesheet" href="css/bootstrap.css" type="text/css" media="screen">
   <link rel="stylesheet" href="css/responsive.css" type="text/css" media="screen">
   <link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
   <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
   <script type="text/javascript" src="js/jquery.js"></script>
   <script type="text/javascript" src="js/superfish.js"></script>
   <script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
   <script src="js/forms.js"></script>
<script type="text/javascript">
   if ($(window).width() > 1024) {
      document.write("<"+"script src='js/jquery.preloader.js'></"+"script>");
   }
</script>

<script>
   jQuery(window).load(function() {
      $x = $(window).width();
      if ($x > 1024) {
         jQuery("#content .row").preloader();
      }

      jQuery(".list-blog li:last-child").addClass("last");
      jQuery(".list li:last-child").addClass("last");

      jQuery('.spinner').animate({
         'opacity' : 0
      }, 1000, 'easeOutCubic', function() {
         jQuery(this).css('display', 'none')
      });
   });
</script>
</head>
<body>
   <div class="spinner"></div>
   <!--============================== header =================================-->
   <header>
      <jsp:include page="../header.jsp"></jsp:include>
   </header>
   <div class="bg-content">
<!--============================== content =================================-->
            <div id="content">
         <div class="container">
            <h3>Member List</h3>
            <div class="row">
               <table class="board-table">
                  <tr>
                     <td colspan="7"><h3>회원 목록</h3></td>
                  </tr>
                  <tr>
                     <th>
                        <div>ID</div>
                     </th>
                     <th>
                        <div>PWD</div>
                     </th>
                     <th>
                        <div>이름</div>
                     </th>
                     <th>
                        <div>전화번호</div>
                     </th>
                     <th>
                        <div>이메일</div>
                     </th>
                     <th>
                        <div>관심메뉴</div>
                     </th>
                     <th>
                        <div>등급번호</div>
                     </th>
                   
                  </tr>
                  
                  <%
                     for (int i = 0; i < memberlist.size(); i++) {
                        MemberBean mb = (MemberBean) memberlist.get(i);
                  %> 
                  <tr align="center" valign="middle" bordercolor="#333333">
                     <td><%=mb.getUser_id()%></td>
                     <td>
                        
                        <%= mb.getUser_password() %>
                     </td>
                     <td><%= mb.getUser_name() %></td>
                     
                     <td><%= mb.getUser_phonenum() %></td>
                     <td><%= mb.getUser_email() %></td>
                     <td><%= mb.getUser_menu() %></td>
                     <td><%= mb.getGradenum() %></td>
                  <%} %>
                  <tr align=center height=20>
                     <td colspan=7 style=font-family:Tahoma;font-size:10pt;>
                        <a href="#">[이전]</a>
                        <a href="#">[다음]</a>
                     </td>
                  </tr>
                  <tr style="text-align: right">
                  </tr>
               </table>
            </div>
         </div>
      </div>
   </div>
   <!--============================== footer =================================-->
   <footer>
      <jsp:include page="../footer.jsp"></jsp:include>
   </footer>
   <script type="text/javascript" src="js/bootstrap.js"></script>
</body>
</html>