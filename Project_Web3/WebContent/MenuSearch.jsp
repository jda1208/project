<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>메뉴별 맛집 조회</title>
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
	<script type="text/javascript">if($(window).width()>1024){document.write("<"+"script src='js/jquery.preloader.js'></"+"script>");}	</script>
	<script>
		jQuery(window).load(function() {
			$x = $(window).width();
			if ($x > 1024) {
				jQuery("#content .row").preloader();
			}
	
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
          <div class="row">
        <article class="span12">
              <h3>Menu Search</h3>
        </article>
        <div class="clear"></div>
        <ul class="thumbnails thumbnails-1 list-services">
              <li class="span4">
            <div class="thumbnail thumbnail-1"> <img  src="img/chicken.jpg" alt="">
                  <section> <a href="MenuSearch_list.jsp" class="link-1">치킨</a></section>
                </div>
          </li>
              <li class="span4">
            <div class="thumbnail thumbnail-1"> <img  src="img/chiness.jpg" alt="">
                  <section> <a href="MenuSearch_list.jsp" class="link-1">중국집</a></section>
                </div>
          </li>
              <li class="span4">
            <div class="thumbnail thumbnail-1"> <img  src="img/pizza.jpg" alt="">
                  <section> <a href="MenuSearch_list.jsp" class="link-1">피자</a></section>
                </div>
          </li>
              <li class="span4">
            <div class="thumbnail thumbnail-1"> <img  src="img/korean.jpg" alt="">
                  <section> <a href="MenuSearch_list.jsp" class="link-1">한식, 분식</a></section>
                </div>
          </li>
              <li class="span4">
            <div class="thumbnail thumbnail-1"> <img  src="img/bossam.jpg" alt="">
                  <section> <a href="MenuSearch_list.jsp" class="link-1">족발, 보쌈</a></section>
                </div>
          </li>
              <li class="span4">
            <div class="thumbnail thumbnail-1"> <img  src="img/japaness.jpg" alt="">
                  <section> <a href="MenuSearch_list.jsp" class="link-1">돈까스, 회, 일식</a>
              </section>
                </div>
          </li>
            </ul>
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