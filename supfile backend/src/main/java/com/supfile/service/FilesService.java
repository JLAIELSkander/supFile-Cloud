package com.supfile.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.supfile.dao.IFilesDAO;
import com.supfile.entity.File;
@Service
public class FilesService implements IFilesService {
	@Autowired
	private IFilesDAO fileDAO;
	@Override
	public File getFileById(int file_id) {
		File obj = fileDAO.getFileById(file_id);
		return obj;
	}	
	
	public File getFileByMail(String mail) {
		File obj = fileDAO.getFileByMail(mail);
		return obj;
	}	
	
	@Override
	public List<File> getFilesByMail(String mail){
		return fileDAO.getFilesByMail(mail);
	}
	
	
	@Override
	public List<File> getAllFiles(){
		return fileDAO.getAllFiles();
	}
	
	@Override
	public synchronized boolean createFile(File file){
       if (fileDAO.fileExists(file.getTitle(), file.getUrl())) {
    	   return false;
       } else {
    	   fileDAO.createFile(file);
    	   return true;
       }
	}
	
	@Override
	public void updateFile(File file) {
		fileDAO.updateFile(file);
	}
	@Override
	public void deleteFile(int file_id) {
		fileDAO.deleteFile(file_id);
	}

}
