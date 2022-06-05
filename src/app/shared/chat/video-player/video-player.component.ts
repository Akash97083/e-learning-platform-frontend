import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MediaService} from "../media.service";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  providers: [MediaService]
})
export class VideoPlayerComponent implements AfterViewInit, OnInit {
  @ViewChild('videoPlayer') videoElement?: any;
  @Input() mode: 'view' | 'owner' = 'view';
  @Input() stream: any;
  public isMuted: any;
  public cameraOff: any;
  public videoElementRef: any;
  isPlaying = false;
  constructor(
    private mediaService: MediaService
  ) {
    this.mediaService.mode = this.mode;
    this.isMuted = true;
    this.cameraOff = false;

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.mediaService.stream = this.stream;
    this.videoElementRef = this.videoElement.nativeElement;
    if (this.mode === 'owner') {
      this.videoElementRef.muted = true;
    }
    this.playVideo();
    this.listenMediaControlChanges();
    setTimeout(() => {
      this.isPlaying = true;
    }, 0);

  }

  public turnVideoOnOrOff(): void {
    this.mediaService.turnVideoOnOrOff()
  }

  public muteOrUnMute(): void {
    this.mediaService.muteOrUnMute();
  }

  private listenMediaControlChanges(): void {
    this.mediaService.isMute.subscribe((val) => {
      this.isMuted= val;
    })
    this.mediaService.isCameraOff.subscribe((val) => {
      this.cameraOff = val;
    })
  }

  private playVideo() {
    if (this.videoElementRef) {
      this.videoElementRef.srcObject = this.stream;
      this.videoElementRef.play();
      this.videoElementRef.height = 700;
      this.videoElementRef.width  = 700;
    }
  }
}
