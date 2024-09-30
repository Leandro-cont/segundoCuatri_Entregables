import { Moto } from "./moto";
import { Auto } from "./Auto";
import { Camion } from "./Camion";

export class Registro{
    private localidad: string;
    private provincia: string;
    private direccion: string;  // Pasar el numero de la direccion como cadena de texto.
    private moto: Moto[];
    private auto: Auto[];
    private camion: Camion[];

    constructor(localidad: string, provincia: string, direccion: string, listaDeMotos?: Moto[], listaDeAutos?:Auto[], listaDeCamiones?: Camion[]){
        this.localidad = localidad;
        this.provincia = provincia;
        this.direccion = direccion;
        if (listaDeMotos != undefined){
            this.moto = listaDeMotos;
        } else{
            this.moto = [];
        }
        if (listaDeAutos != undefined){
            this.auto = listaDeAutos;
        } else{
            this.auto = [];
        }
        if (listaDeCamiones != undefined){
            this.camion = listaDeCamiones;
        } else{
            this.camion = [];
        }
    }

    getLocalidad(): string{
        return this.localidad
    }
    getProvincia():string{
        return this.provincia
    }
    getDireccion(): string{
        return this.direccion
    }
    altaMoto(moto: Moto): void{
        this.moto.push(moto);
    }
    altaAuto(auto: Auto): void{
        this.auto.push(auto);
    }
    altaCa(camion: Camion): void{
        this.camion.push(camion);
    }

    // bajaMoto(moto: Moto): void{
    //     this.moto = this.moto.filter(moto =>);
    // }
    
    // altaMoto(moto: Moto): void{
    //     this.moto.push(moto);
    // }
    
    // altaMoto(moto: Moto): void{
    //     this.moto.push(moto);
    // }
}