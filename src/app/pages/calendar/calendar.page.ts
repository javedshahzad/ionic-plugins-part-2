import { Component, OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  calendars = [];
  events: any =[];
  iscalendar:boolean=true;
  constructor(public navCtrl: NavController, private calendar: Calendar, private plt: Platform) {
    this.plt.ready().then(() => {
      this.calendar.listCalendars().then(data => {
        this.calendars = data;
      });
    })
  }
  ngOnInit() {
    this.calendar.listCalendars().then((respone)=>{
      console.log(respone)
    }).catch((error)=>{
      console.log(error)
    })
  }
  addEvent(cal) {
    let date = new Date();
    let options = { calendarId: cal.id, calendarName: cal.name, url: 'https://google.com', firstReminderMinutes: 15 };
 
    this.calendar.createEventInteractivelyWithOptions('My new Event', 'London', 'Special Notes', date, date, options).then(res => {
    }, err => {
      console.log('err: ', err);
    });
  }
 
  openCal(cal) {
    console.log(cal)
    this.iscalendar=false
    // this.navCtrl.push('CalDetailsPage', { name: cal.name })
    if (this.plt.is('ios')) {
      this.calendar.findAllEventsInNamedCalendar(cal.name ).then(data => {
        this.events = data;
        console.log(this.events,"ios")
      });
    } else if (this.plt.is('android')) {
      var start = new Date();
      var end = new Date();
      end.setDate(end.getDate() + 31);

      this.calendar.listEventsInRange(start, end).then(data => {
        this.events = data;
        console.log(this.events,"android")
      });
    }
 
  }
  back(){
    this.iscalendar=true;
  }
}
