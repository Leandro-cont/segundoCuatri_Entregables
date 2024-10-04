"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moto_1 = require("./moto");
var Auto_1 = require("./Auto");
var Camion_1 = require("./Camion");
var Registro_1 = require("./Registro");
// creacion de registro del automotor
var registroOlavarria = new Registro_1.Registro("Olavarria", " Buenos Aires", "Colon 3020");
// creacion de Motos
var Moto1 = new moto_1.Moto("Gilera", "Smash full", 110, "117 IDT");
var Moto2 = new moto_1.Moto("Zanella", "Zb full", 110, "A123BCD");
var Moto3 = new moto_1.Moto("Corven", "Triax full", 150, "E456FGH");
//  creacion de Autos
var Auto1 = new Auto_1.Auto("Renault", "Clio 2", 2024, "Nafta", "EKKL 183");
var Auto2 = new Auto_1.Auto("Fiat", "Palio", 2016, "Nafta", "HJL 730");
var Auto3 = new Auto_1.Auto("Peugeot", "206", 2012, "GNC", " LVE 629");
//  Creacion de Camiones
var Camion1 = new Camion_1.Camion("Renault", "Trucks T", 2024, 2, "AB 123 CD");
var Camion2 = new Camion_1.Camion("Volvo", "FH Aero", 2024, 3, "EF 456 GH");
var Camion3 = new Camion_1.Camion("Mercedes-Benz", "Actros L", 2024, 3, "IJ 789 KL");
registroOlavarria.altaMoto(Moto1);
registroOlavarria.altaAuto(Auto1);
registroOlavarria.altaCamion(Camion1);
console.log(registroOlavarria);
