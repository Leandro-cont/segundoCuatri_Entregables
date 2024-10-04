"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, anioDeFabricacion, motor, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.anioDeFabricacion = anioDeFabricacion;
        this.motor = motor;
        this.patente = patente;
    }
    Auto.prototype.getMarcaAuto = function () {
        return this.marca;
    };
    Auto.prototype.getModeloAuto = function () {
        return this.modelo;
    };
    Auto.prototype.getAnioDeFabrAuto = function () {
        return this.anioDeFabricacion;
    };
    Auto.prototype.getMotorAuto = function () {
        return this.motor;
    };
    Auto.prototype.getPatenteAuto = function () {
        return this.patente;
    };
    return Auto;
}());
exports.Auto = Auto;
