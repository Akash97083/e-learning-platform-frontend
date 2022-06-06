import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { StudentsComponent } from './students/students.component';
import { WebsiteSettingsComponent } from './website-settings/website-settings.component';

const routes: Routes = [
  { 
    path: '',
    component: AdminComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'instructors',
    component: InstructorsComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'settings',
    component: WebsiteSettingsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
