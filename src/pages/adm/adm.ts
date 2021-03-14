import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-adm',
  templateUrl: 'adm.html',
})
export class AdmPage {

  //variavel declarada para informar os dados
  user : string = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) 
  {

  }

  ionViewDidLoad() {
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
            name: 'nome',
            placeholder: 'Nome'
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
              this.user = 'Bem vindo ' + data.nome + '!';
              console.log('Clicou no Entrar');
            }
          }
        ]
    });
    prompt.present();
  }

}
