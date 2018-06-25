import { Injectable } from '@angular/core';
import { Pasaje } from './../models/pasaje';

// Importamos los componentes que vamos a usar
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";


@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  constructor(private _http: Http) {}

  getVentasPasaje() {
    // petición por get a url de un api rest de mensajes
    return this._http.get("http://localhost/AreadeTrabajo/MensajeProyecto/web/app_dev.php/pasaje/")
      .map(res => res.json());
  }

  enviarVentas(pasaje) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(pasaje);
    console.log("entro service create");
    console.log(body);
    return this._http.post('http://localhost/AreadeTrabajo/MensajeProyecto/web/app_dev.php/pasaje/new', body, options)
      .map((res: Response) => res.json());
  }

  modificarVenta(pasaje) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(pasaje);
    //envio en el body el mensaje transformado en un JSON
    return this._http.post('http://localhost/AreadeTrabajo/MensajeProyecto/web/app_dev.php/pasaje/' + pasaje.id + '/edit', body, options)
      .map((res: Response) => res.json());
  }

  borrarVenta(pasaje) {
    //utilizo el metodo delete de http que es el configurado en el deleteAction de Symfony
    return this._http.delete(('http://localhost/AreadeTrabajo/MensajeProyecto/web/app_dev.php/pasaje/' + pasaje.id))
      .map((res: Response) => res.json());
  }











}

