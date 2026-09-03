const container = document.getElementById('pokedex-container');
const btnProximo = document.getElementById('btn-proximo');
const btnVoltar = document.getElementById('btn-voltar');

let urlAtual = 'https://pokeapi.co/api/v2/pokemon';
let urlProximo = null;
let urlAnterior = null;

async function buscarPokemons(url) {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon")
    const dados = await resposta.json()

    urlProximo = dados.next 
    urlAnterior = dados.previous
}
buscarPokemons()