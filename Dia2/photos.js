
let mongoose = require("mongoose");

let Photo = require('./photosSchema');

//Fotos añadidas del otro archivo

let myPhotos = require('./photosComp');
let photo1 = myPhotos.photo1;
let photo2 = myPhotos.photo2;
let photo3 = myPhotos.photo3;


mongoose.connect('mongodb+srv://eadethomas:esklavos100@retomongo.0p0fsfh.mongodb.net/Codenotch', 
                  {useNewUrlParser: false, useUnifiedTopology: false});

                  

//Subir foto 


function addPhoto(usuario,url,titulo,descripcion){
    let photo = new Photo({
        userName: usuario,
        url: url,
        title: titulo,
        description: descripcion
    });
    Photo.create(photo)
        .then((data) => {
            console.log("Documento guardado correctamente");
            console.log(data);
            mongoose.disconnect();
        })
        .catch((err) => {
            console.log("Error: " + err);
        });
}
//Subir foto 

// addPhoto(photo1.userName,photo1.url,photo1.title, photo1.description);
// addPhoto(photo2.userName,photo2.url,photo2.title, photo2.description);
// addPhoto(photo3.userName,photo3.url,photo3.title, photo3.description);







//Obtener fotos


function getPhotos(usuario){
    Photo.find({userName: usuario})
        .then((data) => {
            console.log(data);
            mongoose.disconnect();
        })
        .catch((err) => {
            console.log("Error: " + err);
        });
}
//Obtener foto 1

// getPhotos(photo1.userName);



//Modificar 

function modifyPhotos(titulo,descripcion){
    Photo.updateOne({title: titulo}, {description: descripcion})
        .then((data) => {
            console.log('Foto actualizada correctamente.');
            console.log(data);
            mongoose.disconnect();
        })
        .catch((err) => {
            console.log("Error: " + err);
        });
}

//Modificar descripcion foto tren
// modifyPhotos('tren','descripcion tren modificada con updateOne ');


//-Eliminar una foto 
function delPhoto(usuario, titulo) {
    Photo.deleteOne({"$and": [{userName: usuario}, {title: titulo}]})
        .then(function(data) {
            console.log("Foto correctamente eliminada");
            console.log(data);
            mongoose.disconnect();
        })
        .catch(function() {
            console.log("Error al eliminar la foto");
        });
}
//Eliminar foto Phineas y Pherb
// let photoejemplo = {
//     userName: "Phineas",
//     title: "Phineas y Pherb"
//   };

// delPhoto(photoejemplo.userName, photoejemplo.title);




//Eliminar todas las fotos
function Borrarfotos(usuario){
    Photo.deleteMany({userName: usuario})
        .then(function(data) {
            console.log("Foto correctamente eliminada");
            console.log(data);
            mongoose.disconnect();
        })
        .catch(function() {
            console.log("Error al eliminar la foto");
        });
}
//Eliminar fotos
// let photoejemplo = {
//     userName: "Rosalia",
//   };
// Borrarfotos(photoejemplo.userName);