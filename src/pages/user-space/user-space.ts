import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import{MyFilePage} from '../../pages/my-file/my-file';
import{UpdateUserPage} from'../update-user/update-user';
import{AddFilePage} from'../add-file/add-file';
import{ProfilePage}from'../profile/profile';
import{RecentPage}from'../recent/recent';
import{SharedPage}from'../shared/shared';
import{UserHomePage}from'../user-home/user-home';
import {HomePage} from '../home/home';
import{MyApp}from'../../app/app.component';


export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}


@IonicPage()
@Component({
  selector: 'page-user-space',
  templateUrl: 'user-space.html',
})
export class UserSpacePage {

  @ViewChild(Nav) nav: Nav;
  rootPage = 'TabsPage';
  firstName: any;
  mail: any;
  mail2:any;
  photoUrl:any;
  


  pages: PageInterface[] = [
    { title: 'Home', pageName: 'UserHomePage', icon: 'home',  },
    { title: 'My Files', pageName: 'MyFilePage', icon: 'ios-folder-open' },
    { title: 'Add Files', pageName: 'AddFilePage', icon: 'ios-add-outline' },
    { title: 'Recent', pageName: 'RecentPage', icon: 'ios-time' },
    { title: 'Profile', pageName: 'ProfilePage', icon: 'md-person' },
    { title: 'Shared', pageName: 'SharedPage', icon: 'md-share' },
 
  
    
  ];

constructor(private storage: Storage,public navCtrl: NavController) {

}

ngOnInit() {
  this.getUserCurrent();
   }
   openPage(page: PageInterface) {
    let params = {};
  
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
  
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
  
    getUserCurrent(){
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
  
    isActive(page: PageInterface) {
      // Again the Tabs Navigation
      let childNav = this.nav.getActiveChildNav();
   
      if (childNav) {
        if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
          return 'primary';
        }
        return;
      }
   
      // Fallback needed when there is no active childnav (tabs not active)
      if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
        return 'primary';
      }
      return;
    }

    logout(){

      this.nav.push(HomePage);
  
    }

  }