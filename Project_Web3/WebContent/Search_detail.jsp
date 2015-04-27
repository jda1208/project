<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>맛집 상세보기</title>
   <link rel="icon" href="img/icon.png" type="image/x-icon">
   <link rel="shortcut icon" href="img/icon.png" type="image/x-icon" />
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
	<script>
		jQuery(window).load(function() {
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
   	<jsp:include page="header.jsp"></jsp:include>
   </header>
<div class="bg-content"> 
      <!--============================== content =================================-->
      
    <div class="container">
          <div class="row" align="center">
        <article class="span12">
              <h3>맛집 이름 여기에</h3>
              
              <div class="inner-1">
    				<table class="detail">
    					<tr><td>THEME</td><td>음식테마 여기에</td></tr>
    					<tr><td>AREA</td><td>맛집 지역 여기에</td></tr>
    					<tr><td>ADDRESS</td><td>맛집 주소 여기에</td></tr>
    					<tr><td>TEL</td><td>맛집 전화번호 여기에</td></tr>
    					<tr><td>TIME</td><td>맛집 영업시간 여기에</td></tr>
    					<tr><td>SCORE</td><td>맛집 점수 여기에</td></tr>
    				</table>        
          	  </div>
        </article>
        
      </div>
        </div>
  </div>
    </div>

<!--============================== footer =================================-->
	<footer>
   	<jsp:include page="footer.jsp"></jsp:include>
   </footer>
<script type="text/javascript" src="js/bootstrap.js"></script>
</body>
</html>