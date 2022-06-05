import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from "./chat/chat.component";
import {VideoMeetingComponent} from "./video-meeting/video-meeting.component";

const routes: Routes = [
  {
    path: 'meeting',
    component: VideoMeetingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule {
}
