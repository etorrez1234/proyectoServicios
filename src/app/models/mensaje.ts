import { Empresa } from "./empresa";

export class Mensaje {
    desde:number;
    hasta:number;
    texto:string;
    empresa:Empresa;
    fecha:Date;

    constructor(desde?:number,hasta?:number,texto?:string,empresa?:Empresa,fecha?:Date){
        this.desde=desde;
        this.hasta=hasta;
        this.texto=texto;
        this.empresa=empresa;
        this.fecha=fecha;

    }
}
