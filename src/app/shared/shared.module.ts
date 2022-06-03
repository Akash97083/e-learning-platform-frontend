import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import {RouterModule} from "@angular/router";
import { StatsCardComponent } from './stats-card/stats-card.component';
import { AbsPipe } from './abs.pipe';
import { CourseCardComponent } from './course-card/course-card.component';



@NgModule({
  declarations: [
    DashboardLayoutComponent,
    StatsCardComponent,
    AbsPipe,
    CourseCardComponent
  ],
  exports: [
    DashboardLayoutComponent,
    StatsCardComponent,
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
