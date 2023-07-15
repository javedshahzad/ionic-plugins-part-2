import { Component, OnInit } from '@angular/core';
import { VideoOptions, VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  isplay:boolean=true;
  constructor(private videoPlayer: VideoPlayer) { }

  ngOnInit() {
  }
  playVideo(){
    let optns:VideoOptions={
      volume:0.7,
    }
    this.videoPlayer.play("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",optns).then((response:any)=>{
      console.log(response);
      this.isplay=false;
    }).catch((error)=>{
      console.log(error)
    })
  }
  stopVideo(){
    this.isplay=true;
    this.videoPlayer.close();
  }
}
