const mongoose =  require('mongoose')

const conexion = async() => {

    try{
mongoose.connect( "mongodb://127.0.0.1:27017/mi_blog",  {useNewUrlParser: true});
mongoose.set('strictQuery', false);
// Parametros dentro de un objeto
// useNewUrlParser: true
// useUnifiedTopology: true
// useCreateIndex: true

console.log("Conectado correctamente a la base de datos mi_blog !!")

    } catch(error) {

        console.log(error);
        throw new Error("No se ha podido conectare a la base de datos");
    }
}

module.exports = {
conexion

}