import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardSidebarComponent
  ],
  exports: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
