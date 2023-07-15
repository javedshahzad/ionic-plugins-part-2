import { Component, OnInit } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { Device  } from '@ionic-native/device/ngx';
@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
  model: string = '';
  os: string = '';
  serial: string = '';
  manufacturer: string = '';
  subscription: any;
  critical: number = 0;
  isPlugged: boolean = false;

  constructor(private device: Device, private batteryStatus: BatteryStatus) {}

  ngOnInit() {
    this.model = this.device.model;
    this.os = this.device.version;
    this.serial = this.device.serial;
    this.manufacturer = this.device.manufacturer;
    this.onBatteryStatus();
  }

  onBatteryStatus() {
    this.subscription = this.batteryStatus.onChange().subscribe((status) => {
      console.log(status)
      this.critical = status.level;
      this.isPlugged = status.isPlugged;
    });
    this.batteryStatus.onCritical().subscribe((critical)=>{
      console.log(critical)
    })
    this.batteryStatus.onLow().subscribe((low)=>{
      console.log(low)
    })
  }

  unsubscribeBatteryCheck() {
    this.subscription.unsubscribe();
  }

}
