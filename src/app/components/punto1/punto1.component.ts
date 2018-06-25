import { Component, OnInit } from '@angular/core';
import { Evaluacion } from '../../models/evaluacion';
import { EvaluacionService } from '../../services/evaluacion.service';
import { nextTick } from 'q';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  // declaracion de variables
  evaluacion:Evaluacion;
  evaluaciones:Array<Evaluacion>; // array de todas las evaluaciones 
  promedio;
  legajo;
  estado = "DESAPROBADO";


  constructor(private servicioEvaluacion:EvaluacionService) {
    this.evaluacion = new Evaluacion();
    this.evaluaciones = new Array<Evaluacion>();

    this.servicioEvaluacion.getEvaluaciones().subscribe(
      result => {
        this.evaluaciones = JSON.parse(result.evaluaciones);
        console.log(this.evaluaciones);
      },
      error => {
        alert("Error en la petición");
        console.log(error);
      }
    
    );

    
  }
   

  ngOnInit() {
  }

  

  calcularPromedio(legajo:string){

  console.log(legajo);
  this.evaluaciones.forEach(evaluacion => {
    if(evaluacion.lu === legajo){
      console.log(evaluacion);
     // this.lu = element.lu;
      this.promedio = (evaluacion.notaConcepto + evaluacion.notaEscrito + evaluacion.notaOral) / 3;
      console.log(this.promedio);
      if (this.promedio > 6) {
        this.estado = ' PROMOCIONADO';
      } else {
        if (this.promedio > 3 && this.promedio < 7) {
          this.estado = ' APROBADO';
        } else {
          this.estado = ' DESAPROBADO';
        }
      }
    }
  });
   

}

borrarEvaluacion(evaluacion:Evaluacion){
  this.servicioEvaluacion.borrarEvaluacion(evaluacion).subscribe(
    data => {
      console.log("borrado correctamente.")
      //actualizo la tabla de mensajes
     // this.mostrarHistorico();
      return true;
    },
    error => {
      console.error("Error deleting!");
      console.log(error);
      return false;
    }      
  )

}

enviarEvaluacion(){
console.log(this.evaluacion);
 this.servicioEvaluacion.enviarEvaluacion(this.evaluacion).subscribe(
  data => {
    
    console.log("enviar ok");
    console.log("agregado correctamente");
    return true;
  },
  error => {
    alert("Error al enviar");
    console.log(error);
    return false;
  }

);

  }


  public mostrarHistorico() {
    // Llamamos al método del servicio
    // para cargar todas los mensajes
    this.servicioEvaluacion.getEvaluaciones().subscribe(
      result => {
        this.evaluaciones = JSON.parse(result.evaluaciones);
        console.log(this.evaluaciones);
      },
      error => {
        alert("Error en la petición");
      }
    );
  }
}