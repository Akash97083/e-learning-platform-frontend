import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomepageModule} from "./homepage/homepage.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CourseService} from "./instructor/services/course.service";
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    FontAwesomeModule,
    CoursesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
