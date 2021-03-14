import { Component, ViewChild } from '@angular/core';
import { Alert, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AdmPage } from '../pages/adm/adm';
import { AdsPage } from '../pages/ads/ads';
import { ContabilidadePage } from '../pages/contabilidade/contabilidade';
import { DireitoPage } from '../pages/direito/direito';
import { MedicinaPage } from '../pages/medicina/medicina';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) 
  {
    platform.ready().then(() => 
    {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title : 'ADM'           , component : AdmPage},
      { title : 'ADS'           , component : AdsPage},
      { title : 'Contabilidade' , component : ContabilidadePage},
      { title : 'Direito'       , component : DireitoPage},
      { title : 'Medicina'      , component : MedicinaPage}
    ]
  }
  openPage(page: any): void
  {
    this.nav.push(page.component);
  }
}