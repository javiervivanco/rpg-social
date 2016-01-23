// persona.js

var Sociedad = machina.Fsm.extend( {
    initialize: function( nombre ) {
        this.nombre = nombre;
    },

    namespace: "Sociedad",
    initialState: "naciendo",
    states: {
        
        naciendo: {
            _onEnter: function() {
                console.log("Nacio sociedad " + this.nombre);
            },

        },
        guerra_civil: {
            _onEnter: function() {
                console.log("Guerra civil en " + this.nombre);
            },
        },
        muerta: {
            _onEnter: function() {
                console.log("Se murio sociedad" + this.nombre);
            },

        }
    }
} );
