function calculadoraUsuario(){
    const primeiroNum = parseFloat(prompt("digite o primeiro numero desejado"))
    const segundoNum = parseFloat(prompt("digite o segundo numero desejado"))
    const operador = prompt("digite o operador desejado: +, -, *, /")
    const resultado = calculadora(operador, primeiroNum, segundoNum)
    alert(resultado)
}

function calculadora(operador, numA, numB){
    if(operador == "+"){
        return numA + numB
    }else if(operador == "-"){
        return numA - numB          
    }else if (operador == "*"){
        return numA * numB
    }else if(operador == "/"){
        return numA / numB
    };
}
calculadoraUsuario()