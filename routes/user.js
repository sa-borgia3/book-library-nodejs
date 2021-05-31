const express = require("express");
const router = express.Router();

//import controllers
const userController = require("../controllers/user");

router.get("/signup", userController.getSignUp);
router.post("/signup", userController.postSignUp);
router.get("/login", userController.getLogin);
router.post("/login", userController.postLogin);
router.post("/logout", userController.postLogout);

router.get("/cart", userController.getCart);
router.post("/add-to-cart/:bookId", userController.addToCart);

module.exports = router;