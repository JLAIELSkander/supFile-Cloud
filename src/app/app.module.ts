import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { SocialLoginModule, AuthServiceConfig,GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import{CreateUserPage} from'../pages/create-user/create-user';




import{UserProvider} from'../providers/user/user';
import{FileProvider} from '../providers/file/file'

import { HttpModule } from '@angular/http';
import { HttpClientModule,HttpClient } from '@angular/common/http';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import{UpdateUserPage} from'../pages/update-user/update-user';
import{ProfilePage}from'../pages/profile/profile';




import{UserSpacePage} from'../pages/user-space/user-space';
import{MyFilePage} from'../pages/my-file/my-file'
import{FileDetailsComponent} from'../pages/file-details/file-details';
import{LoginFacebookGooglePage} from '../pages/login-facebook-google/login-facebook-google';
import{GoogleFacebookValidePage} from'../pages/google-facebook-valide/google-facebook-valide';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('887892034488-manu4cgki0134jbmsmhb72velt23db04.apps.googleusercontent.com')
  },
 
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('636010120069783')
  }
  
]);



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    FileDetailsComponent,
    LoginFacebookGooglePage,
    GoogleFacebookValidePage,
    CreateUserPage,
    UserSpacePage,
    HomePage



  ],
  imports: [
    BrowserModule,
    SocialLoginModule.initialize(config),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpClientModule
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    FileDetailsComponent,
    LoginFacebookGooglePage,
    GoogleFacebookValidePage,
    UserSpacePage,
    CreateUserPage,
    HomePage
    ],
  providers: [
    StatusBar,
    UserProvider,
    FileProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
