import type { MenuData } from "../../../types/MenuData";

export const OptionsMenu: MenuData = {
    id: "optionsMenu",
    background: "opcoes",
    interactiveAreas: [
        {
            id: "back",
            x: 530,
            y: 610,
            width: 270,
            height: 50,
            interactType: {
                type: "popScene",
            }
        }
    ],
    buttons: [
        {
            id: "textSpeed",
            x: 560,
            y: 300,
            width: 200,
            height: 15,
            button: {
                type: "sliderButton",
                props: {
                    backgroundColor: "hsl(0, 50%, 0%)",
                    max: 3,
                    value: 1,
                    min: 1,
                    borderRadius: 10,
                    sliderBorderRadius: 10,
                    sliderBackgroundColor: "hsl(300, 50%, 50%)",
                    sliderSize: 20
                }
            }
        }
    ],
    labels: [
        {
            id: "textSpeedLabel",
            labelToId: "textSpeed",
            text: "Velocidade do Texto:",
            color: "white",
            fontSize: 20,
            textAlign: "left",
            textBaseline: "middle",
            x: 560,
            y: 280,
            width: 200,
            height: 20,
        }
    ]
}