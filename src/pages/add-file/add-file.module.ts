import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFilePage } from './add-file';

@NgModule({
  declarations: [
    AddFilePage,
  ],
  imports: [
    IonicPageModule.forChild(AddFilePage),
  ],
})
export class AddFilePageModule {}
