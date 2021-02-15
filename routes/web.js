const express = require('express');
const homeController = require('../app/http/controllers/homeController');
const authController = require('../app/http/controllers/authController');
const cartController = require('../app/http/controllers/customers/cartController');
const router = new express.Router();


router.get("/",homeController().index);

router.get("/login",authController().login);
router.post("/login",authController().loginCheck);

router.get("/register",authController().register);
router.post("/register",authController().registration);

router.get("/cart",cartController().cart);
// router.post("/update-cart", cartController().update);


module.exports = router;