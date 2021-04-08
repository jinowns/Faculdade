import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdsPage } from '../pages/ads/ads';
import { AdmPage } from '../pages/adm/adm';
import { ContabilidadePage } from '../pages/contabilidade/contabilidade';
import { DireitoPage } from '../pages/direito/direito';
import { MedicinaPage } from '../pages/medicina/medicina';
import { LoginPage} from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdmPage,
    AdsPage,
    ContabilidadePage,
    DireitoPage,
    MedicinaPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdmPage,
    AdsPage,
    ContabilidadePage,
    DireitoPage,
    MedicinaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
