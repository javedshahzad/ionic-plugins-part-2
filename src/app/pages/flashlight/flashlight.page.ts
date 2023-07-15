import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-flashlight',
  templateUrl: './flashlight.page.html',
  styleUrls: ['./flashlight.page.scss'],
})
export class FlashlightPage implements OnInit {
  status: boolean=true;

  constructor(private flashlight: Flashlight) { }

  ngOnInit() {
  }
  On() {
    if (Boolean(this.flashlight.available())) {
      this.status = false;
      this.flashlight.switchOn();
    } else {
      alert('Flashlight is not available');
    }
  }
  Off() {
    this.status = true;
    this.flashlight.switchOff();
  }
}
