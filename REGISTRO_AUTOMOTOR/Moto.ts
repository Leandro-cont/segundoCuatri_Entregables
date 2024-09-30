export class Moto{
    private marca: string;
    private modelo: string;
    private cilindrada: number;

    constructor(marca:string, modelo:string, cilindrada:number){
        this.marca = marca;
        this.modelo = modelo;
        this.cilindrada = cilindrada;
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
}