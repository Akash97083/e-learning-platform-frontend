import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {IndexComponent} from "./index.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ListComponent} from "./courses/list/list.component";
import {ViewComponent} from "./courses/view/view.component";
import {UpdateComponent} from "./courses/update/update.component";
import {CreateComponent} from "./courses/create/create.component";
import {EarningsComponent} from "./earnings/earnings.component";
import {WithdrawComponent} from "./earnings/withdraw/withdraw.component";
import {SettingsComponent} from "./settings/settings.component";
import {VideoMeetingComponent} from "../shared/chat/video-meeting/video-meeting.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: 'chat', component: VideoMeetingComponent },
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'earnings',
        children:[
          {
            path: '',
            component: EarningsComponent,
          },
          {
            path: 'withdraw',
            component: WithdrawComponent,
          }
        ]
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'courses',
        children: [
          {
            path: '',
            component: ListComponent,
          },
          {
            path: 'create',
            component: CreateComponent,
          },
          {
            path: ':id',
            component: ViewComponent,
          },
          {
            path: ':id/edit',
            component: UpdateComponent,
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule {
}
