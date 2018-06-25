export class Evaluacion {
    lu:string;
    notaConcepto:number;
    notaEscrito:number;
    notaOral:number;

    constructor(lu?:string,notaConcepto?:number,notaEscrito?:number,notaOral?:number){
       this.lu=lu;
       this.notaConcepto=notaConcepto;
       this.notaEscrito=notaEscrito;
       this.notaOral=notaOral;
    }
}
