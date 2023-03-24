const express = require('express')
const router = express.Router()
const upload = require('../config/multer').array('file',20)
const update = require('../config/multer').single('file')
const middleware = require('../middleware');
const MediaController = require('../constroller/media')

router.post('/add', middleware.checkToken, (req, res, next) => {
    upload(req, res,  function (err) {
      console.log(req.files)
    if (err || !req.files) {
    res.status(404).json({status:404, success:false, message:`Media qo'shish uchun 'file' keyidan foydalanib 20tagacha rasm yuboring`})
    return
    }  
    next()
    })
  }, MediaController.Add);
router.get('/get/all', middleware.checkContentType, middleware.checkToken, MediaController.Get)
router.get('/all-media', middleware.checkContentType, middleware.checkToken, MediaController.GetAll)
router.get('/:id', middleware.checkParamsId, middleware.checkContentType, middleware.checkToken, MediaController.GetById)
router.put('/:id', middleware.checkParamsId,  middleware.checkToken, (req, res, next) => {
  update(req, res,  function (err) {
  if (err) {
  res.status(404).json({status:404, success:false, message:`Media qo'shish uchun 'file' keyidan foydalanib 1ta rasm yuboring`})
  return
  }  
  next()
  })
},  MediaController.Edit)
router.delete('/:id', middleware.checkParamsId, middleware.checkContentType, middleware.checkToken, MediaController.Delete)
router.get('/down/:file', MediaController.Download)

module.exports = router