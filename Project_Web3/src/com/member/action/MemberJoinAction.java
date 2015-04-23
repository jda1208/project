package com.member.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.member.db.MemberBean;
import com.member.db.MemberDAO;

public class MemberJoinAction implements Action{
	 public ActionForward execute(HttpServletRequest request,HttpServletResponse response) 
	 	throws Exception{
		 	request.setCharacterEncoding("utf-8");
		 	
		 	ActionForward forward = new ActionForward();
		 	
			MemberDAO memberdao=new MemberDAO();
	   		MemberBean member=new MemberBean();
	   		
	   		boolean result=false;
	   		
	   		member.setUser_name(request.getParameter("user_lastname")+request.getParameter("user_firstname"));
	   		member.setUser_id(request.getParameter("user_id"));
	   		member.setUser_password(request.getParameter("user_chkpwd"));
	   		member.setUser_phonenum(request.getParameter("user_PhoneNumber"));
	   		member.setUser_email(request.getParameter("user_email"));
	   		member.setUser_menu(request.getParameter("menu"));
	   		
	   		result=memberdao.joinMember(member);
	   		
	   		if(result==false){
	   			System.out.println("회원가입 실패");
		   		return null;
		   	}
	   		
	   		//회원가입 성공.
	   		forward.setRedirect(true);
	   		System.out.println("성공");
	   		forward.setPath("./Login.do");
	   		return forward;
	}
}