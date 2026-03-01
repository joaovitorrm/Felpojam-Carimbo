import type { LevelData } from "../../../types/LevelData";

export const daniel_canivete : LevelData = {
    id: "daniel_canivete",
    type: "level",
    background: "canivete",

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
            target: "canivete"
        }
    ],

    onExit: [
        {
            type: "fadeOut",
            seconds: 1
        },        
    ]
}