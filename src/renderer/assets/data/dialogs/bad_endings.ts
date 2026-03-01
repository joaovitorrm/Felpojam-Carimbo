import type { DialogScript } from "../../../types/DialogTypes"

export const bad_endings: DialogScript = {
    entry: "start",

    nodes: {
        start: [
            {
                type: "if",
                condition: "hasBadEnding3",
                then: "bad_ending_3",
            },
            {
                type: "if",
                condition: "hasBadEnding2",
                then: "bad_ending_2",
            },
            {
                type: "if",
                condition: "hasBadEnding1",
                then: "bad_ending_1",
            }
        ],
        bad_ending_1: [
            {
                type: "say",
                speaker: "Jornal",
                text: "Jovem encontrado morto nesta manhã, foi identificado como Daniel"
            },
            {
                type: "jump",
                target: "restart"
            }
        ],
        bad_ending_2: [
            {
                type: "say",
                speaker: "",
                text: "Naquela noite, sozinho em meu apartamento, escuto passos se aproximarem de minha cama. Não dá tempo de acender a luz para ver quem tinha entrado no meu quarto. Com um movimento abrupto, tudo fica silencioso."
            },
            {
                type: "jump",
                target: "restart"
            }
        ],
        bad_ending_3: [
            {
                type: "say",
                speaker: "Daniel",
                text: "Eu posso dormir no sofá, não precisa me dar a cama. Suas costas vão agradecer."
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Retrucando o anfitrião da casa? Deite no meu quarto. Minha palavra aqui é lei."
            },
            {
                type: "say",
                speaker: "Você",
                text: "[ Click, som porta abrindo ]"
            },
            {
                type: "say",
                speaker: "Daniel",
                text: "Você mora com mais alguém? Não era melhor pedir a opinião dessa pessoa também antes de eu ficar aqui?"
            },
            {
                type: "say",
                speaker: "Você",
                text: "Eu moro sozinho há dois anos. Ninguém mais tem a chave aqui de casa."
            },
            {
                type: "say",
                speaker: "",
                text: "Naquela noite, eu mal podia imaginar o que iria acontecer com a gente."
            },
            {
                type: "jump",
                target: "restart"
            }
        ],
        restart: [
            {
                type: "choice",
                options: [
                    {
                        text: "Começar Novamente",
                        jump: "reportagem"
                    }
                ]
            },
        ],
        reportagem: [
            {
                type: "sceneChange",
                next: "reportagem"
            }
        ]
    }
}