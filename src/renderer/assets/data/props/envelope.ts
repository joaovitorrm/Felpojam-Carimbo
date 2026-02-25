import type { DialogScript } from "../../../types/DialogTypes";

export const envelope : DialogScript = {
    entry: "start",
    nodes: {
        start: [
            {
                type: "say",
                speaker: "",
                text: "Talvez seja bom eu levar o envelope de provas comigo."
            },
            {
                type: "choice",
                options: [
                    {
                        text: "Levar",
                        jump: "levar",
                    },
                    {
                        text: "Deixar",
                        jump: "deixar"
                    },
                    {
                        text: "Tirar uma foto do envelope",
                        jump: "deixar"
                    },
                    {
                        text: "Deixar",
                        jump: "deixar"
                    },
                ]
            }
        ],
        levar: [
            {
                type: "setFlag",
                key: "envelope",
            }
        ],
        deixar: []
    }
}