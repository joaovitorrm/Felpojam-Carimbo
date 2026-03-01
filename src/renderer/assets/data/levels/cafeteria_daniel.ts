import type { LevelData } from "../../../types/LevelData";

export const cafeteria_daniel : LevelData = {
    id: "cafeteria",
    type: "level",
    background: "cafeteria_daniel",

    interactiveAreas: [
    ],

    npcs: [
    ],

    objects: [
    ],

    onEnter: [
        {
            type: "fadeIn",
            seconds: 1,
        },
        {
            type: "dialog",
            npcId: "Protagonista",
            target: "cafeteria_daniel"
        }
    ],

    onExit: [
        {
            type: "fadeOut",
            seconds: 1
        },
        {
            type: "hold",
            seconds: 2
        }
    ]
}