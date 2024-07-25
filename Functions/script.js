// Criar uma funcao que some dois numeros e retorne o valor somado para a variavel "sum"

function sum() {
    return "1" + "1"
}

const result = sum()
console.log(result)

//exemplo2

function sum1(num1, num2) {
    return num1 + num2
}

const result1 = sum1(1, 3)
const result2 = sum1(2, 4)
console.log(result1)
console.log(result2)

// Criar uma funcao que receba os parametros 
// "nome", "nomeDoMeio" e "sobrenome" e concatene cada retornando o novo valor para a variavel "nomeCompleto"

function names(name, midname, surname) {

    return name + " " + midname + " " + surname
}

const fullname = names("lucas", "gabriel", "pereira")
console.log(fullname)

// Criar uma funcao com parametros posicionais para calcular o IMC (Indice de Massa Corporal)

function IMC(height, weight){

    return weight / (height * height)

}

const result4 = IMC(1.83, 80)
console.log(result4)

// convertida para arrow function

const IMC1 = (height1, weight1) => {

    return weight1 / (height1 * height1)

}

const result5 = IMC(1.83, 80)
console.log(result5)

// convertida para parametros nao posicionais

const IMC2 = ({height2, weight2}) => {

    return weight2 / (height2 * height2)

}

const result6 = IMC2({height2: 1.83, weight2: 80})
console.log(result6)

// Calcular Média de Três Números
// Escreva uma função chamada mediaTres que recebe três números e retorna a média aritmética deles.

const mediatres = ({n1, n2, n3}) => {
    
    return (n1 + n2 + n3) / 3

}

const media = mediatres({n1: 20, n2: 50, n3: 40 })
console.log(media)

// Verificar Maioridade
// Escreva uma função chamada verificarMaioridade que recebe uma idade como 
// parâmetro e retorna true se a idade for 18 ou mais, e false caso contrário

function big(age){

    if (age >= 18){
        return true

    } else {
        return false
    }

}

const age1 = big(18)
console.log(age1)

////////////////

function big(age){

    return age >= 18 ? true : false

}

const age2 = big(18)
console.log(age2)

// Escreva um programa que leia uma string e verifique se 
// ela tem mais de 10 caracteres. Exiba "A string tem mais de 10 caracteres" ou "A string tem 10 ou menos caracteres".

const text = prompt("digite seu texto")
const car1 = text.length > 10 ? "seu texto tem mais de 10 caracteres" : "seu texto tem menos de 10 caracteres"

console.log(car1)

//outra forma

function car(){

    const text = prompt("digite seu texto")
    return text.length > 10 ? "seu texto tem mais de 10 caracteres" : "seu texto tem menos de 10 caracteres"

}

const car2 = car()
console.log(car2)
