var path = require("path")


//HTML ROUTE
module.exports = function (app) {
    //get home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    //get note page
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    })
      //wildcard page 
      app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
  
}