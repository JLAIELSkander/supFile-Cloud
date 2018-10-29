package com.supfile.entity;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User implements Serializable {
	
 private static final long serialVersionUID = 1L;

 @Id
 @GeneratedValue(strategy=GenerationType.AUTO)
 @Column(name="id_User")
 private int id_User;
 @Column(name="first_name")
 private String firstName;
 @Column(name="last_name")
 private String lastName;
 @Column(name="mail")
 private String mail;
 @Column (name="phone")
 private int phone;
 @Column ( name="address")
 private String address;
 @Column(name="storage")
 private float storage;
 @Column(name="password")
 private String password;
 
 
 public int getIdUser() {
return id_User;
 }
 
 public void setIdUser(int id_User) {
	 
	 this.id_User = id_User;
 }
  
public String getFirstName(){

return firstName;
	
}

public void setFirstName(String firstName) {
 
 this.firstName = firstName;
	
}


public String getLastName() {
	
return lastName;
	
}

public void setLastName(String lastName) {

this.lastName = lastName;

}

public String getMail() {
	
return mail;
	
}

public void setMail(String mail) {

this.mail = mail;

}

public int getPhone() {
	
return phone;
	
}

public void setPhone(int phone) {

this.phone = phone;

}

public String getAddress() {
	
return address;
	
}

public void setAddress(String address) {

this.address = address;

}

public Float getStorage() {
	
return storage;
	
}

public void setStorage(Float storage) {

this.storage = storage;

}

public String getPassword() {
	
return password;
	
}

public void setPassword(String password) {

this.password = password;

}

}
 
