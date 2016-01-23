// persona.js

var Persona = machina.Fsm.extend( {
    initialize: function( nombre ) {
        this.nombre = nombre;
    },

    namespace: "Persona",
    initialState: "viva",
    states: {
        
        viva: {
            _onEnter: function() {
                console.log("Nacio " + this.nombre);
                //this.emit( "pedestrians", { status: DO_NOT_WALK } );
            },

        },

        muerto: {

            _onEnter: function() {
                console.log("Se murio " + this.nombre);
//                this.emit( "vehicles", { status: RED } );
            },

        }
    }
} );
