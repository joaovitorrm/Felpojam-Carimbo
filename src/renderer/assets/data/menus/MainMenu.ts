import type { MenuData } from "../../../types/MenuData";

export const MainMenu : MenuData = {
    id: "mainMenu",
    background: "menuScene",
    buttons: [
        {
            id: "play",
            label: "Novo Jogo",
            x: 400,
            y: 280,
            width: 120,
            height: 60,
            action: "bedroom"
        },
        {
            id: "options",
            label: "Opções",
            x: 550,
            y: 280,
            width: 120,
            height: 60,
            action: "bedroom"
        },
        {
            id: "quit",
            label: "Sair",
            x: 700,
            y: 280,
            width: 120,
            height: 60,
            action: "bedroom"
        }
    ]
}