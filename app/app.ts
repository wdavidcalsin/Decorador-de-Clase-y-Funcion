function DecoradoClase(target:Function){
    target.prototype.Saludar = function(){
        console.log("Hola");
    } 
}

function DecoradoMetodo(esModificable:boolean){
    return function(traget:any,
            nombrePropiedad:string,
            descriptor: PropertyDescriptor){
                descriptor.writable = esModificable;
    }
}

@DecoradoClase
class Persona{
    constructor(){

    }

    @DecoradoMetodo(true)
    EnviarMensaje():void{
        console.log("Enviar mensaje");
    }
} 

let persona1 = new Persona();

persona1.Saludar();

persona1.EnviarMensaje = function(){
    console.log("Modificar");
}
persona1.EnviarMensaje();