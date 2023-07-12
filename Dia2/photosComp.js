

let mongoose = require("mongoose");

let Photo = require('./photosSchema');

mongoose.connect('mongodb+srv://eadethomas:esklavos100@retomongo.0p0fsfh.mongodb.net/Codenotch', 
                  {useNewUrlParser: false, useUnifiedTopology: false});



let photo1 = new Photo(
    {
        userName: "Thomas",
        url: "https://tomaprimera.es/wp-content/uploads/2023/03/quienes-son-los-amigos-de-thomas-el-tren-1.jpg",
        title: "tren",
        description: "el tren Thomas"
    }
);

let photo2 = new Photo(
    {
        userName: "Carlitos",
        url: "https://i.pinimg.com/originals/c8/b5/64/c8b564a68e3d333b55fa97d149848695.jpg",
        title: "Carlitos bien vestido",
        description: "Imagen de los dibujitos"
    }
);

let photo3 = new Photo(
    {
        userName: "Phineas",
        url: "https://www.latercera.com/resizer/vmK0u9VogDz-FBna-QnRu5ftIrA=/900x600/filters:focal(243x215:253x205)/cloudfront-us-east-1.images.arcpublishing.com/copesa/G2CCXTRFPZCGXNCTSVOG2YWKJQ.jpg",
        title: "Phineas y Pherb",
        description: "Phineas con su hermano"
    }
);

let photo4 = new Photo(
    {
        userName: "Rosalia",
        url: "https://fotografias.larazon.es/clipping/cmsimages01/2022/03/17/08028B34-B31A-4227-9155-2B35E326F1A7/98.jpg?crop=3500,1969,x0,y166&width=1900&height=1069&optimize=low&format=webply",
        title: "Rosalia posando",
        description: "foto del nuevo disco de Rosalia"
    }
);

 //guardar foto 1

// photo1.save()
// .then((data) => {
//     console.log("Documento guardado correctamente");
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Error: " + err);
// });

//guardar foto 2

// photo2.save()
// .then((data) => {
//     console.log("Documento guardado correctamente");
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Error: " + err);
// });

//guardar foto 3

// photo3.save()
// .then((data) => {
//     console.log("Documento guardado correctamente");
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Error: " + err);
// });

//guardar foto 4

// photo4.save()
// .then((data) => {
//     console.log("Documento guardado correctamente");
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Error: " + err);
// });



module.exports = {photo1,photo2,photo3,photo4};