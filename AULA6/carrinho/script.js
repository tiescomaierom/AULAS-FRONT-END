import {produtos} from "./data.js"

const body = document.querySelector("body")


function montarHeader(){
    const header = document.createElement("header")
    const h1 = document.createElement("h1")

    h1.innerText = "Tabacaria"
    header.append(h1)
    body.append(header)
}

//  <main>
//         <ul class="cigarro">
//             <h2 class="tituloCigarro">Cigarros</h2>
//             <li>
//                 <img src="./assets/camel-amarelo.jpg" alt="">
//                 <p>Camel Amarelo</p>
//                 <button>COMPRAR</button>
//             </li>
          
//         </ul>
        
//     </main>


function montarMain(){
    const main = document.createElement("main");

    // 1. Seção da Lista de Produtos
    const ulCigarros = document.createElement("ul");
    ulCigarros.classList.add("cigarro");

    const tituloCigarros = document.createElement("h2");
    tituloCigarros.classList.add("tituloCigarro");
    tituloCigarros.innerText = "Cigarros";
    ulCigarros.append(tituloCigarros);

    // Renderiza cada produto com seu respectivo preço
    produtos.forEach((produto) => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = produto.imagem;
        img.alt = produto.nome;

        const nome = document.createElement("p");
        nome.innerText = produto.nome;

        const preco = document.createElement("p");
        preco.innerText = `R$ ${produto.preco}`;

        const btn = document.createElement("button");
        btn.innerText = "COMPRAR";
        btn.addEventListener("click", () => {
            adicionarAoCarrinho(produto);
        });

        li.append(img, nome, preco, btn);
        ulCigarros.append(li);
    });

    // 2. Seção do Carrinho
    const ulCarrinho = document.createElement("ul");
    ulCarrinho.classList.add("carrinho");

    const tituloCarrinho = document.createElement("h2");
    tituloCarrinho.classList.add("tituloCarrinho");
    tituloCarrinho.innerText = "CARRINHO";
    ulCarrinho.append(tituloCarrinho);

    main.append(ulCigarros, ulCarrinho);
    body.append(main);
    
}
function adicionarAoCarrinho(produto) {
    const carrinhoLista = document.querySelector(".carrinho");

    const li = document.createElement("li");
    
    const img = document.createElement("img");
    img.src = produto.imagem;
    img.alt = produto.nome;

    const p = document.createElement("p");
    p.innerText = `${produto.nome} - R$ ${produto.preco}`;

    li.append(img, p);
    carrinhoLista.append(li);
}


function montarProdutos(){ // trancreve html para o javascript
const listaCigarros = document.querySelector(".cigarro");

    produtos.forEach((produto) => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = produto.imagem;
        img.alt = produto.nome;

        const nome = document.createElement("p");
        nome.classList.add("nome-produto");
        nome.innerText = produto.nome;

        // Elemento para exibir o preço
        const preco = document.createElement("p");
        preco.classList.add("preco-produto");
        preco.innerText = `R$ ${produto.preco}`;

        const btn = document.createElement("button");
        btn.innerText = "COMPRAR";

        btn.addEventListener("click", () => {
            adicionarAoCarrinho(produto);
        });

        // Adiciona a imagem, o nome, o preço e o botão ao <li>
        li.append(img, nome, preco, btn);
        listaCigarros.append(li);
    });
}
montarHeader();
montarMain();
montarProdutos();

// function montarCarrinho(){

// }
// const button = document.querySelector("button")
// button.addEventListener("click",()=>{
//     console.log('click')
//     const carrinhoLista = document.querySelector(".carrinho")
//     //  <li>
//     //             <img src="./assets/camel-amarelo.jpg" alt="">
//     //             <p>Camel Amarelo</p>
//     //             <button>COMPRAR</button>
//     //         </li>
//     const img = document.createElement("img")
//     img.src = produtos[0].imagem
//     carrinhoLista.append(img)
// })