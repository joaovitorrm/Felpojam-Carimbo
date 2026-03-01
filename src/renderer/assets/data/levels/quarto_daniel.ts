import type { LevelData } from "../../../types/LevelData";

export const quarto_daniel : LevelData = {
    id: "quarto_daniel",
    background: "quarto_daniel",
    type: "level",
    interactiveAreas: [
        {
            id: "sala_daniel",
            x: 15,
            y: 115,
            width: 285,
            height: 500,
            interactType: {
                type: "sceneChange",
                next: "sala_daniel"
            }
        }
    ],

    npcs: [
        {
            id: "Daniel",
            sprite: "Daniel",
            sprite_clip: [220, 310, 535, 1675],
            x: 200,
            y: 280,
            width: 150,
            height: 400,
            interactType: {
                type: "dialog",
                npcId: "Daniel",
                target: "quarto_daniel"
            }
        }
    ],

    objects: [

    ]
}