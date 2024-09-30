export class Auto{
    private marca: string;
    private modelo: string;
    private anioDeFabricacion: number;
    private motor: boolean;

    constructor(marca:string, modelo: string, anioDeFabricacion: number, motor: boolean){
        this.marca = marca;
        this.modelo = modelo;
        this.anioDeFabricacion = anioDeFabricacion;
        this.motor = motor;
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

    getMotorAuto(): boolean{
        return this.motor;
    }

}