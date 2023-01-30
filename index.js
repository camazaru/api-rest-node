
const { conexion } = require("./basedatos/conexion.js")
const express = require("express")
const cors = require("cors")

// Inicializar app
console.log("App de node arrancada")

// Conectar a la base de datos
conexion();

// Crear servidor Node

const app = express();
const puerto = 3900

// Configurar cors
app.use(cors())

// Convertir body a objeto js
app.use(express.json());

// Crear rutas
app.get("/probando", (req, res) => {
console.log("Se ha ejecutado");

return res.status(200).send({curso: "curso"}
    
)
});


app.get("/", (req, res) => {
    return res.status(200).send(
        " <h1> Inicio </h1>");

})

// Crear servidor y escuchar rutas

app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto)
})






