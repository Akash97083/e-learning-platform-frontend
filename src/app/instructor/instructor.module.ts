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
import {ChatComponent} from "./chat/chat.component";


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
    ChatComponent
  ],
  imports: [
    InstructorRoutingModule,
    CommonModule,
    SharedModule,
    NgChartsModule
  ]
})
export class InstructorModule { }
