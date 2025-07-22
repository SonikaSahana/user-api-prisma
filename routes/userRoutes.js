const express = require('express');
const router= express.Router();
const userController = require('../controllers/userController');
const { userSchemaValidation } = require('../validator/userValidator');
const oauthAuth = require('../middleware/oauth');

const validate  = require('../middleware/validate');
const auth= require('../middleware/auth');
router.post('/',validate(userSchemaValidation),userController.createUser);
router.post('/login', userController.loginUser);
router.get('/',oauthAuth,userController.getAllUsers);
router.get('/:id', auth,userController.getUser);
router.put('/:id',auth,validate(userSchemaValidation), userController.updateUser);
router.delete('/:id',auth,userController.deleteUser);
module.exports = router;
