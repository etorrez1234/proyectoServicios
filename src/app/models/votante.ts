export class Votante{
 nombre : string;
 email : string;
 puntuacion:number;

 constructor(nombre?:string,email?:string,puntuacion?:number){
   this.nombre = nombre;
   this.email = email;
   this.puntuacion = puntuacion;
 }


}