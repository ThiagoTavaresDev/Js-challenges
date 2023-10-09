/*
  01

  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/
fetch('https://jsonplaceholder.typicode.com/users').then((response) =>{
   if(!response.ok){
    throw new Error('Deu erro meu cumpade')
   }
   const json = response.json()
   json.then((data) =>{
    console.log(data.forEach(value => console.log(value)))
   })

})




/*
  02

  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois 
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a 
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/
function calculator(symbol){
    return function (n1,n2){
    let resultado;    
    switch(symbol){
        case'+': {
            return resultado = n1 + n2
          
        }
        case'-': {
            return  resultado = n1 - n2
             
        }
        case'*': {
            return  resultado = n1 * n2
                
            }
           
        case'/': {
            return resultado = n1 / n2
        }
        default: return 'operação inválida'
    }
}
}
const using = calculator('*')
console.log(using(3,6))





/*
  03

  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada 
    array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões 
    concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no 
    console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
const sudeste = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espirito Santo']
const sul = ['Rio Grande do Sul', 'Santa Catarina', 'Paraná']
const norte = ['Acre','Pará','Amazônia']
const brasil = sudeste.concat(sul)
brasil.unshift(...norte)

/*
  04

  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;
  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante
    chamada `newSudeste`. Pesquise pelo método "splice";
  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;
  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse 
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;
  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras 
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a 
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no 
    console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método 
    every.
*/
const nordeste = ['Maranhão', 'Piauí', 'Ceará', 'Rio Grande do Norte', 'Paraíba', 'Pernambuco', 'Alagoas', 'Sergipe','Bahia']

const estadosSudesteRemovidos = brasil.splice(3, 4)
console.log(estadosSudesteRemovidos)

let newBrasil = []
brasil.forEach((item, index) =>{
    let obj = {
    id: index,
    estado: item
    }
    newBrasil.push(obj)
    
},
)
console.log(newBrasil)

const result = newBrasil.every((item) => item.length > 7)
if(result === true){
     console.log('Sim todos os estados em questão tem mais de 7 letras')
}
else{
     console.log('nem todos os estados em questão tem mais de 7 letras')
}
/*
  05

  - Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no 
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";
  - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";
  - Atribua o novo array a uma constante;
  - Filtre o array criado acima, retornando somente os estados que tiverem ID 
    par. Atribua este novo array à uma constante.
*/

const existCeara = brasil.includes('Ceará')
if(existCeara === true){
    console.log('Existe')

}
else{
    console.log('Não existe')
}
const novoArray = newBrasil.map((item) =>{
   const novoId = item.id + 1
   const novoEstado = `${item.estado} pertence ao Brasil`
   return {id: novoId, estado: novoEstado}
})
console.log(novoArray)

const arrayfiltered = novoArray.filter((item) =>{
    if(item.id % 2 == 0){
        return item
    }
})
console.log(arrayfiltered)