let mongoose = require ("mongoose");
let { User, Profile, Credentials } = require("./usersMDB");
const { profile } = require("console");



mongoose.connect('mongodb+srv://eadethomas:esklavos100@retomongo.0p0fsfh.mongodb.net/Codenotch', 
                  {useNewUrlParser: false, useUnifiedTopology: false});
                  


// crear documento user

// let user =  new User({
//     login:"Daniel",
//     password:"daniel123"
// })





// user.save()
//   .then((res) => {
//     console.log("Documento guardado correctamente");
//     console.log(res);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.error("Error al guardar el documento User:", err);
//   });



  //documento profile

//   let profiledoc =  new Profile({
//     name: "Pepe",
//     surname: "Rodriguez",
//     dateOfBirth: "1995-06-16",
//     comments: "comentario comentario blablabla",
//     rol: "nuevo"
//      })

//   profiledoc.save()
//   .then((res) => {
//     console.log("Documento guardado correctamente");
//     console.log(res);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.error("Error al guardar el documento Profile:", err);
//   });




   //documento credenciales


   let credentialdoc = new Credentials({
    address: "Cañada de la viña",
    phone: 657657657,
    email: "pepepepito@gmail.com"
})

credentialdoc.save()
.then((res) => {
    console.log("Documento guardado correctamente");
    console.log(res);
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error al guardar el documento Credentials:", err);
  });
