import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import {UserSpacePage} from'../user-space/user-space';
import { Storage } from '@ionic/storage';
import{GoogleFacebookValidePage} from '../../pages/google-facebook-valide/google-facebook-valide';


@IonicPage()
@Component({
  selector: 'page-login-facebook-google',
  templateUrl: 'login-facebook-google.html',
})
export class LoginFacebookGooglePage {

  private user: {};
  public token: Boolean;

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams,private authService: AuthService) {
  }


  signInWithGoogle(): void {
    this.authService.signOut();
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.navCtrl.push(GoogleFacebookValidePage);
      this.storage.set('mail', user.email );
      this.storage.set('firstName', user.name );
      this.storage.set('photo', user.photoUrl );
      this.storage.set('lastName', user.lastName );
    });

  }

  signInWithFB(): void {
// this.authService.signOut();
   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
     this.navCtrl.push(GoogleFacebookValidePage);
     this.storage.set('mail', user.email );
     this.storage.set('firstName', user.firstName );
     this.storage.set('photo', user.photoUrl );
     this.storage.set('lastName', user.lastName );
    



    });
  }

}

