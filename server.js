//dependices
const express = require("express")
const fs = require("fs")
const path = require("path")
const favicon = require('express-favicon')


//create an express server and port
const app = express()
const PORT = process.env.PORT || 3000


// Set up the Express app to handle data parsing

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("public"))
app.use(favicon(__dirname + '/public/favicon.png'))

//linking Routes
require("./routing/api-route")(app)
require("./routing/html-route")(app)


//server listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
})
 // favicon listener
const server = app.listen(2000, function(){
    console.log('server is running at %s .', server.address().port);
});

