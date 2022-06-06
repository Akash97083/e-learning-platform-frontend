import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomepageModule} from "./homepage/homepage.module";
import { CoursesModule } from './courses/courses.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    CoursesModule,
    FontAwesomeModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
