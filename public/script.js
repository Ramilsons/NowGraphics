const modalOverlay = document.querySelector(".modal-overlay")

const imagens = document.querySelectorAll(".class_imagem")


for(let imagem of imagens){
    imagem.addEventListener("click", function(){
        const imagem_id = imagem.getAttribute("id")

        modalOverlay.classList.add("active")

        modalOverlay.querySelector("img").src=`${imagem_id}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")

    modalOverlay.querySelector("img").src=""
})

const url = location.href
console.log(url)
const topicos = document.querySelectorAll(".topic_menu")
const topicosLength = topicos.length

for(let topico of topicos){
    console.log(topico.href)
  if (topico == url){
        topico.classList.add("ativo")
  }
}