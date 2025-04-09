

const express = require("express")
const { Register, Login, Welcome, Logout } = require("../controllers/user")
const { Auth } = require("../middlewares/auth")

const UserRouter = express.Router()


UserRouter.post("/register", Register)
UserRouter.post("/login", Login)
UserRouter.post("/logout", Logout)


UserRouter.post("/welcome", Auth, Welcome)

module.exports = UserRouter