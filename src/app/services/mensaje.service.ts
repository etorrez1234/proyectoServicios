import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptions} from "@angular/http"; 
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";


@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private _http: Http) { 

  }
  getEmpresas(){

    // petición por get a esa url de un api rest de empresas
    return this._http.get("http://localhost/AreadeTrabajo/MensajeProyecto/web/app_dev.php/empresa/")
    .map(res => res.json());
  }
  getMensajes(){

    // petición por get a esa url de un api rest de mensajes
    return this._http.get("http://localhost/AreadeTrabajo/MensajeProyecto/web/app_dev.php/mensaje/")
    .map(res => res.json());
  }



  createEmpresa(empresa) { 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(empresa);
    console.log("entro service create"); 
    return this._http.post('http://localhost/AreadeTrabajo/MensajeProyecto/web/app_dev.php/empresa/new', body,options)
     .map((res: Response) => res.json());
    
  }

     borrarMensaje(mensaje){
      //utilizo el metodo delete de http que es el configurado en el deleteAction de Symfony
      return this._http.delete(('http://localhost/AreadeTrabajo/MensajeProyecto/web/app_dev.php/mensaje/delete/'+mensaje.id))
      .map((res: Response) => res.json());    
    }
  
    modificarMensaje(mensaje){
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(mensaje);
      //envio en el body el mensaje transformado en un JSON
      return this._http.post  ('http://localhost/AreadeTrabajo/MensajeProyecto/web/app_dev.php/mensaje/'+mensaje.id+'/edit', body, options)
      .map((res: Response) => res.json());    
    }
  
}
