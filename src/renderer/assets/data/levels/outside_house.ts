import type { LevelData } from "../../../types/LevelData";


export const outside_house: LevelData = {
    id: "frente_cada_daniel",
    background: "frente_casa_daniel",

    npcs: [
        {
            id: "Daniel",
            sprite: "placeholder_character",
            sprite_clip: [220, 40, 340, 860],
            x: 100,
            y: 300,
            width: 200,
            height: 420,
            dialogId: "danielDialog",
        }
    ],

    objects: [],

    interactiveAreas: [
        {
            id: "door",
            x: 300,
            y: 100,
            width: 500,
            height: 700,
            interactType: "sceneChange",
            next: "bedroom"
        }
    ]
};
