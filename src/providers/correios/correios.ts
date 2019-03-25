import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class CorreiosProvider {

  private baseURL = 'https://viacep.com.br/ws/';

  constructor(public http: Http) {}
    
    localizarEndereco(uf:string, cidade:string, logradouro:string){
      return this.http.get(`${this.baseURL}${uf}/${cidade}/${logradouro}/json/`);
    }
  
}
