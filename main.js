"use strict"

const imagens = [
    "./img_1.webp",
    "./img_2.jpg",
    "./img_3.jpg",
    "./img_4.jpg",
    "./img_5.webp"
]

function trocarImagem() {

    const imagemAtual = imagens.shift(); 
    imagens.push(imagemAtual);

  
    document.body.style.backgroundImage = `url('${imagens[0]}')`
}

document.getElementById("trocar-imagem").addEventListener("click", trocarImagem);







//function trocarImagem (){
   // const imagem = document.getElementById('imagem') . value
   // document.documentElement.style.setProperty ('--imagem-fundo', imagem )

//}
//botaoTrocarImagem.addEventListener('click', trocarImagem)