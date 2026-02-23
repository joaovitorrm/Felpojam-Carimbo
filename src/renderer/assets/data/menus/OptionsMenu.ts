import type { MenuData } from "../../../types/MenuData";

export const OptionsMenu: MenuData = {
    id: "optionsMenu",
    background: "computador",
    elements: [
        {
            id: "backButton",
            x: 0,
            y: 0,
            width: 50,
            height: 50,
            interactType: "popScene",
            button: {
                type: "labelButton",
                props: {
                    label: "❌",
                    fontSize: 40,
                    color: "hsl(0, 0%, 90%)",
                    backgroundColor: "transparent",
                    textBaseline: "middle",
                    textAlign: "center"
                }
            }
        },
        {
            id: "textSpeed",
            x: 200,
            y: 200,
            width: 200,
            height: 40,
            interactType: "action",
            button: {
                type: "sliderButton",
                props: {
                    backgroundColor: "hsl(0, 50%, 50%)",
                    max: 100,
                    value: 50,
                    min: 0,
                    borderRadius: 5,
                    sliderBorderRadius: 5,
                    sliderBackgroundColor: "hsl(300, 50%, 50%)",
                    sliderSize: 10
                }
            },
            action: () => console.log("a"),
        }
    ]
}