import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TopCoursesComponent } from './top-courses/top-courses.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BecomeInstructorComponent } from './become-instructor/become-instructor.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeroSectionComponent,
    TopCoursesComponent,
    TestimonialsComponent,
    BecomeInstructorComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
