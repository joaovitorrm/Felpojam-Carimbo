import type { LevelData } from "../../../types/LevelData";

export const bad_endings : LevelData = {
    id: "bad_endings",
    type: "level",
    background: "reportagem",

    interactiveAreas: [
    ],

    npcs: [
    ],

    objects: [
    ],

    onEnter: [
        {
            type: "fadeOut",
            seconds: 0,
        },
        {
            type: "hold",
            seconds: 1
        },
        {
            type: "dialog",
            npcId: "bad_endings",
            target: "start"
        },
    ]
}