const express = require('express');
const router = express.Router();
const PhotosController = require('../controller/photos.controller');

router.get('/photos/:user', PhotosController.getPhotosByUser);
router.post('/photos', PhotosController.putPhoto);
router.put('/photos', PhotosController.updateDescription);
router.delete('/photos', PhotosController.deletePhoto);
router.delete('/photos/:user', PhotosController.deleteAllPhotosByUser);


module.exports = router; 