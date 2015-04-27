package com.restaurant.action;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.restaurant.db.RestaurantDAO;

public class RestaurantListAction implements Action{
	public ActionForward execute(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		ActionForward forward = new ActionForward();
		
		RestaurantDAO resdao = new RestaurantDAO();
		List reslist = new ArrayList();

		
		reslist = resdao.getApplicationList();

		
		request.setAttribute("reslist", reslist);
		System.out.println(reslist);
		forward.setRedirect(false);
		forward.setPath("./List.res");
		return forward;
	}

}
