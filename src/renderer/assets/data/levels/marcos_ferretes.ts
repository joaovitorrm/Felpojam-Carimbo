import type { LevelData } from "../../../types/LevelData";

export const marcos_ferretes : LevelData = {
    id: "ferretes",
    type: "level",
    background: "marcos_ferretes",

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
            type: "hold",
            seconds: 1
        },
        {
            type: "fadeOut",
            seconds: 1
        },
        {
            type: "pausePlayer"
        },
        {
            type: "dialog",
            npcId: "Protagonista",
            target: "marcos_ferretes"
        }
    ],

    onExit: [
        {
            type: "stopSound",
            sound: "musica_triste"
        }
    ]
}