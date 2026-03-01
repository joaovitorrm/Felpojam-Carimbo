import type { LevelData } from "../../../types/LevelData";

export const sala_daniel: LevelData = {
    id: "sala_daniel",
    background: "sala_daniel",
    type: "level",

    interactiveAreas: [
        /* {
            id: "quarto_daniel",
            x: 440,
            y: 265,
            width: 70,
            height: 230,
            interactType: {
                type: "sceneChange",
                next: "quarto_daniel"
            }
        }, */
        /* {
            id: "calendario",
            x: 748,
            y: 280,
            width: 52,
            height: 75,
            interactType: {
                type: "zoomObject",
                npcId: "Protagonista",
                objectAsset: "calendario",
                target: "calendario",
                height: 900,
                width: 900
            }
        }, */
        /* {
            id: "quarto_pais_daniel",
            x: 860,
            y: 255,
            width: 125,
            height: 235,
            interactType: {
                type: "sceneChange",
                next: "quarto_pais_daniel"
            }
        } */
    ],

    npcs: [
        {
            id: "Daniel",
            x: 520,
            y: 300,
            width: 80,
            height: 240,
            sprite: "Daniel",
            sprite_clip: [220, 300, 550, 1700],
            interactType: {
                type: "dialog",
                npcId: "Daniel",
                target: "sala_daniel"
            }
        }
    ],

    objects: [
        {
            id: "porta_quarto_pais",
            x: 437,
            y: 256,
            width: 74,
            height: 240,
            sprite: "portaQuartoPais",
            sprite_clip: [655, 400, 112, 345],
            interactType: {
                type: "sceneChange",
                next: "quarto_pais_daniel"
            }
        },
        {
            id: "porta_quarto_daniel_sala",
            x: 860,
            y: 252,
            width: 134,
            height: 240,
            sprite: "portaQuartoDanielSala",
            sprite_clip: [1286, 378, 200, 360],
            interactType: {
                type: "sceneChange",
                next: "quarto_daniel"
            }
        },
        {
            id: "calendario",
            x: 748,
            y: 276,
            width: 52,
            height: 80,
            sprite: "calendarioParede",
            sprite_clip: [1122, 417, 78, 116],
            interactType: {
                type: "zoomObject",
                npcId: "Protagonista",
                objectAsset: "calendario",
                target: "calendario",
                height: 900,
                width: 900
            }
        }
    ],

    onEnter: [
        {
            type: "fadeIn",
            seconds: 1
        },
        {
            type: "dialog",
            npcId: "Protagonista",
            target: "sala_daniel"
        },
    ]
}