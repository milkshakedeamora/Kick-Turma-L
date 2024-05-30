let pontuacao = 0;
        let perguntas = [];
        let perguntaAtual = 0;
        let totalPerguntas = 0;

        function validarResposta(respostaCorreta) {
            let resposta = document.querySelector('input[name="question"]:checked');
            if (!resposta) {
                alert("Por favor, selecione uma resposta antes de continuar.");
                return;
            }
            if (resposta.value === respostaCorreta) {
                document.querySelector('main').style.backgroundColor = '#6cee6b';
                pontuacao++;
            } else {
                document.querySelector('main').style.backgroundColor = '#EE6B6B';
            }
            perguntaAtual++;
            criarPergunta();
        }

        function criarQuiz() {
            totalPerguntas = parseInt(document.getElementById('qtperguntas').value);


            perguntas = [
                ["Qual o nome do navio dos Piratas do Chapéu de Palha?", "Going Merry", "Sunny", "Oro Jackson", "Grand Line", "Sunny"],
                ["Qual o nome do fruto do diabo que concede ao Luffy seus poderes de borracha?", "Goro Goro no Mi", "Gomu Gomu no Mi", "Yami Yami no Mi", "Hana Hana no Mi", "Gomu Gomu no Mi"],
                ["Qual o nome da espada lendária que Zoro busca?", "Wado Ichimonji", "Enma", "Shusui", "Ame no Habakiri", "Wado Ichimonji"],
                ["Qual o nome da ilha natal de Nami, a navegadora dos Piratas do Chapéu de Palha?", "Cocoyasi Village", "Orange Town", "Syrup Village", "Baratie", "Cocoyasi Village"],
                ["Qual o nome do arco narrativo onde Luffy e sua tripulação enfrentam o Shichibukai Crocodile?", "Alabasta", "Dressrosa", "Whole Cake Island", "Wano Country", "Alabasta"],
                ["Qual a Akuma no Mi que concede a Nico Robin a habilidade de ler Poneglyphs?", "Yami Yami no Mi", "Goro Goro no Mi", "Ope Ope no Mi", "Hana Hana no Mi", "Hana Hana no Mi"],
                ["Qual o nome do Yonkou que governa o Novo Mundo com punho de ferro?", "Kaido", "Shanks", "Big Mom", "Barba Negra", "Kaido"],
                ["Qual o nome do misterioso espadachim que treinou Zoro durante sua infância?", "Mihawk", "Rayleigh", "Silvers Rayleigh", "Benn Beckman", "Mihawk"],
                ["Qual o nome da ilha onde os Piratas do Chapéu de Palha se separam pela primeira vez?", "Sabaody Archipelago", "Water Seven", "Thriller Bark", "Marineford", "Sabaody Archipelago"],
                ["Qual o nome do Haki da Observação, que permite prever os movimentos do oponente?", "Busoshoku Haki", "Kenbunshoku Haki", "Haoshoku Haki", "Gear Second", "Kenbunshoku Haki"],
                ["Qual o nome do Buster Call, um ataque devastador da Marinha?", "Pacifista", "Almirante", "Buster Call", "Cipher Pol", "Buster Call"],
                ["Qual o nome do Governo Mundial, a organização que governa o mundo de One Piece?", "Cipher Pol", "Marinha", "Governo Mundial", "Yonkou", "Governo Mundial"],
                ["Qual o nome do lendário tesouro que Gol D. Roger escondeu antes de sua morte?", "One Piece", "Poneglyph", "Akuma no Mi", "Void Century", "One Piece"],
                ["Qual o nome do misterioso passado do século perdido, conhecido como?", "Void Century", "Dawn Age", "Great Age of Pirates", "Rocks Pirates", "Void Century"],
                ["Qual o nome do principal antagonista da série One Piece?", "Im", "Akainu", "Blackbeard", "Dragon", "Im"]
            ];

            perguntas = perguntas.sort(() => Math.random() - 0.5).slice(0, totalPerguntas);
            criarPergunta();
        }

        function criarPergunta() {
            if (perguntaAtual < totalPerguntas) {
                let pergunta = perguntas[perguntaAtual];
                let innerHtml = `<form> 
                    <label> ${perguntaAtual + 1} - ${pergunta[0]} </label> <br>
                    <input type="radio" name="question" value="${pergunta[1]}"> <label>${pergunta[1]}</label> <br>
                    <input type="radio" name="question" value="${pergunta[2]}"> <label>${pergunta[2]}</label> <br>
                    <input type="radio" name="question" value="${pergunta[3]}"> <label>${pergunta[3]}</label> <br>
                    <input type="radio" name="question" value="${pergunta[4]}"> <label>${pergunta[4]}</label> <br>
                    <div><input class="button" type="button" value="Responder" onclick="validarResposta('${pergunta[5]}')"> </div>
                </form>`;
                document.querySelector('main').innerHTML = innerHtml;
            } else {
                document.querySelector('main').style.backgroundColor = 'white';
                document.querySelector('main').innerHTML = `Pontuação (0-100%): ${(pontuacao / totalPerguntas * 100).toFixed(2)}% `;
            }
        }

        function atualizarValor() {
            document.querySelector('span').textContent = document.getElementById('qtperguntas').value;
        }

     