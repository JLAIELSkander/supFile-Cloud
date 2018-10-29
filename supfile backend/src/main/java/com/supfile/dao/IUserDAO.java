package com.supfile.dao;

import java.util.List;
import com.supfile.entity.User;

public interface IUserDAO {

    List<User> getAllUsers();
    User getUserById(int id_User);
    void createUser(User user);
    void updateUser(User user);
    void deleteUser(int id_User);
    User getUserByMail(String mail);	
	public boolean login(String mail, String password);
	
}
 