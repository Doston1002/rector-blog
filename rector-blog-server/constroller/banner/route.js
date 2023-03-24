const express = require('express')
const router = express.Router()
const middleware = require('../../middleware');
const BannerController = require('./index')
const upload = require('../../config/multer').single('banner_img')

router.post('/add',  middleware.checkToken, (req, res, next) => {
    upload(req, res,  function (err) {
    if (err || !req.file) {
    res.status(404).json({status:404, success:false, message:`Banner qo'shish uchun 'banner_img' keyidan foydalanib 1ta rasm yuboring`})
    return
    }  
    next()
    })
  }, BannerController.Add)
  router.get('/get/all', middleware.checkContentType, BannerController.Get)
router.get('/:id', middleware.checkParamsId, middleware.checkContentType, BannerController.GetById)
router.put('/:id', middleware.checkParamsId,  middleware.checkToken, (req, res, next) => {
    upload(req, res,  function (err) {
    if (err) {
    res.status(404).json({status:404, success:false, message:`Banner qo'shish uchun 'banner_img' keyidan foydalanib 1ta rasm yuboring`})
    return
    }  
    next()
    })
  }, BannerController.Edit)
router.delete('/:id', middleware.checkParamsId, middleware.checkContentType, middleware.checkToken, BannerController.Delete)

module.exports = router