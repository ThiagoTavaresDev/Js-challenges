/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/

const data = new Date()

function organizeDate(data){
    const string = (`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`)
    console.log(string)
    
}
organizeDate(data)


/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/
const otherData = new Date()
function recieveDate(data){
    const quarta = 3
    const string = (`${data.getHours()}:${data.getMinutes()} - quarta, ${data.getDate()} de Setembro de ${data.getFullYear()}`)
    console.log(string)

}
recieveDate(otherData)
// para nao ficar de maneira manual os dados eu teria que criar um array para os meses e para os dias, assim eu poderia pegar corretamente conforme a data atual

/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true }

const {id, isVerified} = user

console.log(id, isVerified)


/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const nameA = robotA.name
console.log(nameA)
const nameB = robotB.name
console.log(nameB)

/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'

const object = {
    a,
    b,
    c,
}
console.log(object)

/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = value => {
  console.log(value)
}

const updateSomething = (data = {}) => {
  const target = data.target
  const property = data.property
  let willChange = data.willChange

  if (willChange === 'valor indesejado') {
    willChange = 'valor desejado'
  }

  useDataSomewhereElse({
    target,
    property,
    willChange,
  })
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  const clockHTML = `
    <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
    <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
    <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
  `

  clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)

// consigo imaginar uma maneira de refatorar deixando o código menor porém seria de uma maneira a deixar quase tudo a respeito da datação numa única string,