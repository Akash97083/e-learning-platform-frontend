import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    IndexComponent,
    SearchComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoursesRoutingModule,
  ]
})
export class CoursesModule { }
