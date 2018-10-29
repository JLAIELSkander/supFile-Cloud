import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from '../../providers/user/user';
import{UserSpacePage} from '../user-space/user-space';
import { Storage } from '@ionic/storage';
import { ModalController } from 'ionic-angular';
import {CreateUserPage} from '../create-user/create-user';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  model: any = {};
  loading = false;
  error = '';
  mail:string;
  public token: Boolean;

  constructor(public navCtrl: NavController, public userProvider: UserProvider,public storage: Storage,public modalCtrl: ModalController) {

  }

  ngOnInit() {
   
    this.resetStorage();

  }



 login(mail, password:string) {
    this.loading = true;
    this.userProvider.login2(this.model.mail, this.model.password)
        .subscribe(result => {
            if (result === true) {
              console.log("logged");
              this.navCtrl.push(UserSpacePage);
              this.storage.set('mail', this.model.mail );
 
            
            } else {

                this.error = 'Username or password is incorrect';
                this.loading = false;
            }
        });
}

resetStorage(){

  this.storage.remove('mail')
  .then(
      data => console.log(data),
      error => console.log(error)
  );
  this.storage.remove('photo')
  .then(
      data => console.log(data),
      error => console.log(error)
  );
  this.storage.remove('firstName')
  .then(
      data => console.log(data),
      error => console.log(error)
  );

  this.storage.remove('lastName')
  .then(
      data => console.log(data),
      error => console.log(error)
  );

}


openModalSuscribe() {
    let myModal = this.modalCtrl.create(CreateUserPage);
    myModal.present();
  }

}

