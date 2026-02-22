import type { DialogScript } from "../../../types/DialogTypes";

export const fotografia: DialogScript = {
    entry: "start",
    nodes: {
        start: [
            {
                type: "say",
                speaker: "",
                text: "Essa foto foi tirada ontem."
            }
        ]
    }
    
}