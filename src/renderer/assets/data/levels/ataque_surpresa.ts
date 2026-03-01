import type { LevelData } from "../../../types/LevelData";

export const ataque_surpresa : LevelData = {
    id: "ataque_surpresa",
    type: "level",
    background: "homem",

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
            target: "desconhecido"
        }
    ],

    onExit: [
        {
            type: "fadeOut",
            seconds: 1
        }
    ]
}