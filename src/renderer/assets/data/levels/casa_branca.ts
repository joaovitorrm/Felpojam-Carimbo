import type { LevelData } from "../../../types/LevelData";

export const casa_branca : LevelData = {
    id: "casa_branca",
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
            target: "casa_branca"
        }
    ],

    onExit: [
    ]
}