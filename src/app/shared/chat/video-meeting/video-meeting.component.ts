import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { v4 as uuidV4 } from 'uuid';
import {MediaService} from "../media.service";
import {ActivatedRoute} from "@angular/router";
import {CallUser, PeerService} from "../peer.service";
import {SocketService} from "../socket.service";

@Component({
  selector: 'app-video-meeting',
  templateUrl: './video-meeting.component.html',
  styleUrls: ['./video-meeting.component.css'],
  providers: [MediaService, PeerService, SocketService]
})
export class VideoMeetingComponent implements OnInit {

  public partner: CallUser|undefined;
  public localStream: any;
  public roomId: any;
  public isHideChat = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private socketService: SocketService,
    private peerService: PeerService,) { }

  ngAfterViewInit(): void {
    this.listenNewUser();
    this.listenLeavedUser();
    this.detectScreenWith();
  }

  ngOnInit(): void {
    this.roomId = this.activatedRoute.snapshot.paramMap.get('roomId');
    this.getMediaStream({ video: true, audio: true }).then(stream => {
      this.localStream = stream;
      this.openPeer();
    })
  }
  genRoomId(): string {
    return uuidV4();
  }

  getMediaStream(constraints?: MediaStreamConstraints): Promise<MediaStream> {
    return new Promise<MediaStream>((resolve, reject) => {
        navigator.mediaDevices.getUserMedia(constraints).then(stream => {
          resolve(stream);
        }).catch(() => {
          alert('Have an error when access to camera/micro');
          reject();
        })
      }
    )
  }
  hideOrUnhideChat(): void {
    this.isHideChat = !this.isHideChat;
  }

  private detectScreenWith(): void {
    if (window.screen.width > 719) {
      setTimeout(() => {
        this.isHideChat = false;
      }, 200);
    }
  }

  private listenNewUser(): void {
    this.listenNewUserJoinRoom();
    this.listenNewUserStream();
  }

  private listenLeavedUser(): void {
    this.socketService.leavedId.subscribe(userPeerId => {
      this.partner = undefined;
    })
  }

  private listenNewUserJoinRoom(): void {
    this.socketService.joinedId.subscribe(newUserId => {
      if (newUserId) {
        this.makeCall(newUserId);
      }
    })
  }

  private listenNewUserStream(): void {
    this.peerService.joinUser.subscribe(user => {
      if (user) {
        this.partner = user
      }
    })
  }

  private openPeer(): void {
    this.peerService.openPeer(this.localStream).then((myPeerId) => {
      this.joinRoom(this.roomId, myPeerId);
    })
  }

  private makeCall(anotherPeerId: string): void {
    this.peerService.call(anotherPeerId, this.localStream);
  }

  private joinRoom(roomId: string, userPeerId: string): void {
    this.socketService.joinRoom(roomId, userPeerId);
  }

}
