import {produtos} from "./data.js"

console.log("ola")
function montarProdutos(){ // trancreve html para o javascript
    //criar cada elemento da lista de produtos
    produtos.forEach((produto)=>{
        //li
        //button
        //clcik
        //montarcarrinho
    })
}
montarProdutos()

function montarCarrinho(){

}
const button = document.querySelector("button")
button.addEventListener("click",()=>{
    console.log('click')
    const carrinhoLista = document.querySelector(".carrinho")
    //  <li>
    //             <img src="./assets/camel-amarelo.jpg" alt="">
    //             <p>Camel Amarelo</p>
    //             <button>COMPRAR</button>
    //         </li>
    const img = document.createElement("img")
    img.src = produtos[0].imagem
    carrinhoLista.append(img)
})