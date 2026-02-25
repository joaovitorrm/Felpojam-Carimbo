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
            sprite_clip: [0, 0, 810, 1210],
            x: 140,
            y: 120,
            width: 90,
            height: 150,
            interactType: "dialog",
        },
        {
            propId: "fotografia",
            sprite: "fotografia",
            sprite_clip: [40, 110, 740, 584],
            x: 900,
            y: 150,
            width: 150,
            height: 150,
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

    onEnter: {
        type: "dialog",
        npcId: "Protagonista",
        target: "quadro"
    }
};
