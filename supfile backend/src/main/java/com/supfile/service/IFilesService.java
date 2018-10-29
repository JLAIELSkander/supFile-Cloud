package com.supfile.service;

import java.util.List;

import com.supfile.entity.File;

public interface IFilesService {
     List<File> getAllFiles();
     File getFileById(int file_id);
  
     boolean createFile(File file);
     void updateFile(File file);
     void deleteFile(int file_id);
  	public File getFileByMail(String mail);
	public List<File> getFilesByMail(String mail);

     
}
