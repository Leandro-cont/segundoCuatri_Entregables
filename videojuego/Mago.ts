import { Personaje } from "./Personaje";
export class Mago extends Personaje{
    private pocion: string;
    private tieneAntidoto: boolean;

    public constructor(pocion: string, tieneAntidoto: boolean, nombre: string, nivel: number, vida: number){
        super(nombre, nivel, vida)
        this.pocion = pocion;
        this.tieneAntidoto = tieneAntidoto;
        this.nombre = nombre;
        this.nivel = nivel;
        this.vida = vida;
        if (nivel >= 10 && tieneAntidoto == true) {
            this. vida = 100
        }
    }

    
    public getPocion() : string {
        return this.pocion;
    }
    
    
    public getTieneAntidoto() : boolean {
        return this.tieneAntidoto;
    }
    

    public getNombre(): string {
        return this.nombre;
    }

    public getNivel(): number {
        return this.nivel;
    }

    public getVida(): number {
        return this.vida;
    }



    atacar() {
        console.log(`${this.nombre} esta ATACANDO. Poder utilizado: ${this.pocion}.......`);
    }
    defender() {
        console.log(`${this.nombre} esta siendo ATACADO y perdio -30 de vida (TOTAL DE VIDA: ${this.vida - 30}).......`);
    }
}
