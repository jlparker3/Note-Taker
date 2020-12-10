const express = require("express")
const fs = require("fs")
const path = require("path")

//create an express server and port
const app = express()
const PORT = 3000


// Set up the Express app to handle data parsing

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("public"))

//linking Routes
require("./routing/api-route")(app)
require("./routing/html-route")(app)


//server listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
})
