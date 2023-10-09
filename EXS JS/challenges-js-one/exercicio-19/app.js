/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

// coletando items que serão usados
const mainTitle = document.querySelector("#main-title");
const spanScore = document.querySelector("#span-score");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer5 = document.querySelector("#answer5");
const spanAsnwer1 = document.querySelector("#span-answer1");
const spanAsnwer2 = document.querySelector("#span-answer2");
const spanAsnwer3 = document.querySelector("#span-answer3");
const spanAsnwer4 = document.querySelector("#span-answer4");
const spanAsnwer5 = document.querySelector("#span-answer5");
const mainHeaderTitle = document.querySelector('.main-header-title')
const spanTotal = document.querySelector('#total')
const spanFinal = document.querySelector('#final')
let contadorRespostas = 0;

const perguntasRespostas = [
  {
    id: "0",
    question: "Qual o jogo preferido do Th?",
    opcoes: [
      "CS GO",
      "Free Fire",
      "Dead by Daylight",
      "Unturned",
      "Transformice",
    ],
    validacao: "CS GO",
  },
  {
    id: "1",
    question: "Quem programou este quiz?",
    opcoes: ["ThzinBrabo", "o Sunga", "A inês", "Teu pai", "Eu"],
    validacao: "ThzinBrabo",
  },
  {
    id: "2",
    question: "Quem é a garota mais linda desta terra?",
    opcoes: ["Ninguem", "Ninguem", "Ninguem", "Ninguem", "Karina"],
    validacao: "Karina",
  },
];
function start() {
  perguntasRespostas.find((questoes) => {
    if (questoes.question == "Qual o jogo preferido do Th?") {
      mainTitle.textContent = questoes.question;
    }
  });
  spanAsnwer1.textContent = perguntasRespostas[0].opcoes[0];
  spanAsnwer2.textContent = perguntasRespostas[0].opcoes[1];
  spanAsnwer3.textContent = perguntasRespostas[0].opcoes[2];
  spanAsnwer4.textContent = perguntasRespostas[0].opcoes[3];
  spanAsnwer5.textContent = perguntasRespostas[0].opcoes[4];
}
start();
answer1.addEventListener("click", () => {
  if (spanAsnwer1.textContent == perguntasRespostas[0].opcoes[0]) {
    spanAsnwer1.textContent = perguntasRespostas[1].opcoes[0];
    spanAsnwer2.textContent = perguntasRespostas[1].opcoes[1];
    spanAsnwer3.textContent = perguntasRespostas[1].opcoes[2];
    spanAsnwer4.textContent = perguntasRespostas[1].opcoes[3];
    spanAsnwer5.textContent = perguntasRespostas[1].opcoes[4];
    contadorRespostas++;
    spanScore.textContent = contadorRespostas
    mainTitle.textContent = perguntasRespostas[1].question
  }
  else if(spanAsnwer1.textContent == perguntasRespostas[1].opcoes[0]){
    spanAsnwer1.textContent = perguntasRespostas[2].opcoes[0];
    spanAsnwer2.textContent = perguntasRespostas[2].opcoes[1];
    spanAsnwer3.textContent = perguntasRespostas[2].opcoes[2];
    spanAsnwer4.textContent = perguntasRespostas[2].opcoes[3];
    spanAsnwer5.textContent = perguntasRespostas[2].opcoes[4];
    contadorRespostas++;
    spanScore.textContent = contadorRespostas
    mainTitle.textContent = perguntasRespostas[2].question
  }
  else if(spanAsnwer5.textContent == perguntasRespostas[2].opcoes[4]){
    
    spanScore.textContent = contadorRespostas
    answer1.classList.add('remove')
    answer2.classList.add('remove')
    answer3.classList.add('remove')
    answer4.classList.add('remove')
    answer5.classList.add('remove')
    mainHeaderTitle.classList.add('remove')
    spanTotal.textContent = contadorRespostas
    spanFinal.style.display = 'block'
  }
});
answer2.addEventListener("click", () => {
  if (spanAsnwer1.textContent == perguntasRespostas[0].opcoes[0]) {
    spanAsnwer1.textContent = perguntasRespostas[1].opcoes[0];
    spanAsnwer2.textContent = perguntasRespostas[1].opcoes[1];
    spanAsnwer3.textContent = perguntasRespostas[1].opcoes[2];
    spanAsnwer4.textContent = perguntasRespostas[1].opcoes[3];
    spanAsnwer5.textContent = perguntasRespostas[1].opcoes[4];
    mainTitle.textContent = perguntasRespostas[1].question
  }
  else if(spanAsnwer1.textContent == perguntasRespostas[1].opcoes[0]){
    spanAsnwer1.textContent = perguntasRespostas[2].opcoes[0];
    spanAsnwer2.textContent = perguntasRespostas[2].opcoes[1];
    spanAsnwer3.textContent = perguntasRespostas[2].opcoes[2];
    spanAsnwer4.textContent = perguntasRespostas[2].opcoes[3];
    spanAsnwer5.textContent = perguntasRespostas[2].opcoes[4];
    mainTitle.textContent = perguntasRespostas[2].question
   
  }
  else if(spanAsnwer5.textContent == perguntasRespostas[2].opcoes[4]){
    
    spanScore.textContent = contadorRespostas
    answer1.classList.add('remove')
    answer2.classList.add('remove')
    answer3.classList.add('remove')
    answer4.classList.add('remove')
    answer5.classList.add('remove')
    mainHeaderTitle.classList.add('remove')
    spanTotal.textContent = contadorRespostas
    spanFinal.style.display = 'block'
  }
  
});
answer3.addEventListener("click", () => {
  if (spanAsnwer1.textContent == perguntasRespostas[0].opcoes[0]) {
    spanAsnwer1.textContent = perguntasRespostas[1].opcoes[0];
    spanAsnwer2.textContent = perguntasRespostas[1].opcoes[1];
    spanAsnwer3.textContent = perguntasRespostas[1].opcoes[2];
    spanAsnwer4.textContent = perguntasRespostas[1].opcoes[3];
    spanAsnwer5.textContent = perguntasRespostas[1].opcoes[4];
    mainTitle.textContent = perguntasRespostas[1].question
   
  }
  else if(spanAsnwer1.textContent == perguntasRespostas[1].opcoes[0]){
    spanAsnwer1.textContent = perguntasRespostas[2].opcoes[0];
    spanAsnwer2.textContent = perguntasRespostas[2].opcoes[1];
    spanAsnwer3.textContent = perguntasRespostas[2].opcoes[2];
    spanAsnwer4.textContent = perguntasRespostas[2].opcoes[3];
    spanAsnwer5.textContent = perguntasRespostas[2].opcoes[4];
    mainTitle.textContent = perguntasRespostas[2].question
   
  }
  else if(spanAsnwer5.textContent == perguntasRespostas[2].opcoes[4]){
    
    spanScore.textContent = contadorRespostas
    answer1.classList.add('remove')
    answer2.classList.add('remove')
    answer3.classList.add('remove')
    answer4.classList.add('remove')
    answer5.classList.add('remove')
    mainHeaderTitle.classList.add('remove')
    spanTotal.textContent = contadorRespostas
    spanFinal.style.display = 'block'
  }
});
answer4.addEventListener("click", () => {
  if (spanAsnwer1.textContent == perguntasRespostas[0].opcoes[0]) {
    spanAsnwer1.textContent = perguntasRespostas[1].opcoes[0];
    spanAsnwer2.textContent = perguntasRespostas[1].opcoes[1];
    spanAsnwer3.textContent = perguntasRespostas[1].opcoes[2];
    spanAsnwer4.textContent = perguntasRespostas[1].opcoes[3];
    spanAsnwer5.textContent = perguntasRespostas[1].opcoes[4];
    mainTitle.textContent = perguntasRespostas[1].question
  }
  else if(spanAsnwer1.textContent == perguntasRespostas[1].opcoes[0]){
    spanAsnwer1.textContent = perguntasRespostas[2].opcoes[0];
    spanAsnwer2.textContent = perguntasRespostas[2].opcoes[1];
    spanAsnwer3.textContent = perguntasRespostas[2].opcoes[2];
    spanAsnwer4.textContent = perguntasRespostas[2].opcoes[3];
    spanAsnwer5.textContent = perguntasRespostas[2].opcoes[4];
    mainTitle.textContent = perguntasRespostas[2].question
  }
  else if(spanAsnwer5.textContent == perguntasRespostas[2].opcoes[4]){
    
    spanScore.textContent = contadorRespostas
    answer1.classList.add('remove')
    answer2.classList.add('remove')
    answer3.classList.add('remove')
    answer4.classList.add('remove')
    answer5.classList.add('remove')
    mainHeaderTitle.classList.add('remove')
    spanTotal.textContent = contadorRespostas
    spanFinal.style.display = 'block'
  }
});
answer5.addEventListener("click", () => {
  if (spanAsnwer1.textContent == perguntasRespostas[0].opcoes[0]) {
    spanAsnwer1.textContent = perguntasRespostas[1].opcoes[0];
    spanAsnwer2.textContent = perguntasRespostas[1].opcoes[1];
    spanAsnwer3.textContent = perguntasRespostas[1].opcoes[2];
    spanAsnwer4.textContent = perguntasRespostas[1].opcoes[3];
    spanAsnwer5.textContent = perguntasRespostas[1].opcoes[4];
    mainTitle.textContent = perguntasRespostas[1].question
    
  }
  else if(spanAsnwer1.textContent == perguntasRespostas[1].opcoes[0]){
    spanAsnwer1.textContent = perguntasRespostas[2].opcoes[0];
    spanAsnwer2.textContent = perguntasRespostas[2].opcoes[1];
    spanAsnwer3.textContent = perguntasRespostas[2].opcoes[2];
    spanAsnwer4.textContent = perguntasRespostas[2].opcoes[3];
    spanAsnwer5.textContent = perguntasRespostas[2].opcoes[4];
    mainTitle.textContent = perguntasRespostas[2].question
    
  }
  else if(spanAsnwer5.textContent == perguntasRespostas[2].opcoes[4]){
    contadorRespostas++
    spanScore.textContent = contadorRespostas
    answer1.classList.add('remove')
    answer2.classList.add('remove')
    answer3.classList.add('remove')
    answer4.classList.add('remove')
    answer5.classList.add('remove')
    mainHeaderTitle.classList.add('remove')
    spanTotal.textContent = contadorRespostas
    spanFinal.style.display = 'block'
  }
});


