const express = require("express");
const { userAuth } = require("../middlewares/auth");

const profileRouter = express.Router();

profileRouter.get("/", userAuth,(req, res) => {
    try {
        cosnole.log("profile")
    } catch (error) {
        console.error(error);
    }   
});

module.exports = profileRouter;