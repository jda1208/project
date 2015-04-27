package com.member.action;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.member.db.MemberDAO;

public class MemberListAction implements Action{
	public ActionForward execute(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		ActionForward forward = new ActionForward();
		
		MemberDAO memberdao = new MemberDAO();
		List memberlist = new ArrayList();

		
		memberlist = memberdao.MemberList();

		
		request.setAttribute("memberlist", memberlist);
		System.out.println(memberlist);
		forward.setRedirect(false);
		forward.setPath("./MemberList.do");
		return forward;
	}

}
