import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Nav } from 'ionic-angular';
import { LoginPage} from '../login/login';


@IonicPage()
@Component({
  selector: 'page-adm',
  templateUrl: 'adm.html',
})
export class AdmPage 
{
  @ViewChild(Nav) nav: Nav;

  //variavel declarada para informar os dados
  user : string = '';
  email: string = '';
  telefone :string = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) 
  {

  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad AdmPage');
  }
  mostrarAlert() 
  {
    
    let prompt = this.alertCtrl.create
    ({
      title: 'Adiciona sua informações',
      message: "Digite seu E-mail",
      inputs: 
        [
          {
            name: 'email',
            placeholder: 'Email'
          },
          {
            name: 'telefone',
            placeholder: 'Telefone'
          },
        ],
        buttons: 
        [
          {
            text: 'Cancelar',
            handler: data => 
            {
              console.log('Clicou no Cancelar');
            }
          },
          {
            text: 'Enviar',
            handler: data => 
            {
              this.user = 'Dados Informados !';
              this.email = data.email;
              this.telefone = data.telefone;
              console.log('Clicou no Entrar');
            }
          }
        ]
    });
    prompt.present();
  }

  //abrir Login
  openLogin() : void
  {
    this.navCtrl.push(LoginPage)
  }  

}
