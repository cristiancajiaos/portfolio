import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Loading } from './loading/loading';

@NgModule({
  declarations: [
    Loading
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    Loading
  ]
})
export class SharedModule { }
