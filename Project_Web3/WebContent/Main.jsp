<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="icon" href="img/icon.png" type="image/x-icon">
<link rel="shortcut icon" href="img/icon.png" type="image/x-icon" />
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

      jQuery('.magnifier').touchTouch();
      jQuery('.spinner').animate({
         'opacity' : 0
      }, 1000, 'easeOutCubic', function() {
         jQuery(this).css('display', 'none')
      });
      
      $('#up_hot, #down_hot').click(function(){
         if($("#h_list_0").css("display") == "none") {
            $('#h_list_0').css("display", "block");
            $('#h_list_1').css("display", "none");
         } else {
            $('#h_list_0').css("display", "none");
            $('#h_list_1').css("display", "block");
         }
      });
      
      $('#up_rank, #down_rank').click(function(){
         if($("#r_list_0").css("display") == "none") {
            $('#r_list_0').css("display", "block");
            $('#r_list_1').css("display", "none");
         } else {
            $('#r_list_0').css("display", "none");
            $('#r_list_1').css("display", "block");
         }
      });
      
      $('a.login-window').click(function() {
         // Getting the variable's value from a link 
         var loginBox = $(this).attr('href');

         //Fade in the Popup and add close button
         $(loginBox).fadeIn(300);
         
         //Set the center alignment padding + border
         var popMargTop = ($(loginBox).height() + 24) / 2; 
         var popMargLeft = ($(loginBox).width() + 24) / 2; 
         
         $(loginBox).css({ 
            'margin-top' : -popMargTop,
            'margin-left' : -popMargLeft
         });
         
         // Add the mask to body
         $('body').append('<div id="mask"></div>');
         $('#mask').fadeIn(300);
         
         return false;
      });
      $('a.close, #mask').live('click', function() {
         $('#mask , .login-popup').fadeOut(300, function() {
            $('#mask').remove();
         });
         return false;
      });
      
      $(".QTPopup").css('display', 'none'); // set the popup display none default
      $('#application').click(function(){
         $(".QTPopup").animate({
            width : 'show'
         }, 'slow');
      });
      $(".closeBtn").click(function() { // close the popup         
         $(".QTPopup").css('display', 'none');
      });
   });
</script>
</head>
<body>
<div class="spinner"></div>
   <!--============================== header =================================-->
   <header>
      <div class="btn-sign">
         <a href="#login-box" class="login-window">Login</a>
        </div>
        <div id="login-box" class="login-popup">
        <a href="#" class="close"><img src="img/close_pop.png" class="btn_close" title="Close Window" alt="Close" /></a>
          <form method="post" class="signin" action="#">
                <fieldset class="textbox">
               <label class="username">
                <span>Username</span>
                <input id="username" name="username" value="" type="text" autocomplete="on" placeholder="Username">
                </label>
                
                <label class="password">
                <span>Password</span>
                <input id="password" name="password" value="" type="password" placeholder="Password">
                </label>
                
                <button class="submit button" type="button">Sign in</button>
                
                <p>
                <a class="forgot" href="#">Forgot your password?</a>
                </p>
                
                </fieldset>
          </form>
      </div>
      <div class="logout">
         <h5><a id="logout">Logout</a></h5>
      </div>
      
   <div class="container clearfix">
      <div class="row">
         <div class="span12">
            <div class="navbar navbar_">
               <div class="container">
                  <h1 class="brand brand_">
                     <a href="Main.jsp"><img alt="" src="img/logo.png"> </a>
                  </h1>
                  <a class="btn btn-navbar" data-toggle="collapse"
                     data-target=".nav-collapse_">Menu <span class="icon-bar"></span>
                  </a>
                  <div class="nav-collapse nav-collapse_  collapse">
                     <ul class="nav sf-menu">
                        <li class="active"><a href="Main.jsp">About</a></li>
                        <li><a href="Company.jsp">Company</a></li>
                        <li><a href="MenuSearch.jsp">Menu Search</a></li>
                        <li><a href="AreaSearch.jsp">Area Search</a></li>
                        <li><a href="FreeBoard.jsp">Community</a>
                           <ul>
                              <li><a href="Notice.jsp">공지사항</a></li>
                              <li><a href="FreeBoard.jsp">자유게시판</a></li>
                           </ul></li>
                        <li><a href="JoinUs.jsp">Join Us</a></li>
                        <li><a href="Admin.jsp">Admin</a>
                           <ul>
                              <li><a href="#">맛집관리 </a></li>
                              <li><a href="#">맛집신청</a></li>
                              <li><a href="#">회원관리</a></li>
                           </ul></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   </header>
   <div class="bg-content">
      <div class="container">
         <div class="row">
            <div class="span12">
               <!--============================== slider =================================-->
               <div class="flexslider">
                  <ul class="slides">
                     <li><img src="img/slide-1.jpg" alt=""></li>
                     <li><img src="img/slide-2.jpg" alt=""></li>
                     <li><img src="img/slide-3.jpg" alt=""></li>
                     <li><img src="img/slide-4.jpg" alt=""></li>
                     <li><img src="img/slide-5.jpg" alt=""></li>
                  </ul>
               </div>
               <span id="responsiveFlag"></span>
               <div class="block-slogan">
                  <h2>Welcome!</h2>
                  <div>
                     <p>
                        <a
                           href="http://blog.templatemonster.com/free-website-templates/ "
                           target="_blank" class="link-1">Click here</a> for more info
                        about this free website template created by TemplateMonster.com.
                        This is a Bootstrap template that goes with several layout
                        options (for desktop, tablet, smartphone landscape and portrait)
                        to fit all popular screen resolutions. The PSD source files of
                        this template are available for free for the registered members
                        of TemplateMonster.com. Feel free to get them!
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!--============================== content =================================-->

      <div id="content" class="content-extra">
         <div class="ic">More Website Templates @ TemplateMonster.com.
            November19, 2012!</div>
         <div class="row-1">
            <div class="container">
               <div class="slide">
                  <h3>오늘의 인기맛집</h3>
                  <a class="up" id="up_hot">▲</a>

                  <div id="hot_table">
                     <table id="h_list_0" class="h_list_0" >
                        <tr><td><h5><a href="#">1. 목란</a></h5></td></tr>
                        <tr><td><h5><a href="#">2. 왕관식당</a></h5></td></tr>
                        <tr><td><h5><a href="#">3. 진주냉면</a></h5></td></tr>
                        <tr><td><h5><a href="#">4. 비스트로 차우기</a></h5></td></tr>
                        <tr><td><h5><a href="#">5. 퍼블릭하우스</a></h5></td></tr>
                     </table>
                     <table id="h_list_1" class="h_list_1">
                        <tr><td><h5><a href="#">6. 르브와</a></h5></td></tr>
                        <tr><td><h5><a href="#">7. 시카고피자</a></h5></td></tr>
                        <tr><td><h5><a href="#">8. 삿뽀로</a></h5></td></tr>
                        <tr><td><h5><a href="#">9. 박군자 진주냉면</a></h5></td></tr>
                        <tr><td><h5><a href="#">10. 자연별곡</a></h5></td></tr>
                     </table>
                  </div>
                  <a class="down" id="down_hot">▼</a>
               </div>
               
               <div class="slide"> <!-- 312 -->
                  <h3>오늘의 인기검색어</h3>
                  <a class="up" id="up_rank">▲</a>

                  <div id="rank_table">
                  <table id="r_list_0" class="r_list_0" >
                  <tbody>
                     <tr><td><h5><a href="#">1. 강남역</a></h5></td></tr>
                     <tr><td><h5><a href="#">2. 전주</a></h5></td></tr>
                     <tr><td><h5><a href="#">3. 홍대</a></h5></td></tr>
                     <tr><td><h5><a href="#">4. 삼청동</a></h5></td></tr>
                     <tr><td><h5><a href="#">5. 가로수길</a></h5></td></tr>
                  </tbody>
                  </table>
                  <table id="r_list_1" class="r_list_1">
                  <tbody>
                     <tr><td><h5><a href="#">6. 홍대</a></h5></td></tr>
                     <tr><td><h5><a href="#">7. 명동</a></h5></td></tr>
                     <tr><td><h5><a href="#">8. 종로</a></h5></td></tr>
                     <tr><td><h5><a href="#">9. 광화문</a></h5></td></tr>
                     <tr><td><h5><a href="#">10. 판교</a></h5></td></tr>
                  </tbody>
                  </table>
                  </div>
                  
                  <a class="down" id="down_rank">▼</a>
               </div>
            </div>
         </div>
         
         <div class="application">
            <h5><a id="application">맛집신청</a></h5>
         </div>
         <div class="QTPopup">
            <div class="QTPopupCntnr">
               <div class="gpBdrTop"></div>
               <div class="gpBdrLeft">
                  <div class="gpBdrRight">
                     <div class="caption">맛집 신청</div>
                     <a href="#" class="closeBtn" title="Close"></a>

                     <div class="content">
                        <table width="100%" cellpadding="0" cellspacing="0">
                           <tr>
                              <td>맛집 이름</td>
                           </tr>
                           <tr>
                              <td><textarea class="text"> </textarea></td>
                           </tr>
                           <tr>
                              <td>주소</td>
                           </tr>
                           <tr>
                              <td><textarea class="text"> </textarea></td>
                           </tr>
                           
                           <tr>
                              <td>전화번호</td>
                           </tr>
                           <tr>
                              <td><textarea class="text"> </textarea></td>
                           </tr>
                           <tr>
                              <td>작성자 연락처</td>
                           </tr>
                           <tr>
                              <td><textarea class="text"> </textarea></td>
                           </tr>
                           <tr>
                              <td><input type="button" class="submit" value="신청"></td>
                           </tr>
                        </table>
                     </div>
                  </div>
               </div>

               <div class="gpBdrBottom"></div>
            </div>
         </div>

      </div>
   </div>
   <!--============================== footer =================================-->
   <footer>
      <div class="container clearfix">
         <ul class="list-social pull-right">
            <li><a class="icon-1" href="#"></a></li>
            <li><a class="icon-2" href="#"></a></li>
            <li><a class="icon-3" href="#"></a></li>
            <li><a class="icon-4" href="#"></a></li>
         </ul>
         <div class="privacy pull-left">
            Website Template designed by <a
               href="http://www.templatemonster.com/" target="_blank"
               rel="nofollow">TemplateMonster.com</a>
         </div>
      </div>
   </footer>
   <script type="text/javascript" src="js/bootstrap.js"></script>
</body>
</html>