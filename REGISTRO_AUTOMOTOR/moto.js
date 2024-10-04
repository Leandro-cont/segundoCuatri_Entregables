"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(marca, modelo, cilindrada, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.cilindrada = cilindrada;
        this.patente = patente;
    }
    Moto.prototype.getMarcaMoto = function () {
        return this.marca;
    };
    Moto.prototype.getModeloMoto = function () {
        return this.modelo;
    };
    Moto.prototype.getCilindradaMoto = function () {
        return this.cilindrada;
    };
    Moto.prototype.getPatenteMoto = function () {
        return this.patente;
    };
    return Moto;
}());
exports.Moto = Moto;
