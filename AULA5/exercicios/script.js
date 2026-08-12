import { frutas } from "./data.js"

function desconto(lista=[]) {
    console.log(lista,'lista parametro')
    const resultado = lista.filter((item)=>{
        console.log(item,'item da lista')
        return item.desconto == true
    })
    console.log(resultado,'resultado')
    return resultado
   
}
console.log(desconto(frutas))

function porcentagemDesconto(lista=[]){
    const valorDesconto = lista.filter((item)=>{
        console.log(lista)
        return valor.preco
    })
    console.log(valorDesconto, "teste")
    return valorDesconto

}
console.log(porcentagemDesconto(frutas))