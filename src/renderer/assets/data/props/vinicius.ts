import type { DialogScript } from "../../../types/DialogTypes";

export const vinicius : DialogScript = {
    entry: "start",
    nodes: {
        start: [
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
        ]
    }
}