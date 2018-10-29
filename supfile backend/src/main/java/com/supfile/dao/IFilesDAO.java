package com.supfile.dao;
import java.util.List;
import com.supfile.entity.File;
public interface IFilesDAO {
    List<File> getAllFiles();
    File getFileById(int file_id);
    void createFile(File file);
    void updateFile(File file);
    void deleteFile(int file_id);
    boolean fileExists(String title, String url);
    public File getFileByMail(String mail);
	public List<File> getFilesByMail(String mail);

}
 