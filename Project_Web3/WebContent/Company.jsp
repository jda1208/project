<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>소개</title>
	<link rel="icon" href="img/icon.png" type="image/x-icon">
    <link rel="shortcut icon" href="img/icon.png" type="image/x-icon" />
	<meta name="description" content="Your description">
	<meta name="keywords" content="Your keywords">
	<meta name="author" content="Your name">
	<link rel="stylesheet" href="css/bootstrap.css" type="text/css" media="screen">
	<link rel="stylesheet" href="css/responsive.css" type="text/css" media="screen">
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
	<link rel="stylesheet" href="css/touchTouch.css" type="text/css" media="screen">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/superfish.js"></script>
    <script type="text/javascript" src="js/jquery.easing.1.3.js"></script>    
    <script type="text/javascript" src="js/touchTouch.jquery.js"></script> 
	<script type="text/javascript">if($(window).width()>1024){document.write("<"+"script src='js/jquery.preloader.js'></"+"script>");}	</script>
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
        <h3>Company</h3>
         </article>
        <div class="clear"></div>
        <!--  <ul class="portfolio clearfix">           
          <li class="box"><a href="img/image-blank.png" class="magnifier" ><img alt="" src="img/page3-img1.jpg"></a></li> 
                             
            </ul>  -->
            
            <div class="container">
            	<h5>
            		1. 프로젝트 정의<br>
 -선정이유<br>
   - 현재 대한민국에 불고 있는 맛집 열풍에 비해 블로그 포스팅이 대부분이라<br>
     맛집을 찾아가고 싶을 때 한눈에 여러 맛집들을 비교하여 선택하기가 쉽지 <br>
     않음.<br>
   - 사용자의 편의를 고려하여 여러 맛집 정보를 한 번에 보면서 비교하여
       쉽게 맛집을 정하기 위한 사이트 구축<br>
   - 사진과 지도서비스를 이용해서 뛰어난 디자인효과 및 양질의 정보제공 가능<br>
   
<br><br><br>
-맛집의 정의<br>
   - 사이트에 가입된 회원들의 맛집신청을 받고 관리자의 심사판단하에
     맛집으로 등록<br>
   - 등록된 맛집들은 사용자들로부터 별점을 받아서 순위가 등록됨<br>
   - 검색 시 검색어에 관련된 별점랭킹 5위 순위 정렬 후 새글 순서로 정렬<br>
   - 추천한 사람들이 표시가 되어서 신뢰성을 얻을 수 있다.<br>
   - 매달 베스트 맛집을 선정하여 메인페이지에 게시한다.<br>
            	</h5>
            </div>
            <ul class="thumbnails thumbnails-1 list-services">
              <li class="span2">
            <div class="thumbnail thumbnail-1"> <img  src="img/lee.jpg" alt="">
                  <section>개발자1</section>
                </div>
          </li>
              <li class="span3">
            <div class="thumbnail thumbnail-1"> <img  src="img/chiness.jpg" alt="">
                  <section>개발자2</section>
                </div>
          </li>
              <li class="span3">
            <div class="thumbnail thumbnail-1"> <img  src="img/pizza.jpg" alt="">
                  <section>개발자3</section>
                </div>
          </li>
              <li class="span3">
            <div class="thumbnail thumbnail-1"> <img  src="img/korean.jpg" alt="">
                  <section>개발자4</section>
                </div>
          </li>
              <li class="span3">
            <div class="thumbnail thumbnail-1"> <img  src="img/bossam.jpg" alt="">
                  <section>개발자5</section>
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