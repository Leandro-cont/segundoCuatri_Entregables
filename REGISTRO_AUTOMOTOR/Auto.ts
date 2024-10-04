export class Auto{
    private marca: string;
    private modelo: string;
    private anioDeFabricacion: number;
    private motor: string;
    private patente: string;

    constructor(marca:string, modelo: string, anioDeFabricacion: number, motor: string, patente: string){
        this.marca = marca;
        this.modelo = modelo;
        this.anioDeFabricacion = anioDeFabricacion;
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
        return this.anioDeFabricacion;
    }

    getMotorAuto(): string{
        return this.motor;
    }

    getPatenteAuto(): string{
        return this.patente
    }

}