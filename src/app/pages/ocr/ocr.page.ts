import { Component, OnInit } from '@angular/core';
import { OCR,OCRResult,OCRSourceType  } from '@ionic-native/ocr/ngx';
import { TTSOptions, TextToSpeechAdvanced } from '@ionic-native/text-to-speech-advanced/ngx';
import { LoadingController } from '@ionic/angular';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.page.html',
  styleUrls: ['./ocr.page.scss'],
})
export class OcrPage implements OnInit {
  imageUrl: any='assets/img.png';
  files: any;
  data: any;
  OCRAD: any;
  Speaching: boolean=true;
  Actrate: number=0.75;
  constructor(
    private ocr: OCR,
    private appConfig: AppConfigService,
    private tts: TextToSpeechAdvanced,
    private loadingCtrl:LoadingController
  ) { }

  ngOnInit() {
  }
  showPreviewImage(event: any) {
    console.log(event)
    this.files= event.target.files[0];
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          console.log(event)
            this.imageUrl = event.target.result;
            // console.log(this.localUrl)
        }
        reader.readAsDataURL(event.target.files[0]);
    }
}
extractText(){
  this.analyze();
}
async analyze() {
  const loader = await this.loadingCtrl.create({
    message: 'Please wait...'
  });
    loader.present();
  (<any>window).OCRAD(document.getElementById('uploaded-image'), (text:any) => {
    loader.dismiss();
    console.log(text);
    this.data=text.toString();
  });
}

startSpeach(){
  if(this.data){
    this.Speaching=false;
    const option:TTSOptions={
      text:this.data,
      locale:"en-US",
      rate:this.Actrate,
      identifier: 'com.apple.ttsbundle.Samantha-compact',
    }
    this.tts.speak(option)
  .then((res) =>{
    this.Speaching=true;
     console.log('Success',res)
    })
  .catch((reason: any) => console.log(reason));
  }else{
    this.appConfig.toast("Plesse enter text for speach")
  }
}
Stopspeach(){
  this.tts.stop().then((stoped)=>{

  })
  this.Speaching=true;
}
}
