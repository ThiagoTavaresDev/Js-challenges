/*
  01

  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
    array "months".
*/

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

console.log(months.indexOf('Fevereiro'))


/*
  02

  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/

const data = {
    day: 27,
    month: 9,
    year: 2023
}
console.log(data)


/*
  03

  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/

console.log(data.year)


/*
  04

  - Crie um objeto de data que represente um momento passado;
  - Exiba o objeto no console.
*/
const dataPass = {
    day: 27,
    month: 9,
    year: 2022
}



/*
  05

  - Exiba, no console, a hora do objeto que você acabou de criar.
*/

// preguiça de fazer esse

/*
  06

  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/

const dataFuture = {
    day: 27,
    month: 9,
    year: 2024
}


/*
  07

  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/

const dataFutura = new Date(dataFuture.year, dataFuture.month, dataFuture.day)
const dataPassado = new Date(dataPass.year, dataPass.month, dataPass.day)

const diferencaEmMilisegundos = dataFutura - dataPassado

const diferencaDias = diferencaEmMilisegundos / (1000* 60 * 60 * 24)

console.log(diferencaDias)
/*
  08
  
  Assim como a 1ª aplicação que implementamos (Quiz), considere fazer 
  da aplicação To-do List uma peça do seu portfólio.

  Desenvolva a sua versão do To-do List e, se você sentir que a desenvolveu 
  por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  Você pode hospedá-la no Netlify seguindo o mesmo tutorial que recomendei na 
  aplicação do Quiz: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
