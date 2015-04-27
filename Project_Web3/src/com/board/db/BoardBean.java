package com.board.db;

import java.sql.Date;

public class BoardBean {
	private int TextNum;
	private String User_Id;
	private String User_Email;
	private String Text_Name;
	private Date Text_WriteDay;
	private int Text_Hit;
	private String Text_Content;
	private String Text_Data;
	private String Text_Password;
	private int refer;
	private int depth;
	private int step;
	
	public int getTextNum() {
		return TextNum;
	}
	public void setTextNum(int textNum) {
		TextNum = textNum;
	}
	public String getUser_Id() {
		return User_Id;
	}
	public void setUser_Id(String user_Id) {
		User_Id = user_Id;
	}
	public String getUser_Email() {
		return User_Email;
	}
	public void setUser_Email(String user_Email) {
		User_Email = user_Email;
	}
	public String getText_Name() {
		return Text_Name;
	}
	public void setText_Name(String text_Name) {
		Text_Name = text_Name;
	}
	public Date getText_WriteDay() {
		return Text_WriteDay;
	}
	public void setText_WriteDay(Date text_WriteDay) {
		Text_WriteDay = text_WriteDay;
	}
	public int getText_Hit() {
		return Text_Hit;
	}
	public void setText_Hit(int text_Hit) {
		Text_Hit = text_Hit;
	}
	public String getText_Content() {
		return Text_Content;
	}
	public void setText_Content(String text_Content) {
		Text_Content = text_Content;
	}
	public String getText_Data() {
		return Text_Data;
	}
	public void setText_Data(String text_Data) {
		Text_Data = text_Data;
	}
	public String getText_Password() {
		return Text_Password;
	}
	public void setText_Password(String text_Password) {
		Text_Password = text_Password;
	}
	public int getRefer() {
		return refer;
	}
	public void setRefer(int refer) {
		this.refer = refer;
	}
	public int getDepth() {
		return depth;
	}
	public void setDepth(int depth) {
		this.depth = depth;
	}
	public int getStep() {
		return step;
	}
	public void setStep(int step) {
		this.step = step;
	}
}