package com.supfile.dao;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.supfile.entity.File;

//La mise en oeuvre des transactions repose sur une abstraction qui permet de les mettre en oeuvre de façon similaire
// que soit l'implémentation sous-jacente de la gestion des transactions (transactions globales avec JTA ou
//transactions locales avec JDBC, JPA, JDO, Hibernate, ...).



//@Repository : Cette annotation existe depuis Spring 2.0 et sert à identifier un bean de type DAO.
@Transactional
@Repository
public class FilesDAO implements IFilesDAO {
	// EntityManager pour créer, conserver et fusionner des données dans une base de données.
	@PersistenceContext	
	private EntityManager entityManager;	
	@Override
	public File getFileById(int file_id) {
		return entityManager.find(File.class, file_id);
	}
	
	@Override
	public File getFileByMail(String mail) {
		return entityManager.find(File.class, mail);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<File> getFilesByMail(String mail) {
		String hql = "FROM File as file WHERE file.mail_user= ? ";
		return (List<File>) entityManager.createQuery(hql).setParameter(1,mail).getResultList();
		
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<File> getAllFiles() {
		String hql = "FROM File ";
		return (List<File>) entityManager.createQuery(hql).getResultList();
	}	
	@Override
	public void createFile(File file) {
		entityManager.persist(file);
	}
	
	
	@Override
	public void updateFile(File file) {
		File fil = getFileById(file.getFile_id());
		fil.setTitle(file.getTitle());
		fil.setCategory(file.getUrl());
		fil.setSize(file.getSize());
		fil.setDate(file.getDate());
		fil.setType(file.getType());
		fil.setIdU(file.getIdU());
		fil.setMailUser(file.getMailUser());



		entityManager.flush();
	}
	
	@Override
	public void deleteFile(int file_id) {
		entityManager.remove(getFileById(file_id));
	}
	
	@Override
	public boolean fileExists(String title, String url) {
		String hql = "FROM File as fil WHERE fil.title = ? and fil.url = ?";
		int count = entityManager.createQuery(hql).setParameter(1, title)
		              .setParameter(2, url).getResultList().size();
		return count > 0 ? true : false;
	}
	}
