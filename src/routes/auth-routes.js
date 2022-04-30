const { login, register } = require("../controller/auth-controller")

const router = require("express").Router()

router.route("/login").post(login)

router.route("/register").post(register)

module.exports = router