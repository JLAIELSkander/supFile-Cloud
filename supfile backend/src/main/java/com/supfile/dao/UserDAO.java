package com.supfile.dao;


import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.supfile.entity.User;


@Transactional
@Repository
public class UserDAO implements IUserDAO{
	
	// EntityManager pour créer, conserver et fusionner des données dans une base de données.
		@PersistenceContext	
		private EntityManager entityManager;	
		
		
		@Override
		public User getUserById(int id_User) {
			return entityManager.find(User.class, id_User);
		}
		

		
		@Override
		public User getUserByMail(String mail) {
			String hql = "FROM User as user WHERE user.mail= ? ";
			return (User) entityManager.createQuery(hql).setParameter(1,mail).getSingleResult();
			
		}
		
			
		@SuppressWarnings("unchecked")
		@Override
		public List<User> getAllUsers() {
			String hql = "FROM User";
			return (List<User>) entityManager.createQuery(hql).getResultList();
			
		}	
		
		
		@Override
		public void createUser(User user) {
			entityManager.persist(user);
		}
		
		@Override
		public void updateUser(User user) {
			User usr = getUserById(user.getIdUser());
			usr.setFirstName(user.getFirstName());
			usr.setLastName(user.getLastName());
			usr.setMail(user.getMail());
			usr.setPhone(user.getPhone());
			usr.setAddress(user.getAddress());
			usr.setStorage(user.getStorage());
			usr.setPassword(user.getPassword());

			entityManager.flush();
		}
		
		
		@Override
		public void deleteUser(int id_User) {
			entityManager.remove(getUserById(id_User));
		}
		
	
		@Override
		public boolean login(String mail, String password) {
			String hql = "FROM User as user WHERE user.mail = ? and user.password = ?";
			int count = entityManager.createQuery(hql).setParameter(1, mail)
			              .setParameter(2, password).getResultList().size();
			System.out.println(mail+password+count);
			return count > 0 ? true : false;
		}
		
	
		
}
