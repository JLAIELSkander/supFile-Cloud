package com.supfile.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
import org.springframework.stereotype.Service;

import com.supfile.dao.IUserDAO;
import com.supfile.entity.User;

@Service
public class UserService implements IUserService {
	// @Autowired dans le cas où plusieurs instances gérées par le conteneur correspondent au type souhaité.
	@Autowired
	private IUserDAO userDAO;
	@Override
	public User getUserById(int id_User) {
		User obj = userDAO.getUserById(id_User);
		return obj;
	}	
	
	@Override
	public User getUserByMail(String mail) {
		User obj = userDAO.getUserByMail(mail);
		return obj;
	}
	
	
	@Override
	public List<User> getAllUsers(){
		return userDAO.getAllUsers();
	}
	
	//Le mot clé synchronized permet de garantir un accès exclusif à une portion de code pour un seul thread

	@Override
	public synchronized boolean createUser(User user){
	      if (user==null)
	      {return false;
	       } else {
	    	   userDAO.createUser(user);
	    	   return true;
	       }
		}
	
	@Override
	public void updateUser(User user) {
		userDAO.updateUser(user);
	}
	
	@Override
	public void deleteUser(int id_User) {
		userDAO.deleteUser(id_User);
	}
	
	@Override
	public synchronized boolean login(String mail, String password){ 
               if (userDAO.login(mail,password)) {
    	           return true;
               } else {
    	           return false;
               }
	}
	
}
