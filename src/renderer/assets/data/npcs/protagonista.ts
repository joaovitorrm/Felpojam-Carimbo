import type { DialogScript } from "../../../types/DialogTypes";

//const protagonistaName = "Marcos Carvalho";

export const Protagonista: DialogScript = {
    entry: "start",
    nodes: {
        start: [
            {
                type: "say",
                speaker: "Tu",
                text: "Quando acordei, o gosto amargo que tomou minha boca não foi o do café, mas das imagens mostrada no noticiário. Outra vítima, outra vez que fui lento demais em encontrar os culpados?"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Não que eu seja algum oficial ou alguém com grande senso de justiça. O que estou fazendo sequer tem reconhecimento legal. Mas a segunda vítima daquela onda de assassinatos… era alguém que eu conhecia."
            },
            {
                type: "say",
                speaker: "Guri",
                text: "Foi na terceira morte que percebi que havia um padrão naqueles assassinatos. Marcas estampadas na pele que antes julgava ser só uma marca de nascença. Elas são sutis, e nunca aparecem em destaque nos noticiários"
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
        ]
    }
}