const express = require("express")
const {userAuth} = require("../middlewares/auth")

const requestRouter = express.Router()

requestRouter.post("/sendConnectionRequest", async (req, res) => {
    try {
        console.log("Create request")
    } catch (error) {
        console.error(error)
    }
})


module.exports = requestRouter