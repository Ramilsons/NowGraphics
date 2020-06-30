const fs = require('fs')
const data = require('./data.json')


//show
exports.show = function(req, res){
    const found = data.grafico
    return res.render("politica", {graficos: found})

}

