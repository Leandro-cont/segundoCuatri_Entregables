export class Personaje{
    protected nombre: string;
    protected nivel: number;
    protected vida: number;

    public constructor(nombre: string, nivel: number, vida: number){
        this.nombre = nombre;
        this.nivel = nivel;
        this.vida = vida;
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
    
    
    public setNombre(nombre : string) {
        this.nombre = nombre;
    }
    
    public setNivel(nivel : number) {
        this.nivel = nivel;
    }
    
    
    public setVida(vida : number) {
        this.vida = vida;
    }
    
}