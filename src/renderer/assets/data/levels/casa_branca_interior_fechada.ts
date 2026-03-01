import type { LevelData } from "../../../types/LevelData";

export const casa_branca_interior_fechada : LevelData = {
    id: "casa_branca_interior",
    type: "level",
    background: "casa_seita_fechada",

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
            target: "casa_branca_interior"
        }
    ],

    onExit: [
        {
            type: "fadeOut",
            seconds: 1
        }
    ]
}