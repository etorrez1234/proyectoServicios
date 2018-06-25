import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  plata;
  condicion;
  resultado=0;
  v = 24.37;
  campoPlata = false;

  constructor() { }

  ngOnInit() {
  }
  convertirPlata() {
    if (this.plata !== null) {
      this.campoPlata= true;
      if (this.condicion == "option2") {
        console.log("eligio 1")
        this.resultado = parseFloat(this.plata) * this.v;

      } else {
        if (this.condicion == "option1") {
          console.log("eligio 2")
          this.resultado = parseFloat(this.plata) / this.v;
        }

      }


    }else{
      this.campoPlata = false;
      this.resultado = 0;
    }


  }

}
