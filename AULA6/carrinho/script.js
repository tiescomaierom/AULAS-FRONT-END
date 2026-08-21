import { produtos } from "./data.js";

const body = document.querySelector("body");

// Variável para armazenar a soma total do carrinho
let totalCarrinho = 0;

// 1. Criação do cabeçalho
function montarHeader() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");

    h1.innerText = "Tabacaria";
    header.append(h1);
    body.append(header);
}

// 2. Criação da estrutura base da aplicação (Vitrine + Carrinho)
function montarEstruturaMain() {
    const main = document.createElement("main");

    // Container da lista de produtos à venda
    const ulCigarros = document.createElement("ul");
    ulCigarros.classList.add("cigarro");

    const tituloCigarros = document.createElement("h2");
    tituloCigarros.classList.add("tituloCigarro");
    tituloCigarros.innerText = "Cigarros";
    ulCigarros.append(tituloCigarros);

    // Container do carrinho de compras
    const secaoCarrinho = document.createElement("section");
    secaoCarrinho.classList.add("container-carrinho");

    const tituloCarrinho = document.createElement("h2");
    tituloCarrinho.classList.add("tituloCarrinho");
    tituloCarrinho.innerText = "CARRINHO";

    const ulCarrinho = document.createElement("ul");
    ulCarrinho.classList.add("carrinho");

    // Elemento para exibir o valor total acumulado
    const pTotal = document.createElement("p");
    pTotal.classList.add("total-carrinho");
    pTotal.innerText = "TOTAL: R$ 0,00";

    secaoCarrinho.append(tituloCarrinho, ulCarrinho, pTotal);
    main.append(ulCigarros, secaoCarrinho);
    body.append(main);
}

// 3. Adiciona itens ao carrinho e atualiza o total
function adicionarAoCarrinho(produto) {
    const carrinhoLista = document.querySelector(".carrinho");
    const elementoTotal = document.querySelector(".total-carrinho");

    // Cria o item da lista do carrinho
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = produto.imagem;
    img.alt = produto.nome;

    const p = document.createElement("p");
    p.innerText = `${produto.nome} - R$ ${produto.preco}`;

    li.append(img, p);
    carrinhoLista.append(li);

    // Converte a string de preço para float para somar corretamente
    const valorNumerico = parseFloat(produto.preco.replace(".", "").replace(",", "."));
    totalCarrinho += valorNumerico;

    // Atualiza o texto do TOTAL formatado no padrão monetário brasileiro
    elementoTotal.innerText = `TOTAL: R$ ${totalCarrinho.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}

// 4. Renderiza todos os cards de produtos com imagem, nome, preço e botão de compra
function montarProdutos() {
    const listaCigarros = document.querySelector(".cigarro");

    produtos.forEach((produto) => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = produto.imagem;
        img.alt = produto.nome;

        const nome = document.createElement("p");
        nome.classList.add("nome-produto");
        nome.innerText = produto.nome;

        const preco = document.createElement("p");
        preco.classList.add("preco-produto");
        preco.innerText = `R$ ${produto.preco}`;

        const btn = document.createElement("button");
        btn.innerText = "COMPRAR";

        // Listener de clique para adicionar ao carrinho
        btn.addEventListener("click", () => {
            adicionarAoCarrinho(produto);
        });

        li.append(img, nome, preco, btn);
        listaCigarros.append(li);
    });
}

// Execução sequencial da montagem da página
montarHeader();
montarEstruturaMain();
montarProdutos();