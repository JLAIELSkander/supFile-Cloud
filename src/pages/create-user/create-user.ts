import { Component } from '@angular/core';
import{HomePage} from '../home/home';
import { IonicPage, NavController, ViewController,NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserProvider} from'../../providers/user/user';
import {User} from'../../entity/user';
import { Storage } from '@ionic/storage';
import{UserSpacePage} from'../user-space/user-space';




@IonicPage()
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {

   //Create form
   userForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    mail: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    password: new FormControl(),
    storage: new FormControl()
   
});


  constructor(public navCtrl: NavController,public storage: Storage, public viewCtrl: ViewController, public userProvider:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUserPage');
  }

  
suscribeUser(){

  let firstName = this.userForm.get('firstName').value.trim();
  let lastName = this.userForm.get('lastName').value.trim();
  let mail = this.userForm.get('mail').value.trim();	
  let phone = this.userForm.get('phone').value.trim();
  let address = this.userForm.get('address').value.trim(); 
  let storage = 80; 
  let password = this.userForm.get('password').value.trim(); 

  let user= new User(null, firstName, lastName,mail,phone, address, storage, password );

    this.userProvider.createUser(user).subscribe(user => {
      this.storage.set('mail',mail );
      this.storage.set('firstName', firstName );
      this.navCtrl.push(UserSpacePage);
      console.log("user added component");
    });

  } 


  closeModal() {
    this.viewCtrl.dismiss(HomePage);
  }

}
