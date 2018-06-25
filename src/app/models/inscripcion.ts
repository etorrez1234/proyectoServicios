import { Categoria } from "./categoria";

export class Inscripcion{
    fecha: Date;
  	apellido: string;
    nombres: string;
    categoria:Categoria;
       
    constructor(fecha?:Date,apellido?:string,nombres?:string,categoria?:Categoria){
        this.fecha=fecha;
        this.apellido=apellido;
        this.nombres= nombres;
        this.categoria=categoria;

    }


}