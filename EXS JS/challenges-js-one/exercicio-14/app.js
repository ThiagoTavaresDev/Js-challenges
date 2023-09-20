/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/
const mainTitle = document.querySelector('#main-title')

mainTitle.textContent = mainTitle.textContent.toUpperCase()

/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [ 53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55 ]

const ul = document.querySelector('.numbers')

function createAndInsert(){
  
    
   // for(let i = 0; i < numbers.length; i++){
    //    const newli = document.createElement('li')
    //    newli.textContent = numbers[i]
    //    ul.appendChild(newli)

  //  }
    numbers.forEach(number => {
        const newli = document.createElement('li')
        newli.textContent = number
        ul.appendChild(newli)
    })
    return ul


}
createAndInsert()

/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/

function modifyColors(){
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            const newli = document.createElement('li')
            newli.textContent = numbers[i]
            newli.style.color = 'lightblue'
            ul.appendChild(newli)
        }
        else{
            const newli = document.createElement('li')
            newli.textContent = numbers[i]
            newli.style.color = 'pink'
            ul.appendChild(newli)
        }

    }

}
modifyColors()

/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/



/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/



/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/



/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/



/*
  08

  - Remova a classe "body-background", do elemento body.
*/



/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/
