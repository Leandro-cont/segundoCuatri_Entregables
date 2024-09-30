export class Camion{
    private marca: string;
    private modelo: string;
    private anioDeFabricacion: number;
    private ejes: number;

    constructor(marca: string, modelo: string, anioDeFabr: number, ejes: number){
        this.marca = marca;
        this.modelo = modelo;
        this.anioDeFabricacion = anioDeFabr;
        this.ejes = ejes;
    }

    getMarcaCamion(): string{
        return this.marca;
    }

    getModeloCamion(): string{
        return this.modelo;
    }

    getAnioFabCamion(): number{
        return this.anioDeFabricacion;
    }

    getEjesCamion(): number{
        return this.ejes;
    }
}