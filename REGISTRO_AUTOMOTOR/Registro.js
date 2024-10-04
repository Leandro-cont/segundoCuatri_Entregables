"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro = void 0;
var Registro = /** @class */ (function () {
    function Registro(localidad, provincia, direccion, listaDeMotos, listaDeAutos, listaDeCamiones) {
        this.localidad = localidad;
        this.provincia = provincia;
        this.direccion = direccion;
        if (listaDeMotos != undefined) {
            this.moto = listaDeMotos;
        }
        else {
            this.moto = [];
        }
        if (listaDeAutos != undefined) {
            this.auto = listaDeAutos;
        }
        else {
            this.auto = [];
        }
        if (listaDeCamiones != undefined) {
            this.camion = listaDeCamiones;
        }
        else {
            this.camion = [];
        }
    }
    Registro.prototype.getLocalidad = function () {
        return this.localidad;
    };
    Registro.prototype.getProvincia = function () {
        return this.provincia;
    };
    Registro.prototype.getDireccion = function () {
        return this.direccion;
    };
    Registro.prototype.altaMoto = function (moto) {
        this.moto.push(moto);
    };
    Registro.prototype.altaAuto = function (auto) {
        this.auto.push(auto);
    };
    Registro.prototype.altaCamion = function (camion) {
        this.camion.push(camion);
    };
    Registro.prototype.bajaMoto = function (patente) {
        this.moto = this.moto.filter(function (moto) { return moto.getPatenteMoto() !== patente; });
    };
    Registro.prototype.bajaAuto = function (patente) {
        this.auto = this.auto.filter(function (auto) { return auto.getPatenteAuto() !== patente; });
    };
    Registro.prototype.bajaCamion = function (patente) {
        this.camion = this.camion.filter(function (camion) { return camion.getPatenteCamion() !== patente; });
    };
    return Registro;
}());
exports.Registro = Registro;
