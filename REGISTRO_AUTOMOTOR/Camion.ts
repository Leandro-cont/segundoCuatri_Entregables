import { Vehiculo } from "./Vehiculo";
export class Camion extends Vehiculo{
    private marca: string;
    private modelo: string;
    private ejes: number;
    

    constructor(marca: string, modelo: string, ejes: number, motor: string, anioFabricacion: number,  patente: string){
        super (motor, patente, anioFabricacion,);
        this.marca = marca;
        this.modelo = modelo;
        this.anioFabricacion = anioFabricacion;
        this.ejes = ejes;
        this.patente = patente;
    }

    getMarcaCamion(): string{
        return this.marca;
    }

    getModeloCamion(): string{
        return this.modelo;
    }

    getMotorCamion(): string{
        return this.motor;
    }

    getAnioFabCamion(): number{
        return this.anioFabricacion;
    }

    getEjesCamion(): number{
        return this.ejes;
    }

    getPatenteCamion(): string{
        return this.patente;
    }
}