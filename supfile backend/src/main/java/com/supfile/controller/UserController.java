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

import com.supfile.entity.User;
import com.supfile.service.IUserService;

@Controller
@RequestMapping("users")
@CrossOrigin(origins = {"http://localhost:8100","http://localhost:4200"})

public class UserController {
	@Autowired
	private IUserService userService;	

	@GetMapping("user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") String id) {
		User user = userService.getUserById(Integer.parseInt(id));
		return new ResponseEntity<User>(user, HttpStatus.OK);
		
	}
	
	@GetMapping("userm/{mail}")
	public ResponseEntity<User> getUserByMail(@PathVariable("mail") String mails) {
		User use = userService.getUserByMail(mails);
		return new ResponseEntity<User>(use, HttpStatus.OK);
		
	}
	

	

	@GetMapping("all")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> list = userService.getAllUsers();
		return new ResponseEntity<List<User>>(list, HttpStatus.OK);
	}
	
	
	@PostMapping("user")
	public ResponseEntity<Void> createUser(@RequestBody User user, UriComponentsBuilder builder) {
		 boolean flag = userService.createUser(user);
	        if (flag == false) {
	         	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
	        }
	        HttpHeaders headers = new HttpHeaders();
	        headers.setLocation(builder.path("/user?id={id}").buildAndExpand(user.getIdUser()).toUri());
	        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
		}
	
	
	@PutMapping("user")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		userService.updateUser(user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	@DeleteMapping("user/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable("id") String id) {
		userService.deleteUser(Integer.parseInt(id));
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}	
	
	@GetMapping("login/{mail}/{password}")
	public ResponseEntity<Boolean> login(@PathVariable ("mail") String mail, @PathVariable("password") String password ) {
		boolean log = userService.login(mail,password);
		return new ResponseEntity<Boolean>(log, HttpStatus.OK);
		}
	
	



	
	
} 

