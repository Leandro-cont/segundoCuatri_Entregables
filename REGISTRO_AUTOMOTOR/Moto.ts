import { Vehiculo } from "./Vehiculo";
export class Moto extends Vehiculo{
    private marca: string;
    private modelo: string;
    private cilindrada: number;
    

    constructor(marca:string, modelo:string, cilindrada:number, motor: string, patente: string, anioFabricacion: number){
        super (motor, patente,anioFabricacion)
        this.marca = marca;
        this.modelo = modelo;
        this.cilindrada = cilindrada;
        this.patente = patente;
    }

    getMarcaMoto():string{
        return this.marca;
    }
    getModeloMoto(): string{
        return this.modelo;
    }
    getCilindradaMoto():number{
        return this.cilindrada;
    }
    getMotorMoto(): string{
        return this.motor
    }
    getPatenteMoto():string{
        return this.patente
    }
    getAnioFabricacion(): number {
        return this.anioFabricacion
    }
}