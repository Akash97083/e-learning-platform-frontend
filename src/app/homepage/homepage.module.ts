import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TopCoursesComponent } from './top-courses/top-courses.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BecomeInstructorComponent } from './become-instructor/become-instructor.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage.component';
import { StatsComponent } from './stats/stats.component';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        NavbarComponent,
        HeroSectionComponent,
        TopCoursesComponent,
        TestimonialsComponent,
        BecomeInstructorComponent,
        FooterComponent,
        HomepageComponent,
        StatsComponent
    ],
    exports: [
        HeroSectionComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomepageModule { }
