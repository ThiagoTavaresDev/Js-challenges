/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/
const input = document.querySelector('#username')
const formField = document.querySelector('fieldset')
const regex = /[a-zA-Z]/
const paragrafo = document.createElement('p')
input.addEventListener('keyup', () =>{
    if(input.value.length > 6 && regex.test(input.value)){
        paragrafo.classList.add("username-success-feedback")
        paragrafo.classList.remove('username-help-feedback')
        paragrafo.textContent = `Nome de usuário válido =)`
        paragrafo.classList.remove('submit-help-feedback')
        paragrafo.classList.remove('submit-success-feedback')
        formField.insertAdjacentElement('afterend', paragrafo)
        
    }
    else{
        paragrafo.classList.add("username-help-feedback")
        paragrafo.classList.remove('username-success-feedback')
        paragrafo.textContent = `Nome de usuário inválido ;(`
        paragrafo.classList.remove('submit-help-feedback')
        paragrafo.classList.remove('submit-success-feedback')
        formField.insertAdjacentElement('afterend', paragrafo)
    }
})

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

const form =  document.querySelector('form')
const button = document.querySelector('button')
 form.addEventListener('submit', (e) =>{
    if(input.value.length > 6 && regex.test(input.value)){
        paragrafo.classList.add("submit-success-feedback")
        paragrafo.classList.remove('submit-help-feedback')
        paragrafo.textContent = `Dados enviados =)`
        formField.insertAdjacentElement("afterend", paragrafo)
    
    }
    else{
        paragrafo.classList.add("submit-help-feedback")
        paragrafo.classList.remove('submit-success-feedback')
        paragrafo.textContent = `Não foi possível enviar seus dados ;(`
        formField.insertAdjacentElement("afterend", paragrafo)
    }
   e.preventDefault()
})


/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/

function some(array, callback){
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            return true
        }
    }
    return false
}
console.log(some([1 , 2] ,function(item){return item > 2 })) // false
console.log(some([1 , 2, 3] , item => item > 2)) // true
console.log(some([1 , 3, 5] ,function(item){return item === 0 })) // false

// exemplo uso some real
//const arrayTest = [1,3,5,7,8]
//const value = arrayTest.some(numero => numero % 2 == 0)
//console.log(value)

//const arrayTest2 = [1,2,3,5]
//function isOdd(number){
//return number % 2 == 1
//}
//const value2 = arrayTest2.some(isOdd)
//console.log(value2)