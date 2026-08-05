console.log("rodou")

//FUNCÕES
//Uma funcão é um trecho isolado de código que executa determinada tarefa

init()
//declaracao nome() {escopo} 
// UMA FUNÇÃO SEMPRE DEVE SER CHAMADA, PRA SER EXECUTADA
//FUNÇÃO CONSTRUTORA
//PODE SER CHAMADA ANTES DA DECLARAÇÃO
function init() {
    //inicio escopo da função
    const numero = 3
    const resultado = numero * 10
    console.log(resultado)
    //fim do escopo
}

//ARROW FUNCTION - FLECHA
//SÓ PODE SER CHAMADA APÓS A DECLARAÇÃO
const calculo = () => {
    console.log("arrow", 4 * 2)
}
calculo()

//PARAMETROS
// dentro do () é passado os parametros
////declaracao nome( parametros ) {escopo} 
function calculoComParametros(numero1, numero2) {
    // console.log(typeof numero1, typeof numero2)
    if (typeof numero1 == "string") {
        console.log("parametros inválidos")
    } else {
        console.log("calculo com parametros", parseInt(numero1 * numero2))
    }
    return parseInt(numero1 * numero2)
}

const resultado = calculoComParametros(4, 8)
console.log(resultado, 'resultado função com parametros')
const resultado2 = calculoComParametros(resultado, resultado)
console.log(resultado2, 'resultado 2')
// calculoComParametros(1, 90.7)
// calculoComParametros("sa", 'das')

function calculoUsuario() {
    const numero1Usuario = parseInt(prompt("Digite o primeiro numero da multiplicação"))
    const numero2Usuario = parseInt(prompt("Digite o segundo numero da multiplicação"))
    const resultado = calculoComParametros(numero1Usuario, numero2Usuario)
    alert("O resultado da multiplicação é: " + resultado)
}

calculoUsuario()