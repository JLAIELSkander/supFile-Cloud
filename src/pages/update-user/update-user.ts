import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{UserProvider} from'../../providers/user/user';
import { Storage } from '@ionic/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from'../../entity/user';

@IonicPage()
@Component({
  selector: 'page-update-user',
  templateUrl: 'update-user.html',
})
export class UpdateUserPage {

  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;
  store=null;
  mail:any;
  mail2:string;

   //Create form
   UserUpdateForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),   
    mail: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required), 
    address: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
});


  constructor(private storage: Storage,private userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.mail = this.storage.get('mail');
    this.mail.then((value) => {
      console.log(value)
    this.mail2=(value);
    },(error)=>{
console.log('error storage')
    })
    this.loadUserToEdit(this.mail.toString());

  }

  loadUserToEdit(mail: string) {
    this.preProcessConfigurations();
    this.userProvider.getUserByMail(this.mail).subscribe(user => {
              this.articleIdToUpdate = user.idUser; 
              this.store=user.storage;
              console.log(user.mail);  
              this.UserUpdateForm.setValue({ firstName:user.firstName,lastName:user.lastName,mail:user.mail,phone:user.phone,address:user.address,password:user.password});
        this.processValidation = true;
        this.requestProcessing = false;   
     },
      errorCode =>  this.statusCode = errorCode);   
 }
 getUserByMail(mail:string){
  return this.userProvider.getUserByMail(mail);
 }

 updateUser(){

  let id_User=this.articleIdToUpdate;
  let firstName = this.UserUpdateForm.get('firstName').value.trim();
  let lastName = this.UserUpdateForm.get('lastName').value.trim();
  let mail = this.UserUpdateForm.get('mail').value.trim();	
  let phone = this.UserUpdateForm.get('phone').value.trim();
  let address = this.UserUpdateForm.get('address').value.trim(); 
  let storage = this.store;
  let password = this.UserUpdateForm.get('password').value.trim(); 

  let user= new User(id_User, firstName, lastName,mail,phone, address, storage, password );
console.log(id_User+firstName+lastName+mail);
this.userProvider.updateUser(user).subscribe(successCode => {
  this.statusCode = successCode;
},
errorCode => this.statusCode = errorCode); 
}
//Perform preliminary processing configurations
preProcessConfigurations() {
  this.statusCode = null;
this.requestProcessing = true;   
}

}
