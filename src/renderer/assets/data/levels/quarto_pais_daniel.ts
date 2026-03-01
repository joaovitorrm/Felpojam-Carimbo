import type { LevelData } from "../../../types/LevelData";

export const quarto_pais_daniel : LevelData = {
    id: "quarto_pais_daniel",
    type: "level",
    background: "quarto_pais_daniel",

    interactiveAreas: [
    ],

    npcs: [
    ],

    objects: [
        {
            id: "computador_pais",
            x: 726,
            y: 452,
            width: 134,
            height: 102,
            sprite: "pcPais",
            sprite_clip: [1090, 680, 200, 150],
            interactType: {
                type: "dialog",
                target: "computador_pais_daniel",
                npcId: "Protagonista",
            }
        }
    ],

    onEnter: [
    ],

    onExit: [
    ]
}