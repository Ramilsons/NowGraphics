const fs = require('fs')
const data = require('./data.json')

//create
exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for(key of keys){
        if(req.body[key] == ""){
            return res.send('Preencha todos os campos')
        }
    }
    //teste
    const tamanho = data.grafico.length
    const index_anterior = data.grafico[tamanho-1].id
    // fim do teste
    let {title, url_fonte, url_image, gender} = req.body
    //teste
    const id = index_anterior+1
    //fim do teste
    //const id = Number(data.grafico.length+1)

    data.grafico.push({
        id,
        title,
        url_fonte,
        url_image,
        gender
    })
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err){
            return res.send('Houve um erro')
        }else{
           
            return res.redirect("/warning")
        }
    })
    //return res.send(req.body)
}

//show
exports.show = function(req, res){
    const found = data.grafico
    return res.render("covid", {graficos: found})
}
exports.show_politica = function(req, res){
    const found = data.grafico
    return res.render("politica", {graficos: found})
}
//edit
exports.edit = function(req, res){
    const { id } = req.params
    
    const foundGraphic = data.grafico.find(function(grafico){
        return id == grafico.id
    })

    if(!foundGraphic) return res.send("Grafico não encontrado") 

    return res.render('edit', {grafico: foundGraphic})
}


exports.put = function(req, res){
    const { id } = req.body
    let index = 0

    const foundGraphic = data.grafico.find(function(grafico, foundIndex){
        if(id == grafico.id){
            index = foundIndex
            return true
        }
     
    })

    if(!foundGraphic) return res.send("Grafico não encontrado") 
    
    grafico = {
        ...foundGraphic,
        ...req.body,
        id:Number(req.body.id)
    }

    data.grafico[index] = grafico

    fs.writeFile("data.JSON", JSON.stringify(data, null, 2),function(err){
        if (err) return res.send("erro de escrita!")
        
        return res.redirect(`/covid`)
    })
    
}

exports.delete = function(req, res){
    const { id } = req.body

    const filteredGraphic = data.grafico.filter(function(grafico){
        return grafico.id != id
    })

    data.grafico = filteredGraphic
    
    fs.writeFile("data.json", JSON.stringify(data,null,2),function(err){
        if(err) return res.send("erro de escrita")

        return res.redirect("/covid")
    })
}