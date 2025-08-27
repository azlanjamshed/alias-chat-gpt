const express = require("express")
const router = express.Router()
const authMiddleware = require("../middleware/auth.middleware")
const authController = require("../controller/chat.controller")



router.post("/", authMiddleware.authUser, authController.createChat)



module.exports = router