var path = require("path")
var noteData = require("../db/db.json")
const fs = require("fs")
const { v4: uuidv4 } = require('uuid');


// API ROUTE
module.exports = function (app) {
    //get request
    app.get("/api/notes", function (req,res){
        res.json(noteData)
    })
    //post request
    app.post("/api/notes", function (req,res){
        req.body.id = uuidv4()
        noteData.push(req.body)
        fs.writeFile("./db/db.json", JSON.stringify(noteData), function(err){
            if(err) {
                throw error
            }
            res.json("saved")
        })
        
    })
    //delete request
    app.delete("/api/notes/:id", function (req,res){
        var note = req.params.id
        console.log(note)
        var journal = []
  
        for (var i = 0; i < noteData.length; i++) {
          if (noteData[i].id !== note) {
             journal.push(noteData[i]);
          }
        }
        noteData = journal
        fs.writeFile("./db/db.json", JSON.stringify(noteData), function(err){
            if(err) {
                throw error
            }
            res.json("deleted")
        })
   
    })
}

