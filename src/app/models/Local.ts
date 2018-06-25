import { Propietario } from "./Propietario";

export class Local{
 numero:number;
 costoAlquilerMes:number;
 superficie:number;
 propietario:Propietario;
 habilitado:boolean;

 constructor(numero?:number,costoAlquilerMes?:number,superficie?:number,propietario?:Propietario, habilitado?:boolean){
      this.numero=numero;
      this.costoAlquilerMes=costoAlquilerMes;
      this.superficie=superficie;
      this.propietario=propietario;
      this.habilitado=habilitado;
 }

}