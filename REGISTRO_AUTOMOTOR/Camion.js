"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    function Camion(marca, modelo, anioDeFabr, ejes, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.anioDeFabricacion = anioDeFabr;
        this.ejes = ejes;
        this.patente = patente;
    }
    Camion.prototype.getMarcaCamion = function () {
        return this.marca;
    };
    Camion.prototype.getModeloCamion = function () {
        return this.modelo;
    };
    Camion.prototype.getAnioFabCamion = function () {
        return this.anioDeFabricacion;
    };
    Camion.prototype.getEjesCamion = function () {
        return this.ejes;
    };
    Camion.prototype.getPatenteCamion = function () {
        return this.patente;
    };
    return Camion;
}());
exports.Camion = Camion;
