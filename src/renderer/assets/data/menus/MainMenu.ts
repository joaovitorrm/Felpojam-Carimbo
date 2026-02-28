import type { MenuData } from "../../../types/MenuData";

export const MainMenu: MenuData = {
    id: "mainMenu",
    background: "main_menu",
    labels: [],
    interactiveAreas: [
        {
            id: "play",
            x: 455,
            y: 375,
            width: 335,
            height: 70,
            interactType: {
                type: "sceneChange",
                next: "reportagem"
            }
        },
        {
            id: "options",
            x: 450,
            y: 460,
            width: 345,
            height: 85,
            interactType: {
                type: "sceneChange",
                next: "OptionsMenu"
            }
        },
        {
            id: "quit",
            x: 455,
            y: 550,
            width: 335,
            height: 70,
            interactType: {
                type: "quitGame"
            }
        }
    ],
    buttons: []
}