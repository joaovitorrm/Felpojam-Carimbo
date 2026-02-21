import type { MenuData } from "../../../types/MenuData";

export const OptionsMenu : MenuData = {
    id: "optionsMenu",
    background: "computador",
    elements: [
        {
            type: "labelButton",
            id: "backButton",
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            interactType: "popScene",
            props: {
                label: "❌",
                fontSize: 20,
                color: "hsl(0, 0%, 90%)",
                backgroundColor: "hsl(0, 0%, 6%)",
                textBaseline: "middle",
                textAlign: "center"
            }
        }
    ]
}