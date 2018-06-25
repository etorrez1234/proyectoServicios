export class Socio {
    nrosocio : number;
    apellido : string;
    nombres : string;
    fafiliciacio : Date;

    constructor(nrosocio?:number, apellido?:string,nombres?:string,fafiliciacio?:Date){
      this.nrosocio = nrosocio;
      this.apellido = apellido;
      this.nombres = nombres;
      this.fafiliciacio = fafiliciacio;
    }

}
