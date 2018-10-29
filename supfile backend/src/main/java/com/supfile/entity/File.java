package com.supfile.entity;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="file")
public class File implements Serializable { 
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="file_id")
    private int file_id;  
	@Column(name="title")
    private String title;
	@Column(name="url")	
	private String url;
	@Column(name="size")	
	private int size;
	@Column(name="date")	
	private String date;
	@Column(name="type")	
	private String type;
	@Column(name="idU")	
	private int idU;
	@Column(name="mail_user")	
	private String mail_user;
	
	
	public int getFile_id() {
		return file_id;
	}
	public void setFile_id(int file_id) {
		this.file_id = file_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getUrl() {
		return url;
	}
	public void setCategory(String url) {
		this.url = url;
	}
	
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	public int getIdU() {
		return idU;
	}
	public void setIdU(int idU) {
		this.idU = idU;
	}
	
	public String getMailUser() {
		return mail_user;
	}
	public void setMailUser(String mail_user) {
		this.mail_user = mail_user;
	}
	
} 