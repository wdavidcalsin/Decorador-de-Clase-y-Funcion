function DecoradoClase(target:Function){
    target.prototype.Saludar = function(){
        console.log("Hola");
    } 
}

@DecoradoClase
class Persona{
    constructor(){

    }
} 

let persona1 = new Persona();

persona1.Saludar();

