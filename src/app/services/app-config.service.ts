import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(
    public toastr:ToastController
  ) { }
  async toast(message) {
    const toast = await this.toastr.create({
        message: message,
        color: 'secondary',
        duration: 4000,
        animated:true,
        buttons: [
            {
              text: 'Ok!',
              role: 'cancel'
            }
          ],
    });
    toast.present();
    //end of toast
}
}
