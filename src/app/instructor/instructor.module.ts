import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index.component';
import {SharedModule} from "../shared/shared.module";
import {InstructorRoutingModule} from "./instructor-routing.module";
import { NgChartsModule } from 'ng2-charts';
import {ListComponent} from "./courses/list/list.component";
import {ViewComponent} from "./courses/view/view.component";
import {UpdateComponent} from "./courses/update/update.component";
import {EarningsComponent} from "./earnings/earnings.component";
import {WithdrawComponent} from "./earnings/withdraw/withdraw.component";
import {SettingsComponent} from "./settings/settings.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ChatComponent} from "../shared/chat/chat/chat.component";
import {CourseService} from "./services/course.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {CreateComponent} from "./courses/create/create.component";
import { BasicInfoFormComponent } from './courses/components/basic-info-form/basic-info-form.component';
import { PricingFormComponent } from './courses/components/pricing-form/pricing-form.component';
import { ContentFormComponent } from './courses/components/content-form/content-form.component';
import { DescriptionFormComponent } from './courses/components/description-form/description-form.component';
import {AngularEditorModule} from "@kolkov/angular-editor";

@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    ListComponent,
    ViewComponent,
    UpdateComponent,
    EarningsComponent,
    WithdrawComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    CreateComponent,
    BasicInfoFormComponent,
    PricingFormComponent,
    ContentFormComponent,
    DescriptionFormComponent
  ],
  imports: [
    InstructorRoutingModule,
    CommonModule,
    SharedModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
  ],
  providers: [
    CourseService,
    HttpClient,
   ]
})
export class InstructorModule { }
