/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/
const choosePokemon = 'pikachu'
const urlPoke = `https://pokeapi.co/api/v2/pokemon/${choosePokemon}`

function puxarDados(){
    fetch(urlPoke).then((response) =>{

        if(response.ok){
         console.log(`resposta bem sucedida ${response.status}`)
        }

        return response.json()
    }).then((data) =>{
        console.log(data.abilities[0].ability.name)
        console.log(data.types[0].type.name)
    })
}
puxarDados()
/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

const euObjeto = {
    name: 'Thiago',
    sobrenome: 'Tavares',
    sexo:'Masculino',
    idade : 18 ,
    altura:  165,
    peso: 47,
    andou: false,
    metrosCaminhados: 0,
    addAge:() =>{
        euObjeto.idade += 1
    },
    sumM: (value) =>{
        euObjeto.metrosCaminhados += value
        euObjeto.andou = true
    },
    completedString: () =>{
        console.log(`Oi. Eu sou ${euObjeto.sexo == 'Masculino' ? 'o' : 'a'} ${euObjeto.name} tenho ${euObjeto.idade} ${euObjeto.idade == 1 ? 'ano' : 'anos'}, altura ${euObjeto.altura} metros de altura, peso ${euObjeto.peso} quilos e, só hoje eu já caminhei ${euObjeto.metrosCaminhados} metros`)
    }


}
console.log(euObjeto.idade)
console.log(euObjeto.addAge())
console.log(euObjeto.addAge())
console.log(euObjeto.addAge())
console.log(euObjeto.addAge())
console.log(euObjeto.addAge())
console.log(euObjeto.idade)


/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/
/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/
euObjeto.sumM(10)
euObjeto.sumM(13)
euObjeto.sumM(14)
euObjeto.sumM(15)
euObjeto.sumM(16)

console.log(euObjeto.andou)
console.log(euObjeto.metrosCaminhados)

/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/



euObjeto.completedString()


/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/

const funcao = (valor) =>{
        return Boolean(valor)
}
console.log(funcao(''))
console.log(funcao(0))
console.log(funcao(undefined))
console.log(funcao(null))
console.log(funcao(false))
console.log(funcao(NaN))
console.log(funcao([]))
console.log(funcao('String'))
console.log(funcao(10))
console.log(funcao({}))
console.log(funcao(' '))
console.log(funcao(Object.keys))
console.log(funcao(true))


/*
  07
  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/
function book(bookName){
     const library ={
        HarryPotter: {
            pages : '254',
            autor:'Jony Saladinha',
            editora:'Editora Velha'
        } ,
        'SenhorDoAnéis': {
            pages : '2524',
            autor:'Pé de Couve',
            editora:'Editora Nova'
        } ,
        'AliceNoPaísDasMaravilhas': {
            pages : '25214',
            autor:'Carlos Roberto',
            editora:'Editora Média'
        }
    }
    if (bookName) {
        if (library[bookName]) {
          return library[bookName];
        } else {
          return "Livro não encontrado na biblioteca";
        }
      } 
      
    
 
}
console.log(book('HarryPotter'))