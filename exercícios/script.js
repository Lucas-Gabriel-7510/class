// Escreva um programa que substitua todas as palavras "dog" por "cat".

const texto = prompt("digite 'dog' e veja a magica")
const texto1 = texto.replace(/dog/gi, "cat")
console.log(texto1)

// Escreva um programa que verifique se a palavra "dog" esta contida no texto.

const consta = prompt("digite uma palavra usando dog")
const palavra = consta.includes("dog")

if (palavra) {
    console.log("esta palavra possui dog")
} else {
    console.log("esta palavra nao possui dog")
}

// Escreva um programa que leia duas strings e as concatene. Exiba a string resultante.

    const string1 = prompt("Digite algo")
    const string2 = prompt("Digite mais")

    const string3 = string1 + string2
    const resultado = string1.concat(" ", string2)

    console.log(resultado)
    

    // Escreva um programa que leia uma string e conte o número de vezes que a letra aparece na string.

    const frase = "ola mundo, mundo ola"
    const contador = frase.matchAll("ola")
    const length = contador.length
    console.log(contador)
    console.log(length)

    // Escreva um programa que leia um e-mail e extraia o domínio (parte após o "@"). Exiba o domínio.

    const email = prompt("digite seu email")
    const corte = email.split("@")

    console.log(corte)

    // Escreva um programa que leia uma string e remova todos os caracteres especiais
    // (mantenha apenas letras e números). Exiba a string resultante.

    const acento = prompt("digite algo com acento")
    const semacento = acento.normalize("NFD")
    const semmacento = semacento.replace(/\p{Mn}/gu, "")

    console.log(semmacento)




