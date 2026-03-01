import type { DialogScript } from "../../../types/DialogTypes";

//const protagonistaName = "Marcos Carvalho";

export const Protagonista: DialogScript = {
    entry: "start",
    nodes: {
        start: [
            {
                type: "say",
                speaker: "",
                text: "Quando acordei, o gosto amargo que tomou minha boca não foi o do café, mas das imagens mostradas no noticiário. Outra vítima, outra vez que fui lento demais em encontrar os culpados."
            },
            {
                type: "say",
                speaker: "",
                text: "Não que eu seja algum oficial ou alguém com grande senso de justiça. O que estou fazendo sequer tem reconhecimento legal. Mas a segunda vítima daquela onda de assassinatos… era alguém que eu conhecia."
            },
            {
                type: "say",
                speaker: "",
                text: "Foi na terceira morte que percebi que havia um padrão naqueles assassinatos. Marcas estampadas na pele que antes julgava serem só marcas de nascenças. Elas são sutis, e nunca aparecem em destaque nos noticiários."
            },
            {
                type: "say",
                speaker: "",
                text: "Hoje, vendo a quarta vítima sendo anunciada, sei que não posso mais perder tempo. Não quando encontrei alguém com alto potencial de ser o próximo alvo."
            },
            {
                type: "sceneChange",
                next: "quadro_pistas"
            },
        ],
        quadro: [
            {
                type: "say",
                speaker: "",
                text: "Em um primeiro momento, as vítimas não parecem ter relação entre si. Isso é, até você considerar as marcas estranhas encontradas nos seus corpos. Elas não são iguais, mas possuem certa semelhança."
            },
            {
                type: "say",
                speaker: "",
                text: "Sem imagens mais nítidas, não sei dizer se foram tatuadas ou queimadas na pele daqueles jovens, mas reconhecer sua existência é um passo crucial para seguir com o caso. Caso esse que parece estar propositalmente sendo empurrado pela polícia e mídia."
            }
        ],
        bernardo: [
            {
                type: "say",
                speaker: "",
                text: "Bernardo Garcia, a segunda vítima."
            },
            {
                type: "say",
                speaker: "",
                text: "Era um garoto de só 23 anos, espirituoso, roubado de sua vida como se não fosse nada. Alguém com quem cruzava caminho todos os dias quando saia de casa, contava seus grandes planos para o futuro e nunca largava aquele sorriso idiota do rosto."
            },
            {
                type: "say",
                speaker: "",
                text: "Era como um sobrinho que nunca tive."
            },
            {
                type: "say",
                speaker: "",
                text: "Foi… um verdadeiro soco no estômago."
            },
            {
                type: "say",
                speaker: "",
                text: "Ver seu rosto estampado no jornal e a demora de qualquer pronunciamento da polícia foi o que me motivou a investigar os assassinatos por conta própria."
            },
        ],
        olivia: [
            {
                type: "say",
                speaker: "",
                text: "Olívia Ribeiro, 24 anos. Estava se especializando em música e tinha um destino promissor no exterior. Foi a primeira vítima."
            },
            {
                type: "say",
                speaker: "",
                text: "Na época, vi a notícia apenas como uma fatalidade, já que era uma desconhecida."
            },
        ],
        clarissa: [
            {
                type: "say",
                speaker: "",
                text: "Clarissa Nascimento, 25 anos."
            },
            {
                type: "say",
                speaker: "",
                text: "Não era muito ativa nas redes sociais, mas soube por postagens de amigos que costumava ser muito próxima da mãe, que morreu 2 anos atrás ao dirigir embriagada."
            }
        ],
        vinicius: [
            {
                type: "say",
                speaker: "",
                text: "Vinícius Santos, 21 anos."
            },
            {
                type: "say",
                speaker: "",
                text: "Estava fazendo faculdade de Educação Física e tinha grande interesse pela natação, chegando a ganhar algumas medalhas em competições. Alguém que parecia que não cairia fácil sem antes lutar."
            },
            {
                type: "say",
                speaker: "",
                text: "Não cheguei a tempo de novo."
            },
        ],
        simboloDaniel: [
            {
                type: "say",
                speaker: "",
                text: "Minha suspeita de ser a próxima vítima. Foi um misto de muita insistência e sorte achar ele, o que me tomou muitos dias de observação em lugares públicos. Ele será minha melhor pista."
            }
        ],
        simboloClarissa: [
            {
                type: "say",
                speaker: "",
                text: "Clarissa, marca na perna esquerda."
            }
        ],
        simboloOlivia: [
            {
                type: "say",
                speaker: "",
                text: "Olívia, marca no braço esquerdo."
            }
        ],
        simboloBernardo: [
            {
                type: "say",
                speaker: "",
                text: "Bernardo, marca no braço direito."
            }
        ],
        simboloVinicius: [
            {
                type: "say",
                speaker: "",
                text: "Vinícius, marca na perna direita."
            }
        ],
        envelope: [
            {
                type: "say",
                speaker: "",
                text: "Fiz uma cópia de cada foto, artigo e observação que reuni durante a investigação. Caso perdesse algo ou tivesse a chance de expor para a pessoa certa. Com a parcialidade da investigação, não acho que será o caso."
            },
            {
                type: "choice",
                options: [
                    {
                        text: "Levar",
                        jump: "pegarEnvelope",
                    },
                    {
                        text: "Deixar",
                        jump: "nada"
                    }
                ]
            }
        ],
        pegarEnvelope: [
            {
                type: "setFlag",
                key: "hasEnvelope",
            },
            {
                type: "collect",
                key: "envelope"
            }
        ],
        quadro_saindo: [
            {
                type: "say",
                speaker: "",
                text: "Sair para investigar?"
            },
            {
                type: "choice",
                options: [
                    {
                        text: "Sim",
                        jump: "quadro_sair"
                    },
                    {
                        text: "Melhor pensar mais um pouco",
                        jump: "nada"
                    }
                ]
            }
        ],
        quadro_sair: [
            {
                type: "sceneChange",
                next: "entrada_daniel_fechado"
            }
        ],
        entrada_daniel_fechado: [
            {
                type: "if",
                condition: "danielSemEnvelope",
                then: "daniel_sem_envelope",
            },
            {
                type: "say",
                speaker: "",
                text: "Que bom que foi fácil segui-lo naquele dia. E que os vizinhos gostam de fofocar."
            },
            {
                type: "say",
                speaker: "",
                text: "Ding Dong!"
            },
            {
                type: "sceneChange",
                next: "entrada_daniel_aberto"
            }
        ],
        daniel_sem_envelope: [
            {
                type: "say",
                speaker: "Você",
                text: "Espera! Daniel, você está em perigo!"
            },
            {
                type: "setFlag",
                key: "hasBadEnding1"
            },
            {
                type: "sceneChange",
                next: "bad_endings"
            }
        ],
        sala_daniel: [
            {
                type: "if",
                condition: "hasEnteredDanielsHouse",
                then: "",
                else: "sala_daniel_dialogo"
            },
        ],
        sala_daniel_dialogo: [
            {
                type: "say",
                speaker: "Daniel",
                text: "Então… você é um detetive? Trabalha para a polícia?"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Não, nada do tipo. Mas o rapaz loiro dessa foto era meu vizinho. Preciso descobrir quem o matou e fazer essa pessoa pagar por isso."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Quem você suspeita que esteja matando essas pessoas?"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Ainda não sei. Sem ajuda externa, já foi um milagre ter te encontrado antes que eles fizessem algo."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Uhm…"
            },
            {
                type: "setFlag",
                key: "hasEnteredDanielsHouse"
            }
        ],
        calendario: [
            {
                type: "setFlag",
                key: "hasSeenCalendarDate"
            },
            {
                type: "say",
                speaker: "Você",
                text: "O que é essa data marcada aqui, “Grande dia?”. É aniversário de alguém?"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Não que eu saiba. Ao menos, não é de nenhum de nós três."
            },
            {
                type: "say",
                speaker: "",
                text: "..."
            },
        ],
        mesa_quarto_daniel: [
            {
                type: "say",
                speaker: "",
                text: "Está cheia de embalagens vazias de comida pronta. Não deve mesmo passar muito tempo com os pais."
            },
        ],
        computador_daniel: [
            {
                type: "say",
                speaker: "Daniel",
                text: "Não importa a relevância da sua investigação, aqui você não mexe."
            },
        ],
        retrato_pais_daniel: [
            {
                type: "say",
                speaker: "Você",
                text: "Você mora com os seus pais?"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Na teoria, sim. Mas eles quase nunca estão em casa. É engraçado eles dizerem que meu nascimento foi uma bênção, quando nem na minha formatura da escola eles foram."
            },
            {
                type: "say",
                speaker: "",
                text: "Lembro do Bernardo comentar que não era muito próximo dos seus pais, tanto que decidiu morar sozinho. Ainda não posso afirmar que isso seja outro ponto em comum entre as vítimas, mas é bom ter isso em mente."
            },
        ],
        computador_pais_daniel: [
            {
                type: "choice",
                options: [
                    {
                        text: "Continuar Explorando",
                        jump: "continuar_explorando_casa_daniel"
                    },
                    {
                        text: "Ligar o computador",
                        jump: "ligar_computador_pais_daniel"
                    }
                ]
            },
        ],
        continuar_explorando_casa_daniel: [
            {
                type: "sceneChange",
                next: "sala_daniel"
            }
        ],
        ligar_computador_pais_daniel: [
            {
                type: "if",
                condition: "hasTurnedOnComputer",
                then: "computador_pais",
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Ei, não é pra mexer nas coisas pessoais dos outros. Tem coisas do trabalho deles—"
            },
            {
                type: "jump",
                target: "computador_pais"
            }
        ],
        computador_pais: [
            {
                type: "sceneChange",
                next: "computador_pais"
            },
        ],
        ligando_computador_pais_daniel: [
            {
                type: "if",
                condition: "hasTurnedOnComputer",
                then: "nada",
            },
            {
                type: "setFlag",
                key: "hasTurnedOnComputer"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Esse parece... com os símbolos que você me mostrou. Eles não podem... Não, não faz sentido..."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Vou ligar para eles, eles devem ter um motivo ou saber de algo."
            },
            {
                type: "choice",
                options: [
                    {
                        text: "Deixar",
                        jump: "deixar_daniel_ligar"
                    },
                    {
                        text: "Impedir",
                        jump: "impedir_daniel_ligar"
                    }
                ]
            },
        ],
        trocar_usuario_seita: [
            {
                type: "if",
                condition: "hasOpenedHint",
                then: "computador_seita_dica",
                else: "computador_seita_sem_dica"
            }
        ],
        computador_seita_dica: [
            {
                type: "sceneChange",
                next: "computador_pais_seita_dica"
            }
        ],
        computador_seita_sem_dica: [
            {
                type: "sceneChange",
                next: "computador_pais_seita"
            }
        ],
        computador_pais_seita_clicou_dica: [
            {
                type: "setFlag",
                key: "hasOpenedHint"
            }
        ],
        deixar_daniel_ligar: [
            {
                type: "say",
                speaker: "Daniel",
                text: "Pai? Está muito ocupado agora? Tenho algo urgente para perguntar."
            },
            {
                type: "say",
                speaker: "",
                text: "Percebo Daniel se afastando do quarto, sua voz ficando mais baixa enquanto anda ansioso. Sua saída dura menos de dois minutos antes de voltar, o rosto pálido."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "É Marcos, né? Vou precisar que saia da minha casa agora, ou os meus pais vão acabar chamando a polícia. Obrigado por ter se preocupado comigo, mas eles já estão em contato com as autoridades investigando isso. Eles logo, logo voltarão para casa."
            },
            {
                type: "say",
                speaker: "Você",
                text: "… Se esse é o caso, fico feliz que você esteja seguro. Fique bem."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Você também"
            },
            {
                type: "setFlag",
                key: "hasBadEnding2"
            },
            {
                type: "sceneChange",
                next: "bad_endings"
            },
        ],
        impedir_daniel_ligar: [
            {
                type: "say",
                speaker: "Você",
                text: "Daniel, espere. Isso não quer dizer que eles sejam os culpados. Eles podem estar envolvidos em algo que não têm controle. Não vamos arriscar colocar ninguém em risco precipitadamente, tá bom? Vamos investigar isso juntos?"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Certo… Certo, você tem razão. Alguém pode estar ameaçando eles. Talvez eles não falem muito comigo para me proteger de algo ruim."
            },
        ],
        senha_computador_seita: [
            {
                type: "say",
                speaker: "Você",
                text: "A senha pode ser qualquer coisa..."
            }
        ],
        senha_computador_seita_dica: [
            {
                type: "choice",
                options: [
                    {
                        text: "Aniversário de casamento dos pais",
                        jump: "aniversario_casamento_pais"
                    },
                    {
                        text: "Aniversário do Daniel",
                        jump: "aniversario_daniel"
                    },
                    {
                        text: "Data do calendário",
                        jump: "senha_data_do_calendario",
                        condition: "hasSeenCalendarDate"
                    },
                    {
                        text: "Acho melhor investigar um pouco mais",
                        jump: "continuar_explorando_casa_daniel"
                    },
                ]
            }
        ],
        aniversario_casamento_pais: [
            {
                type: "say",
                speaker: "Você",
                text: "Tente colocar a data de aniversário de casamento dos seus pais."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Ok... Senha invalida..."
            },
            {
                type: "jump",
                target: "senha_computador_seita_dica"
            }
        ],
        aniversario_daniel: [
            {
                type: "say",
                speaker: "Você",
                text: "Tente colocar a sua data de nascimento."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Ok... Senha invalida..."
            },
            {
                type: "jump",
                target: "senha_computador_seita_dica"
            }
        ],
        senha_data_do_calendario: [
            {
                type: "say",
                speaker: "Você",
                text: "Deixa eu tentar uma coisa..."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Funcionou!"
            },
            {
                type: "sceneChange",
                next: "emails"
            }
        ],
        emails_suzana: [
            {
                type: "setFlag",
                key: "hasReadEmail1"
            },
            {
                type: "say",
                speaker: "Situação Suzana",
                text: "Não cometam o mesmo erro da Suzana, ou terão o mesmo final dela. Não se apeguem aos Componentes."
            },
            {
                type: "say",
                speaker: "",
                text: "Suzana não é o nome da mãe da Clarissa? A que morreu em um acidente de carro após beber embriagada?"
            },
            {
                type: "say",
                speaker: "",
                text: "E esse termo, “Componentes”..."
            },
            {
                type: "jump",
                target: "leu_todos_emails"
            }
        ],
        emails_evento: [
            {
                type: "setFlag",
                key: "hasReadEmail2"
            },
            {
                type: "say",
                speaker: "Preparação Evento",
                text: "O Sábio disse que o momento mais auspicioso para a cerimônia será durante o eclipse solar anular do próximo ano. Vocês terão exatamente um mês para oferecer o primeiro Componente. Nenhum erro será tolerado."
            },
            {
                type: "say",
                speaker: "",
                text: "Isso é algum tipo de culto? Uma seita? E quem é esse “Sábio” da qual se referem?"
            },
            {
                type: "say",
                speaker: "",
                text: "É pior do que eu imaginava."
            },
            {
                type: "jump",
                target: "leu_todos_emails"
            }
        ],
        emails_ordem: [
            {
                type: "setFlag",
                key: "hasReadEmail3"
            },
            {
                type: "say",
                speaker: "Ordem",
                text: "A fim de não dar chance ao erro, comecem pelos braços, pernas e, enfim, mente. Tudo sempre da esquerda para a direita. Assim se instaura a estabilidade da alma."
            },
            {
                type: "say",
                speaker: "",
                text: "Se já foram quatro, o último que falta agora é o Daniel, representando a ‘mente’."
            },
            {
                type: "jump",
                target: "leu_todos_emails"
            }
        ],
        emails_sabio: [
            {
                type: "setFlag",
                key: "hasReadEmail4"
            },
            {
                type: "say",
                speaker: "O Sábio",
                text: "O Sábio tem grandes expectativas do nosso grupo. Somos os que estão chegando mais próximo de cumprir a parte que nos foi encarregada."
            },
            {
                type: "say",
                speaker: "",
                text: "Eles não são os únicos? Com um esquema tão grande, não há dúvidas do motivo do caso ser abafado."
            },
            {
                type: "jump",
                target: "leu_todos_emails"
            }
        ],
        emails_prazo: [
            {
                type: "setFlag",
                key: "hasReadEmail5"
            }, {
                type: "say",
                speaker: "Prazo",
                text: "Lembrem-se do intervalo de 7 dias. Espero todos no salão à meia-noite do último dia."
            },
            {
                type: "say",
                speaker: "",
                text: "Considerando o prazo de 7 dias, junto às informações dos outros e-mails… O Daniel tem só mais 3 dias de vida, levando em conta o tempo que demorei para encontrá-lo."
            },
            {
                type: "jump",
                target: "leu_todos_emails"
            }
        ],
        leu_todos_emails: [
            {
                type: "if",
                condition: "hasReadEmail1 && hasReadEmail2 && hasReadEmail3 && hasReadEmail4 && hasReadEmail5",
                then: "fim_emails"
            }
        ],
        fim_emails: [
            {
                type: "say",
                speaker: "Daniel",
                text: "Eu vou morrer, não vou? Não posso confiar nos meus pais até saber porque estão envolvidos nisso. E quem dirá na polícia! Se estão fazendo pouco caso disso, deve ter algum deles envolvido nisso também!"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Daniel, eu não tenho moral alguma para lhe dizer para ficar calmo, mas ainda dá tempo de fazermos algo. Nem que esse algo seja meter o pé na estrada e ir para um lugar bem longe antes do dia final."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Seu nome é Marcos, né? Sei que você ainda é um desconhecido, mas, no momento, está parecendo mais seguro que os conhecidos. Posso ficar na sua casa, ao menos até passar o dia do eclipse? Não quero ficar sozinho aqui."
            },
            {
                type: "choice",
                options: [
                    { text: "Aceitar", jump: "aceitar_passar_um_tempo" },
                    { text: "Recusar", jump: "recusar_passar_um_tempo" }
                ]
            }
        ],
        aceitar_passar_um_tempo: [
            {
                type: "setFlag",
                key: "hasBadEnding3"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Vem, garoto. Não vou te deixar sozinho nessa. Pegue o que for importante e vamos sair daqui."
            },
            {
                type: "sceneChange",
                next: "bad_endings"
            }
        ],

        recusar_passar_um_tempo: [
            {
                type: "say",
                speaker: "Você",
                text: "Não posso. Eles parecem querer você vivo até o dia final, e se fizermos algo que chame atenção demais, pode ser que eles venham atrás da gente para tirar satisfação."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Mas…!"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Deixe algumas coisas separadas, mas seja discreto. Amanhã podemos nos encontrar em um lugar público para tentar debater mais sobre essa tal “cerimônia”. Aqui..."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Me encontre nesse endereço, nesse horário. Tem meu número aí caso precise me contatar. Acha que pode fazer isso?"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Claro!"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Então se cuide, e nos vemos amanhã."
            },
            {
                type: "sceneChange",
                next: "cafeteria"
            }
        ],
        cafeteria: [
            {
                type: "say",
                speaker: "",
                text: "Dia seguinte"
            }
        ],
        cafeteria2: [
            {
                type: "say",
                speaker: "",
                text: "Um lugar cheio e barulhento demais para ouvir a própria conversa. Aqui vai ser o lugar perfeito."
            },
            {
                type: "sceneChange",
                next: "cafeteria_daniel"
            }
        ],
        cafeteria_daniel: [
            {
                type: "say",
                speaker: "Você",
                text: "Bom ver você inteiro."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Nem brinca. Não trouxe nem o meu celular. Vai que colocaram algo nele?"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Pedi um suco para não perdermos a mesa. Espero que goste de manga."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Hmm, valeu. Mas antes de qualquer coisa, quero entender por que está me ajudando."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Porque o Bernardo, o rapaz daquela foto…"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Tá, tá. Você sente pena do seu vizinho. Mas isso é motivo de se meter em algo tão perigoso?"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Ele era mais que um vizinho, era… como um sobrinho, talvez? Não ouso dizer filho."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Ele era uma pessoa extremamente otimista e extrovertida, mas ainda muito solitária. E ele encontrou esse homem ranzinza, também muito solitário."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Eu estava em luto na época. Dois anos atrás, eu perdi meu filho, e essa dor acabou fazendo eu e minha esposa nos separarmos. Eu mal saía de casa e, quando saía, era para fumar fora, porque o cheiro estava ficando insuportável até mesmo para mim. Foi num desses momentos que descobrimos a existência um do outro."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Acho… que foi isso que me salvou. Ele estava morando sozinho e não se dava muito bem com os pais. Um animal solitário identificando e encontrando consolo em outro animal solitário."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Sabendo da morte dele, só não desisti de tudo porque sei que ele não gostaria. Então transformei o luto em sede de vingança, pois não sou nobre o bastante para querer justiça."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Sinto muito…"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Não sinta. Se você não morrer, já considero uma vitória."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Não planejo."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Ótimo. Agora, temos que descobrir onde será a reunião deles. Se eu não conseguir impedir a cerimônia deles, te coloco em um carro e fugimos até a poeira baixar."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Você vai ser acusado de sequestro, mesmo que eu anuncie ir voluntariamente. Não vão me deixar escapar tão fácil…"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Então vamos ir pulando o alfabeto até achar um plano que mantenha você vivo."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "..."
            },
            {
                type: "say",
                speaker: "Você",
                text: "..."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Algum lugar diferente que lembre de visitar quando criança?"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Não muitos. Meus pais costumavam ser bem rígidos quanto a eu sair de casa sozinho, e eles sempre estavam ocupados demais para me acompanhar nos lugares. Foi só nesses últimos anos que eles ficaram mais flexíveis, o que é estranho. Por isso, acho que podem estar rastreando o meu celular."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "..."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Será que o cara que chamam de Sábio vai estar presente no dia?"
            },
            {
                type: "say",
                speaker: "Você",
                text: "O sábio?"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "É. Ele parece estar organizando tudo. Vai ver vai ser em algum covil dele."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Não sei se ele vai ter um covil aqui. Parece que ele está cuidando de outros grupos também, que provavelmente são de outras cidades por não ter tantas pessoas morrendo por aqui."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Ahh…"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Mas é uma ótima ideia. Pode ser que não seja um terreno dele, mas pode ser de outro membro dessa seita."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Geralmente, esse tipo de coisa acontece em áreas subterrâneas ou galpões em filmes. Mas ele mencionou “salão” no e-mail. Parece ser uma casa."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Às vezes, pode até ser um imóvel vazio que algum deles pode ter comprado para isso. Provavelmente o dono do e-mail. Se tivesse algum tipo de assinatura mais clara, talvez desse para comparar com alguém da lista de suspeitos. "
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "... As famílias?"
            },
            {
                type: "say",
                speaker: "Você",
                text: "... Sim."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Bem, meu pai estava recebendo o e-mail, não enviando. Então não deve ser dele o imóvel."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Tem razão. Nesse momento, seria bom se ainda existissem lan-houses. Não podemos pesquisar isso na sua casa, e a minha é meio longe daqui."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Você tem o nome de todos os membros das famílias?"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Tenho, estão todos nesta lista, junto com o nome das vítimas."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Que macabro ver meu nome aqui. Mas se me emprestar seu celular, consigo dar uma pesquisada nessa galera. Tem muita informação que pode ser encontrada na Internet."
            },
            {
                type: "say",
                speaker: "",
                text: "Entrego meu celular sem hesitação. Ele vai ter muito mais facilidade em encontrar do que eu."
            },
            {
                type: "say",
                speaker: "",
                text: "Vejo Daniel pegar o aparelho, e 20 minutos de completo silêncio se instauram entre nós."
            },
            {
                type: "say",
                speaker: "",
                text: "Faço mais alguns pedidos para a garçonete, pois o suco há tempos se foi, e o lugar está cheio demais para segurarmos a mesa, mesmo que agora já não sinta o mesmo otimismo de antes."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Acho que encontrei algo útil."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Diga!"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Os Ribeiros parecem ser os melhores de vida pelas fotos. Pai médico e mãe advogada. Jogando o CPF deles em sites de Pesquisa de Bens, dá pra encontrar vários pontos interessantes."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "E, olhando pelo Mapas, essa residência parece bem afastada do resto, mas ainda está nos limites da cidade. Só tem mato em volta, e precisaria viajar uns bons quilômetros até chegar em qualquer lugar com gente."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Guri, você é um gênio!"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Agora a gente só precisa ir lá detonar o lugar pra eles não conseguirem fazer cerimônia nenhuma."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Nós? Eu não vou fazer delivery de sacrifício para eles. Você vai ficar escondido."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "E ficar esperando de braços cruzados eles virem me buscar? Nem a pau! Amanhã é meu último dia."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Não tem um amigo com quem você possa ficar? Ou passar a noite em algum hotel."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Se não posso confiar nos meus próprios pais, como posso confiar em amigos agora?"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Meus pais sabem onde todos eles moram, é só mandar um assassino atrás de mim. E eles que me deram meu cartão de crédito, deve aparecer para eles se eu pagar a hospedagem em algum lugar."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Parece que não temos muita escolha. Termine logo de comer e vamos enquanto ainda está cedo."
            },
            {
                type: "sceneChange",
                next: "casa_branca"
            }
        ],
        casa_branca: [
            {
                type: "say",
                speaker: "Daniel",
                text: "Que casarão. E bem conservado, até."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Parece que o pessoal da seita não chegou ainda. Não tem nenhum carro estacionado por perto."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Então chegou a nossa hora. Vou ficar com o seu celular para registrar as provas."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Então chegou a nossa hora. Vou ficar com o seu celular para registrar as provas."
            },
            {
                type: "say",
                speaker: "",
                text: "Entrar não foi difícil. Foi só pular por uma janela. Não duvido que esse lugar possa ter câmeras escondidas, mas nada barrava nossa entrada."
            },
            {
                type: "sceneChange",
                next: "casa_branca_interior_fechada"
            }

        ],

        casa_branca_interior: [
            {
                type: "say",
                speaker: "Daniel",
                text: "Não pode ser que eles vão trazer cadeiras e afins só no dia da cerimônia mesmo, né? Não tem nada aqui! Eu deduzi errado ao pesquisar pelos imóveis? É claro que eles não iam querer nada criminoso relacionado ao nome deles, que coisa burra!"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Não, Daniel, a sua lógica fez sentido. Esse lugar que é estranho. Ele está consideravelmente limpo mesmo não morando ninguém."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Alguma coisa na arquitetura dele está me dando calafrios, como se tivesse algo errado."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Isso estava me incomodando também… Mas pensei que era só falta de senso de direção por não ter mobília. Talvez…"
            },
            {
                type: "say",
                speaker: "",
                text: "Não precisei continuar, Daniel pareceu ter a mesma ideia. Com os nós dos dedos, começou a percorrer os quartos enquanto batia nas paredes. Cada um foi para um lado, testando a acústica daquela maldita casa."
            },
            {
                type: "say",
                speaker: "",
                text: "[ Som oco ]"
            },
            {
                type: "say",
                speaker: "Você",
                text: "!!"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Me ajude aqui, acho que tem uma parede falsa."
            },
            {
                type: "say",
                speaker: "",
                text: "Tateando para encontrar as bordas, usei a ponta de uma chave para romper a camada de tinta cobrindo o que parecia ser um tapume. Daniel fazia o mesmo com a parte afiada de um canivete suíço. Descobrindo-o, empurramos com força, e logo, uma corrente de ar se fez presente."
            },
            {
                type: "sceneChange",
                next: "casa_branca_interior_aberto"
            }
        ],
        salao: [
            {
                type: "say",
                speaker: "Você",
                text: "Sua dedução estava certa, no final das contas."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "… Esse lugar é mais macabro do que imaginava. Vamos registrar tudo e vazar daqui. Ou tacar fogo. Ou…"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Vamos só terminar de olhar logo."
            },
        ],
        ferretes: [
            {
                type: "setFlag",
                key: "hasSeenFerretes",
            },
            {
                type: "say",
                speaker: "Você",
                text: "Então foi isso que usaram em vocês…"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "O que exatamente é isso?"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Ferretes. São carimbos de gado."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Eu não lembro de ter sido queimado com isso."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Deve ter sido quando era criança ainda. Talvez, até bebê."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "… Essa gente é doentia."
            },
            {
                type: "jump",
                target: "ataque_surpresa_condicao"
            }
        ],
        livro_seita: [
            {
                type: "setFlag",
                key: "hasSeenBook",
            },
            {
                type: "say",
                speaker: "",
                text: "“O Sábio, feito um profeta, primeiro nos guiou para a prosperidade. Um homem que nunca mostrava seu rosto, mas lia o dos outros feito um livro. Ele soube nos dividir em grupos perfeitos e atribuiu a nós a missão que julgo ser a mais precisa. Nós buscaremos a vida por meio da morte.”"
            },
            {
                type: "say",
                speaker: "",
                text: "“A juventude roubada de nossa própria prole. Usando-os como Componentes no momento exato, e cumprindo nossa missão perante o Sábio, estaremos um passo mais próximos da verdade, do divino e, até mesmo, da própria imortalidade.”"
            },
            {
                type: "say",
                speaker: "",
                text: "“O Sábio sabe o caminho.”"
            },
            {
                type: "say",
                speaker: "",
                text: "Há muito mais textos explicando sobre as metodologias usadas para a formação dos casais, criação dos filhos e como esses seriam marcados de acordo com a ordem de suas mortes."
            },
            {
                type: "say",
                speaker: "",
                text: "Não quero que o Daniel leia isso agora, e aqui não é um lugar seguro para se aprofundar no assunto."
            },
            {
                type: "jump",
                target: "ataque_surpresa_condicao"
            }
        ],
        ataque_surpresa_condicao: [
            {
                type: "if",
                condition: "hasSeenFerretes && hasSeenBook",
                then: "ataque_surpresa",
            },
        ],
        ataque_surpresa: [
            {
                type: "say",
                speaker: "Você",
                text: "Daniel, vamos dar mais uma olhada para ver se não deixamos nada passar e—"
            },
            {
                type: "sceneChange",
                next: "ataque_surpresa"
            }
        ],
        desconhecido: [
            {
                type: "say",
                speaker: "Daniel",
                text: "Marcos! Você está bem?!"
            },
            {
                type: "say",
                speaker: "?",
                text: "Pensei que vocês fossem me dar trabalho extra, mas estão facilitando ele. Só preciso manter você vivo até amanhã. Você, por outro lado…"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Eu já te vi antes. Você mora na mesma rua que eu. Rogério, não é? Esteve me seguindo esse tempo todo?"
            },
            {
                type: "say",
                speaker: "Rogério",
                text: "Não precisei ficar seguindo você o tempo todo, só monitorando sua movimentação. Quando vi que estava se afastando da cidade, tive que vir correndo ver o que estava aprontando."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Mas como? Deixei meu celular em casa."
            },
            {
                type: "say",
                speaker: "Rogério",
                text: "Seu colar. Você nunca sai sem ele. Um tanto irônico, o nome desse tipo de acessório."
            },
            {
                type: "say",
                speaker: "",
                text: "Com um gesto, ele golpeia o celular na mão do Daniel, quebrando-o em pedaços. Então, sem pressa alguma, vejo-o se aproximando de mim, arma erguida. Fecho os olhos, esperando pelo próximo golpe."
            },
            {
                type: "say",
                speaker: "",
                text: "No entanto, o movimento abrupto que senti perto de mim não veio do homem."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Ei, cara! Não seria engraçado se acontecesse um pequeno acidente aqui? Eu vou ser morto amanhã, ele vai morrer agora…"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Pra nós não faz tanta diferença assim, mas aposto que os teus amiguinhos não ficariam tão felizes assim se eu morresse agora, não é?"
            },
            {
                type: "say",
                speaker: "Rogério",
                text: "Largue isso agora—!"
            },
            {
                type: "sceneChange",
                next: "daniel_canivete"
            }
        ],
        canivete: [
            {
                type: "say",
                speaker: "",
                text: "Com a visão distorcida, vejo Daniel encravar uma das lâminas do canivete suíço na própria barriga. Uma mancha de sangue lentamente surge de suas roupas"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Ugh…"
            },
            {
                type: "say",
                speaker: "Rogério",
                text: "Moleque imbecil!"
            },
            {
                type: "say",
                speaker: "",
                text: "(O homem se agachou perto dele, agarrando-o com força enquanto tentava analisar o ferimento. Ele chutou o canivete para longe, e sabia que, se o ferimento não fosse fatal, aquele homem não iria se importar de machucar ele ainda mais por ser confrontado.)"
            },
            {
                type: "say",
                speaker: "",
                text: "Se eu não fizer algo agora, vai ser tarde demais de novo. Como foi com aqueles jovens. Como foi com meu filho."
            },
            {
                type: "say",
                speaker: "",
                text: "(Ignorando a dor pulsante, me levantei e cambaleei até a parede ao lado.)"
            },
            {
                type: "sceneChange",
                next: "marcos_ferretes"
            }
        ],
        marcos_ferretes: [
            {
                type: "setFlag",
                key: "hasRunningAway"
            },
            {
                type: "say",
                speaker: "Você",
                text: "[ Agarra Daniel ]"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Aguenta firme, vamos sair daqui."
            },
            {
                type: "sceneChange",
                next: "escadaria"
            },
        ],
        fugindo_escadaria_condicao: [
            {
                type: "if",
                condition: "hasRunningAway",
                then: "fugindo_escadaria"
            }
        ],
        fugindo_escadaria: [
            {
                type: "sound",
                category: "bgm",
                sound: "musica_final_bom",
                options: {
                    loop: true,
                    volume: 0.2
                }
            },
            {
                type: "sceneChange",
                next: "casa_branca_interior_aberto"
            }
        ],
        fugindo_casa_branca_condicao: [
            {
                type: "if",
                condition: "hasRunningAway",
                then: "fugindo_casa_branca",
                else: "descobrindo_escadaria"
            }
        ],
        descobrindo_escadaria: [
            {
                type: "sound",
                category: "bgm",
                sound: "musica_triste",
                options: {
                    loop: true,
                    volume: 0.2
                }
            },
        ],
        fugindo_casa_branca: [
            {
                type: "sceneChange",
                next: "good_ending"
            }
        ],
        good_ending: [
            {
                type: "if",
                condition: "hasGoodEnd",
                then: "good_ending_final",
                else: "dialogo_final"
            }
        ],
        dialogo_final: [
            {
                type: "setFlag",
                key: "hasGoodEnd"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Tá doendo pra caralho, mas fica tranquilo, velhote. A lâmina tava bem cega, era só pra assustar ele mesmo. Se você não tivesse agido antes, eu teria tentado fazer algo. Ai…"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Vamos sair daqui primeiro, antes que venham mais deles. Então tratamos o seu machucado e… Droga. Perdemos as provas, e não vamos poder voltar lá mais. Vamos ter que fugir de carro até o final de amanhã, ao menos…"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Eu não ia aceitar tudo aquilo para sair de mãos vazias."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Roubei o livro deles, seja lá o que ele seja. Vai nos dar uma pista melhor do que eles são e do que eles querem. Além do mais…"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Um dia e meio de pique-esconde não parece tão difícil assim."
            },
            {
                type: "sceneChange",
                next: "good_ending"
            }
        ],
        good_ending_final: [
            {
                type: "say",
                speaker: "",
                text: "Escapou (por enquanto)"
            }
        ],
        voltar_para_menu: [
            {
                type: "choice",
                options: [
                    { text: "Voltar para o menu", jump: "menu" },
                    { text: "Continuar", jump: "nada" }
                ]
            }
        ],
        menu: [
            {
                type: "stopSound",
                sound: "musica_final_bom"
            },
            {
                type: "sceneChange",
                next: "MainMenu"
            }
        ],
        nada: []
    }
}