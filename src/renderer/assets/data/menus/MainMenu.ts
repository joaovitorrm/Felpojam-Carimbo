import type { MenuData } from "../../../types/MenuData";

export const MainMenu: MenuData = {
    id: "mainMenu",
    background: "computador",
    elements: [
        {
            id: "play",
            x: 400,
            y: 280,
            width: 120,
            height: 60,
            button: {
                type: "labelButton",
                props: {
                    label: "Novo Jogo",
                    fontSize: 20,
                    color: "hsl(0, 0%, 90%)",
                    backgroundColor: "hsl(0, 0%, 6%)",
                    textBaseline: "middle",
                    textAlign: "center"
                }
            },
            interactType: "changeScene",
            next: "reportagem"
        },
        {
            id: "options",
            x: 550,
            y: 280,
            width: 120,
            height: 60,
            button: {
                type: "labelButton",
                props: {
                    label: "Opções",
                    fontSize: 20,
                    color: "hsl(0, 0%, 90%)",
                    backgroundColor: "hsl(0, 0%, 6%)",
                    textBaseline: "middle",
                    textAlign: "center"
                }
            },
            interactType: "pushScene",
            next: "OptionsMenu"
        },
        {
            id: "quit",
            x: 700,
            y: 280,
            width: 120,
            height: 60,
            button: {
                type: "labelButton",
                props: {
                    label: "Sair",
                    fontSize: 20,
                    color: "hsl(0, 0%, 90%)",
                    backgroundColor: "hsl(0, 0%, 6%)",
                    textBaseline: "middle",
                    textAlign: "center"
                }
            },            
            interactType: "action",
            next: "sala_de_estar"
        }
    ]
}