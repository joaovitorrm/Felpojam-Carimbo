import type { DialogScript } from "../../../types/DialogTypes";

export const olivia : DialogScript = {
    entry: "start",
    nodes: {
        start: [
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
        ]
    }
}