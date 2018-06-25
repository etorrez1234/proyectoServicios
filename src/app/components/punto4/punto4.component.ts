import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  precio;
  pasajero;
  importeFinal;
  validar = false;


  constructor() { }

  ngOnInit() {
  }

  calcular($event) {
    // console.log($event);
    this.pasajero = $event.target.value;
    if (this.pasajero == "M") {
      this.importeFinal = parseFloat(this.precio) - (parseFloat(this.precio) * 0.25)
      console.log("m");

    } else {

      if (this.pasajero == "A") {
        this.importeFinal = this.precio
        console.log("a");
      } else {
        if (this.pasajero == "J") {
          this.importeFinal = parseFloat(this.precio) - (parseFloat(this.precio) * 0.50)
          console.log("j");
        } else {
          this.importeFinal = 0;

        }

      }
    }


  }

  validarCampos() {
    if ((this.precio !="") && (this.pasajero !== 'Op')) {
      this.validar = true;
    } else {
      this.validar = false;
    }
  }

}
