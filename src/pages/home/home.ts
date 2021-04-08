import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage 
{
  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) 
  {
    
  }
  presentToast() 
  {
    const toast = this.toastCtrl.create
    ({
      message: 'Seleciona materia',
      duration: 3000
    });
    toast.present();
  }
}
