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
                target: "senha_computador_seita"
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
                target: "senha_computador_seita"
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
                    { text: "Recusar", jump: "recusar" }
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

        nada: []
    }
}