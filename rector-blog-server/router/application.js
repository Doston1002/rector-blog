const express = require('express')
const router = express.Router()
const upload = require('../config/multer').array('file',20)
const update = require('../config/multer').single('file')
const middleware = require('../middleware');
const ApplicationController = require('../constroller/application')

router.post('/add', middleware.checkToken, (req, res, next) => {
    upload(req, res,  function (err) {
      console.log(req.files)
    if (err || !req.files) {
    res.status(404).json({status:404, success:false, message:`Media qo'shish uchun 'file' keyidan foydalanib 20tagacha rasm yuboring`})
    return
    }  
    next()
    })
  }, ApplicationController.Add);
router.get('/', middleware.checkContentType, middleware.checkToken, ApplicationController.Get)
router.get('/all-media', middleware.checkContentType, middleware.checkToken, ApplicationController.GetAll)
router.get('/:id', middleware.checkParamsId, middleware.checkContentType, middleware.checkToken, ApplicationController.GetById)
router.put('/:id', middleware.checkParamsId,  middleware.checkToken, (req, res, next) => {
  update(req, res,  function (err) {
  if (err) {
  res.status(404).json({status:404, success:false, message:`Media qo'shish uchun 'file' keyidan foydalanib 1ta rasm yuboring`})
  return
  }  
  next()
  })
},  ApplicationController.Edit)
router.delete('/:id', middleware.checkParamsId, middleware.checkContentType, middleware.checkToken, ApplicationController.Delete)
router.get('/down/:file', ApplicationController.Download)

module.exports = router