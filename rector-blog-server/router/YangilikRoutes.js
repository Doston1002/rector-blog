const express = require('express');
const router = express.Router();
const upload = require('../config/multer').single('photo')
const middleware = require('../middleware/index');

const { addNews, getById, getAll, updateNews, deleteNews, SearchNews } = require('../constroller/yangilik')

router.post('/add', middleware.checkToken, (req, res, next) => {
    upload(req, res,  function (err) {
    if (err || !req.file) {
    res.status(404).json({status:404, success:false, message:`Yangilik qo'shish uchun 'photo' keyidan foydalanib 1ta rasm yuboring ${err}`})
    return
    }  
    next()
    })
  }, addNews)
  router.get('/all', middleware.checkContentType, getAll)
  router.get('/search/:title', middleware.checkContentType, SearchNews)
  router.get('/:id', middleware.checkParamsId, middleware.checkContentType, getById)
  router.put('/:id', middleware.checkParamsId, middleware.checkToken,(req, res, next) => {
    upload(req, res,  function (err) {
    if (err) {
    res.status(404).json({status:404, success:false, message:`Yangilik qo'shish uchun 'photo' keyidan foydalanib 1ta rasm yuboring`})
    return
    }  
    next()
    })
  }, updateNews)
  router.delete('/:id', middleware.checkParamsId, middleware.checkContentType, middleware.checkToken, deleteNews)

module.exports = router