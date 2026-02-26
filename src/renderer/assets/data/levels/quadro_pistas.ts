import type { LevelData } from "../../../types/LevelData";


export const quadro_pistas: LevelData = {
    id: "quadro_de_pistas",
    background: "quadro_pistas",

    npcs: [
    ],

    objects: [
        {
            propId: "olivia",
            sprite: "olivia",
            sprite_clip: [0, 0, 816, 1209],
            x: 160,
            y: 120,
            width: 110,
            height: 164,
            interactType: "dialog",
        },
        {
            propId: "clarissa",
            sprite: "clarissa",
            sprite_clip: [0, 0, 758, 1000],
            x: 900,
            y: 150,
            width: 100,
            height: 140,
            interactType: "dialog",
        },
        {
            propId: "bernardo",
            sprite: "bernardo",
            sprite_clip: [0, 0, 968, 885],
            x: 500,
            y: 350,
            width: 153,
            height: 140,
            interactType: "dialog",
        },
        {
            propId: "envelope",
            sprite: "envelope",
            sprite_clip: [110, 375, 677, 148],
            x: 800,
            y: 600,
            width: 400,
            height: 100,
            interactType: "dialog"
        }
    ],

    interactiveAreas: [],

    onEnter: [
        {
            type: "dialog",
            npcId: "Protagonista",
            target: "quadro"
        }
    ]
};
