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
            type: "dialog",
            npcId: "Protagonista",
            target: "entrada_daniel_fechado"
        },        
    ]
}