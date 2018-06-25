export class Pasaje {
    id: number;
    dni: String;
    precio: number;
    descuento: number;
    precioFinal: number;

    
    constructor(id?: number, dni?: String, precio?: number, descuento?: number, precioFinal?: number) {
        this.id = id;
        this.dni = dni;
        this.precio = precio;
        this.descuento = descuento;
        this.precioFinal = precioFinal;
    }
}
