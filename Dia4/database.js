let mongoose = require("mongoose");
const { db } = require("../../Dia 2/photo");



mongoose.connect('mongodb+srv://eadethomas:esklavos100@retomongo.0p0fsfh.mongodb.net/Codenotch', 
                  {useNewUrlParser: false, useUnifiedTopology: false})

.then((db) => {
    console.log("database connected on " + db.connection.host)
})
.catch((error) => {
    console.log(error)
})


