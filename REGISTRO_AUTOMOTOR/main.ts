import { Moto } from "./moto";
import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Registro } from "./Registro";
// creacion de registro del automotor
const registroOlavarria = new Registro("Olavarria"," Buenos Aires","Colon 3020",);
// creacion de Motos
const Moto1 = new Moto("Gilera", "Smash full", 125,"Nafta", "117 IDT", 2013 );
const Moto2 = new Moto("Zanella", "Zb full", 110, "Nafta", "A123BCD",2022);
const Moto3 = new Moto("Corven", "Triax full", 150, "Nafta","E456FGH", 2024);
//  creacion de Autos
const Auto1 = new Auto("Renault", "Clio 2", 2024, "Nafta", "EKL 183");
const Auto2 = new Auto("Fiat", "Palio", 2016, "Nafta", "HJL 730");
const Auto3 = new Auto("Peugeot", "206", 2012, "GNC", " LVE 629");
//  Creacion de Camiones
const Camion1 = new Camion("Renault", "Trucks T", 2 , "Diesel", 2024, "AB 123 CD");
const Camion2 = new Camion("Volvo", "FH Aero", 3, "Diesel", 2024, "EF 456 GH");
const Camion3 = new Camion("Mercedes-Benz", "Actros L", 3, "Diesel/GNC", 2024, "IJ 789 KL");

registroOlavarria.altaMoto(Moto1);
registroOlavarria.altaAuto(Auto1);
registroOlavarria.altaCamion(Camion1);

 console.log(registroOlavarria);

registroOlavarria.bajaMoto("117 IDT")

console.log(registroOlavarria);
