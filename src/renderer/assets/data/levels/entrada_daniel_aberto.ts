import type { LevelData } from "../../../types/LevelData";

export const entrada_daniel_aberto : LevelData = {
    id: "entrada_daniel_aberto",
    type: "level",
    background: "entrada_daniel_aberto",

    interactiveAreas: [
        {
            id: "daniel",
            x: 0,
            y: 0,
            width: 1000,
            height: 1000,
            interactType: {
                type: "dialog",
                npcId: "Daniel",
                target: "start"
            }
        }
    ],

    npcs: [
    ],

    objects: [
    ],
}