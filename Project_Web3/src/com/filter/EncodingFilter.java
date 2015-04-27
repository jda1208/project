package com.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;

public class EncodingFilter implements Filter {

	//전역의미 변수
	private String Encoding;
	
	public void init(FilterConfig fConfig) throws ServletException {
		//FilterConfig 타입을 통해서 initParam 값 read
		this.Encoding = fConfig.getInitParameter("encoding");
		//System.out.println("EncodingFilter 초기화(init) : " + this.Encoding);
	}
	
    public EncodingFilter() {
    	//생성자(초기화)
    }

	public void destroy() {
		//소멸자
		this.Encoding = null;
		//System.out.println("destory : " + this.Encoding);
	}

	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		// place your code here
		// 요청 처리 Filter
		if(req.getCharacterEncoding() == null) {
			//System.out.println("Before : " + req.getCharacterEncoding());
			req.setCharacterEncoding(this.Encoding);
			//System.out.println("After : " + req.getCharacterEncoding());
		}
		// pass the request along the filter chain
		
		//request ->
		chain.doFilter(req, res);
		//response <-
	}
}
