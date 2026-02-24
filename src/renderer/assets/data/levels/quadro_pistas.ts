import type { LevelData } from "../../../types/LevelData";


export const quadro_pistas: LevelData = {
    id: "quadro_de_pistas",
    background: "quadro_pistas",

    npcs: [
    ],

    objects: [
        {
            id: "olivia",
            sprite: "olivia",
            sprite_clip: [0, 0, 810, 1210],
            x: 120,
            y: 100,
            width: 90,
            height: 150,
            interactType: "dialog",
        },
        {
            id: "envelope",
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
};
