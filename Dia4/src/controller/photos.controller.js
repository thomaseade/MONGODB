const Photo = require("../model/PhotoSchema");



// Obtener las fotos de un usuario

const getPhotosByUser = (req, res) => {
  let { user } = req.params;

  Photo.find({ userName: user })
    .then((photos) => {
      if (photos.length > 0) {
        res.json({
          error: false,
          mensaje: "Fotos del usuario:",
          data: photos,
        });
      } else {
        res.json({
          error: true,
          mensaje: "No se encuentran fotos",
          data: null,
        });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        error: true,
        mensaje: "Error al buscar fotos del usuario",
        data: null,
      });
    });
};


// añadir una foto 


const putPhoto = (req, res) => {
  let { userName, url, title, description } = req.body;

  let newPhoto = new Photo({ userName, url, title, description });

  newPhoto
    .save()
    .then(() => {
      res.json({
        error: false,
        mensaje: "Foto añadida",
        data: null,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        error: true,
        mensaje: "Error al añadir  foto",
        data: null,
      });
    });
};



// actualizar la descripcion de una foto  segun su titulo 


const updateDescription = (req, res) => {
  let { title, description } = req.body;

  Photo.findOneAndUpdate({ title }, { description })
    .then(() => {
      res.json({
        error: false,
        mensaje: "Descripción de la foto actualizada ",
        data: null,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        error: true,
        mensaje: "Error al actualizarla la foto",
        data: null,
      });
    });
};


// borrar una foto de un usuario segun el titulo y el nombre de usuario

const deletePhoto = (req, res) => {
  const { user, title } = req.body;

  Photo.findOneAndDelete({ userName: user, title })
    .then((deletedPhoto) => {
      if (deletedPhoto) {
        res.json({
          error: false,
          mensaje: "Foto borrada ",
          data: null,
        });
      } else {
        res.status(404).json({
          error: true,
          mensaje: "Error al buscar la foto",
          data: null,
        });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        error: true,
        mensaje: "Error al borrar la foto ",
        data: null,
      });
    });
};



//borrar todas las fotos de un usuario 


const deleteAllPhotosByUser = (req, res) => {
  const { user } = req.params;

  Photo.deleteMany({ userName: user })
    .then(() => {
      res.json({
        error: false,
        mensaje: "Fotos borradas",
        data: null,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        error: true,
        mensaje: "Error al borrar las fotos",
        data: null,
      });
    });
};

module.exports = { getPhotosByUser, putPhoto, updateDescription, deletePhoto, deleteAllPhotosByUser };  