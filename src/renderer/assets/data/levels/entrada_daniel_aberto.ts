import type { LevelData } from "../../../types/LevelData";

export const entrada_daniel_aberto: LevelData = {
    id: "entrada_daniel_aberto",
    type: "level",
    background: "entrada_daniel_aberto",

    interactiveAreas: [
    ],

    npcs: [
    ],

    objects: [
    ],

    onEnter: [
        {
            type: "dialog",
            npcId: "Daniel",
            target: "start"
        }
    ]
}