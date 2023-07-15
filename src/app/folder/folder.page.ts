import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  date = new Date();
  public appPages = [
    { title: 'Record/play audio', url: '/play-audio', icon: 'image' },
    { title: 'OCR/Text to Speach', url: '/ocr', icon: 'newspaper' },
    { title: 'Flash Light', url: '/flashlight', icon: 'flashlight' },
    { title: 'Calendar', url: '/calendar', icon: 'calendar' },
    { title: 'Video', url: '/video', icon: 'videocam' },
    { title: 'Device Info', url: '/device', icon: 'phone-portrait' },
  ];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
