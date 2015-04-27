package com.restaurant.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.restaurant.db.RestaurantBean;
import com.restaurant.db.RestaurantDAO;

public class RestaurantApplyAction implements Action{
	 public ActionForward execute(HttpServletRequest request,HttpServletResponse response) 
	 	throws Exception{
		 	request.setCharacterEncoding("utf-8");
		 	
		 	ActionForward forward = new ActionForward();
		 	
		 	RestaurantDAO resdao = new RestaurantDAO();
		 	RestaurantBean res = new RestaurantBean();
	   		
	   		boolean result=false;
	   		HttpSession session = request.getSession();
	   		String id = (String)session.getAttribute("id");
	   		//String id = request.getParameter("id");
	        res.setUser_id(id);
	        res.setUser_email(request.getParameter("user_email"));
	        res.setRestaurant_name(request.getParameter("res_name"));
	        res.setRestaurant_address(request.getParameter("res_addr"));
	        res.setRestaurant_phonenum(request.getParameter("res_phone"));
	   		
	        System.out.println(request.getParameter("res_phone"));
			System.out.println(request.getParameter("user_email"));
	   		result=resdao.RestaurantApply(res);
	   		
	   		if(result==false){
	   			System.out.println("맛집신청 실패");
		   		return null;
		   	}
	   		
	   		
	   		
	   		
	   		forward.setRedirect(true);
	   		System.out.println("성공");
	   		forward.setPath("./Apply.res");
	   		return forward;
	}
}