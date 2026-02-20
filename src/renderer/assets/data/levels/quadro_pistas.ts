import type { LevelData } from "../../../types/LevelData";


export const quadro_de_pistas: LevelData = {
    id: "quadro_de_pistas",
    background: "quadro_de_pistas",

    npcs: [
    ],

    objects: [
        {
            id: "door",
            sprite: "quadro_de_pistas",
            sprite_clip: [0, 0, 1000, 1000],
            x: 0,
            y: 210,
            width: 500,
            height: 500,
            interactType: "sceneChange",
            next: "bedroom"
        }
    ]
};
