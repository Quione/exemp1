import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CorreiosProvider } from '../../providers/correios/correios';

/**
 * Generated class for the Exemp1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exemp1',
  templateUrl: 'exemp1.html',
  providers: [
    CorreiosProvider
  ]
})
export class Exemp1Page {

  txtCidade:string;
  txtEstado:string;
  txtLogradouro:string;

  enderecos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private Cprovider:CorreiosProvider) {
  }

  ionViewDidLoad() {
  }
  listaEnderecos(){
    if((this.txtEstado.length == 2) && (this.txtCidade.length >= 3) && (this.txtLogradouro.length >= 3)){
      this.Cprovider.localizarEndereco(this.txtEstado, this.txtCidade, this.txtLogradouro).subscribe(
        data=> {
          let resultado = (data as any)._body;
          let resultadoJson = JSON.parse(resultado);
          this.enderecos = resultadoJson;
        }, 
        error=> {
          console.log(error);
        }
      );
    }
  }
}
