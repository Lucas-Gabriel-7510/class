// Crie um switch que receba um número na variável diaDaSemana e use uma estrutura de controle switch para retornar o dia da semana correspondente. Os valores possíveis para diaDaSemana são de 1 a 7, onde 1 representa "Domingo", 2 representa "Segunda-feira", e assim por diante até 7, que representa "Sábado". Se o valor de diaDaSemana não estiver no intervalo de 1 a 7, a função deve retornar "Valor inválido".

    const diaDaSemana = prompt("digite um numero de 1 a 7")
    let nomedodia = ""

    switch (diaDaSemana) {
        case "1":
            nomedodia = 'Domingo'
            break
        case "2":
            nomedodia = "Segunda-feira"
            break
        case "3": 
            nomedodia = "terça-feira"
            break
        case "4": 
            nomedodia = "quarta-feira"
            break
        case "5":
            nomedodia = "quinta-feira"
            break
        case "6":
            nomedodia = "sexta-feira"
            break
        case "7":
            nomedodia = "sabado"
            break
        default:
            nomedodia = 'Valor inválido';
    }
    console.log(nomedodia)
