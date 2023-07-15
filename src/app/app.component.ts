import { Component } from '@angular/core';
import { SplashScreen  } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Record/play audio', url: '/play-audio', icon: 'image' },
    { title: 'OCR/Text to Speach', url: '/ocr', icon: 'newspaper' },
    { title: 'Flash Light', url: '/flashlight', icon: 'flashlight' },
    { title: 'Calendar', url: '/calendar', icon: 'calendar' },
    { title: 'Video', url: '/video', icon: 'videocam' },
    { title: 'Device Info', url: '/device', icon: 'phone-portrait' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private splash: SplashScreen,
    private platform:Platform
  ) {
    this.splash.show();
    this.init();
  }
  init(){
    this.platform.ready().then((response)=>{
      this.splash.hide();
    })
  }
}
