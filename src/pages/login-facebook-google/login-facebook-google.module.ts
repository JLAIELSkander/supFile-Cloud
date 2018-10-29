import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginFacebookGooglePage } from './login-facebook-google';

@NgModule({
  declarations: [
    LoginFacebookGooglePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginFacebookGooglePage),
  ],
})
export class LoginFacebookGooglePageModule {}
