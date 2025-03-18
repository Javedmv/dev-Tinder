const express = require("express");
const app = express();

app.use((req,res) => {
    res.send("hello from the server")
})

app.listen(3008,() => {
    console.log("connected to server http://localhost:3008")
})