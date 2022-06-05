import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoPlayerComponent} from "./video-player/video-player.component";
import {FormsModule} from "@angular/forms";
import {ChatRoutingModule} from "./chat-routing.module";
import {VideoMeetingComponent} from "./video-meeting/video-meeting.component";
import { ChatWidgetComponent } from './chat-widget/chat-widget.component';



@NgModule({
  declarations: [VideoPlayerComponent,VideoMeetingComponent, ChatWidgetComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutingModule,
  ],
  exports: [
    VideoPlayerComponent
  ]
})
export class ChatModule { }
