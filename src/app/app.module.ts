import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Native plugins
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { TextToSpeechAdvanced } from '@ionic-native/text-to-speech-advanced/ngx';
import { OCR } from '@ionic-native/ocr/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { VideoPlayer  } from '@ionic-native/video-player/ngx';
import { Device  } from '@ionic-native/device/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { SplashScreen  } from '@ionic-native/splash-screen/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: 
  [
    Media,
    File,
    TextToSpeechAdvanced,
    OCR,
    Flashlight,
    Calendar,
    VideoPlayer,
    Device,
    BatteryStatus,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
