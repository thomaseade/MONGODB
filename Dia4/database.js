let mongoose = require("mongoose");



// CONEXION CON LA BASE DE DATOS

mongoose.connect('mongodb+srv://eadethomas:esklavos100@retomongo.0p0fsfh.mongodb.net/Codenotch', 
                  {useNewUrlParser: true, useUnifiedTopology: true})

.then((db) => {
    console.log("database connected on " + db.connection.host)
})
.catch((error) => {
    console.log(error)
})


