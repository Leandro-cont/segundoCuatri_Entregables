export class Moto{
    private marca: string;
    private modelo: string;
    private cilindrada: number;
    private patente: string;

    constructor(marca:string, modelo:string, cilindrada:number, patente: string){
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
    getPatenteMoto():string{
        return this.patente
    }
}