import { Personaje } from "./Personaje";
export class Luchador extends Personaje{
    private arma: string;
    private preparacion: string;

    public constructor(arma: string, preparacion: string, nombre: string, nivel: number, vida: number){
        super(nombre, nivel, vida);
        this.arma = arma;
        this.preparacion = preparacion;
        this.nombre = nombre;
        this.nivel = nivel;
        this.vida = vida;
        if (preparacion == "elite") {
            this.vida = vida + 10
        }else{
            this.vida = vida
        }
    }

    
    public getArma() : string {
        return this.arma;
    }
    
    public getPreparacion() : string {
        return this.preparacion;
    }
    public getNombre() : string {
        return this.nombre
    }

    public getNivel() : number {
        return this.nivel
    }
     
    public getVida() : number {
        return this.vida
    }
    
    

    atacar(){
        console.log(`${this.nombre} esta ATACANDO, y quitando -5 de vida a su rival.......`);
    }
    defender(){
        console.log(`${this.nombre} esta siendo ATACADO y perdio -2 de vida (TOTAL DE VIDA: ${this.vida - 2})`);
    }
}