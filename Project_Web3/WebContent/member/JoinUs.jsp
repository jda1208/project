<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Login</title>
<link rel="icon" href="img/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
<meta name="description" content="Your description">
<meta name="keywords" content="Your keywords">
<meta name="author" content="Your name">
<link rel="stylesheet" href="css/bootstrap.css" type="text/css" media="screen">
<link rel="stylesheet" href="css/responsive.css" type="text/css" media="screen">
<link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
<link rel="stylesheet" href="css/touchTouch.css" type="text/css" media="screen">
<link rel="stylesheet" href="css/kwicks-slider.css" type="text/css" media="screen">
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/superfish.js"></script>
<script type="text/javascript" src="js/jquery.flexslider-min.js"></script>
<script type="text/javascript" src="js/jquery.kwicks-1.5.1.js"></script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/touchTouch.jquery.js"></script>
<script type="text/javascript" src="js/join.js"></script>
<script type="text/javascript" src="js/chkid.js"></script>

<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
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
         <!--  <div class="ic">More Website Templates @ TemplateMonster.com. November19, 2012!</div> -->
         <div class="container">
            <div class="row">
               <article class="span8">
               <div class="inner-1">
                  <ul class="list-blog">
                     <li>
                        <h3>존&nbsp;&nbsp;&nbsp;맛</h3> <time datetime="2015-04-22"
                           class="date-1">2015-04-22</time>
                        <div class="name-author">
                           by <a href="#">최강6조</a>
                        </div>

                        <div class="clear"></div> <img alt="" src="img/mandu.jpg">
                        <p>존맛에 오신 것을 환영합니다</p>
                     </li>
                  </ul>
               </div>
               </article>

               <article class="span4">
               <h3 class="extra">Join_us</h3>

               <form id="form" name="form" action="./MemberJoinAction.do" method="post">
                  <input type="text" name="user_lastname" placeholder="성"> 
                  <input type="text" name="user_firstname" placeholder="이름"><br>
                  <input type="text" name="user_id" id="user_id" placeholder="아이디"> 
                  
                  <input type="button" name="chk_id" id="chk_id" value="중복확인" onclick="chkId()"><br>
                  <input type="password" name="user_password" placeholder="비밀번호">
                  <input type="password" name="user_chkpwd" placeholder="비밀번호 확인"><br>
                  <input type="text" name="user_PhoneNumber" size="50%"
                     placeholder="핸드폰번호"><br> <input type="email"
                     name="user_email" size="50%" placeholder="이메일"><br>
                  <p></p>
                  <h3>관심메뉴</h3>
                  <h5>
                     <input type="checkbox" name="menu" value="한식">한식&nbsp;&nbsp;&nbsp;&nbsp;
                     <input type="checkbox" name="menu" value="중식">중식&nbsp;&nbsp;&nbsp;&nbsp;
                     <input type="checkbox" name="menu" value="일식">일식&nbsp;&nbsp;&nbsp;&nbsp;
                     <input type="checkbox" name="menu" value="양식">양식
                     
                  </h5>
                  <br> 
                  <input type="button" name="join" class="join-submit" value="가입하기" onclick="jointest()">
                  <input type="button" value="둘러보기">

               </form>

               </article>
            </div>
         </div>
      </div>
   </div>

   <!--============================== footer =================================-->
    <footer>
   	<jsp:include page="../footer.jsp"></jsp:include>
   </footer>
   <script type="text/javascript" src="../js/bootstrap.js"></script>
</body>
</html>