export class Categoria{
    nombre: string;	
    profesor: string;	
    edadDesde: number;
    edadHasta: number;

    constructor(nombre?:string,profesor?:string,edadDesde?:number,edadHasta?:number){
      this.nombre=nombre;
      this.profesor=profesor;
      this.edadDesde=edadDesde;
      this.edadHasta=edadHasta;
    }
    

}