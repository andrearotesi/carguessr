import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    DemoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class PagesModule { }
