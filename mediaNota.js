    // programa que calcula a média de 4 notas e informa se o ALUNO foi aprovado ou reprovado.

    var input = require('readline-sync');

    console.log('=============================')
    console.log('Aluno - Aprovado ou Reprovado')
    console.log('=============================')

    const aluno = String(input.question("Digite o nome do Aluno "))
        //Recebe as notas
    const nota1b = Number(input.question("Digite a nota do 1 bimestre: "))
    const nota2b = Number(input.question("Digite a nota do 2 bimestre: "))
    const nota3b = Number(input.question("Digite a nota do 3 bimestre: "))
    const nota4b = Number(input.question("Digite a nota do 4 bimestre: "))

    // guarda o valor total das notas
    let resultadoFinal = ``
        // Calcula  a Média das notas
    const media = ((nota1b + nota2b + nota3b + nota4b) / 4)
        // se a média for igual ou maior que 7 APROVADO
    if (media >= 7) {
        resultadoFinal = `O aluno ${aluno } Foi APROVADO!`
            // Se a média for menor que 7 REPROVADO
    } else {
        resultadoFinal = `O aluno ${aluno } Foi REPROVADO!`
    }

    console.clear() // Limpa a tela

    // Apresenta o resultado 
    console.log('===================================')
    console.log('|  Aluno - Aprovado ou Reprovado  |')
    console.log('===================================')

    console.log(`Média do aluno: ${media}`)
    console.log(resultadoFinal)

    console.log('===================================')