const express = require('express');
const router = express.Router();
const authController = require('../constroller/userController');
const middleware = require('../middleware');

router.post('/register', middleware.checkContentType, authController.register);
router.post('/login', middleware.checkContentType, authController.login);
router.get('/users', middleware.checkContentType, middleware.checkToken, authController.GetAdmin)

router.get('/:id', middleware.checkContentType,middleware.checkParamsId,middleware.checkToken, authController.GetByIdAdmin)
router.put('/:id',middleware.checkParamsId,middleware.checkToken, authController.EditAdmin)
router.delete('/:id',middleware.checkParamsId,middleware.checkToken, authController.DeleteAdmin)
module.exports = router;