import { Component, OnInit } from '@angular/core';
import { PasajeService } from '../../services/pasaje.service';
import { Pasaje } from '../../models/pasaje';

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
  pasajeVuelo:Pasaje;
  pasajes:Array<Pasaje>;
  ventaPasajeSeleccionada:Pasaje;

  constructor(private servicioVuelo:PasajeService) {
   this.pasajeVuelo = new Pasaje();
   this.pasajes = new Array<Pasaje>();
   this.ventaPasajeSeleccionada = new Pasaje();

   servicioVuelo.getVentasPasaje().subscribe(
    result => {
      this.pasajes = JSON.parse(result.ventas);
      console.log(this.pasajes);
    },
    error => {
      alert("Error en la petición");
      console.log(error);
    }
  );


   }

  ngOnInit() {
  }

  calcular($event) {
    // console.log($event);
    this.pasajero = $event.target.value;
    if (this.pasajero == "M") {
      this.pasajeVuelo.descuento =this.precio * 0.25;
      this.pasajeVuelo.precioFinal = this.precio - this.pasajeVuelo.descuento;
      console.log("m");

    } else {

      if (this.pasajero == "A") {
        this.pasajeVuelo.descuento = 0;
        this.pasajeVuelo.precioFinal = this.pasajeVuelo.precio;
        console.log("a");
      } else {
        if (this.pasajero == "J") {
          this.pasajeVuelo.descuento = this.precio * 0.50;
          this.pasajeVuelo.precioFinal = this.precio - this.pasajeVuelo.descuento;
          console.log("j");
        } else {
          this.pasajeVuelo.precioFinal = 0;

        }

      }
    }


  }

  validarCampos() {
    if ((this.pasajeVuelo.precio !==null) && (this.pasajero !== 'Op')) {
      this.validar = true;
    } else {
      this.validar = false;
    }
  }



  mostrarVentaPasajeSeleccionada(id:number){
    this.pasajes.forEach(element => {
      if(element.id === id){
        this.ventaPasajeSeleccionada = element;
      }
    });
  }



  calcularPasajeActualizado($event) {
   // console.log($event);
   this.pasajero = $event.target.value;
   if (this.pasajero == "M") {
     this.ventaPasajeSeleccionada.descuento =(parseFloat(this.precio) * 0.25);
     this.ventaPasajeSeleccionada.precioFinal = parseFloat(this.precio) - this.ventaPasajeSeleccionada.descuento;
     console.log("m");

   } else {

     if (this.pasajero == "A") {
       this.ventaPasajeSeleccionada.precioFinal = this.ventaPasajeSeleccionada.precio;
       console.log("a");
     } else {
       if (this.pasajero == "J") {
         this.ventaPasajeSeleccionada.descuento = (parseFloat(this.precio) * 0.50);
         this.ventaPasajeSeleccionada.precioFinal = parseFloat(this.precio) - this.ventaPasajeSeleccionada.descuento;
         console.log("j");
       } else {
         this.ventaPasajeSeleccionada.precioFinal = 0;

       }

     }
   }
  }




  public mostrarHistorico() {
    // Llamamos al método del servicio
    // para cargar todas los mensajes
    this.servicioVuelo.getVentasPasaje().subscribe(
      result => {
        this.pasajes = JSON.parse(result.pasajes);
        console.log(this.pasajes);
      },
      error => {
        alert("Error en la petición");
      }
    );
  }




  public enviarVenta() {
    console.log(this.pasajeVuelo);
    this.servicioVuelo.enviarVentas(this.pasajeVuelo).subscribe(
      data => {
        console.log("envio ok");
        console.log("agregado correctamente.")
        
        return true;
      },
      error => {
        console.error("Error saving!");
        console.log(error);
        return false;
      }
    );
  }


  public actualizarVenta() {
    //seteo nuevamente la fecha actual para el msj modificado
    this.servicioVuelo.modificarVenta(this.ventaPasajeSeleccionada).subscribe(
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


  public borrarSeleccionado(pasaje: Pasaje) {
    console.log(pasaje);
    this.servicioVuelo.borrarVenta(pasaje).subscribe(
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

}
