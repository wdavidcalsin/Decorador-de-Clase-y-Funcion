"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function DecoradoClase(target) {
    target.prototype.Saludar = function () {
        console.log("Hola");
    };
}
function DecoradoMetodo(esModificable) {
    return function (traget, nombrePropiedad, descriptor) {
        descriptor.writable = esModificable;
    };
}
let Persona = class Persona {
    constructor() {
    }
    EnviarMensaje() {
        console.log("Enviar mensaje");
    }
};
__decorate([
    DecoradoMetodo(true)
], Persona.prototype, "EnviarMensaje", null);
Persona = __decorate([
    DecoradoClase
], Persona);
let persona1 = new Persona();
persona1.Saludar();
persona1.EnviarMensaje = function () {
    console.log("Modificar");
};
persona1.EnviarMensaje();
