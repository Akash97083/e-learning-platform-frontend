import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import {RouterModule} from "@angular/router";
import { StatsCardComponent } from './stats-card/stats-card.component';
import { AbsPipe } from './abs.pipe';
import { CourseCardComponent } from './course-card/course-card.component';
import { VideoPlayerComponent } from './chat/video-player/video-player.component';
import {ChatModule} from "./chat/chat.module";
import {FormsModule} from "@angular/forms";
import { InputErrorsComponent } from './input-errors/input-errors.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    DashboardLayoutComponent,
    StatsCardComponent,
    AbsPipe,
    CourseCardComponent,
    InputErrorsComponent,
    NavbarComponent,
  ],
  exports: [
    DashboardLayoutComponent,
    StatsCardComponent,
    CourseCardComponent,
    InputErrorsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChatModule,
    FormsModule
  ]
})
export class SharedModule { }
