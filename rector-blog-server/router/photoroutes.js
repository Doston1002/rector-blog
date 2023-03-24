const express = require('express');
const router = express.Router();
const upload = require('../config/multer').single('photo')
const middleware = require('../middleware/index');

const { addPhoto, getById, getAll, updatePhoto, deletePhoto, SearchPhoto } = require('../constroller/photo')

router.post('/add', middleware.checkToken, (req, res, next) => {
    upload(req, res,  function (err) {
    if (err || !req.file) {
    res.status(404).json({status:404, success:false, message:`photo qo'shish uchun 'photo' keyidan foydalanib 1ta rasm yuboring ${err}`})
    return
    }  
    next()
    })
  }, addPhoto)
  router.get('/all', middleware.checkContentType, getAll)
  router.get('/search/:title', middleware.checkContentType, SearchPhoto)
  router.get('/:id', middleware.checkParamsId, middleware.checkContentType, getById)
  router.put('/:id', middleware.checkParamsId, middleware.checkToken,(req, res, next) => {
    upload(req, res,  function (err) {
    if (err) {
    res.status(404).json({status:404, success:false, message:`photo qo'shish uchun 'photo' keyidan foydalanib 1ta rasm yuboring`})
    return
    }  
    next()
    })
  }, updatePhoto)
  router.delete('/:id', middleware.checkParamsId, middleware.checkContentType, middleware.checkToken, deletePhoto)

module.exports = router