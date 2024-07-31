console.log(console)

// - Criar um objeto com as seguintes propriedades e valores:
// 	- name: Gabriel
// 	- surname: Gomes
// 	- age: 18
// 	- birthdate: 16/08/1988
// 	- type: free
// - Acessar a propriedade name
// - Acessar a propriedade birthdate
// - Concatenar a propriedade name e surname adicionando o novo valor na variavel fullname
// - Modificar a propriedade type para "premium"

const pessoa1 = {

    name: "Gabriel",
    surname: "Gomes",
    age: 18,
    birthdate: "16/08/1988",
    type: "free"

}

pessoa1.name
pessoa1.birthdate

const fullname = pessoa1.name + " " + pessoa1.surname
console.log(fullname)

pessoa1.type = "premium"
console.log(pessoa1)

// Criar um objeto com as seguintes propriedades:
// 	- nome
// 	- idade (21 anos)
// 	- pais (array com o nome do pai e da mãe)
// 	- propriedade "pensar" com uma função que retorne "pensei"
// Executar as seguintes operações
// - Acessar a propriedade idade e mostrar o resultado
// - Acessar a propriedade pais e mostrar o nome do pai
// - Acessar a propriedade "pensar" ativando a função interna

const pessoa2 = {
    name: "Lucas", 
    age: 21,
    parents: ["Anna", "João"],
    pensar: function pensei(){
        return "pensei"
    }
}

console.log(pessoa2.age)

console.log(pessoa2.parents[1])

console.log(pessoa2.pensar())
console.log(pessoa2.pensar)

// Criar um objeto "animal" com as seguintes propriedades:
// - nome = Mingau
// - sobrenome = Shiro
// - idade = 6
// - miar = uma funcao que escreve a palavra "miau"

// Apos isso, fazer:
// - Acessar o nome do animal e mostrar no console.log
// - Acessar o idade do e mostrar no console.log
// - Criar uma funcao chamada "descricao que mostra o nome, sobrenome e idade do animal.

const animal = {

    name: "Mingau",
    surname: "Shiro",
    age: 6,
    miar: function miau(){
        return "miau"
    }
}

console.log(animal.name)
console.log(animal.age)

function descricao(){
    return animal.name + ", " + animal.surname + ", " +animal.age
}

console.log(descricao())