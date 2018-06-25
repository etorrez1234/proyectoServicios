import { Component, OnInit } from '@angular/core';
import { Local } from '../../models/Local';
import { Propietario } from '../../models/Propietario';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  local:Local;
  locales:Array<Local>;
  propietario:Propietario;
  localDetalle:Local;
  i=0;
  numero;
  nombre;
  apellido;
  telefono;
  ocultar:boolean;
  txtboton:string;
  habiliarLocal:boolean;
  
 

  constructor() {
   // this.localDetalle.propietario = new Propietario();
   this.habiliarLocal=false;
    this.txtboton = 'OcultarDetalle';
    this.ocultar= true;
    this.localDetalle = new Local();
    this.local = new Local();
    this.propietario = new Propietario();
    this.locales = new Array();
    var propietario1 = new Propietario("Lopez","Luis",27456789,"luis_lopez@gmail.com",4050512,true);
    var propietario2 = new Propietario("Montero","Mario",27456789,"mario_montero@gmail.com",4050512,false);

    var local1 = new Local(235,2800,1200,propietario1,true);
    var local2 = new Local(236,2800,1200,propietario2,false);
    var local3 = new Local(124,2569,1200,propietario2,false);

    this.locales.push(local1);
    this.locales.push(local2);
    this.locales.push(local3);
    console.log(this.locales);
   }

  ngOnInit() {
  }

  mostrarDetalleLocal(local){
  this.localDetalle.numero = local.numero;
  this.localDetalle.costoAlquilerMes = local.costoAlquilerMes;
  this.localDetalle.superficie = local.superficie;
 // this.localDetalle.propietario.nombres = local.propietario.nombres
  this.nombre = local.propietario.nombres;
  this.apellido = local.propietario.apellido;
  this.telefono = local.propietario.telefono;

  }

  ocultarDetalle(){
   this.ocultar = !this.ocultar;
   this.txtboton = 'Ocultar Detalle';
   if(this.ocultar==false){
    this.txtboton = 'Mostrar Detalle';
   }
  }

  inhabilitarLocal(local){
    console.log(local);
     // local.habilitado = false;
      if(local.propietario.moroso==true){
          this.habiliarLocal = true;
          local.habilitado = false;
      }

    }
  
    

}
