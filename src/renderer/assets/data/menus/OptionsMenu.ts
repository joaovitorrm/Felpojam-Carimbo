import type { MenuData } from "../../../types/MenuData";

export const OptionsMenu: MenuData = {
    id: "optionsMenu",
    background: "computador",
    elements: [
        {
            id: "backButton",
            x: 840,
            y: 200,
            width: 50,
            height: 50,
            interactType: "popScene",
            button: {
                type: "labelButton",
                props: {
                    label: "❌",
                    fontSize: 30,
                    color: "hsl(0, 50%, 50%)",
                    backgroundColor: "hsl(0, 0%, 60%)",
                    textBaseline: "middle",
                    textAlign: "center",
                    borderRadius: 10,
                }
            }
        },
        {
            id: "textSpeed",
            x: 400,
            y: 300,
            width: 100,
            height: 15,
            interactType: "action",
            button: {
                type: "sliderButton",
                props: {
                    backgroundColor: "hsl(0, 50%, 0%)",
                    max: 100,
                    value: 50,
                    min: 0,
                    borderRadius: 10,
                    sliderBorderRadius: 10,
                    sliderBackgroundColor: "hsl(300, 50%, 50%)",
                    sliderSize: 20
                }
            },
            action: () => console.log("a"),
        }
    ]
}