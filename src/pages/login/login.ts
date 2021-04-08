import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: string = '';
  senha: string = '';
  public mensagem: string ='';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController
              ){
                const mensagem = navParams.get('mensagem')
              }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad LoginPage');
  }
  
  enviar(campoLogin, campoSenha)
  {
    this.login = campoLogin;
    this.senha = campoSenha;

    //Verificar se o login é valido
    if(this.login != 'aluno' || this.senha != 'claretianos')
    {
      this.mensagem = 'Login e Senha não Informado';
      this.showAlert();
    }
    else
    {
      this.mensagem = 'Login Efetuado';
      this.showAlertSucesso();
      this.openMain();
    }
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alerta!',
      subTitle: 'Login ou senha é Invalido!',
      buttons: ['OK']
    });
    alert.present();
  }
  openMain() : void
  {
    this.navCtrl.push(HomePage)
  }
  showAlertSucesso() {
    const alert = this.alertCtrl.create({
      title: 'Login Efetuado!',
      subTitle: 'Bem Vindo! '+ this.login,
      buttons: ['OK']
    });
    alert.present();
  }
}
