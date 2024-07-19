const array = ["Java", "Go", "C++", "Lua"]

console.log(array[2])

array[0] = "JavaScript"
console.log(array)

array.push("PHP")
console.log(array)

array.push("Next")
console.log(array)

array.pop()
console.log(array)

// - Crie um array com 3 categorias: free, premium e plus e execute os seguintes procedimentos, na ordem a seguir:
// 	- Acesse o elemento de índice/posição 0.
// 	- Acesse o elemento de índice/posição 2.

const array1 = ["free", "premium", "plus"]

console.log(array1[0])
console.log(array1[2])

array1.splice(0, 0, "poor", "rich")
console.log(array1)

array1.splice(1, 2, "platinum", "ruby", "silver")
console.log(array1)

// - Crie um array com 5 times de futebol ou frutas e execute os seguintes procedimentos, na ordem a seguir:
// 	- Acesse o elemento de índice/posição 3.
// 	- Adicione mais 2 elementos no final do array.
// 	- Delete os elementos das posições 4 e 5.
// 	- Adicione 3 elementos no início do array.
// 	- Delete o último elemento do array.
// 	- Obs.: Exibir o resultado no console da cada um dos codigos executado acima.

const array2 = ["uva", "laranja", "pera", "banana", "ameixa"]

console.log(array2[3])

array2.push("goiaba", "morango")
console.log(array2)

array2.pop()
console.log(array2)
array2.pop()
console.log(array2)

array2.splice(0, 0, "manga", "laranja", "maçã")
console.log(array2)

array2.pop()
console.log(array2)

// Crie um array com 5 nomes de cidades.
// Acesse o elemento de índice/posição 3.
// Adicione mais 3 elementos no final do array.
// Delete os elementos das posições 1 e 2.
// Adicione 1 elemento no início do array.
// Delete o último elemento do array.
// Exiba o resultado no console de cada um dos códigos executados acima.

const array3 = ["Goiás", "São Paulo", "Rio de Janeiro", "Anápolis", "Goiania"]

console.log(array3[3])

array3.push("Cidade1", "Cidade2", "Cidade3")
console.log(array3)

array3.splice(1, 2)
console.log(array3)

array3.splice(0, 0, "Elemento")
console.log(array3)

array3.pop()
console.log(array3)

console.log(array3.length)