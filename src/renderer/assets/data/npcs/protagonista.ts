import type { DialogScript } from "../../../types/DialogTypes";

const protagonistaName = "Marcos Carvalho";

export const Protagonista: DialogScript = {
    entry: "start",
    nodes: {
        start: [
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
                type: "say",
                speaker: "Tu",
                text: "Quando acordei, o gosto amargo que tomou minha boca não foi o do café, mas das imagens mostrada no noticiário. Outra vítima, outra vez que fui lento demais em encontrar os culpados?"
            },
            {
                type: "sceneChange",
                next: "quadro_pistas"
            },            
        ]
    }
}