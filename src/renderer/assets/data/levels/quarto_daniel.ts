import type { LevelData } from "../../../types/LevelData";

export const quarto_daniel : LevelData = {
    id: "quarto_daniel",
    background: "quarto_daniel",
    type: "level",
    interactiveAreas: [],

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
        {
            id: "retrato",
            sprite: "retrato",
            sprite_clip: [0, 0, 1920, 1080],
            width: 1280,
            height: 720,
            hitbox: [1100, 170, 90, 140],
            x: 0,
            y: 0,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "retrato_pais_daniel"
            }
        },
        
        {
            id: "portaQuartoDaniel",
            sprite: "portaQuartoDaniel",
            sprite_clip: [0, 0, 1920, 1080],
            width: 1280,
            height: 720,
            hitbox: [15, 115, 285, 500],
            x: 0,
            y: 0,
            interactType: {
                type: "sceneChange",
                next: "sala_daniel"
            }
        },        
        {
            id: "pcDaniel",
            sprite: "pcDaniel",
            sprite_clip: [0, 0, 1920, 1080],
            width: 1280,
            height: 720,
            hitbox: [360, 320, 110, 110],
            x: 0,
            y: 0,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "computador_daniel"
            }
        },
        {
            id: "mesaDaniel",
            sprite: "mesaDaniel",
            sprite_clip: [0, 0, 1920, 1080],
            width: 1280,
            height: 720,
            hitbox: [340, 400, 280, 185],
            x: 0,
            y: 0,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "mesa_quarto_daniel"
            }
        },
    ]
}