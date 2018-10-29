import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = 'UserHomePage';
  tab2Root: any = 'UpdateUserPage';
  tab3Root: any = 'ProfilePage';
  tab4Root: any = 'AddFilePage';
  tab5Root: any = 'MyFilePage';
  tab6Root: any = 'SharedPage';
  tab7Root: any = 'RecentPage';

  myIndex: number;
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;

  }

  
}
