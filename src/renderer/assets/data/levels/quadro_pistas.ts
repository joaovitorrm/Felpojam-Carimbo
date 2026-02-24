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
        }
    ],

    interactiveAreas: [],
};
