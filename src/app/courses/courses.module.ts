import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    IndexComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
