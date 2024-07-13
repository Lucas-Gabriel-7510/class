// alert("ola, mundo")

console.log("oi")

// Define a variável
const idade = 17;

// Verifica se a idade é maior ou igual a 18
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Escreva um codigo usando IF que verifica se um número é positivo ou negativo ou zero e mostra uma mensagem no console.log() dizendo se e positivo ou negativo.

const num = 2;

console.log(typeof num) //mostra o tipo
console.log(num)
console.log(0 === 0) // 3 igual chega o tipo e o conteudo
console.log("0" === 0)

if (num < 0) {
    console.log("este numero é negativo")
} else if (num == 0) {
    console.log("este numero é nulo")
} else  {
   console.log("este numero é positivo")
} 

// Desenvolva um programa que compara duas idades e imprime uma mensagem indicando se a primeira pessoa é mais velha, mais nova ou tem a mesma idade que a segunda pessoa.
// - A mensagem deve aparecer para o usuario e nao somente no console.log()
// - O usuario deve poder digitar as duas idades

const num1 = prompt("Digite a idade da primeira pessoa");
const num2 = prompt("Digite a idade da segunda pessoa");

if (num1 > num2) {
    console.log("a primeira pessoa é mais velha")
} else if (num1 < num2) {
    console.log("a segunda pessoa é mais velha")
} else {
    console.log ("as duas pessoas possuem a mesma idade")
}

// Criar uma string com todos os caracteres em minusculo e usar um 
// metodo para retornar no console.log() todos os caracteres em maiusculo.

const nome = prompt("Digite seu nome")
const res = nome.toUpperCase();
console.log (res)

// Criar uma string e mostrar no console.log() a quantidade de caracteres.

const alo = prompt("contador de caracteres")
const ala = alo.length;
console.log (ala)

// 2) Criar uma string que adicione zeros "0" na frente da string caso a string tenha menos do que 6 caracteres. Exemplo, a string "const id = 123" deve se tornar "000123". Para isso voce deve pesquisar o metodo padStart na documentacao da MZN ou W3C.

const alg = prompt("digite um numero")
const elg = alg.padStart(6, "0")
console.log(elg)

// 1) Criar uma string "password" e criar um IF para mostrar uma mensagem no console.log() caso exista o simbolo de @ dentro da string e outra mensagem caso o simbolo nao exista.

const password = prompt("senha")

if (password.includes("@")) {
    console.log("sua senha possui @")

} else {
    console.log("sua senha nao possui @")
}

// divisao

const password1 = prompt("sua senha")
const check = password1.search("@")

if (check > 0) {
    console.log("sua senha possui @")
} else {
    console.log("sua senha nao possui @")
}

// Crie um programa que verifica se um número é par ou ímpar.

const num01 = prompt("digite um numero")
const num02 = num01 % 2

const ternario1 = num02 === 0 ? "seu numero é par" : "seu numero é impar"
console.log(ternario1)

// dividao

if (num02 == 0) {
    console.log("seu numero é par")
} else {
    console.log("seu numero é impar")
}

// Escreva um programa que leia a idade de uma pessoa e verifique se ela pode votar (ou seja, maior de 16 anos, no caso do Brasil). Exiba "Você pode votar" ou "Você não pode votar".

const ida = prompt("digite sua idade")
const voto = ida >= 16 ? "voce pode votar" : "voce nao pode votar"
console.log(voto)