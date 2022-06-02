import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import {SharedModule} from "../shared/shared.module";
import {InstructorRoutingModule} from "./instructor-routing.module";


@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
  ],
  imports: [
    InstructorRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class InstructorModule { }
