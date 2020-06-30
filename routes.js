const express = require('express')
const routes = express.Router()
const create = require('./create')
const politica = require('./politica')

routes.get('/', function(req, res){
    return res.render("index")
})
routes.get("/create", function(req, res){
    return res.render("create")
})
routes.get("/warning", function(req, res){
    return res.render("warning")
})
routes.post("/covid", create.post)

routes.get('/:id/edit', create.edit)

routes.get("/covid", create.show)

routes.get("/politica", create.show_politica)

routes.put("/covid", create.put)

routes.delete("/covid", create.delete)

module.exports = routes