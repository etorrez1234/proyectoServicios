import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptions} from "@angular/http"; 
import {Observable} from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {

  constructor(private _http: Http) {

   }

   getEvaluaciones(){

    // petición por get a esa url de un api rest de empresas
    return this._http.get("http://localhost/AreadeTrabajo/MensajeProyecto/web/app_dev.php/evaluacion/")
      .map(res => res.json());
  }

  enviarEvaluacion(evaluacion) { 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(evaluacion);
    console.log("entro service create"); 
    return this._http.post('http://localhost/AreadeTrabajo/MensajeProyecto/web/app_dev.php/evaluacion/new', body,options)
     .map((res: Response) => res.json());
    
  }

  borrarEvaluacion(evaluacion){
    //utilizo el metodo delete de http que es el configurado en el deleteAction de Symfony
    return this._http.delete(('http://localhost/AreadeTrabajo/MensajeProyecto/web/app_dev.php/evaluacion/delete/'+evaluacion.id))
    .map((res: Response) => res.json());    
  }

 
}
