import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index.component';
import {SharedModule} from "../shared/shared.module";
import {InstructorRoutingModule} from "./instructor-routing.module";
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
  ],
  imports: [
    InstructorRoutingModule,
    CommonModule,
    SharedModule,
    NgChartsModule
  ]
})
export class InstructorModule { }
