const { Schema, model } = require('mongoose');

const ArticuloSchema = Schema ({
titulo: {
type: String,
required: true
},
contenido: {
    type: String,
    required: true
    },
    fecha: {
        type: Date,
        required: Date.now
        },
        imagen: {
            type: String,
            required: "default.png"
            },
})

module.exports = model("Articulo", ArticuloSchema, articulos)

