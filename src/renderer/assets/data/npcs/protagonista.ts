import type { DialogScript } from "../../../types/DialogTypes";

//const protagonistaName = "Marcos Carvalho";

export const Protagonista: DialogScript = {
    entry: "start",
    nodes: {
        start: [
            {
                type: "say",
                speaker: "Você",
                text: "Quando acordei, o gosto amargo que tomou minha boca não foi o do café, mas das imagens mostradas no noticiário. Outra vítima, outra vez que fui lento demais em encontrar os culpados."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Não que eu seja algum oficial ou alguém com grande senso de justiça. O que estou fazendo sequer tem reconhecimento legal. Mas a segunda vítima daquela onda de assassinatos… era alguém que eu conhecia."
            },
            {
                type: "say",
                speaker: "Você",
                text: "Foi na terceira morte que percebi que havia um padrão naqueles assassinatos. Marcas estampadas na pele que antes julgava serem só marcas de nascenças. Elas são sutis, e nunca aparecem em destaque nos noticiários."
            },
            {
                type: "say",
                speaker: "Você",
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
                speaker: "Você",
                text: "Em um primeiro momento, as vítimas não parecem ter relação entre si. Isso é, até você considerar as marcas estranhas encontradas nos seus corpos. Elas não são iguais, mas possuem certa semelhança."
            },
            {
                type: "say",
                speaker: "Você",
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
                speaker: "Você",
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
                speaker: "Você",
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
        ],
        nada: []
    }
}