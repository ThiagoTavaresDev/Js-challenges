/*
  01

  - Implemente um código assíncrono entre os console.log() abaixo.
*/
setTimeout(() =>{
    console.log('Linha 1')
   
    
    
},1000)
setTimeout(() =>{
    console.log('Linha 2')
   
    
    
},2000)
setTimeout(() =>{
  
    console.log('Linha 3')
    
    
},3000)
setTimeout(() =>{
    console.log('Linha 4')
   
    
    
},4000)



/*
  02

  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.
*/

function logGreeting (name) {
  console.log(`olá, ${name}`)
}

setTimeout(() =>{
    logGreeting('Thiago')

},5000)

/*
  03

  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/



function filterNumberLessFive(num) {
   return num.filter(num => num < 5)
}

const numbers = [3, 4, 10, 20]
const lesserThanFive = filterNumberLessFive(numbers)

//const lesserThanFive = numbers.filter(num => num < 5)
console.log(lesserThanFive)



/*
  04

  - Refatore o código abaixo.
*/

const prices = [12, 19, 7, 209]

const totalPrice = prices.reduce((acumulator,number) =>{
   return acumulator += number
},0)

//for (let i = 0; i < prices.length; i++) {
// totalPrice += prices[i]
//}

console.log(`Preço total: ${totalPrice}`)

/*
  05

  - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
  - Não insira `car.color = azul`.
*/

let car = { color: 'amarelo' }

car = {color: 'azul'}

console.log(car.color)

/*
  06

  - Crie uma função que recebe 3 argumentos;
  - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
    deve ser invocada com 3 argumentos' deve ser retornada;
  - Se todos os argumentos forem passados, retorne a string 'A função foi 
    invocada com 3 argumentos'.
*/

function forExercise(name = `A função deve ser invocada com pelo menos 3 argumentos`, otherName = `A função deve ser invocada com pelo menos 3 argumentos`, test = `A função deve ser invocada com pelo menos 3 argumentos`) {
    if(name != `A função deve ser invocada com pelo menos 3 argumentos` && otherName != `A função deve ser invocada com pelo menos 3 argumentos` && test != `A função deve ser invocada com pelo menos 3 argumentos`){
        return console.log('A função foi invocada com 3 argumentos parabéns')

    }
    else{
        return console.log("A função deve ser invocada com 3 argumentos")
    }
}
forExercise()


/*
  07

  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

let booksBox = {
  spaces: 5,
  booksIn: 0,
  addBooks: (quantityBooks) =>{
    booksBox.booksIn += quantityBooks   // Adicionando livros 
    if(booksBox.booksIn > booksBox.spaces){
        return console.log(`você só tem mais ${booksBox.spaces - quantityBooks} espaços insira outro valor`)
      }
    if(booksBox.booksIn < booksBox.spaces){
        return console.log(`Já há ${booksBox.booksIn} livros na caixa`)
      
    }
    if(booksBox.booksIn == booksBox.spaces || booksBox.booksIn > booksBox.spaces){
    
        return console.log(`A caixa já está cheia`)
      
    }
  
  }

}


booksBox.addBooks(3)
booksBox.addBooks(4)



