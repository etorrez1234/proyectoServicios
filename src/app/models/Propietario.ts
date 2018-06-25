export class Propietario{
 apellido:string;
 nombres: string;
 dni:number;
 email:string;
 telefono:number;
 moroso:boolean;

 constructor(apellido?:string,nombres?:string,dni?:number,email?:string,telefono?:number,moroso?:boolean){
     this.apellido=apellido;
     this.nombres=nombres;
     this.dni=dni;
     this.email=email;
     this.telefono=telefono;
     this.moroso=moroso;

 }

}