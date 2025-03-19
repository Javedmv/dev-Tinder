const express = require("express");
const dotenv = require("dotenv")
dotenv.config();
const cookieParser = require("cookie-parser")
const { connectDb} = require("./config/database")
const app = express();

app.use(cookieParser());
app.use(express.json());

const authRouter = require("./routes/auth")
const profileRouter = require("./routes/profile")
const requestRouter = require("./routes/request")

app.use("/",authRouter)
app.use("/",profileRouter)
app.use("/",requestRouter)

connectDb()
    .then(() => {
        console.log("mongo connected")
        app.listen(3008,() => {
            console.log("connected to server http://localhost:3008")
        })
    })
    .catch((err) => console.log(err,"something went wrong"))

