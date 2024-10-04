export class Camion{
    private marca: string;
    private modelo: string;
    private anioDeFabricacion: number;
    private ejes: number;
    private patente: string;

    constructor(marca: string, modelo: string, anioDeFabr: number, ejes: number, patente: string){
        this.marca = marca;
        this.modelo = modelo;
        this.anioDeFabricacion = anioDeFabr;
        this.ejes = ejes;
        this.patente = patente;
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

    getPatenteCamion(): string{
        return this.patente;
    }
}