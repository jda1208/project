var sps;
document.domain="naver.com";
if(typeof sps=="undefined"){sps={CommentBox:{},config:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.NAME="sps.CommentBox";
sps.CommentBox.VERSION="1.0.1.5745";
sps.CommentBox.Config=jindo.$Class({name:"unknown",version:"unknown",message:{},$init:function(b){this.name=sps.CommentBox.Config.NAME;
this.version=sps.CommentBox.Config.VERSION;
this.instance={};
this._initDefaultConfiguration();
this._initConvertConvention();
if(typeof b=="object"){this.option(b)
}var a=document.location.protocol+"//";
a+=document.location.host+"/";
a+=this.option("servicePath")+"/";
this.option("serviceAddress",a);
var c=this.option("booleans");
c.isMine=true;
c.isAdmin=true;
c.isReply=true;
c.isDeleted=true;
c.isVisible=true;
c.isAuthor=true;
c.isAuthorComment=true;
c.isUserRecommend=true;
c.isAuthorRecommend=true;
c.isRecommendArea=true;
c.isMobile=true;
var d=this.option("comment");
d.push("parentCommentNo");
d.push("commentNo");
d.push("writerNickName");
d.push("writerId");
d.push("writerIp");
d.push("isMine");
d.push("isAdmin");
d.push("contents");
d.push("registeredDate");
d.push("modifiedDate");
d.push("replyLevel");
d.push("isReply");
d.push("isDeleted");
d.push("isVisible");
d.push("writerProfileUrl");
d.push("writerProfileType");
d.push("isMe2DayPosted");
d.push("upCount");
d.push("downCount");
d.push("isUserRecommend");
d.push("isAuthorRecommend");
d.push("isRecommendArea");
d.push("isAuthor");
d.push("isAuthorComment");
d.push("replyCount");
d.push("objectScore");
d.push("status");
d.push("isMobile");
d.push("personacon");
d.push("isMe2day");
d.push("isFacebook");
d.push("isTwitter");
d.push("isYozm");
d.push("isSocialLinkOpen");
d.push("isSocialReplyActive");
d.push("ticket")
},_initConvertConvention:function(){var a=this.option("convention");
a={parentCommentNo:"parent_comment_no",commentNo:"comment_no",groupNo:"group_no",writerNickName:"writer_nickname",writerId:"writer_id",encodedWriterId:"enc_writer_id",writerIp:"writer_ip",registeredDate:"registered_ymdt",modifiedDate:"modified_ymdt",replyLevel:"reply_level",typeCode:"comment_type_code",isMine:"is_mine",isAdmin:"is_admin",isReply:"is_reply",isDeleted:"deleted_yn",isVisible:"visible_yn",isMe2DayPosted:"is_me2day_posted",ticket:"ticket",objectId:"object_id",objectUrl:"object_url",replyCount:"reply_count",writerProfileUrl:"writer_profile_url",writerProfileType:"writer_profile_type",upCount:"up_count",downCount:"down_count",isUserRecommend:"user_recommend_yn",isAuthorRecommend:"author_recommend_yn",isRecommendArea:"is_recommend_area",isAuthor:"is_author",isAuthorComment:"is_author_comment",replyCount:"reply_count",objectScore:"object_score",status:"status",isMobile:"mobile_yn",personacon:"personacon",isMe2day:"is_me2day",isFacebook:"is_facebook",isTwitter:"is_twitter",isYozm:"is_yozm"};
this.option("convention",a)
},_initDefaultConfiguration:function(){this.option("useCategory",false);
this.option("categoryId","default");
this.option("viewCategoryId",undefined);
this.option("useProfile",false);
this.option("useScore",false);
this.option("useMe2Day",false);
this.option("useSpan",false);
this.option("useMemorial",false);
this.option("useDummyThumb",false);
this.option("useCountUnderBar",false);
this.option("useRecommendArea",false);
this.option("useReplyArea",false);
this.option("useSocialComment",false);
this.option("nidManageSocialAuthUrl","https://nid.naver.com/user/help.nhn?a=privateInfo&m=certBeginForExternalAuthInfo&menu=nid2_sub_m3");
this.option("socialAuthUrl","https://nid.naver.com/oauth/idLink.nhn?");
this.option("method","post");
this.option("pageSize",10);
this.option("replyPageSize",3);
this.option("isLogin",false);
this.option("objectUrl",""+document.location);
this.option("servicePath","comments");
this.option("dateFormat","Y-m-d H:i");
this.option("centerPaginate",false);
this.option("paginateSize",10);
this.option("commands",["reply","report","delete"]);
this.option("allowCommandsAtReplyArea",["report","delete"]);
this.option("nobarInCommandGroup",["reply","delete","report"]);
this.option("formation",["count","list","page","write"]);
this.option("me2desc",["me2check","me2guide","me2certify"]);
this.option("layers",["me2guide","profile","me2Help","naverHelp"]);
this.option("descs",["policy"]);
this.option("maxDepth",3);
this.option("maxReplyAreaDepth",1);
this.option("maxScoreDepth",1);
this.option("maxScore",10);
this.option("enableMultiLine",false);
this.option("enableSpotLight",true);
this.option("maximumCommentLength",500);
this.option("useBlockCopyAndPaste",false);
this.option("defaultProfileUrl","http://static.naver.net/common/comment/img_default_profile.gif");
this.option("me2dayDefaultImageUrl","http://static1.me2day.net/images/profile.png");
this.option("memorialDefaultImageUrl","http://svn.nhndesign.com/svnview/N_01_common/comment_box/img/@thumb5.gif");
this.option("pwBlockUrl","not_available.nhn");
this.option("pwReportUrl","report.nhn");
this.option("profileHome","redirect.nhn");
this.option("browser",jindo.$Agent().navigator().getName());
this.option("onTextboxBackground","#FFFFFF");
this.option("onTextboxFontColor","#666666");
this.option("offTextboxBackground","#FFFFFF");
this.option("offTextboxFontColor","#666666");
this.option("replaceErrorFontFamily","돋움, Dotum");
this.option("thumbSizeInComment","medium");
this.option("replyThumbSizeInWritebox","medium");
this.option("isDescInOnlyRoot",false);
this.option("isReplyWriteBoxPositionOnBottom",true);
this.option("useSpareButtonInReplyWriteBox",false);
this.option("useProfileThumbLink",true);
this.option("useNameLink",true);
this.option("useWriteDummyThumb",false);
this.option("useLineBreaking8203",true);
this.option("useEscapeHtml",true);
this.option("useProfileNameLink",true);
this.option("useMobile",false);
this.option("usePersonacon",false);
this.option("useLoginPopup",false);
this.option("loginCallbackUrl","http://commentbox.naver.com/loginSuccess.nhn");
this.option("snsAuthStatus",{});
this.option("urlList",{});
this.option("currentSortOption",undefined);
this.option("social",{active:false,link_open:false,reply_active:false});
this.option("comment",[]);
this.option("convention",{});
this.option("initialized",false);
this.option("booleans",{});
this.option({elements:{list:".cbox_list_comment",countArea:".cbox_list_info",writeboxRoot:".writebox_root_area",writebox:".cbox_write",textarea:"textarea",userArea:".cbox_user_area",mainPartInWritebox:".cbox_txt_area",writeButton:'input[type="image"]',closeButton:".cbox_close",layer:".cbox_layer_popup",commentNameArea:".cbox_section",commands:".cbox_section2",descs:".cbox_desc_area",paginate:".cbox_paginate",body:"#cbox_module",me2dayCheck:"input[name=chk_submit_m2day]",me2dayLink:"span a",helpButton:".cbox_help",commentBody:".cbox_comment_area",firstOfCommentBody:".cbox_info_area",commentText:".cbox_desc",recommendCount:"span",profileButtonArea:".cbox_btn_area2",profileRadio:"input[name=rdo_profile][checked]",scoreArea:".cbox_select_area",scoreDiv:".selectbox-noscript",scoreSelector:".selectbox-source",starGrade:".cbox_star_grade",replyNum:".reply_num",replyAreaPageLeft:".pglt",replyAreaPageRight:".pgrt",mobileIcon:".ico_mobile",mobileLayer:".ly_mobile",personacon:".personacon",personaconButtonArea:".cbox_btn_area2",personaconThumbImg:".cbox_personacon_thumb",snsCheckboxArea:".cbox_sns"}});
this.option({css:{firstCommand:"cbox_first",spotLight:"cbox_focus",basicWriteBoxType:"cbox_write_default",profileWriteBoxType:"cbox_profile",personaconWriteBoxType:"cbox_profile",thumbOn:"cbox_thumb_on",thumbOff:"cbox_thumb_off",closeButtonOver:"cbox_over",countUnderBar:"cbox_h_type2",noBarOnCommend:"cbox_nobar",recommendCountOn:"on",cboxOn:"cbox_on",thumbs:"cbox_thumbs",thumb:"cbox_thumb",writeboxProfile:"cbox_profile",writeboxPersonacon:"cbox_profile",writeboxProfileArea:"cbox_profile_area",writeboxPersonaconArea:"cbox_profile_area",nickName:"cbox_nick_name",userId:"cbox_user_id",noProfileThumbArea:"cbox_li_type",bodySpan:"cbox_fluid",spanThumbs:"cbox_thumbs_box",scoreList:"cbox_list_comment_vari",replyCountOn:"on",replyAreaUnfold:"unfold"}});
this.option({templates:{comment:'<li class="cbox_thumb_off comment_no_{=commentNo}" >{if replyLevel > 1} <span class="cbox_bu_subnode">ㄴ</span> {/if}<div class="cbox_comment_area"><div class="cbox_info_area"><div class="cbox_section">{if config.option(\'usePersonacon\') && personacon}<img class="cbox_personacon sticker" src="{=personacon}"/>{/if}<span class="cbox_nick_name">{=writerNickName}</span> <span class="cbox_user_id">({=writerId})</span> <span class="cbox_date">{=registeredDate}</span> {if config.option(\'useSocialComment\') && isMine && (isMe2day || isFacebook || isTwitter || isYozm)}{if !(replyLevel > 1 && !isSocialReplyActive)}<span class="cbox_sns_share">{if \'true\'== isMe2day}<a href="{js jindo.$S((=config.option(\'urlList\').social.redirectSns)).format((=ticket),(=commentNo),\'ME2DAY\')}" {if !isSocialLinkOpen}onclick="return false;"{/if} class="me2 N=a:CML.me2" target="_blank">미투데이</a>{/if}{if \'true\'== isFacebook}<a href="{js jindo.$S((=config.option(\'urlList\').social.redirectSns)).format((=ticket),(=commentNo),\'FACEBOOK\')}" {if !isSocialLinkOpen}onclick="return false;"{/if} class="facebook N=a:CML.fb" target="_blank">페이스북</a>{/if}{if \'true\'== isTwitter}<a href="{js jindo.$S((=config.option(\'urlList\').social.redirectSns)).format((=ticket),(=commentNo),\'TWITTER\')}" {if !isSocialLinkOpen}onclick="return false;"{/if} class="twitter N=a:CML.tw" target="_blank">트위터</a>{/if}{if \'true\'== isYozm}<a href="{js jindo.$S((=config.option(\'urlList\').social.redirectSns)).format((=ticket),(=commentNo),\'YOZM\')}" {if !isSocialLinkOpen}onclick="return false;"{/if} class="thesedays N=a:CML.yozm" target="_blank">요즘</a>{/if}</span>{/if}{/if}</div><div class="cbox_section2"></div></div><div class="cbox_desc_comment"><p class="cbox_desc" style="word-break:break-all;line-break: all;word-wrap:break-word;">{=contents}</p></div></div><ul></ul></li>',deleteComment:'<li class="cbox_thumb_off comment_no_{=commentNo}" >{if replyLevel > 1} <span class="cbox_bu_subnode">ㄴ</span> {/if}<div class="cbox_comment_area"><div class="cbox_info_area"></div><div class="cbox_desc_comment"><p class="cbox_desc" style="word-break:break-all;line-break: all;word-wrap:break-word;">댓글이 삭제되었습니다.</p></div></div><ul></ul></li>',blockComment:'<li class="cbox_thumb_off comment_no_{=commentNo}" >{if replyLevel > 1} <span class="cbox_bu_subnode">ㄴ</span> {/if}<div class="cbox_comment_area"><div class="cbox_info_area"><div class="cbox_section2"></div></div><div class="cbox_desc_comment"><p class="cbox_desc" style="word-break:break-all;line-break: all;word-wrap:break-word;">{if status == 7 }본 게시물은 저작권법 제103조에 의거하여 저작권자의 요청으로 임시 게시중단 되었습니다.{elseif status == 8 || status == 9}본 게시물은 정보통신망이용촉진및정보보호등에 관한 법률 제44조의2를 준수하기 위해 다른 이용자의 요청으로 임시 게시중단 되었습니다.{/if}</p></div></div><ul></ul></li>',countArea:'<div class="cbox_list_info"></div>',countSimple:'<h5 class="cbox_h_type">댓글 <span>(<strong>{=count}</strong>)</span></h5>',countDetail:'<h5 class="cbox_h_type">사용자평 <span>(<strong>{=score.count}</strong>)</span></h5>',rootWriteBoxArea:'<div class="writebox_root_area"></div>',list:'<div class="cbox_list_comment"><ul></ul></div>',writeBox:'<div class="cbox_write"><div class="cbox_write_box"><div class="cbox_write_box2"><form action="#" method="post"><fieldset><legend>댓글 등록 폼</legend><div class="cbox_user_area"><div class="cbox_txt_area"><!-- 유동형 덧글 입력상자 --><div class="cbox_section"><textarea class="cbox_txt_focus_area" name="" title="댓글 입력창"></textarea><div class="cbox_btn_area N=a:CMW.ok"><input type="image" src="http://static.naver.net/common/comment/btn_registry.gif" alt="등록"onMouseDown="this.src=\'http://static.naver.net/common/comment/btn_registry_down.gif\'" onMouseOut="this.src=\'http://static.naver.net/common/comment/btn_registry.gif\'"></div></div><div class="cbox_desc_area"></div><!-- //유동형 덧글 입력상자 --></div></div></fieldset></form></div></div></div>',spareWriteButton:'<input type="image" src="http://static.naver.net/common/comment/btn_registry.gif" alt="등록"onMouseDown="this.src=\'http://static.naver.net/common/comment/btn_registry_down.gif\'" onMouseOut="this.src=\'http://static.naver.net/common/comment/btn_registry.gif\'">',subNode:'<span class="cbox_bu_subnode">ㄴ</span>',recommendImgArea:'<span class="cbox_desc_img"></span> ',extra1:"<div></div>",extra2:"<div></div>",extra3:"<div></div>",extra4:"<div></div>",extra5:"<div></div>",deleteCommand:'{if isMine}<span><a href="#" class="N=a:CML.del">삭제</a></span>{/if}',reportCommand:'{if !isMine}<span><a href="#" class="N=a:CML.report" >신고</a></span>{/if}',replyCommand:'<span><a href="#" class="N=a:CML.reply">답글</a></span>',replyCancelCommand:'<span><a href="#" class="N=a:CML.rpcancel">답글취소</a></span>',recommendCommand:'{if !isMine}<span class="cbox_activate_up"><a href="#" title="이 댓글을 추천합니다" class="N=a:CML.like"><em>추천 : </em></a><span>0</span></span>{/if}',discommendCommand:'{if !isMine}<span class="cbox_activate_down"><a href="#" title="이 댓글을 비추천합니다" class="N=a:CML.dlike"><em>비추천 : </em></a><span>0</span></span>{/if}',authorCommand:'{if isAuthor}<span class="cbox_activate_up"><a href="#" title="좋은 댓글로 추천하시면, 이 댓글이 추천 댓글 목록에 추가됩니다."><em>필자추천</em></a></span>{/if}',authorCancelCommand:'{if isAuthor}<span class="cbox_activate_cancel"><a href="#" title="추천을 취소하시면, 이 댓글은 추천 댓글 목록에서 지워지고 원래의 위치에 나타납니다."><em>추천취소</em></a></span>{/if}',pageArea:'<div class="cbox_paginate"></div>',pageInfoText:'<strong class="cbox_htitle">페이지 이동하기</strong>',page:'<a href="#" class="N=a:CML.page,r:{=page}">{=page}</a>',currentPage:"<strong>{=page}<span> 현재 선택된 페이지</span></strong>",firstPage:'<a class="cbox_pre_end" href="#">맨앞</a>',prevPage:'<a class="cbox_pre N=a:CML.prev" href="#">이전<span> 페이지 목록으로 이동하기</span></a>',nextPage:'<a class="cbox_next N=a:CML.next" href="#">다음<span> 페이지 목록으로 이동하기</span></a>',arthorRecommendImgTag:'<img src="http://static.naver.net/common/comment/ico_writer_recommend.gif" width="42" height="15" title="필자가 좋은 댓글로 추천한 글입니다." alt="필자가 좋은 댓글로 추천한 글입니다." class="recommend">',userRecommendImgTag:'<img src="http://static.naver.net/common/comment/ico_recommend_comment.gif" width="42" height="15" title="네이버 이용자들이 추천한 댓글입니다." alt="네이버 이용자들이 추천한 댓글입니다." class="recommend2">',recommendReply:'<div class="cbox_info_area2"><span>0</span>개의 답글이 있습니다. <a href="#" class="N=a:CML.best">답글 작성하러 가기</a></div>',socialCommentDesc:'<div class="cbox_sns"><input type="checkbox" class="_me2day N=a:CMW.me2" id="me2day_{=level}"><label for="me2day_{=level}" class="me2 {if !isMe2day}off{/if}">미투데이</label><input type="checkbox" class="_facebook N=a:CMW.fb" id="facebook_{=level}"><label for="facebook_{=level}" class="facebook {if !isFacebook}off{/if}">페이스북</label><input type="checkbox" class="_twitter N=a:CMW.tw" id="twitter_{=level}"><label for="twitter_{=level}" class="twitter {if !isTwitter}off{/if}">트위터</label><input type="checkbox" class="_yozm N=a:CMW.yozm" id="yozm_{=level}"><label for="yozm_{=level}" class="thesedays {if !isYozm}off{/if}">요즘</label><span>에 함께 등록 <a href="#" class="set N=a:CMW.snsset">설정</a></span></div>',policyDesc:'<div class="cbox_desc2"><p><span>주제와 무관한 댓글, 악플은 삭제될 수 있습니다.</span><a href="#" target="_blank">댓글 운영정책</a></p></div>',textCountDesc:'<div class="cbox_desc2"><em class="cbox_text_length">현재 입력한 글자수 </em><span class="cbox_present_text_length">0</span>/ <em class="cbox_text_length">전체 입력 가능한 글자수 </em><span class="cbox_total_text_length">0</span> </div>',me2checkDesc:'<p class="cbox_desc"><input type="checkbox" name="chk_submit_m2day" id="chk_submit_m2day4" class="cbox_input_chk"><span><a href="#" target="_blank">나의 미투데이</a>에 글을 등록합니다.</span></p>',me2guideDesc:'<div class="cbox_btn_area3"><button type="button" class="cbox_help"><span>도움말</span></button></div>',me2certifyDesc:'<p class="cbox_desc3"><a href="#" target="_blank">미투데이 시작하기</a></p>',me2decertifyButtonInDesc:'<a href="#" target="_blank">인증해제</a>',me2guideLayer:'<div class="cbox_layer_popup" tier="1" style="width:278px; left:0; top:0;"><button type="button" class="cbox_close N=a:CMW.close"><span><em>닫기</em></span></button><p class="cbox_desc6">체크박스를 선택하여 <a href="http://me2day.net" target="_blank">미투데이</a>에 글을<br>동시에 등록할 수 있습니다.</p></div>',profileLayer:'<div class="cbox_layer_popup" tier="1" style="width:298px; left:54px; top:-12px;"><form action="#" method="post"><button type="button" class="cbox_close N=a:CMW.close"><span><em>닫기</em></span></button><dl class="cbox_list_profile"><dt>프로필 선택</dt><dd>내 댓글 작성자명에 해당 블로그 링크가 걸립니다.</dd></dl><ul></ul><div class="cbox_btn_area2"><input type="image" class="N=a:CMW.ok"src="http://static.naver.net/common/comment/btn_confirm.gif" alt="확인" onMouseOver="this.src=\'http://static.naver.net/common/comment/btn_confirm_over.gif\'" onMouseOut="this.src=\'http://static.naver.net/common/comment/btn_confirm.gif\'"><a href="#" class="N=a:CMW.cancel"><img src="http://static.naver.net/common/comment/btn_cancel.gif" width="45" height="25" alt="취소" onMouseOver="this.src=\'http://static.naver.net/common/comment/btn_cancel_over.gif\'" onMouseOut="this.src=\'http://static.naver.net/common/comment/btn_cancel.gif\'" ></a></div></form></div>',personaconLayer:'<div class="cbox_layer_popup" tier="1" style="width:298px; left:54px; top:-12px;"><button type="button" class="cbox_close"><span><em>닫기</em></span></button><ul></ul><div class="cbox_btn_area2"><a href="#"><img src="http://static.naver.net/common/comment/btn_cancel.gif" width="45" height="25" alt="취소" onMouseOver="this.src=\'http://static.naver.net/common/comment/btn_cancel_over.gif\'" onMouseOut="this.src=\'http://static.naver.net/common/comment/btn_cancel.gif\'" ></a></div></div>',me2HelpLayer:'<span class="cbox_layer_popup" tier="2" style=" width:278px; left:0; top:0;"><a href="#" class="cbox_close"><span><em>닫기</em></span></a><span class="cbox_desc6">내 미투데이에 등록한 사진, 별명을 사용합니다.</span></span>',naverHelpLayer:'<span class="cbox_layer_popup" tier="2" style="width:278px; left:0; top:0;"><a href="#" class="cbox_close"><span><em>닫기</em></span></a><span class="cbox_desc6">네이버 회원정보에 등록한 별명을 사용합니다.</span></span>',thumbMediumProfileImg:'<img alt="썸네일" class="cbox_user_thumb" width="40" height="40" >',thumbSmallProfileImg:'<img alt="썸네일" class="cbox_user_thumb" width="22" height="22" >',thumbProfileBorder:'<span class="cbox_tmp_border"></span>',profileButton:'<button type="button" class="N=a:CMW.prof"><span>변경</span></button>',thumbPersonaconImg:'<img alt="썸네일" class="cbox_personacon_thumb" width="50" height="50" >',personaconButton:'<button type="button"><span>스티커</span></button>',profileRadio:'<input type="radio" name="rdo_profile" class="cbox_input_rdo">',blogLabel:"<label>네이버 블로그 프로필</label>",me2Label:"<label>미투데이 프로필</label>",naverLabel:"<label>네이버 별명</label>",baseball9Label:"<label>야구9단 프로필</label>",aBlank:'<a href="#" target="_blank"></a>',helpButton:'<span class="cbox_btn_area4"><button type="button" class="cbox_help"><span>도움말</span></button></a>',decertifyButton:'<a href="#" class="cbox_option" target="_blank"><span>인증해제</span></a>',certifyButton:'<a href="#" class="cbox_option" >가져오기</a>',authorImg:'<img width="40" height="12" class="cbox_admin" alt="" src="http://static.naver.net/common/comment/blank.gif">',authorText:"<span>필자</span>",spanWriteBox:'<div class="cbox_txt_area"><table cellspacing="0" class="cbox_section"><caption>덧글 입력박스</caption><tbody><tr><td></td><td><textarea class="cbox_txt_focus_area" cols="80" rows="20" name="" title="댓글 입력창"></textarea></td><td class="cbox_btn_area N=a:CMW.ok"><input type="image" src="http://static.naver.net/common/comment/btn_registry.gif" alt="등록" onMouseDown="this.src=\'http://static.naver.net/common/comment/btn_registry_down.gif\'" onMouseOut="this.src=\'http://static.naver.net/common/comment/btn_registry.gif\'"></td></tr><tr><td></td><td><div class="cbox_desc_area"></div></td><td></td></tr></tbody></table></div>',scoreArea:'<div class="cbox_select_area"><div id="s2" class="selectbox-noscript"><label for="select_grade">평점 선택 옵션</label><select id="select_grade" name="" class="selectbox-source N=a:CMW.star"><option class="selectbox-default">평점선택</option><option value="10">10점</option><option value="9">9점</option><option value="8">8점</option><option value="7">7점</option><option value="6">6점</option><option value="5">5점</option><option value="4">4점</option><option value="3">3점</option><option value="2">2점</option><option value="1">1점</option></select><div class="selectbox-box"><div class="selectbox-label">평점선택</div></div><div class="selectbox-layer"><div class="selectbox-list"></div></div></div></div>',scoreItem:'<separator/><span class="cbox_star_grade"><span style="width:100%;"><em>10점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:90%;"><em>9점</em></span></span<separator/><span class="cbox_star_grade"><span style="width:80%;"><em>8점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:70%;"><em>7점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:60%;"><em>6점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:50%;"><em>5점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:40%;"><em>4점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:30%;"><em>3점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:20%;"><em>2점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:10%;"><em>1점</em></span></span>',thirdOfCommentBody:'<div class="cbox_info_area3"></div>',fourthOfCommentBody:'<div class="cbox_info_area2"><a href="#"><strong>답글</strong> <span class="reply_num"></span></a></div>',scoreBoard:'<div class="cbox_section"><span class="cbox_star_grade"></span></div>',replyAreaPage:'<li><p class="cbox_paginate2"><a href="#" class="pglt">이전 답글</a><a href="#" class="pgrt">다음 답글</a></p></li>',mobileIcon:'<img src="http://static.comic.naver.com/staticImages/COMICWEB/NAVER/img/detail/ico_mobile.gif" width="9" height="12" alt="모바일" class="ico_mobile">',mobileLayer:'<div style="top:26px; left:159px z-index:10" class="ly_mobile">모바일에서 작성한 댓글입니다.<em></em></div>'}})
},element:function(c,a){var d=this.option("elements");
if(typeof d=="undefined"||d==null){d={};
this.option("elements",d)
}if(typeof c=="object"){for(var b=0;
b<c.length;
b++){d[b]=c[b]
}}else{if(typeof c=="string"){if(typeof a=="string"){d[c]=a
}else{return d[c]
}}else{return null
}}},template:function(d,c){var b=this.option("templates");
if(typeof b=="undefined"||b==null){b={};
this.option("templates",b)
}if(typeof d=="object"){for(var a=0;
a<d.length;
a++){b[a]=d[a]
}}else{if(typeof d=="string"){if(typeof c=="string"){b[d]=c
}else{return jindo.$Template(b[d])
}}else{return null
}}},css:function(c,d){var b=this.option("css");
if(typeof b=="undefined"||b==null){b={};
this.option("css",b)
}if(typeof c=="object"){for(var a=0;
a<c.length;
a++){b[a]=c[a]
}}else{if(typeof c=="string"){if(typeof d=="string"){b[c]=d
}else{return b[c]
}}else{return null
}}}}).extend(jindo.Component);
sps.CommentBox.Config.prototype.message.UNAVAILABLE_OPERATION="요청한 동작을 수행할 수 없습니다.";
sps.CommentBox.Config.prototype.message.ALREADY_REPORT="이미 신고된 글입니다.";
sps.CommentBox.Config.prototype.message.NO_CONTENTS="댓글 내용을 입력해주세요.";
sps.CommentBox.Config.prototype.message.NOT_LOGIN="로그인을 하신 후 이용해 주시기 바랍니다.";
sps.CommentBox.Config.prototype.message.NEED_LOGIN="로그인이 필요한 기능입니다.";
sps.CommentBox.Config.prototype.message.EXCEED_MAX_LENGTH="{=max}자까지 입력할 수 있습니다.";
sps.CommentBox.Config.prototype.message.BLOCK_COPY="복사 기능은 사용하실 수 없습니다.";
sps.CommentBox.Config.prototype.message.BLOCK_PASTE="붙여넣기 기능은 사용하실 수 없습니다.";
sps.CommentBox.Config.prototype.message.REPORT_COMPLETE="신고 완료 처리 되었습니다.";
sps.CommentBox.Config.prototype.message.DELETE_CONFIRM="정말 삭제하시겠습니까?";
sps.CommentBox.Config.prototype.message.RECOMMEND_COMPLETE="추천 했습니다.";
sps.CommentBox.Config.prototype.message.DISCOMMEND_COMPLETE="비추천 했습니다.";
sps.CommentBox.Config.prototype.message.AUTHOR_RECOMMEND_COMPLETE="필자추천 했습니다.";
sps.CommentBox.Config.prototype.message.AUTHOR_DISCOMMEND_COMPLETE="필자추천이 취소되었습니다.";
sps.CommentBox.Config.prototype.message.ME2DAY_POSTED="정말 삭제하시겠습니까? \n\n이글은 미투데이에 동시 등록된 글입니다.\n미투데이의 댓글은 미투데이에 가서 삭제해주셔야 합니다.";
sps.CommentBox.Config.prototype.message.REQUIRE_SCORE="평점을 선택해야 댓글을 작성할 수 있습니다.";
sps.CommentBox.Config.prototype.message.CREATE_ERROR_PWORD_BLOCK="작성하신 내용에 금칙어가 포함되어 있습니다. [{=pwords}]";
sps.CommentBox.Config.prototype.message.CREATE_ERROR_PWORD_ABUSING="작성하신 내용에 사용이 제한된 문구가 포함되어 일시적으로 등록이 제한됩니다.";
sps.CommentBox.Config.prototype.message.DEFAULT_TEXT="";
sps.CommentBox.Config.NAME="sps.CommentBox.Config";
sps.CommentBox.Config.VERSION="1.0.0";
sps.config=new sps.CommentBox.Config();
document.domain="naver.com";
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{},disableForm:function(a){var b=jindo.$Event(a);
b.stopDefault();
return false
},core:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}if(typeof sps.disableForm=="undefined"){sps.disableForm=function(a){var b=jindo.$Event(a);
b.stopDefault();
return false
}}sps.CommentBox.Core=jindo.$Class({name:"unknown",version:"unknown",message:{},$init:function(){this.name=sps.CommentBox.Core.NAME;
this.version=sps.CommentBox.Core.VERSION;
this.indexInstance=sps.CommentBox.Core.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},initialize:function(){this.initializeOnly();
this.list("page",1)
},initializeOnly:function(){this.saveInstanceInConfig();
this.config.option("initialized",true);
this.config.instance.util.getUrlList();
this.config.instance.util.getTicketConfig();
var e=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
if(this.config.option("useSpan")){e.addClass(this.config.css("bodySpan"))
}var b={};
b.count=this.config.instance.ui.makeCountArea();
b.page=this.config.instance.ui.makePaginationArea();
b.write=this.config.instance.ui.makeRootWriteBoxArea();
b.list=this.config.instance.ui.makeListArea();
b.extra1=this.config.instance.ui.makeExtraArea("extra1");
b.extra2=this.config.instance.ui.makeExtraArea("extra2");
b.extra3=this.config.instance.ui.makeExtraArea("extra3");
b.extra4=this.config.instance.ui.makeExtraArea("extra4");
b.extra5=this.config.instance.ui.makeExtraArea("extra5");
var d=this.config.option("formation");
for(var c=0;
c<d.length;
c++){var a=d[c];
e.append(b[a])
}if(typeof this.config.instance.layer=="object"){this.config.instance.layer.make()
}if(this.config.option("iframeId")){this.config.instance.util.initIframe()
}},list:function(a,c){var b=this.commonParam();
b.page_size=this.config.option("pageSize");
if(a=="page"&&typeof c=="number"){b.page_no=c
}if(a=="comment"&&typeof c=="number"){b.comment_no=c;
b.up_to_date_yn="Y"
}if(a=="user"){if(typeof c=="number"){b.user_comment=c
}else{b.user_comment=1
}b.up_to_date_yn="Y"
}if(typeof this.config.option("viewCategoryId")!="undefined"){b.view_category_id=this.config.option("viewCategoryId")
}if(typeof this.config.option("currentSortOption")!="undefined"){b.sort=this.config.option("currentSortOption")
}this.config.instance.ajax.call({operation:"list",onSuccess:jindo.$Fn(this.config.instance.ui.list,this.config.instance.ui).bind(),param:b})
},commonParam:function(){var a={};
a.ticket=this.config.option("ticket");
a.object_id=this.config.option("objectId");
a._ts=(new Date().getTime());
if(typeof this.config.option("lkey")!="undefined"){a.lkey=this.config.option("lkey")
}return a
},saveInstanceInConfig:function(){this.config.instance.core=sps.CommentBox.Core.getInstance()[this.indexInstance];
this.config.instance.ajax=sps.CommentBox.Ajax.getInstance()[this.indexInstance];
this.config.instance.ui=sps.CommentBox.UI.getInstance()[this.indexInstance];
this.config.instance.layer=sps.CommentBox.Layer.getInstance()[this.indexInstance];
this.config.instance.writebox=sps.CommentBox.WriteBox.getInstance()[this.indexInstance];
this.config.instance.util=sps.CommentBox.Util.getInstance()[this.indexInstance];
if(typeof sps.me2day=="object"){this.config.instance.me2day=sps.CommentBox.Me2day.getInstance()[this.indexInstance]
}if(typeof sps.profile=="object"){this.config.instance.profile=sps.CommentBox.profile.getInstance()[this.indexInstance]
}if(typeof sps.score=="object"){this.config.instance.score=sps.CommentBox.score.getInstance()[this.indexInstance]
}if(typeof sps.personacon=="object"){this.config.instance.personacon=sps.CommentBox.personacon.getInstance()[this.indexInstance]
}}}).extend(jindo.Component);
sps.CommentBox.Core.NAME="sps.CommentBox.Core";
sps.CommentBox.Core.VERSION="1.0.0";
sps.core=new sps.CommentBox.Core();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{},ajax:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.Ajax=jindo.$Class({name:"unknown",version:"unknown",message:{},defaultError:{},error:{create:{}},$init:function(){this.name=sps.CommentBox.Ajax.NAME;
this.version=sps.CommentBox.Ajax.VERSION;
this.option("handlers",{});
this.option("list","list_comment.nhn");
this.option("create","set_comment.nhn");
this.option("delete","delete_comment.nhn");
this.option("me2day","is_authenticated_me2day.nhn");
this.option("isReport","isreported_comment.nhn");
this.option("report","report_comment.nhn");
this.option("checkEnableSetComment","check_comment_settable.nhn");
this.option("profile","get_profile.nhn");
this.option("profileList","get_profile_list.nhn");
this.option("setProfileType","set_profile_type.nhn");
this.option("isLogin","is_logged_in.nhn");
this.option("vote","vote_comment.nhn");
this.option("authorRecommend","recommend_comment.nhn");
this.option("replyList","list_reply_comment.nhn");
this.option("snsAuthStatus","get_sns_auth_status.nhn");
this.option("ticketConfig","get_ticket_config.nhn");
this.option("urlList","get_url_list.nhn");
this.indexInstance=sps.CommentBox.Ajax.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},call:function(b){var c=this.option("handlers");
delete c[b.operation];
c[b.operation]=b.onSuccess;
var a=this.config.option("serviceAddress")+this.option(b.operation);
var d=jindo.$Ajax(a,{method:this.config.option("method")||"post",async:b.async?b.async:false,onload:jindo.$Fn(this.onSuccess,this).bind(b.operation),onerror:jindo.$Fn(this.onError,this).bind(b.errorMessage)});
d.request(b.param||{})
},onSuccess:function(c,a){var d=a.json();
if(this.errorHandler(d,this.error[c])==0){var b=this.option("handlers")[c];
b(d)
}},onError:function(b,a){if(b){alert(b)
}},callSync:function(a,f){var b=this.config.option("serviceAddress")+this.option(a);
var c={success:undefined,response:undefined};
var d=jindo.$Ajax(b,{method:this.config.option("method")||"post",async:false,onload:jindo.$Fn(this.onSuccessSync,this).bind(c),onerror:jindo.$Fn(this.onErrorSync,this).bind(c)});
d.request(f);
if(c.success){var e=this.errorHandler(c.response,this.error[a]);
if(e==0){return c.response
}}},onSuccessSync:function(b,a){b.success=true;
b.response=a.json()
},onErrorSync:function(b,a){b.success=false
},errorHandler:function(c,b){if(!c.error){return -1
}var a=c.error;
if(a.no&&a.no!="0"){if(a.no=="-1"){alert(this.config.message.UNAVAILABLE_OPERATION)
}else{if(b&&b[a.no]){var d=jindo.$Fn(b[a.no],this).bind();
d(c)
}else{if(this.defaultError&&this.defaultError[a.no]){jindo.$Fn(this.defaultError[a.no],this).bind(c)()
}else{alert(a.message)
}}}}return Number(a.no)
}}).extend(jindo.Component);
sps.CommentBox.Ajax.prototype.error.create[409019]=function(j){var e=[];
var g=j.error.arguments[0];
for(var d=0;
d<g.length;
d++){e[d]=encodeURIComponent(g[d].word)
}var h=e.join(",");
var f="1";
if(g[0].reason=="검색어뷰징/도배"){f="2"
}var c=new jindo.$H({type:f,pw_word:h}).toQueryString();
var a=this.config.option("pwBlockUrl")+"?"+c;
var b=this.config.instance.util.popUp(a,"abuseError",410,342);
if(!b){for(var d=0;
d<g.length;
d++){e[d]=g[d].word
}pw_words=e.join(",");
if(f=="1"){alert(jindo.$Template(this.config.message.CREATE_ERROR_PWORD_BLOCK).process({pwords:pw_words}))
}else{alert(jindo.$Template(this.config.message.CREATE_ERROR_PWORD_ABUSING).process({pwords:pw_words}))
}}};
sps.CommentBox.Ajax.prototype.error.create[409111]=function(a){alert(a.error.message);
this.config.instance.writebox.onCreate(a)
};
sps.CommentBox.Ajax.prototype.error.create[409112]=function(a){alert(a.error.message);
this.config.instance.writebox.onCreate(a)
};
sps.CommentBox.Ajax.prototype.error.create[409113]=function(a){alert(a.error.message);
this.config.instance.writebox.onCreate(a)
};
sps.CommentBox.Ajax.prototype.error.create[409114]=function(a){alert(a.error.message);
this.config.instance.writebox.onCreate(a)
};
sps.CommentBox.Ajax.prototype.defaultError[403101]=function(a){alert(a.error.message);
this.config.option("isLogin",false);
this.config.instance.ui.resetPage()
};
sps.CommentBox.Ajax.NAME="sps.CommentBox.Ajax";
sps.CommentBox.Ajax.VERSION="1.0";
sps.ajax=new sps.CommentBox.Ajax();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.Comment=jindo.$Class({name:"unknown",version:"unknown",message:{},$init:function(e){this.name=sps.CommentBox.Comment.NAME;
this.version=sps.CommentBox.Comment.VERSION;
this.indexInstance=e.indexInstance;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance];
var b=this.config.option("comment");
var a=this.config.option("convention");
var g=this.config.option("booleans");
for(var d=0;
d<b.length;
d++){var c=a[b[d]];
if(typeof c=="undefined"){c=b[d]
}var f=e[c];
if(g[b[d]]){f=f=="Y"
}this.option(b[d],f)
}this.option("config",this.config)
},deleteCommand:function(){var a=this.config.message.DELETE_CONFIRM;
if(this.option("isMe2DayPosted")=="Y"){a=this.config.message.ME2DAY_POSTED
}if(!confirm(a)){return false
}var b={};
b.ticket=this.config.option("ticket");
b.object_id=this.config.option("objectId");
b.comment_no=this.option("commentNo");
b.page_no=this.config.instance.ui.option("currentPageNo");
b.page_size=this.config.option("pageSize");
if(typeof this.config.option("viewCategoryId")!="undefined"){b.view_category_id=this.config.option("viewCategoryId")
}this.config.instance.ajax.call({operation:"delete",onSuccess:jindo.$Fn(this.config.instance.ui.list,this.config.instance.ui).bind(),param:b})
},reportCommand:function(){var c={};
c.ticket=this.config.option("ticket");
c.object_id=this.config.option("objectId");
c.comment_no=this.option("commentNo");
var a=this.config.instance.ajax.callSync("isReport",c);
if(a){if(a.reported_yn===0){var b=this.config.option("pwReportUrl");
c=jindo.$H(c);
if(c.length()>0){b+="?"+c.toQueryString()
}this.config.instance.util.popUp(b,"report",531,533)
}else{alert(this.config.message.ALREADY_REPORT)
}}},replyCommand:function(i){this.config.instance.ui.resetList();
var g=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
var a=g.query(this.config.element("list")+" ul");
var h=jindo.$Element(a);
var d=h.query(".comment_no_"+this.option("commentNo")+" ul");
var b=jindo.$Element(d);
var k=this.config.instance.writebox.createReplyWrite(b,this.option("commentNo"));
var f=h.query(".comment_no_"+this.option("commentNo")+" .reply");
var j=jindo.$Element(f);
var l=this.config.template("replyCancelCommand").process(this.option());
var c=jindo.$Element(l);
if(c==null){return
}jindo.$Fn(function(e){var m=jindo.$Event(e);
this.config.instance.ui.resetList();
m.stopDefault();
return false
},this).attach(c,"click");
j.before(c);
j.leave()
},recommendCommand:function(){this.vote("recommend")
},discommendCommand:function(){this.vote("discommend")
},vote:function(a){var b={};
b.ticket=this.config.option("ticket");
b.object_id=this.config.option("objectId");
b.comment_no=this.option("commentNo");
if(a=="recommend"){b.recommend_up_yn="Y"
}else{b.recommend_up_yn="N"
}this.config.instance.ajax.call({operation:"vote",onSuccess:jindo.$Fn(this.processVote,this).bind(a),param:b})
},processVote:function(b,a){this.config.instance.core.list("page",this.config.instance.ui.option("currentPageNo"));
if(b=="recommend"){alert(this.config.message.RECOMMEND_COMPLETE)
}else{alert(this.config.message.DISCOMMEND_COMPLETE)
}},authorCommand:function(){this.authorRecommend("recommend")
},authorCancelCommand:function(){this.authorRecommend("discommend")
},authorRecommend:function(a){var b={};
b.ticket=this.config.option("ticket");
b.object_id=this.config.option("objectId");
b.comment_no=this.option("commentNo");
if(a=="recommend"){b.recommend_yn="Y"
}else{b.recommend_yn="N"
}this.config.instance.ajax.call({operation:"authorRecommend",onSuccess:jindo.$Fn(this.processAuthorRecommend,this).bind(a),param:b})
},processAuthorRecommend:function(b,a){this.config.instance.core.list("page",this.config.instance.ui.option("currentPageNo"));
if(b=="recommend"){alert(this.config.message.AUTHOR_RECOMMEND_COMPLETE)
}else{alert(this.config.message.AUTHOR_DISCOMMEND_COMPLETE)
}},_command:function(){var c=this.config.option("commands");
var b=this.config.option("maxDepth");
var m=this.option("replyLevel");
var h=jindo.$Element("<div></div>");
var j=0;
var q="";
for(var g=0;
g<c.length;
g++){var f=c[g];
if(this.config.option("isDeleted")){continue
}if(this.option("status")>=7&&this.option("status")<=9){if(!(f=="delete")){continue
}}if(this.config.option("useReplyArea")&&m>this.config.option("maxReplyAreaDepth")){var d=jindo.$A(this.config.option("allowCommandsAtReplyArea"));
if(!d.has(f)){continue
}}if(f=="reply"){if(m>=b){continue
}if(this.option("isRecommendArea")){continue
}}if(f=="author"){if(this.option("isAuthorRecommend")){f="authorCancel"
}}var k=this.config.template(f+"Command").process(this.option());
if(k==""){continue
}var a=jindo.$Element(k);
if(j==0){a.addClass(this.config.css("firstCommand"))
}else{if(j>0){var p=jindo.$A(this.config.option("nobarInCommandGroup"));
if(p.has(q)){a.addClass(this.config.css("noBarOnCommend"))
}}}if((f=="recommend"&&this.option("upCount")>0)||(f=="discommend"&&this.option("downCount")>0)){var o=a.query(this.config.element("recommendCount"));
var e=jindo.$Element(o);
e.addClass(this.config.css("recommendCountOn"));
if(f=="recommend"){e.text(this.option("upCount"))
}else{if(f=="discommend"){e.text(this.option("downCount"))
}}}a.addClass(f);
var l=this[f+"Command"];
if(typeof l=="function"){var n=jindo.$Fn(function(t,r){var s=jindo.$Event(r);
var i=s.element;
if(this.config.instance.util.redirectLogin(r)){this[t+"Command"](r)
}s.stopDefault();
return false
},this).bind(f);
jindo.$Fn(n).attach(a,"click")
}if(a!=null){h.append(a);
q=f;
j++
}}return h.child()
},build:function(){var j="";
var a=false;
if(this.option("isDeleted")){j=this.config.template("deleteComment");
a=true
}else{if(this.option("status")>=7&&this.option("status")<=9){j=this.config.template("blockComment");
a=true
}else{j=this.config.template("comment")
}}var f=j.process(this.option());
var d=jindo.$Element(f);
var g=d.query(this.config.element("commentText"));
var h=jindo.$Element(g);
if(this.config.option("browser")=="safari"){h.css("font-family",this.config.option("replaceErrorFontFamily"))
}var b=d.query(this.config.element("commands"));
var c=this._command();
if(b!=null){b=jindo.$Element(b);
for(var e=0;
e<c.length;
e++){b.append(c[e])
}}if(a){return d
}if(this.config.option("useScore")){d=this.config.instance.score.addScoreToComment(d,this.option())
}else{if(this.config.option("useProfile")){d=this.config.instance.profile.addProfileToComment(d,this.option())
}}if(this.option("isUserRecommend")||this.option("isAuthorRecommend")){d=this.config.instance.ui.addRecommendTag(d,this.option())
}if(this.option("isRecommendArea")){d=this.config.instance.ui.deckRecommendArea(d,this.option())
}if(this.config.option("useMobile")&&this.option("isMobile")){d=this.config.instance.ui.addMobileIcon(d,this.option())
}return d
}}).extend(jindo.Component);
sps.CommentBox.Comment.NAME="sps.CommentBox.Comment";
sps.CommentBox.Comment.VERSION="1.0.0";
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.Layer=jindo.$Class({name:"unknwon",version:"unknown",$init:function(){this.name=sps.CommentBox.Layer.NAME;
this.version=sps.CommentBox.Layer.VERSION;
this.indexInstance=sps.CommentBox.Layer.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},make:function(){var a=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
jindo.$Fn(function(b){this.hideLayer(1)
},this).attach(a,"click");
this.create()
},create:function(){var g=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
var a=this.config.option("layers");
for(var d=0;
d<a.length;
d++){var f=a[d];
var h=this.config.template(f+"Layer").process();
if(h==""){continue
}var c=jindo.$Element(h);
c.addClass(f+"Layer");
c.hide();
c=this.operate(c);
var e=this[f+"Layer"];
if(typeof e=="function"){var b=jindo.$Fn(e,this).bind();
c=b(c)
}g.append(c)
}},operate:function(a){var b=jindo.$Element(a.query(this.config.element("closeButton")));
if(b==null){return a
}jindo.$Fn(function(d){var c=jindo.$Event(d);
c.stop(jindo.$Event.CANCEL_BUBBLE)
}).attach(a,"click");
jindo.$Fn(function(){this.hideLayer(a.attr("tier"))
},this).attach(b,"click");
jindo.$Fn(sps.disableForm).attach(b,"click");
jindo.$Fn(function(){b.addClass(this.config.css("closeButtonOver"))
},this).attach(b,"mouseenter");
jindo.$Fn(function(){b.removeClass(this.config.css("closeButtonOver"))
},this).attach(b,"mouseleave");
return a
},hideLayer:function(c){var e=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
var a=jindo.$ElementList(e.queryAll(this.config.element("layer")));
for(var b=0;
b<a.length();
b++){var f=a.get(b);
var d=f.attr("tier");
if(d>=c){f.hide()
}}},getLayer:function(b){var c=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
var a=jindo.$Element(c.query("."+b+"Layer"));
this.hideLayer(a.attr("tier"));
return a
},adjustPosition:function(e,c,d,f){var b=0;
var a=0;
c.show();
if(d=="left"){b=e.offset().left
}else{if(d=="right"){b=e.offset().left-c.width()+e.width()
}}if(f=="top"){a=e.offset().top
}else{if(f=="bottom"){a=e.offset().top-c.height()+e.height()
}}c.offset(a,b);
return c
},me2guideLayer:function(a){return a
},profileLayer:function(a){if(this.config.option("isLogin")==true&&this.config.option("useProfile")&&typeof this.config.instance.profile=="object"){a=this.config.instance.profile.makeProfileLayer(a)
}return a
},personaconLayer:function(a){if(this.config.option("usePersonacon")&&typeof this.config.instance.personacon=="object"){a=this.config.instance.personacon.makePersonaconLayer(a)
}return a
},resetLayer:function(){var b=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
var a=jindo.$ElementList(b.queryAll(this.config.element("layer")));
a.leave();
this.create()
}}).extend(jindo.Component);
sps.CommentBox.Layer.NAME="sps.CommentBox.Layer";
sps.CommentBox.Layer.VERSION="1.0.0";
sps.layer=new sps.CommentBox.Layer();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.WriteBox=jindo.$Class({name:"unknwon",version:"unknown",message:{},$init:function(a){this.name=sps.CommentBox.WriteBox.NAME;
this.version=sps.CommentBox.WriteBox.VERSION;
this.option("isKeyDownLoop",false);
this.option("isTrackingTextCount",false);
this.option("previousText","");
this.indexInstance=sps.CommentBox.WriteBox.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},create:function(f){if(!this.config.instance.util.redirectLogin(f)){return false
}var a=jindo.$Element(f.element.form);
var g=jindo.$Element(a.query("input.parentCommentNo"));
var j=g==null?this.config.option("parentCommentNo"):g.$value().value;
var h=jindo.$Element(a.query(this.config.element("textarea")));
var c=this.config.instance.util.cancelLineBreaking(h.$value().value);
c=jindo.$S(c).trim().$value();
if(c.length==0||this.config.instance.util.compareTextWithoutRetuneChar(c,this.config.message.DEFAULT_TEXT)){alert(this.config.message.NO_CONTENTS);
setTimeout(function(){jindo.$$.getSingle(".cbox_txt_focus_area").focus()
},0);
return false
}if(typeof j=="undefined"){j=0
}this.config.fireEvent("beforeCreate",{text:c});
var b=this.fireEvent("validate",e);
if(!b){return false
}var e={};
e.ticket=this.config.option("ticket");
e.object_id=this.config.option("objectId");
e.page_size=this.config.option("pageSize");
e.object_url=this.config.option("objectUrl");
e.contents=c;
e.parent_comment_no=j;
if(typeof this.config.option("lkey")!="undefined"){e.lkey=this.config.option("lkey")
}if(this.config.option("useCategory")){e.category_id=this.config.option("categoryId");
if(typeof this.config.option("viewCategoryId")!="undefined"){e.view_category_id=this.config.option("viewCategoryId")
}}if(this.config.option("useSocialComment")){var i=jindo.$Element(a.query(this.config.element("snsCheckboxArea")));
if(i){if(i.query("input._me2day")){e.add_post_me2day=i.query("input._me2day").checked?"Y":"N"
}if(i.query("input._facebook")){e.add_post_facebook=i.query("input._facebook").checked?"Y":"N"
}if(i.query("input._twitter")){e.add_post_twitter=i.query("input._twitter").checked?"Y":"N"
}if(i.query("input._yozm")){e.add_post_yozm=i.query("input._yozm").checked?"Y":"N"
}}}if(!this.config.option("useSocialComment")&&this.config.option("useMe2Day")){var d=jindo.$Element(a.query(this.config.element("me2dayCheck")));
if(d!=null){d=d.$value();
if(d.checked){e.post_to_me2day="Y"
}}}if(this.config.option("useScore")){var l=jindo.$Element(a.query("select"));
if(l!=null){l=l.$value();
if(isNaN(l.value)){alert(this.config.message.REQUIRE_SCORE);
return false
}e.object_score=l.value
}}if(this.config.option("useReplyArea")){e.reply_page_size=this.config.option("replyPageSize")
}if(this.config.option("usePersonacon")){var k=jindo.$Element(a.query(this.config.element("personaconThumbImg")));
if(k){k=k.$value();
e.personacon=k.src
}}this.config.instance.ajax.call({operation:"create",onSuccess:jindo.$Fn(this.onCreate,this).bind(),errorMessage:this.config.message.UNAVAILABLE_OPERATION,param:e})
},onCreate:function(a){this.resetRootWriteBox();
this.config.instance.layer.resetLayer();
this.config.instance.ui.list(a);
this.config.fireEvent("afterCreate",{text:a})
},createWriteBox:function(n,e){var d=this.config.template("writeBox").process({isLogin:this.config.option("isLogin")});
var o=jindo.$Element(d);
if(this.config.option("useSpan")){var k=o.query(this.config.element("userArea"));
var m=jindo.$Element(k);
var a=this.config.template("spanWriteBox").process();
var l=jindo.$Element(a);
m.empty();
m.append(l)
}o.addClass(this.config.css("basicWriteBoxType"));
if(this.config.option("useProfile")&&typeof this.config.instance.profile=="object"){o=this.config.instance.profile.makeProfileWriteBox(o,e)
}if(this.config.option("useScore")&&typeof this.config.instance.score=="object"){o=this.config.instance.score.addSelectboxInWritebox(o)
}if(this.config.option("usePersonacon")&&typeof this.config.instance.personacon=="object"){o=this.config.instance.personacon.makePersonaconWriteBox(o,e)
}var f=o.query(this.config.element("textarea"));
var i=jindo.$Element(f);
this.addActionToTextArea(i);
if(this.config.option("browser")=="safari"){i.css("font-family",this.config.option("replaceErrorFontFamily"))
}i.css("background",this.config.option("offTextboxBackground"));
i.css("color",this.config.option("offTextboxFontColor"));
i.text(this.config.message.DEFAULT_TEXT);
o=this.createDesc(o,e);
n.append(o);
var h=n.query(this.config.element("writeButton"));
var c=jindo.$Element(h);
if(!e&&this.config.option("useSpareButtonInReplyWriteBox")){var g=c.parent();
var b=this.config.template("spareWriteButton").process();
c.leave();
c=jindo.$Element(b);
g.append(c)
}jindo.$Fn(this.create,this).attach(c,"click");
var j=jindo.$Element(n.query("form"));
if(j!=null){j=j.$value()
}jindo.$Fn(sps.disableForm).attach(j,"submit");
return n
},addActionToTextArea:function(a){jindo.$Fn(this.onKeyDownWriteArea,this).attach(a,"keydown");
jindo.$Fn(this.onFocusWriteArea,this).attach(a,"focus");
jindo.$Fn(this.onMouseDownWriteArea,this).attach(a,"mousedown");
jindo.$Fn(this.onBlurWriteArea,this).attach(a,"blur");
jindo.$Fn(this.blockContextAction,this).attach(a,"paste");
jindo.$Fn(this.blockContextAction,this).attach(a,"copy")
},onKeyDownWriteArea:function(a){if(!this.config.option("isLogin")){return false
}this.option("isKeyDownLoop",true);
this.detectOverMaxLength(a);
this.blockCopyAndPasteKey(a)
},onMouseDownWriteArea:function(a){if(!this.config.option("isLogin")){return false
}},onFocusWriteArea:function(a){if(this.config.option("isLogin")){this.defaultText(a)
}else{this.config.instance.util.redirectLogin(a)
}},onBlurWriteArea:function(a){if(!this.config.option("isLogin")){}else{this.defaultText(a)
}this.option("isKeyDownLoop",false)
},defaultText:function(b){var c=b.element;
var a=jindo.$Element(c);
var d=this.config.instance.util.cancelLineBreaking(a.text());
switch(b.type){case"focus":if(this.config.instance.util.compareTextWithoutRetuneChar(d,this.config.message.DEFAULT_TEXT)){a.css("background",this.config.option("onTextboxBackground"));
a.css("color",this.config.option("onTextboxFontColor"));
a.text("")
}break;
case"blur":if(jindo.$S(d).trim().$value()==""){a.css("background",this.config.option("offTextboxBackground"));
a.css("color",this.config.option("offTextboxFontColor"));
a.text(this.config.message.DEFAULT_TEXT)
}break
}},blockCopyAndPasteKey:function(a){if(!this.config.option("useBlockCopyAndPaste")){return
}var c=jindo.$Event(a);
var b={COPY:67,PASTE:86};
if(!c||!c.key||!(key=c.key())||!key.ctrl){return
}if(b.COPY==key.keyCode){c.stop(jindo.$Event.CANCEL_ALL);
alert(this.config.message.BLOCK_COPY)
}if(b.PASTE==key.keyCode){c.stop(jindo.$Event.CANCEL_ALL);
alert(this.config.message.BLOCK_PASTE)
}},blockContextAction:function(a){if(!this.config.option("useBlockCopyAndPaste")){return
}var b=jindo.$Event(a);
if(!b||!b.stop){return
}b.stop(jindo.$Event.CANCEL_ALL);
if(b.type=="copy"){alert(this.config.message.BLOCK_COPY)
}else{if(b.type=="paste"){alert(this.config.message.BLOCK_PASTE)
}}},detectOverMaxLength:function(h){if(!this.option("isKeyDownLoop")){return false
}var c=jindo.$Event(h);
var e=c.element;
var f=jindo.$Element(e);
var g=this.config.instance.util.cancelLineBreaking(f.text());
var i=this.config.instance.util.validation(g,1,this.config.option("maximumCommentLength"),false,false,this.config.message.EXCEED_MAX_LENGTH);
if(!i){f.text(this.option("previousText"))
}else{this.option("previousText",f.text());
if(this.option("isTrackingTextCount")){var a=jindo.$Element(c.element.form);
var d=a.query(".cbox_present_text_length");
if(d!=null){var b=jindo.$Element(d);
b.text(g.length)
}}}setTimeout(jindo.$Fn(this.detectOverMaxLength,this).bind(h),100)
},createSubNode:function(){var a=jindo.$Element("<li>");
a.addClass(this.config.css("thumbOff"));
var b=this.config.template("subNode").process();
a.append(b);
return a
},createDesc:function(j,b){var f=this.config.element("descs");
if(typeof f=="undefined"){return j
}var a=jindo.$Element(j.query(f));
if(!b&&this.config.option("isDescInOnlyRoot")){a.leave();
return j
}var h=this.config.option("descs");
for(var d=0;
d<h.length;
d++){var l=h[d];
var g={};
if(l=="socialComment"){if(!this.config.option("useSocialComment")){continue
}g=this.config.instance.util.getSnsAuthStatus();
var c=this.config.option("social");
this.config.option("useSocialComment",c.active);
if(c.active==false){continue
}else{if(b==false&&c.reply_active==false){continue
}}g.level=b?1:2
}var k=this.config.template(l+"Desc").process(g);
if(k==""){continue
}var e=jindo.$Element(k);
var m=this[l+"Desc"];
if(typeof m=="function"){var n=jindo.$Fn(m,this).bind();
e=n(e)
}a.append(e)
}if(this.config.option("isLogin")){a=this.config.instance.me2day.addMe2DayInDesc(a)
}if(a.child().length==0){a.leave()
}return j
},policyDesc:function(a){var b=a.query("a");
var c=jindo.$Element(b);
jindo.$Fn(function(){}).attach(c,"click");
jindo.$Fn(sps.disableForm).attach(c,"click");
return a
},socialCommentDesc:function(a){var b=a.queryAll("input");
jindo.$Fn(function(d){if(!this.config.option("isLogin")){this.config.instance.util.redirectLogin(d);
d.stop();
return
}var c=jindo.$Element(d.element);
if(c.tag.toLowerCase()=="input"){c=jindo.$Element(c.next())
}if(c.hasClass("off")){var f=c.attr("for").match(/(\w+)_\d+/)[1];
if(f=="me2day"){d.stopDefault();
return
}var i=this.config.option("urlList")["social"]["afterSocialAuth"];
var e=i.replace(/{SOCIAL_PROVIDER}/,f);
var g=jindo.$H({servicekey:"COMMON_COMMENT",type:f,viewtype:1,svcurl:e});
var h=this.config.option("socialAuthUrl")+g.toQueryString();
this.config.instance.util.popUp(h,"socialComment",400,350);
d.stopDefault()
}},this).attach(b,"click");
jindo.$Fn(function(c){c.element.href=this.config.option("nidManageSocialAuthUrl");
c.element.target="_blank"
},this).attach(a.query("a.set"),"click");
this.config.attach("afterSocialAuth",jindo.$Fn(this._changeSnsCheckBoxIcon,this).bind());
return a
},_changeSnsCheckBoxIcon:function(d){var b=d.sns;
var c=jindo.$$.getSingle(".cbox_sns > input._"+b);
var a=jindo.$Element(c).next();
c.checked=true;
jindo.$Element(a).removeClass("off")
},textCountDesc:function(b){this.option("isTrackingTextCount",true);
var c=b.query(".cbox_total_text_length");
var a=jindo.$Element(c);
a.text(this.config.option("maximumCommentLength"));
return b
},resetRootWriteBox:function(){var c=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
var a=c.query(this.config.element("writeboxRoot"));
var b=jindo.$Element(a);
b.empty();
this.createWriteBox(b,true);
return b
},createReplyWrite:function(c,e){var b=this.createSubNode();
var d=this.createWriteBox(b,false);
if(this.config.option("isReplyWriteBoxPositionOnBottom")){c.append(d)
}else{c.prepend(d)
}if(this.config.option("useProfile")&&typeof this.config.instance.profile=="object"){this.config.instance.profile.adjustZindex()
}if(this.config.option("usePersonacon")&&typeof this.config.instance.personacon=="object"){this.config.instance.personacon.adjustZindex()
}var a=jindo.$Element(d.query("form"));
var f=jindo.$Element("<input>");
f.attr("type","hidden");
f.addClass("parentCommentNo");
f.text(e);
a.append(f);
return d
}}).extend(jindo.Component);
sps.CommentBox.WriteBox.NAME="sps.CommentBox.WriteBox";
sps.CommentBox.WriteBox.VERSION="1.0.0";
sps.writebox=new sps.CommentBox.WriteBox();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.Util=jindo.$Class({name:"unknwon",version:"unknown",$init:function(){this.name=sps.CommentBox.Util.NAME;
this.version=sps.CommentBox.Util.VERSION;
this.indexInstance=sps.CommentBox.Util.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},popUp:function(d,c,e,a){var b=window.open(d,c,"width="+e+",height="+a+",status=no,left=0,top=0");
if(b){b.focus();
return b
}},parseQueryString:function(e){var a={};
var c=decodeURI(e);
if(c){var b=c.split(/&/);
for(var d=0;
d<b.length;
d++){var f=b[d].split(/\=/);
a[f[0]]=f[1]
}}return a
},multiLine:function(a){a=a.split(/\r/).join("");
if(this.config.option("enableMultiLine")){a=a.split(/\n/).join("<br/>")
}else{a=a.split(/\n/).join(" ")
}return a
},validation:function(e,d,a,f,b,c){e=jindo.$S(e).trim().$value();
e=this.cancelLineBreaking(e);
if(f&&e.length===0){alert(f);
return false
}if(b&&e.length<d){alert(jindo.$Template(b).process({min:escape(d.toString())}));
return false
}if(c&&e.length>a){alert(jindo.$Template(c).process({max:escape(a.toString())}));
return false
}return true
},lineBreaking:function(b){if(typeof document.body.style.wordWrap!="undefined"){return b
}if(!this.config.option("useLineBreaking8203")){return b
}var a=this.cancelLineBreaking(b);
a=a.replace(/(\s)+/g,"$1");
a=a.split("").join(String.fromCharCode(8203));
return a
},cancelLineBreaking:function(b){var a=b;
a=a.split(String.fromCharCode(8203)).join("");
return a
},redirectLogin:function(c){if(this.config.option("isLogin")){return true
}else{if(this.isLogin(false)){this.config.instance.ui.resetPage();
return true
}}if(c!=null){var h=jindo.$Event(c);
var b=h.element;
b.blur()
}if(confirm(this.config.message.NOT_LOGIN)){if(this.config.option("useLoginPopup")){var d="https://nid.naver.com/nidlogin.login?svctype=64&url="+encodeURIComponent(this.config.option("loginCallbackUrl"));
var e=400;
var a=348;
var g=Math.ceil((window.screen.width-e)/2);
var f=Math.ceil((window.screen.height-a)/2);
window.open(d,"naver_login","toolbar=0,menubar=0,resizable=yes,scrollbars=no,width="+e+",height="+a+",left="+g+",top="+f)
}else{window.top.location="https://nid.naver.com/nidlogin.login?mode=form&url="+encodeURIComponent(this.config.option("objectUrl"))
}}else{setTimeout(function(){jindo.$$.getSingle(".cbox_btn_area").focus()
},0)
}return false
},isLogin:function(a){var b={};
b.ticket=this.config.option("ticket");
this.config.instance.ajax.call({operation:"isLogin",async:false,onSuccess:jindo.$Fn(function(c){if(c.is_logged_in=="Y"){this.config.option("isLogin",true)
}else{this.config.option("isLogin",false);
if(a){alert(this.config.message.NEED_LOGIN)
}}},this).bind(),param:b});
return this.config.option("isLogin")
},profilePopUp:function(b,c){var d={};
d.ticket=this.config.option("ticket");
if(!b==""){d.comment_no=b
}else{if(!c==""){if(!this.isLogin(true)){this.config.instance.ui.resetPage();
return false
}d.profile_type=c
}}var a=this.config.option("profileHome")+"?"+jindo.$H(d).toQueryString();
window.open(a,"_blank")
},compareTextWithoutRetuneChar:function(c,a){var d=c;
var b=a;
d=d.replace(/\r/g,"");
d=d.replace(/\n/g,"");
b=b.replace(/\r/g,"");
b=b.replace(/\n/g,"");
if(d==b){return true
}return false
},initIframe:function(){this.resizeIframe();
var a=jindo.$Fn(this.resizeIframe,this).bind();
this.config.attach("afterList",a)
},resizeIframe:function(){if(!this.config.option("iframeId")){return
}var a=parent.document.getElementById(this.config.option("iframeId"));
if(!a){return
}var b=jindo.$Element(jindo.$$.getSingle("body"));
if(b.height()>0){a.style.height=b.height()+"px"
}},getSnsAuthStatus:function(){if(!this.config.option("isLogin")){return{}
}var a=jindo.$H(this.config.option("snsAuthStatus"));
if(a.length()==0){var b={};
b.ticket=this.config.option("ticket");
this.config.instance.ajax.call({operation:"snsAuthStatus",async:false,onSuccess:jindo.$Fn(function(c){if(c.sns_auth_status){this.config.option("snsAuthStatus",c.sns_auth_status)
}},this).bind(),param:b})
}return this.config.option("snsAuthStatus")
},getTicketConfig:function(){var a={};
a.ticket=this.config.option("ticket");
this.config.instance.ajax.call({operation:"ticketConfig",async:false,onSuccess:jindo.$Fn(function(b){this.config.option("social",b.social)
},this).bind(),param:a})
},getUrlList:function(){var a=jindo.$H(this.config.option("urlList"));
if(a.length()==0){this.config.instance.ajax.call({operation:"urlList",async:false,onSuccess:jindo.$Fn(function(b){this.config.option("urlList",b.url_list)
},this).bind()})
}return this.config.option("urlList")
}}).extend(jindo.Component);
sps.CommentBox.Util.NAME="sps.CommentBox.Util";
sps.CommentBox.Util.VERSION="1.0.0";
sps.util=new sps.CommentBox.Util();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{},ui:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.UI=jindo.$Class({name:"unknown",version:"unknown",$init:function(){this.name=sps.CommentBox.UI.NAME;
this.version=sps.CommentBox.UI.VERSION;
this.rowMessage;
this.option("list",{});
this.option("oMessage",{});
this.indexInstance=sps.CommentBox.UI.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},list:function(q){this.option("oMessage",q);
var a=q.comment_list;
var p=q.recommended_list;
var f=q.reply_lists[0];
this.config.fireEvent("beforeList",{text:q});
var m=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
if(this.config.option("useScore")){var b=m.query(this.config.element("list"));
var e=jindo.$Element(b);
e.addClass(this.config.css("scoreList"))
}var g=m.query(this.config.element("list")+" ul");
var c=jindo.$Element(g);
c.empty();
if(this.config.option("useRecommendArea")&&q.page_no==1){for(var i=0;
i<p.length;
i++){var k=this.preprocessing(p[i]);
k.parent_comment_no=0;
k.reply_level=1;
k.is_author=q.author_yn;
k.is_recommend_area="Y";
k.indexInstance=this.indexInstance;
var o=new sps.CommentBox.Comment(k);
var r=o.build();
c.append(r)
}}for(var n=0;
n<a.length;
n++){var d=this.preprocessing(a[n]);
d.is_author=q.author_yn;
d.isSocialLinkOpen=this.config.option("social")["link_open"];
d.isSocialReplyActive=this.config.option("social")["reply_active"];
d.indexInstance=this.indexInstance;
var j=new sps.CommentBox.Comment(d);
var l=j.build();
var h=this.seekParentElement(d);
h.append(l)
}if(typeof f=="object"&&typeof this.config.instance.score=="object"&&this.config.option("useReplyArea")){if(f.parent_comment_no>0){this.config.instance.score.displayReplyList(q)
}}this.updateCount(q);
this.spotLight(q.comment_no);
this.paginate(q);
this.config.fireEvent("afterList",{text:q})
},updateCount:function(g){var l=g.total_count;
var b=g.score;
var e=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
var h=e.query(this.config.element("countArea"));
var f=jindo.$Element(h);
f.empty();
if(typeof b.average!="undefined"&&typeof b.sum!="undefined"&&typeof b.count!="undefined"){var i=this.config.template("countDetail").process({score:g.score});
var k=jindo.$Element(i);
f.append(k)
}else{var c=this.config.template("countSimple").process({count:l});
var d=jindo.$Element(c);
f.append(d)
}if(this.config.option("useCountUnderBar")){var j=f.query("h5");
if(j!=null){var a=jindo.$Element(j);
a.addClass(this.config.css("countUnderBar"))
}}},seekParentElement:function(o){var l=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
var c=l.query(this.config.element("list")+" ul");
var n=jindo.$Element(c);
var a=Number(o.reply_level);
var f=Number(o.parent_comment_no);
var g=n;
if(f>0&&a>1){var j=n.query(".comment_no_"+f+" ul");
var h=jindo.$Element(j);
if(h==null){var m=n.query(".dummy_comment_no_"+(a-1)+" ul");
var m=jindo.$Element(m);
if(m==null){var b;
var e;
for(var k=1;
k<a;
k++){var d=jindo.$Element("<li>");
d.addClass(this.config.css("thumbOff"));
d.addClass("dummy_comment_no_"+(a-k));
var p=jindo.$Element("<ul>");
if(k==1){e=p
}else{p.append(b)
}d.append(p);
b=d
}n.append(b);
g=e
}else{g=m
}}else{g=h
}}return g
},paginate:function(q){var g=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
var h=g.query(this.config.element("paginate"));
if(h==null){return false
}var k=jindo.$Element(h);
k.html("");
this.option("currentPageNo",q.page_no);
var f=this.option("currentPageNo");
var l=0;
var n=0;
var m=Math.ceil(q.total_count/this.config.option("pageSize"));
var j=this.config.option("paginateSize");
if(this.config.option("centerPaginate")){var b=Math.floor(j/2);
l=Math.max(f-b,1);
n=l+j-1
}else{var a=f%j===0?j:f%j;
var p=f-a;
l=p+1;
n=p+j
}n=Math.max(l,n);
n=Math.min(n,m);
k.append(jindo.$Element(this.config.template("pageInfoText").process()));
if(l>1){var c=this._buildPage(1,"firstPage");
var e=this._buildPage(l-1,"prevPage");
if(c!=null){k.append(c);
k.append(document.createTextNode("\n"))
}if(e!=null){k.append(e);
k.append(document.createTextNode("\n"))
}}for(var d=l;
d<=n;
d++){var i;
if(d==f){i=this._buildPage(d,"currentPage")
}else{i=this._buildPage(d,"page")
}if(i!=null){k.append(i);
k.append(document.createTextNode("\n"))
}}if(n<m){var o=this._buildPage(n+1,"nextPage");
if(o!=null){k.append(o);
k.append(document.createTextNode("\n"))
}}},_buildPage:function(d,e){var b=this.config.template(e);
var a=b.process({page:d});
var c=jindo.$Element(a);
jindo.$Fn(jindo.$Fn(this.config.instance.core.list,this.config.instance.core).bind("page",d)).attach(c,"click");
jindo.$Fn(sps.disableForm).attach(c,"click");
return c
},preprocessing:function(a){if(!a.done_preprocessing){a.registered_ymdt=this.dateFormat(a.registered_ymdt);
a.modified_ymdt=this.dateFormat(a.modified_ymdt);
if(this.config.option("browser")=="firefox"||this.config.option("browser")=="opera"){a.contents=this.config.instance.util.lineBreaking(a.contents)
}if(this.config.option("useEscapeHtml")){a.contents=a.contents.replace("<!-- Not Allowed Tag Filtered -->","");
a.contents=jindo.$S(a.contents).unescapeHTML().escapeHTML().$value()
}a.contents=this.config.instance.util.multiLine(a.contents);
a.done_preprocessing=true
}return a
},dateFormat:function(e){var i=e.split(/\+/);
i=i[0].split(/T/);
if(i.length>1){var a=i[0].split(/-/);
var b=i[1].split(/:/);
var j=a[0];
var h=a[1];
var l=a[2];
var d=b[0];
var f=b[1];
var c=b[2].split(/\./);
var g=c[1];
c=c[0];
j=Number(j);
h=Number(h)-1;
var k=Number(l);
d=Number(d);
f=Number(f);
c=Number(c);
var m=jindo.$Date(j,h,k,d,f,c,g);
return m.format(this.config.option("dateFormat"))
}else{return i[0]
}},resetList:function(){var c=this.option("oMessage");
var b=c.comment_no;
var a=c.page_no;
if(b>0){jindo.$Fn(this.config.instance.core.list,this.config.instance.core).bind("comment",b)()
}else{jindo.$Fn(this.config.instance.core.list,this.config.instance.core).bind("page",a)()
}this.config.instance.layer.resetLayer()
},resetPage:function(){this.config.instance.writebox.resetRootWriteBox();
this.resetList()
},spotLight:function(c){if(c==0){return
}if(this.config.option("enableSpotLight")==false){return
}var f=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
var b=f.query(".comment_no_"+c+" "+this.config.element("commentBody"));
var e=jindo.$Element(b);
var d=this.config.css("spotLight");
e.addClass(d);
var a=new jindo.Transition().fps(30).attach({end:function(){e.removeClass(d);
e.$value().style.backgroundColor=""
}});
a.start(1500,e.$value(),{"@backgroundColor":jindo.Effect.linear(e.css("backgroundColor"),"rgb(255,255,255)")})
},addRecommendTag:function(d,g){var h=d.query(this.config.element("commentNameArea"));
var j=jindo.$Element(h);
var c=this.config.template("recommendImgArea").process();
var e=jindo.$Element(c);
if(g.isAuthorRecommend){var f=this.config.template("arthorRecommendImgTag").process();
var b=jindo.$Element(f);
e.append(b);
e.append(document.createTextNode("\n"))
}if(g.isUserRecommend){var a=this.config.template("userRecommendImgTag").process();
var i=jindo.$Element(a);
e.append(i)
}j.prepend(e);
return d
},addMobileIcon:function(c,g){var h=c.query(this.config.element("commentNameArea"));
var i=jindo.$Element(h);
var e=this.config.template("mobileIcon").process();
var f=jindo.$Element(e);
var a=jindo.$Element(jindo.$$.getSingle(this.config.element("body")+" "+this.config.element("mobileLayer")));
if(!a){var b=this.config.template("mobileLayer").process();
a=jindo.$Element(b);
a.hide();
var d=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
d.append(a)
}jindo.$Fn(function(l){var m=f.offset();
var k=m.top+f.height()+5;
var j=m.left-18;
a.show();
a.offset(k,j)
},this).attach(f,"mouseenter");
jindo.$Fn(function(j){a.hide()
},this).attach(f,"mouseleave");
i.append(f);
return c
},deckRecommendArea:function(e,h){e.toggleClass("comment_no_"+h.commentNo,"recommend_comment_no_"+h.commentNo);
if(this.config.option("useReplyArea")){return e
}var b=e.query(this.config.element("commentBody"));
var d=jindo.$Element(b);
var f=this.config.template("recommendReply").process();
var j=jindo.$Element(f);
var g=j.query("span");
var c=jindo.$Element(g);
if(h.replyCount){c.text(h.replyCount)
}var a=j.query("a");
var i=jindo.$Element(a);
jindo.$Fn(function(k){this.config.instance.core.list("comment",h.commentNo)
},this).attach(i,"click");
jindo.$Fn(sps.disableForm).attach(i,"click");
d.append(j);
return e
},makeCountArea:function(){var a=this.config.template("countArea").process();
var b=jindo.$Element(a);
return b
},makePaginationArea:function(){var a=this.config.template("pageArea").process();
var b=jindo.$Element(a);
return b
},makeListArea:function(){var b=this.config.template("list").process();
var a=jindo.$Element(b);
return a
},makeExtraArea:function(a){var d={config:this.config};
var c=this.config.template(a).process(d);
var b=jindo.$Element(c);
return b
},makeRootWriteBoxArea:function(){var b=this.config.template("rootWriteBoxArea").process();
var a=jindo.$Element(b);
this.config.instance.writebox.createWriteBox(a,true);
return a
}}).extend(jindo.Component);
sps.CommentBox.UI.NAME="sps.CommentBox.UI";
sps.CommentBox.UI.VERSION="1.0";
sps.ui=new sps.CommentBox.UI();
sps.CommentBox.Control=jindo.$Class({options:null,templates:null,elements:null,eventList:null,$init:function(){this.options={};
this.templates={};
this.elements={};
this.eventList={}
},setOptions:function(b,c){if(typeof b=="object"){for(var a in b){this.options[a]=b[a]
}}else{if(typeof b=="string"&&c){this.options[b]=c
}}},setTemplates:function(b,c){if(typeof b=="object"){for(var a in b){this.templates[a]=b[a]
}}else{if(typeof b=="string"&&c){this.templates[b]=c
}}},setElements:function(b,c){if(typeof b=="object"){for(var a in b){this.elements[a]=b[a]
}}else{if(typeof b=="string"&&c){this.elements[b]=c
}}},validate:function(b){var e;
if(b&&b.name=="sps.CommentBox.Core"){e=[b]
}else{e=sps.CommentBox.Core.getInstance()
}for(var d=0;
d<e.length;
d++){var a=e[d];
for(var c in this.options){a.config.option(c,this.options[c])
}for(var c in this.templates){a.config.template(c,this.templates[c])
}for(var c in this.elements){a.config.element(c,this.elements[c])
}for(var c in this.eventList){a.config.attach(c,this.eventList[c])
}}},create:function(e,d,a,c){var b=this.createOnly(e,d,a,c);
b.list("page",1);
return b
},createOnly:function(h,g,a,e){var d;
if(!h||!(d=jindo.$$.getSingle(h))){throw TypeError("Invalid target argument.")
}if(!g){throw TypeError("Invalid ticket argument.")
}if(!a){throw TypeError("Invalid objectId argument.")
}var f=sps.CommentBox.Core.getInstance();
var b=f[f.length-1];
if(b.initialized){new sps.CommentBox.Config();
new sps.CommentBox.Core();
new sps.CommentBox.Ajax();
new sps.CommentBox.UI();
new sps.CommentBox.Layer();
new sps.CommentBox.WriteBox();
new sps.CommentBox.Util();
if(sps.CommentBox.Me2day){new sps.CommentBox.Me2day()
}if(sps.CommentBox.profile){new sps.CommentBox.profile()
}if(sps.CommentBox.score){new sps.CommentBox.score()
}b=f[f.length-1]
}this.validate(b);
b.config.option("ticket",g);
b.config.option("objectId",a);
if(e){b.config.option("categoryId",e);
b.config.option("viewCategoryId",e)
}b.config.element("body",h);
var c=jindo.$Element(d);
if(!c.hasClass("cbox")){c.addClass("cbox")
}b.initializeOnly();
b.initialized=true;
return b
},addHandler:function(a,b){this.eventList[a]=b
}});
if(typeof sps.Fix=="undefined"){sps.Fix={}
}sps.CommentBox.WriteBox.prototype.onFocusWriteArea=function(a){if(!this.config.option("isLogin")){this.config.instance.util.redirectLogin(a)
}else{if(!this.config.option("isAuth")){if(this.config.instance.util.redirectAuth(a)){this.defaultText(a)
}}else{this.defaultText(a)
}}};
sps.Fix.create=sps.CommentBox.WriteBox.prototype.create;
sps.CommentBox.WriteBox.prototype.create=function(a){if(!this.config.instance.util.redirectLogin(a)){return false
}if(!this.config.instance.util.redirectAuth(a)){return false
}if(!jindo.$Fn(sps.Fix.create,this).bind()(a)){return false
}};
sps.Fix.replyCommand=sps.CommentBox.Comment.prototype.replyCommand;
sps.CommentBox.Comment.prototype.replyCommand=function(a){if(!this.config.instance.util.redirectAuth(a)){return false
}jindo.$Fn(sps.Fix.replyCommand,this).bind()(a)
};
sps.CommentBox.Util.prototype.redirectAuth=function(c){if(this.config.option("isAuth")){return true
}if(!this.checkAuth()){if(c!=null){var e=jindo.$Event(c);
var a=e.element;
a.blur()
}if(confirm(this.config.message.NOT_AUTHENTICATED)){var g=this.config.option("certUrl")||"https://nid.naver.com/user/cert.nhn?todo=cert_start";
var b=this.config.option("certRurl")||this.config.option("objectUrl");
var f=this.config.option("certSrul")||this.config.option("objectUrl");
var d=this.config.option("certSvc")||"";
top.location=g+"&rurl="+encodeURIComponent(b)+"&surl="+encodeURIComponent(f)+"&svc="+d
}return false
}return true
};
sps.CommentBox.Util.prototype.checkAuth=function(){this.config.instance.ajax.call({operation:"checkAuth",async:false,onSuccess:jindo.$Fn(this.onCheckAuth,this).bind(),param:{ticket:this.config.option("ticket")}});
return this.config.option("isAuth")
};
sps.CommentBox.Util.prototype.onCheckAuth=function(a){this.config.option("isAuth",a.is_authenticated_name=="Y")
};
sps.CommentBox.Config.prototype.message.NOT_AUTHENTICATED="정보통신망법에 따라 게시판에 글 작성 시 실명확인이 필요합니다. 실명확인을 하시겠습니까?";
sps.Fix.ajax={};
sps.Fix.ajax.$init=sps.CommentBox.Ajax.prototype.$init;
sps.CommentBox.Ajax.prototype.$init=function(){jindo.$Fn(sps.Fix.ajax.$init,this).bind()();
this.option("checkAuth","is_authenticated_name.nhn")
};
sps.ajax.option("checkAuth","is_authenticated_name.nhn");
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.Me2day=jindo.$Class({name:"unknwon",version:"unknown",$init:function(){this.name=sps.CommentBox.Me2day.NAME;
this.version=sps.CommentBox.Me2day.VERSION;
this.option("activateMe2",false);
this.indexInstance=sps.CommentBox.Me2day.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},getInformMe2Day:function(){if(this.config.option("isLogin")&&!this.config.option("useSocialComment")&&this.config.option("useMe2Day")&&!this.option("activateMe2")){this.config.instance.ajax.call({operation:"me2day",async:false,onSuccess:jindo.$Fn(function(a){this.option("activateMe2",true);
this.option("authenticatedYn",a.authenticated_yn);
this.option("profileUserId",a.profile_user_id);
this.option("me2daySsoLkey",a.me2day_sso_lkey)
},this).bind(),param:{ticket:this.config.option("ticket")}})
}},addMe2DayInDesc:function(g){this.getInformMe2Day();
if(!this.option("activateMe2")){return g
}var a=this.config.option("me2desc");
for(var d=0;
d<a.length;
d++){var c=a[d];
var h=this.config.template(c+"Desc").process();
if(h==""){continue
}var f=jindo.$Element(h);
var e=this[c+"Desc"];
if(typeof e=="function"){var b=jindo.$Fn(e,this).bind();
f=b(f)
}if(f){g.append(f)
}}return g
},me2checkDesc:function(b){var c=b.query(this.config.element("me2dayCheck"));
var e=jindo.$Element(c);
var a=b.query(this.config.element("me2dayLink"));
var d=jindo.$Element(a);
if(this.option("authenticatedYn")=="Y"){jindo.$Fn(this.openMyMe2Day,this).attach(d,"click");
jindo.$Fn(sps.disableForm).attach(d,"click")
}else{e.attr("disabled","true");
d.before(document.createTextNode(d.text()));
d.leave()
}return b
},me2guideDesc:function(a){var b=jindo.$Element(a.query(this.config.element("helpButton")));
jindo.$Fn(function(f){var c=this.config.instance.layer.getLayer("me2guide");
c=this.config.instance.layer.adjustPosition(b,c,"left","bottom");
var d=jindo.$Event(f);
d.stop(jindo.$Event.CANCEL_BUBBLE)
},this).attach(b,"click");
jindo.$Fn(sps.disableForm).attach(b,"click");
return a
},me2certifyDesc:function(b){var a=jindo.$Element(b.query("a"));
if(this.option("authenticatedYn")=="Y"){return
}else{jindo.$Fn(this.showMe2DayAuthLayer,this).attach(a,"click");
jindo.$Fn(sps.disableForm).attach(a,"click")
}return b
},showMe2DayAuthLayer:function(){if(!this.config.instance.util.isLogin(true)){this.config.instance.ui.resetPage();
return false
}var b=jindo.$Cookie();
if(Number(b.get("NID_MATCH_M"))=="1"){alert("미투데이 아이디와 네이버 아이디가 성공적으로 연동되어 있는 상태입니다");
return
}var a=this.config.option("objectUrl");
a=a.split(/\?/);
var c=jindo.$H(this.config.instance.util.parseQueryString(a[1]));
c.add("set_me2day",true);
a=a[0]+"?"+c.toQueryString();
this.config.instance.util.popUp("https://nid.naver.com/new_me2day/new_me2day.nhn?ret_url="+escape(a),"me2day",450,400);
return false
},showMe2DayReleaseLayer:function(){if(!this.config.instance.util.isLogin(true)){this.config.instance.ui.resetPage();
return false
}var a=""+this.config.option("objectUrl");
a=a.split(/\?/);
var b=jindo.$H(this.config.instance.util.parseQueryString(a[1]));
b.remove("set_me2day");
a=a[0]+"?"+b.toQueryString();
this.config.instance.util.popUp("https://nid.naver.com/new_me2day/match_delete.nhn?ret_url="+escape(a));
return false
},openMyMe2Day:function(){this.config.instance.util.profilePopUp("","me2day")
}}).extend(jindo.Component);
sps.CommentBox.Me2day.NAME="sps.CommentBox.Me2day";
sps.CommentBox.Me2day.VERSION="1.0.0";
sps.me2day=new sps.CommentBox.Me2day();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.profile=jindo.$Class({name:"unknwon",version:"unknown",$init:function(){this.name=sps.CommentBox.profile.NAME;
this.version=sps.CommentBox.profile.VERSION;
this.indexInstance=sps.CommentBox.profile.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance];
this.option("activeProfile",false);
this.option("activeProfileList",false);
this.option("profile",{});
this.option("profileList",{})
},getProfile:function(){if(!this.option("activeProfile")){this.config.instance.ajax.call({operation:"profile",async:false,onSuccess:jindo.$Fn(function(a){this.option("activeProfile",true);
this.option("profile",a)
},this).bind(),param:{ticket:this.config.option("ticket")}})
}},getProfileList:function(){if(!this.option("activeProfileList")){this.config.instance.ajax.call({operation:"profileList",async:false,onSuccess:jindo.$Fn(function(a){this.option("activeProfileList",true);
this.option("profileList",a)
},this).bind(),param:{ticket:this.config.option("ticket")}})
}},addProfileToComment:function(f,g){if(!g.writerProfileUrl&&!this.config.option("useDummyThumb")){return f
}f.removeClass(this.config.css("thumbOff"));
f.addClass(this.config.css("thumbOn"));
var e=this.assembleThumb(false,this.config.option("thumbSizeInComment"));
e.addClass(this.config.css("thumb"));
if(g.isAuthorComment){var c=this.config.template("authorImg").process();
var b=jindo.$Element(c);
var a=this.config.template("authorText").process();
var d=jindo.$Element(a);
e.append(b);
e.append(d)
}this.changeImage(e,g.writerProfileUrl,g.commentNo,g.writerProfileType);
f=this.changeNamePlate(f,g);
f.prepend(e);
return f
},changeNamePlate:function(c,d){if(d.writerProfileType=="naver"){return c
}var g=c.query("."+this.config.css("nickName"));
var b=jindo.$Element(g);
var h=c.query("."+this.config.css("userId"));
var f=jindo.$Element(h);
var e=this.addLink(d.writerNickName,d.commentNo,d.writerProfileType);
var a=this.addLink(d.writerId,d.commentNo,d.writerProfileType);
b.empty();
f.empty();
b.append(e);
f.append(document.createTextNode("("));
f.append(a);
f.append(document.createTextNode(")"));
return c
},addLink:function(e,b,c){e=e||"";
if(!this.config.option("useProfileNameLink")){var d=jindo.$Element("<span>");
d.text(e);
return d
}var a=this.config.template("aBlank").process();
var f=jindo.$Element(a);
f.text(e);
jindo.$Fn(function(g){this.config.instance.util.profilePopUp(b,c)
},this).attach(f,"click");
jindo.$Fn(sps.disableForm).attach(f,"click");
return f
},assembleThumb:function(e,a){var b;
var i;
if(a=="medium"){b=this.config.template("thumbMediumProfileImg").process();
i=jindo.$Element(b)
}else{if(a=="small"){b=this.config.template("thumbSmallProfileImg").process();
i=jindo.$Element(b)
}}var h=this.config.template("thumbProfileBorder").process();
var c=jindo.$Element(h);
var d=jindo.$Element("<div>");
if(this.config.option("useProfileThumbLink")){var f=jindo.$Element("<a>");
f.append(i);
f.append(c);
d.append(f)
}else{d.append(i);
d.append(c)
}if(this.config.option("useSpan")&&e){d.addClass(this.config.css("spanThumbs"));
var g=jindo.$Element("<div>");
g.append(d);
return g
}else{return d
}},makeProfileWriteBox:function(i,b){if(!this.config.option("isLogin")&&!this.config.option("useWriteDummyThumb")){return i
}this.getProfile();
if(!this.option("activeProfile")){return i
}i.toggleClass(this.config.css("basicWriteBoxType"),this.config.css("profileWriteBoxType"));
var g=i.query(this.config.element("userArea"));
var h=jindo.$Element(g);
var c;
if(this.config.option("useSpan")){var a=h.query("tbody tr td");
c=jindo.$Element(a)
}else{c=jindo.$Element("<div>");
h.prepend(c)
}c.addClass(this.config.css("writeboxProfile"));
var j=jindo.$Element("<div>");
j.addClass(this.config.css("writeboxProfileArea"));
c.append(j);
var d;
if(b){d=this.assembleThumb(true,"medium")
}else{d=this.assembleThumb(true,this.config.option("replyThumbSizeInWritebox"))
}d.addClass(this.config.css("thumbs"));
j.append(d);
if(this.config.option("isLogin")){this.changeImage(d,this.option("profile").profile_url,"",this.option("profile").profile_type)
}else{this.changeImage(d,"","","none")
}if(this.config.option("isLogin")){var e=this.config.template("profileButton").process();
var f=jindo.$Element(e);
j.append(f);
jindo.$Fn(function(m){if(this.config.instance.util.isLogin(true)){var k=this.config.instance.layer.getLayer("profile");
h.append(k);
k.show()
}var l=jindo.$Event(m);
l.stop(jindo.$Event.CANCEL_BUBBLE)
},this).attach(f,"click")
}return i
},adjustZindex:function(){var d=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
var a=d.query(this.config.element("list")+" ul");
var b=jindo.$Element(a);
var e=b.query(this.config.element("writebox"));
var c=jindo.$Element(e);
c.parent(jindo.$Fn(function(f){if(f.tag=="li"){f.addClass(this.config.css("cboxOn"));
return true
}return false
},this).bind())
},changeImage:function(e,h,b,f){var d=jindo.$Element(e.query("img"));
if(typeof h=="undefined"||h==""){h=this.config.option("defaultProfileUrl")
}if(this.config.option("useMemorial")){h=this.config.option("memorialDefaultImageUrl")
}d.attr("src",h);
jindo.$Fn(function(i){d.attr("src",this.config.option("defaultProfileUrl"))
},this).attach(d,"error");
var c=e.query("a");
if(c==null){return
}var g=jindo.$Element(c);
g.attr("href","#");
var a=jindo.$Element(e.query("a span"));
if(f=="none"||f=="naver"||this.config.option("useMemorial")){a.css("cursor","default");
g.css("cursor","default")
}else{jindo.$Fn(function(i){this.config.instance.util.profilePopUp(b,f)
},this).attach(g,"click")
}jindo.$Fn(sps.disableForm).attach(g,"click")
},makeProfileLayer:function(K){this.getProfileList();
if(!this.option("activeProfileList")){return K
}jindo.$Fn(function(i){this.config.instance.layer.hideLayer(2)
},this).attach(K,"click");
var l=K.query("ul");
var M=jindo.$Element(l);
var c=K.query(this.config.element("profileButtonArea"));
var Q=jindo.$Element(c);
var x=this.option("profileList");
var J=x.selected_profile_type;
var m=new Array(10);
for(var N=0;
N<x.profile_list.length;
N++){var h=x.profile_list[N];
var e=jindo.$Element("<li>");
var H=this.config.template("profileRadio").process();
var r=jindo.$Element(H);
r.attr("id",h.profile_type);
var A=jindo.$Element("<dl>");
var y=jindo.$Element("<dt>");
var I=jindo.$Element("<dd>");
var C=jindo.$Element("<span>");
C.addClass(this.config.css("nickName"));
var b=jindo.$Element("<span>");
b.addClass(this.config.css("userId"));
var w=this.assembleThumb(false,"medium");
w.addClass(this.config.css("thumb"));
var E=this.addLink(h.nickname,"",h.profile_type);
var t=this.addLink(h.user_id,"",h.profile_type);
e.append(r);
e.append(A);
A.append(y);
A.append(I);
I.append(C);
I.append(document.createTextNode(" "));
I.append(b);
if(J==h.profile_type){r.attr("checked","true")
}if(h.profile_type=="naver_blog"){var v=this.config.template("blogLabel").process();
var g=jindo.$Element(v);
g.attr("for",h.profile_type);
y.append(g);
C.append(E);
b.append(document.createTextNode("("));
b.append(t);
b.append(document.createTextNode(")"));
this.changeImage(w,h.profile_url,"","naver_blog");
r.after(w);
m[0]=e
}else{if(h.profile_type=="me2day"){var z=this.config.template("me2Label").process();
var f=jindo.$Element(z);
f.attr("for",h.profile_type);
y.append(f);
var B=this.config.template("helpButton").process();
var q=jindo.$Element(B);
jindo.$Fn(function(R){var i=this.config.instance.layer.getLayer("me2Help");
i=this.config.instance.layer.adjustPosition(q,i,"left","top");
var j=jindo.$Event(R);
j.stop(jindo.$Event.CANCEL_BUBBLE)
},this).attach(q,"click");
y.append(q);
if(h.authenticated_yn=="Y"){C.append(E);
b.append(document.createTextNode("("));
b.append(t);
b.append(document.createTextNode(")"));
this.changeImage(w,h.profile_url,"","me2day");
r.after(w)
}else{r.attr("disabled","true");
this.changeImage(w,this.config.option("me2dayDefaultImageUrl"),"","none");
r.after(w);
I.empty();
var a=this.config.template("certifyButton").process();
var D=jindo.$Element(a);
jindo.$Fn(this.config.instance.me2day.showMe2DayAuthLayer,this.config.instance.me2day).attach(D,"click");
jindo.$Fn(sps.disableForm).attach(D,"click");
I.append(D)
}m[1]=e
}else{if(h.profile_type=="naver"){e.addClass(this.config.css("noProfileThumbArea"));
var F=this.config.template("naverLabel").process();
var P=jindo.$Element(F);
P.attr("for",h.profile_type);
y.append(P);
var u=this.config.template("helpButton").process();
var p=jindo.$Element(u);
jindo.$Fn(function(R){var i=this.config.instance.layer.getLayer("naverHelp");
i=this.config.instance.layer.adjustPosition(p,i,"left","top");
var j=jindo.$Event(R);
j.stop(jindo.$Event.CANCEL_BUBBLE)
},this).attach(p,"click");
y.append(p);
C.text(h.nickname);
b.text("("+h.user_id+")");
m[2]=e
}else{if(h.profile_type=="baseball9"){var n=this.config.template("baseball9Label").process();
var d=jindo.$Element(n);
d.attr("for",h.profile_type);
y.append(d);
C.text(h.nickname);
b.text("("+h.user_id+")");
this.changeImage(w,h.profile_url,"","none");
r.after(w);
m[3]=e
}}}}}for(var O=0;
O<m.length;
O++){if(!(typeof m[O]=="undefined")){M.append(m[O])
}}var G=Q.query("input");
var o=jindo.$Element(G);
var k=Q.query("a");
var L=jindo.$Element(k);
var s=jindo.$Element(K.query("form"));
if(s!=null){s=s.$value()
}jindo.$Fn(sps.disableForm).attach(s,"submit");
jindo.$Fn(function(R){var j=jindo.$Element(R.element.form);
var i=j.query(this.config.element("profileRadio"));
var S=jindo.$Element(i);
this.setProfile(S.attr("id"))
},this).attach(o,"click");
jindo.$Fn(function(i){this.config.instance.layer.hideLayer(K.attr("tier"))
},this).attach(L,"click");
jindo.$Fn(sps.disableForm).attach(L,"click");
return K
},setProfile:function(a){var b={};
b.ticket=this.config.option("ticket");
b.profile_type=a;
this.config.instance.ajax.call({operation:"setProfileType",async:false,onSuccess:jindo.$Fn(this.modifyProfileType,this).bind(),param:b})
},modifyProfileType:function(b){this.option("activeProfile",false);
this.option("activeProfileList",false);
var e=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
var f=jindo.$ElementList(e.queryAll("."+this.config.css("thumbs")));
for(var c=0;
c<f.length();
c++){var d=f.get(c);
var a=this.assembleThumb(true,"medium");
d.html(a.html());
this.changeImage(d,b.profile_url,"",b.profile_type)
}this.config.instance.layer.hideLayer(1)
}}).extend(jindo.Component);
sps.CommentBox.profile.NAME="sps.CommentBox.profile";
sps.CommentBox.profile.VERSION="1.0.0";
sps.profile=new sps.CommentBox.profile();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.score=jindo.$Class({name:"unknwon",version:"unknown",$init:function(){this.name=sps.CommentBox.score.NAME;
this.version=sps.CommentBox.score.VERSION;
this.option("parentCommentOption",{});
this.indexInstance=sps.CommentBox.score.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},addSelectboxInWritebox:function(i){var d=i.query(this.config.element("mainPartInWritebox"));
var f=jindo.$Element(d);
var c=this.config.template("scoreArea").process();
var j=jindo.$Element(c);
var h=jindo.$Element(j.query(this.config.element("scoreDiv")));
if(h!=null){h=h.$value()
}var b=this.config.template("scoreItem").process();
var g=b.split("<separator/>");
var e=new jindo.SelectBox(h,{bUseLayerPosition:false,aOptionHTML:g});
var a=this;
e.attach({open:function(l){if(!a.config.option("isLogin")){var k=jindo.$Fn(a.config.instance.util.redirectLogin,a.config.instance.util).bind();
k(null);
k=null;
l.stop()
}}});
f.prepend(j);
return i
},detachSelectboxInWritebox:function(a){if(!this.config.option("isLogin")){return false
}var c=a.query(this.config.element("scoreArea"));
var b=jindo.$Element(c);
b.leave()
},addScoreToComment:function(m,s){var w=m.query(this.config.element("commentBody"));
var p=jindo.$Element(w);
var r=m.query(this.config.element("firstOfCommentBody"));
var n=jindo.$Element(r);
var j=this.config.template("thirdOfCommentBody").process();
var h=jindo.$Element(j);
var u=jindo.$A(n.child());
u.forEach(function(z,y,x){h.append(z)
});
this.config.instance.profile.changeNamePlate(h,s);
if(!(s.writerProfileType=="naver"&&!this.config.option("useDummyThumb"))){var t=this.config.instance.profile.assembleThumb(false,"small");
t.addClass(this.config.css("thumb"));
this.config.instance.profile.changeImage(t,s.writerProfileUrl,s.commentNo,s.writerProfileType);
h.prepend(t)
}p.append(h);
var b=this.config.template("scoreBoard").process(s);
var d=jindo.$Element(b);
var i=d.query(this.config.element("starGrade"));
var k=jindo.$Element(i);
if(s.objectScore){if(s.objectScore>0){var l=s.objectScore/this.config.option("maxScore")*100;
var v=jindo.$Element("<span style='width:"+l+"%'>");
k.append(v)
}else{k.leave()
}}else{k.leave()
}n.append(d);
if(s.replyLevel>this.config.option("maxReplyAreaDepth")){n.leave()
}if(s.replyLevel>this.config.option("maxReplyAreaDepth")){return m
}var c=this.config.template("fourthOfCommentBody").process();
var a=jindo.$Element(c);
var o=a.query("a");
var g=jindo.$Element(o);
var f=a.query(this.config.element("replyNum"));
var q=jindo.$Element(f);
var e=jindo.$Element("<strong>");
if(typeof s.replyCount=="undefined"){e.text("0")
}else{e.text(s.replyCount)
}q.append(document.createTextNode("("));
q.append(e);
q.append(document.createTextNode(")"));
if(s.replyCount>0){q.addClass(this.config.css("replyCountOn"))
}jindo.$Fn(function(x){this.option("parentCommentOption",s);
if(g.hasClass(this.config.css("replyAreaUnfold"))){var z=m.query("ul");
var y=jindo.$Element(z);
y.empty()
}else{this.replyList(0)
}g.toggleClass(this.config.css("replyAreaUnfold"))
},this).attach(g,"click");
jindo.$Fn(sps.disableForm).attach(g,"click");
p.append(a);
return m
},replyList:function(a){var c=this.option("parentCommentOption");
var b=this.config.instance.core.commonParam();
b.page_size=this.config.option("replyPageSize");
b.parent_comment_no=c.commentNo;
if(a>0){b.page_no=a
}this.config.instance.ajax.call({operation:"replyList",onSuccess:jindo.$Fn(this.displayReplyList,this).bind(),param:b})
},displayReplyList:function(l){var j=this.option("parentCommentOption");
var o=l.reply_lists[0];
var g=o.reply_list;
var h=jindo.$Element(jindo.$$.getSingle(this.config.element("body")));
var k=".";
if(j.isRecommendArea){k=".recommend_"
}var c=h.query(k+"comment_no_"+j.commentNo+" ul");
var e=jindo.$Element(c);
e.empty();
for(var f=0;
f<g.length;
f++){var d=this.config.instance.ui.preprocessing(g[f]);
d.indexInstance=this.indexInstance;
var a=new sps.CommentBox.Comment(d);
var b=a.build();
e.append(b)
}if(o.is_have_prev_page=="Y"||o.is_have_next_page=="Y"){var n=this.replyPaginate(o);
e.append(n)
}var m=this.config.instance.writebox.createReplyWrite(e,j.commentNo);
if(this.config.option("maxScoreDepth")>=j.replyLevel){this.detachSelectboxInWritebox(m)
}},replyPaginate:function(g){var e=this.config.template("replyAreaPage").process();
var a=jindo.$Element(e);
var b=a.query(this.config.element("replyAreaPageLeft"));
var c=jindo.$Element(b);
var f=a.query(this.config.element("replyAreaPageRight"));
var d=jindo.$Element(f);
if(g.is_have_prev_page=="Y"){jindo.$Fn(function(h){this.replyList(Number(g.page_no)-1)
},this).attach(c,"click");
jindo.$Fn(sps.disableForm).attach(c,"click")
}else{c.leave()
}if(g.is_have_next_page=="Y"){jindo.$Fn(function(h){this.replyList(Number(g.page_no)+1)
},this).attach(d,"click");
jindo.$Fn(sps.disableForm).attach(d,"click")
}else{d.leave()
}return a
}}).extend(jindo.Component);
sps.CommentBox.score.NAME="sps.CommentBox.score";
sps.CommentBox.score.VERSION="1.0.0";
sps.score=new sps.CommentBox.score();