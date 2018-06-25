import { Component, OnInit } from '@angular/core';
import { Votante } from './../../models/votante';

@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrls: ['./punto5.component.css']
})
export class Punto5Component implements OnInit {
  nombre;
  correo;
  puntuacion;
  votante: Votante;
  votantes: Array<Votante>;
  noSabe = 0;
  malo = 0;
  regular = 0;
  bueno = 0;

  constructor() { 
    this.votante = new Votante();
    this.votantes = new Array();
  }

  ngOnInit() {
  }
  agregarVotante() {
    this.votantes.push(this.votante);
    this.consultarVotacion();
    this.votante = new Votante();
    console.log(this.votantes);
    
  }
  consultarVotacion(){
    if (this.votante.puntuacion == 0) {
      this.noSabe++;
      console.log("no sabe");
      console.log(this.noSabe);
    } else if (this.votante.puntuacion == 1) {
      this.malo++;
      console.log("malo");
      console.log(this.malo);
    } else if (this.votante.puntuacion == 2) {
      this.regular++;
      console.log("regular");
      console.log(this.regular);
    } else if (this.votante.puntuacion == 3) {
      this.bueno++;
      console.log("bueno");
      console.log(this.bueno);
    } 
  }

  limpiarCampos(){
    this.nombre ="";
    this.correo="";
    this.puntuacion ="";
  }

}
