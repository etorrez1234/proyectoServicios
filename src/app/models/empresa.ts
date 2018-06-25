export class Empresa {
    nombre:string;
    razonSocial:string;
    urlWebSite:string;

    constructor (nombre?:string,razonSocial?:string,urlWebSite?:string){
       this.nombre=nombre;
       this.razonSocial=razonSocial;
       this.urlWebSite = urlWebSite;
    }
}
