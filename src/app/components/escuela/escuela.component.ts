import { Component, OnInit } from '@angular/core';
import { Inscripcion } from '../../models/inscripcion';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.component.html',
  styleUrls: ['./escuela.component.css']
})
export class EscuelaComponent implements OnInit {
  inscripcion:Inscripcion;
  categoria:Categoria;
  inscripciones:Array<Inscripcion>;
  incripcionDetalle:Inscripcion;
  nombreCategoria;
  nombreProfesor;
  inscripcionAuxuliar:Array<Inscripcion>;

  inscripcionfiltrada :Inscripcion;
 // fecha:Date;
 // apellido;
 // nombre;
 // cate:Categoria;
 //filtro;
 //validar;

  constructor() {
    this.inscripcion= new Inscripcion();
    this.categoria= new Categoria();
    this.inscripciones = new Array();
    this.incripcionDetalle = new Inscripcion();
    this.inscripcionfiltrada = new Inscripcion();
    this.inscripcionAuxuliar = new Array();

    var cat1 = new Categoria("mosquito","juan",9,12);
    var cat2 = new Categoria("premini","jorge",12,14);
    var cat3 = new Categoria("mini","luis",10,12);


    var ins1 = new Inscripcion(new Date(),"lopez","Elias",cat2);
    var ins2 = new Inscripcion(new Date(),"Morra","juan",cat1);
    var ins3 = new Inscripcion(new Date(),"Lino","Julian",cat3);

    this.inscripciones.push(ins1);
    this.inscripciones.push(ins2);
    this.inscripciones.push(ins3);

   }

  ngOnInit() {
  }

  agregarSocio(){
    this.inscripciones.push(this.inscripcion);
    this.inscripcion = new Inscripcion();
  }

  mostrarDetalleAlumno(inscripcion){
    this.incripcionDetalle.apellido = inscripcion.apellido;
    this.incripcionDetalle.nombres = inscripcion.nombres;
    this.nombreCategoria = inscripcion.categoria.nombre;
    this.nombreProfesor = inscripcion.categoria.profesor;


  }


  filtrar($event){
    this.inscripciones.forEach(inscrip => {
      if(inscrip.categoria.nombre==$event.target.value){
        console.log($event.target.value)
        this.inscripcionAuxuliar.push(inscrip);
        this.inscripciones = this.inscripcionAuxuliar; 
      }
    });
    
     

}
}