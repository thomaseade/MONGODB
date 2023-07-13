const Photo = require("../model/PhotoSchema");


const getPhotosByUser = async (req, res) => {
    try {
      let { user } = req.params;
      let photos = await Photo.find({ userName: user });
  
      if (photos.length > 0) {
        res.json({
          error: false,
          mensaje: "Fotos disponibles",
          data: photos,
        });
      } else {
        res.json({
          error: true,
          mensaje: "No hay fotos",
          data: null,
        });
      }
    } catch (error) {
      console.error(error);
    } 
  };



const putPhoto = async (req, res) => {
  let { userName, url, title, description } = req.body;
  try {
    let newPhoto = new Photo({ userName, url, title, description });
    await newPhoto.save();

    res.json({
      error: false,
      mensaje: "Foto subida correctamente",
      data: null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      mensaje: "Error al subir la foto",
      data: null,
    });
  }
};



const updateDescription = async (req, res) => {
  let { title, description } = req.body;
  try {
    await Photo.findOneAndUpdate({ title }, { description });

    res.json({
      error: false,
      mensaje: "Descripción de la foto actualizada correctamente",
      data: null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      mensaje: "Error al modificar la descripción de la foto",
      data: null,
    });
  }
};

const deletePhoto = async (req, res) => {
    const { user, title } = req.body;
    try {
      let deletedPhoto = await Photo.findOneAndDelete({ userName: user, title });
  
      if (deletedPhoto) {
        res.json({
          error: false,
          mensaje: "Foto eliminada correctamente",
          data: null,
        });
      } else {
        res.status(404).json({
          error: true,
          mensaje: "No se encontró la foto",
          data: null,
        }); 
      } 
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: true,
        mensaje: "Error al eliminar la foto",
        data: null,
      });
    }
  };


  const deleteAllPhotosByUser = async (req, res) => {
    const { user } = req.params;
    try {
      await Photo.deleteMany({ userName: user }); 
  
      res.json({
        error: false,
        mensaje: "Todas las fotos del usuario han sido eliminadas",
        data: null,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: true,
        mensaje: "Error al eliminar todas las fotos del usuario",
        data: null,
      });
    }
  };

module.exports = { getPhotosByUser, putPhoto, updateDescription, deletePhoto, deleteAllPhotosByUser };  