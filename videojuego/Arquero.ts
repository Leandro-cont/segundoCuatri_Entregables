import { Personaje } from "./Personaje";
export class Arquero extends Personaje {
    private flechas: string;
    private danioOcacionado: number;

    public constructor(flechas: string, danioOcacionado: number, nombre: string, nivel: number, vida: number) {
        super(nombre, nivel, vida);
        this.flechas = flechas;
        this.danioOcacionado = danioOcacionado;
        this.nombre = nombre;
        this.nivel = nivel;
        this.vida = vida;
        if (flechas == "Insendiarias") {
            this.danioOcacionado = this.danioOcacionado +10
        }else{
            this.danioOcacionado = this.danioOcacionado
        }
    }
    
    public getFlechas() : string {
        return this.flechas
    }
    
    public getNombre(): string {
        return this.nombre
    }

    public getNivel(): number {
        return this.nivel
    }

    public getVida(): number {
        return this.vida
    }



    atacar() {
        console.log(`${this.nombre} esta ATACANDO. Daño ocacionado: ${this.danioOcacionado}.......`);
    }
    defender() {
        console.log(`${this.nombre} esta siendo ATACADO y perdio -15 de vida (TOTAL DE VIDA: ${this.vida - 2}).......`);
    }
}