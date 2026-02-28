import type { LevelData } from "../../../types/LevelData";

export const entrada_daniel_fechado : LevelData = {
    id: "entrada_daniel_fechado",
    type: "level",
    background: "entrada_daniel_fechado",

    interactiveAreas: [
    ],

    npcs: [
    ],

    objects: [
    ],

    onEnter: [
        {
            type: "fadeIn",
            seconds: 1
        },
        {
            type: "say",
            speaker: "Você",
            text: "Que bom que foi fácil segui-lo naquele dia. E que os vizinhos gostam de fofocar."
        }
    ]
}