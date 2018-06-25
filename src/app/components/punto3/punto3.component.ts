import { Component, OnInit } from '@angular/core';
import {Mensaje} from './../../models/mensaje';
import {MensajeService} from './../../services/mensaje.service';
import{Empresa} from './../../models/empresa';


@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
 // numpara;
 // numdesde;
//  texto= "";
  mensaje:Mensaje;
  tamMaximo = 15;
  longMensaje = 0;

  // agregamos el array clientes
  empresas =[];
  mensajeHistoricos=[];
 empresa:Empresa;


  constructor(private servicio:MensajeService) { 

    this.mensaje = new Mensaje();
    this.empresa = new Empresa();

    servicio.getEmpresas().subscribe(
      result => {
        this.empresas = JSON.parse(result.empresas);
        console.log(this.empresas);
      },
      error => {
        alert("Error en la petición");
        console.log(error);
      }
    
    );

  }

  ngOnInit() {
  }
  cambiarLongitud(){
   this.longMensaje = this.mensaje.texto.length;
  }
  limpiarCampos(){
  //  this.numpara =0;
  //  this.numdesde = 0;
  //  this.texto = "";
  }

  guardarEmpresa(){

    this.servicio.createEmpresa(this.empresa).subscribe(
       data => { 
         console.log("envio ok");
          return true;
         },
          error => { 
            console.error("Error saving!");
             return false;
             }
             );
  }

  mostrarHistorico(){
    this.servicio.getMensajes().subscribe(
      result=>{ this.mensaje = JSON.parse(result.mensajes);
        console.log(this.mensaje);
      },
      error =>{
        alert('error en la peticion');
      }
    );
  }
  public actualizarMensaje(){
    //seteo nuevamente la fecha actual para el msj modificado
    this.mensaje.fecha = new Date();
    this.servicio.modificarMensaje(this.mensaje).subscribe(
    data => {
      console.log("modificado correctamente.")
      //actualizo la tabla de mensajes
      this.mostrarHistorico();      
      return true;
    },
    error => {
      console.error("Error updating!");
      console.log(error);
      return false;
    });
  }
  

  public borrarMensaje(mensaje: Mensaje){
    this.servicio.borrarMensaje(mensaje).subscribe(
      data => {
        console.log("borrado correctamente.")
        //actualizo la tabla de mensajes
        this.mostrarHistorico();
        return true;
      },
      error => {
        console.error("Error deleting!");
        console.log(error);
        return false;
      }      
    )
  }

  public elegirMensaje(mensaje: Mensaje){
    this.mensaje = mensaje;
    //se asigna a la propiedad mensaje.empresa
    // el correspondiente en el arraylist de empresas
    this.mensaje.empresa = this.empresas.filter(function(item) {
      return item.nombre === mensaje.empresa.nombre;
    })[0];   
  }

}
