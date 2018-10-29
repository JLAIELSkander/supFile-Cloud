import { Component } from '@angular/core';
import{MyFilePage} from'../my-file/my-file';
import { NavParams, ViewController } from 'ionic-angular';
import{File} from '../../entity/file';



@Component({
  selector: 'file-details',
  templateUrl: 'file-details.html'
})
export class FileDetailsComponent {
  title: string;
  size: number;
url:string;
type:string;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {}
  
  ngOnInit() {

this.title= this.navParams.get('title');
this.url= this.navParams.get('url');
this.size= this.navParams.get('size');
this.type=this.navParams.get('type');
console.log("type");
  }
  closeModal() {
    this.viewCtrl.dismiss(MyFilePage);
  }

}
