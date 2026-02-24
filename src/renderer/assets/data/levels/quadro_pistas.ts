import type { LevelData } from "../../../types/LevelData";


export const quadro_pistas: LevelData = {
    id: "quadro_de_pistas",
    background: "quadro_pistas",

    npcs: [
    ],

    objects: [
        {
            id: "fotografia",
            sprite: "fotografia",
            sprite_clip: [0, 0, 1000, 1000],
            x: 0,
            y: 210,
            width: 500,
            height: 500,
            interactType: "changeScene",
            next: "sala_de_estar"
        }
    ],

    interactiveAreas: [],
};
