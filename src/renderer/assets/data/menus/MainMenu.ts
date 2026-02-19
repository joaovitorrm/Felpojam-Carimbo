import type { MenuData } from "../../../types/MenuData";

export const MainMenu : MenuData = {
    id: "mainMenu",
    background: "menuScene",
    buttons: [
        {
            id: "play",
            label: "Novo Jogo",
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            action: "startGame"
        },
        {
            id: "options",
            label: "Opções",
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            action: "options"
        },
        {
            id: "quit",
            label: "Sair",
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            action: "exits"
        }
    ]
}