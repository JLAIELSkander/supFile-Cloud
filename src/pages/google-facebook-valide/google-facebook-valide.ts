import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import{UserSpacePage} from'../user-space/user-space';


@IonicPage()
@Component({
  selector: 'page-google-facebook-valide',
  templateUrl: 'google-facebook-valide.html',
})
export class GoogleFacebookValidePage {

  firstName: any;
  mail: any;
  mail2:any;
  photoUrl:any;

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {

    this.mail = this.storage.get('mail');
    this.mail.then((value) => {
      console.log(value)
    this.mail2=(value);
    },(error)=>{
console.log('error storage')
    })

    this.firstName = this.storage.get('firstName');
    this.firstName.then((value) => {
      console.log(value)
    this.firstName=(value);
    },(error)=>{
console.log('error storage')
    })

    this.photoUrl = this.storage.get('photo');
    this.photoUrl.then((value) => {
      console.log(value)
    this.photoUrl=(value);
    },(error)=>{
console.log('error storage')
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoogleFacebookValidePage');
  }

  valide(){
    this.navCtrl.push(UserSpacePage);
  }
}
