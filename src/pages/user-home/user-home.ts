import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html',
})
export class UserHomePage {

  firstName: any;
  mail: any;
  mail2:any;

  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {

    this.firstName = this.storage.get('firstName');
    this.firstName.then((value) => {
      console.log(value)
    this.firstName=(value);
    },(error)=>{
console.log('error storage')
    })

    this.mail = this.storage.get('mail');
    this.mail.then((value) => {
      console.log(value)
    this.mail2=(value);
    },(error)=>{
console.log('error storage')
    })


     }
}
