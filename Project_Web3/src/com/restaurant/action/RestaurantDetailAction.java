package com.restaurant.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.restaurant.db.RestaurantBean;
import com.restaurant.db.RestaurantDAO;

public class RestaurantDetailAction implements Action{
		 public ActionForward execute(HttpServletRequest request,HttpServletResponse response) 
		 throws Exception{ 
			ActionForward forward = new ActionForward();
			
			RestaurantDAO resdao = new RestaurantDAO();
		   	RestaurantBean res = new RestaurantBean();
		   	
			int num=Integer.parseInt(request.getParameter("num"));
			res = resdao.ApplicationDetail(num);
		   	
		   	if(res==null){
		   		System.out.println("상세보기 실패");
		   		return null;
		   	}
		   	
		   	request.setAttribute("resdetail", res);
		   	
		   	forward.setRedirect(false);
	   		forward.setPath("./AppDetail.res");
	   		return forward;
		 }
	
}
