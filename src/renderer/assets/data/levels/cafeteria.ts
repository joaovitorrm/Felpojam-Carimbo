import type { LevelData } from "../../../types/LevelData";

export const cafeteria : LevelData = {
    id: "cafeteria",
    type: "level",
    background: "cafeteria",

    interactiveAreas: [
    ],

    npcs: [
    ],

    objects: [
    ],

    onEnter: [
        {
            type: "dialog",
            npcId: "Protagonista",
            target: "cafeteria"
        },
        {
            type: "hold",
            seconds: 3,
            firstTimeOnly: true
        },
        {
            type: "fadeIn",
            seconds: 1
        },
        {
            type: "dialog",
            npcId: "Protagonista",
            target: "cafeteria2"
        }
    ],

    onExit: [
        {
            type: "fadeOut",
            seconds: 1
        }
    ]
}