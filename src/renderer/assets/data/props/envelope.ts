import type { DialogScript } from "../../../types/DialogTypes";

export const envelope : DialogScript = {
    entry: "start",
    nodes: {
        start: [
            {
                type: "say",
                speaker: "",
                text: "Um envelope :)"
            }
        ]
    }
}