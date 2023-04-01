const mongoose = require("mongoose");

/* const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, 
    (err, res ) => {
        if (!err) {
            console.log("conexion establecida")
        } else {
            console.log("ERROR de conexion")
        }
    });
}; */

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI)
    .then(() => console.log("Conexion Establecida"))
    .catch(() => console.log("Error de conexion"));
}


module.exports = dbConnect;