// personas.js

var Personas = function(){
    Persona.call(this);
}

Personas.prototype = Object.create(Persona.prototype);
Personas.prototype.constructor = Personas;

