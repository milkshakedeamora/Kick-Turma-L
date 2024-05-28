# Parada 2122 - Quizz
![](https://i.ibb.co/Jct7V1j/000.png)

É solicitado o número de perguntas que você deseja responder, em seguida gerado o quizz e no final exibido sua pontuação. 


## Funções

 * validarResposta(respostaCorreta) : recebe por parametro a resposta correta e compara com a resposta escolhida pelo usuario,  e verifica se o usuario escolheu alguma resposta, incrementa a variavel que controla a pergunta atual e chama a função que gera as perguntas. 
 
 * criarQuizz(): valida se foi escolhido um numero de respostas valido, cria o array de perguntas e inicia a função de gerar perguntas.

* criarPergunta(): gera a pergunta atual e finaliza exibindo a pontuação caso chegue ao numero de perguntas escolhidas. 