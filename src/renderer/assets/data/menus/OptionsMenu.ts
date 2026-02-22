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
            width: 50,
            height: 50,
            interactType: "popScene",
            props: {
                label: "❌",
                fontSize: 40,
                color: "hsl(0, 0%, 90%)",
                backgroundColor: "transparent",
                textBaseline: "middle",
                textAlign: "center"
            }
        }
    ]
}