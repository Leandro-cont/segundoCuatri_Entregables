export class Vehiculo {
    protected motor: string;
    protected patente: string;
    protected anioFabricacion: number;

    constructor (motor: string, patente: string, anioFabricacion: number){
        this.motor = motor;
        this.patente = patente;
        this.anioFabricacion = anioFabricacion;
    }
    getMotor(): string{
        return this.motor;
    }

    getPatente(): string{
        return this.patente;
    }

    getAnioFabricacion(): number{
        return this.anioFabricacion;
    }

    setMotor(motor: string): void{
        if (this.motor == "nafta"||this.motor == "gasoil") {
            this.motor = motor;
        }
    }

    setPatente(patente: string):void{
        if (length == 6 || length == 7) {
            this.patente = patente;
        }
    }

    setAnioFabricacion(anioFabricacion: number): void{
        this.anioFabricacion = anioFabricacion
    }
}