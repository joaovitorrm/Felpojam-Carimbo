import type { DialogScript } from "../../../types/DialogTypes";

export const envelope : DialogScript = {
    entry: "start",
    nodes: {
        start: [
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
                    }
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