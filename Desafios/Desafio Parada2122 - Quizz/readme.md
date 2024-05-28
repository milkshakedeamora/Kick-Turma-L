# Parada 2122 - Quiz
![](https://i.ibb.co/Jct7V1j/000.png)

É solicitado o número de perguntas que você deseja responder, em seguida gerado o quiz, ficando com o background verde em caso de resposta correta e verde em caso de resposta incorreta e no final exibido sua pontuação. 


## Funções

 * validarResposta(respostaCorreta) : recebe por parametro a resposta correta, verifica se o usuario escolheu alguma resposta, e se tiver escolhido, compara a resposta correta com a resposta escolhida pelo usuario, verificando se o usuario acertou e mudando o background e incrementando a pontuação em caso de acerto,  incrementa a variavel que controla a pergunta atual e chama a função que gera as perguntas. 
 
 * criarQuiz(): valida se foi escolhido um numero de respostas valido, cria o array de perguntas e inicia a função de gerar perguntas.

* criarPergunta(): gera a pergunta atual e finaliza exibindo a pontuação caso chegue ao numero de perguntas escolhidas. 