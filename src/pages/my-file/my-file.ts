import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from 'ionic-angular';
import{FileDetailsComponent} from'../file-details/file-details';


import{FileProvider} from'../../providers/file/file';
import {File} from '../../entity/file'


@IonicPage()
@Component({
  selector: 'page-my-file',
  templateUrl: 'my-file.html',
})
export class MyFilePage {

 


  text: string;
  maill: any;
  mail2:any;
  allFiles: File[];
  statusCode: number;
  requestProcessing = false;
  processValidation = false;

  constructor(private storage: Storage, private fileProvider:FileProvider,public modalCtrl: ModalController) {

  }

  ngOnInit() {

    this.maill = this.storage.get('mail');
    this.maill.then((value) => {
    this.mail2=(value);
    this.getFilesByMail(this.mail2);
    },(error)=>{
console.log('error storage')
    });
  }

  getAllFiles() {
    this.fileProvider.getAllFiles()
  .subscribe(
            data => this.allFiles = data,
            errorCode =>  this.statusCode = errorCode);   
}
 
getFilesByMail(mail:string) {
  this.fileProvider.getFilesByMail(mail)
.subscribe(
          data => this.allFiles = data,
          errorCode =>  this.statusCode = errorCode); 
} 


openModal(file:File) {
  let myModal = this.modalCtrl.create(FileDetailsComponent,file);
  myModal.present();
}
//Delete file
deleteFile(file_id: string) {
  this.fileProvider.deleteFileById(file_id)
    .subscribe(successCode => {
            this.statusCode = 1;
        this.getAllFiles();	
      },
        errorCode => this.statusCode = errorCode);    
}

}

/*
allFiles = [];
path = "C:/Users/SKANDER/Documents/supfile/skanderjlaiel@gmail.com"

surPath = "";

constructor(public fileService : FileProvider) {}

ngOnInit() {
  this.getAllFiles(this.path);
}

getAllFiles(path) {
  this.fileService.getAllItem(path)
    .subscribe((items) => {
      this.allFiles = items;
    })
}

getIcon(type) {
  if(type == "Directory") {
    return "glyphicon-folder-open";
  }
  return "glyphicon-file";
}


openFolder(file) {
  if(file.type == "Directory") {
    this.surPath +=  "/" + file.name;
    this.getAllFiles(file.path);
  }
}

Delete(file) {
  // bootbox.confim({
  //   message: `Do yo want to remove "${file.name}"`,
  //   buttons: {
  //       confirm: {
  //           label: 'Yes',
  //           className: 'btn-success'
  //       },
  //       cancel: {
  //           label: 'No',
  //           className: 'btn-danger'
  //       }
  //   },
  //   callback: function (result) {
  //     console.log('This was logged in the callback: ' + result);
      this.fileService.deleteItem(file.path)
      .subscribe((item) => {
        if(item == true) {
          this.getAllFiles(this.path);
        }
      })
  //   }
  // })

}

downloadFile(file) {
  console.log("download");
  this.fileService.downloadFile(file.path)
    .subscribe((el) => {
      console.log(el)
    })
}


goBack() {
  var x = this.surPath.split("/");
  this.surPath = "";
  if(x.length > 0) {
    for(var i = 0; i < x.length - 1; i++) {
      this.surPath += "/" + x[i];
    }
    this.getAllFiles(this.path + this.surPath);
  }
}


moveFile(event,data) {
  console.log(event)
}


}
*/