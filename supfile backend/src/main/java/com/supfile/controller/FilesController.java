package com.supfile.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import com.supfile.entity.File;
import com.supfile.service.IFilesService;

@Controller
@RequestMapping("files")
@CrossOrigin(origins = {"http://localhost:8100","http://localhost:4200"})
public class FilesController {
	@Autowired
	private IFilesService fileService;
	@GetMapping("file/{id}")
	public ResponseEntity<File> getFileById(@PathVariable("id") String id) {
		File file = fileService.getFileById(Integer.parseInt(id));
		return new ResponseEntity<File>(file, HttpStatus.OK);
	}
	
	@GetMapping("fileMail/{id}")
	public ResponseEntity<File> getFileByMail(@PathVariable("id") String id) {
		File file = fileService.getFileByMail(id);
		return new ResponseEntity<File>(file, HttpStatus.OK);
	}
	
	@GetMapping("all")
	public ResponseEntity<List<File>> getAllFiles() {
		List<File> list = fileService.getAllFiles();
		return new ResponseEntity<List<File>>(list, HttpStatus.OK);
	}
	
	@GetMapping("all/{mail_user}")
	public ResponseEntity<List<File>> getFilesByMail(@PathVariable("mail_user") String mail) {
		List<File> list = fileService.getFilesByMail(mail);
		return new ResponseEntity<List<File>>(list, HttpStatus.OK);
	}

	@PostMapping("file")
	public ResponseEntity<Void> createFile(@RequestBody File file, UriComponentsBuilder builder) {
        boolean flag = fileService.createFile(file);
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/file?id={id}").buildAndExpand(file.getFile_id()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	@PutMapping("file")
	public ResponseEntity<File> updateFile(@RequestBody File file) {
		fileService.updateFile(file);
		return new ResponseEntity<File>(file, HttpStatus.OK);
	}
	@DeleteMapping("file/{id}")
	public ResponseEntity<Void> deleteFile(@PathVariable("id") String id) {
		fileService.deleteFile(Integer.parseInt(id));
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}	
	

	
} 