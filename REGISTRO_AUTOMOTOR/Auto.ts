import { Vehiculo } from "./Vehiculo";
export class Auto extends Vehiculo{
    private marca: string;
    private modelo: string;


    constructor(marca:string, modelo: string, anioFabricacion: number, motor: string, patente: string){
        super (motor, patente, anioFabricacion)
        this.marca = marca;
        this.modelo = modelo;
        this.anioFabricacion = anioFabricacion;
        this.motor = motor;
        this.patente = patente
    }

    getMarcaAuto(): string{
        return this.marca;
    }

    getModeloAuto(): string{
        return this.modelo;
    }

    getAnioDeFabrAuto(): number{
        return this.anioFabricacion;
    }

    getMotorAuto(): string{
        return this.motor;
    }

    getPatenteAuto(): string{
        return this.patente
    }

}