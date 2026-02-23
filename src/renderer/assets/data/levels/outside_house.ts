import type { LevelData } from "../../../types/LevelData";

export const outside_house: LevelData = {
    id: "frente_cada_daniel",
    background: "frente_casa_daniel",

    npcs: [
        {
            id: "Marcos",
            sprite: "placeholder_character",
            sprite_clip: [220, 40, 340, 860],
            x: 100,
            y: 300,
            width: 200,
            height: 420
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
            interactType: "changeScene",
            next: "sala_de_estar"
        }
    ],

    onEnter: {
        type: "dialog",
        npcId: "Protagonista",
        target: "start"
    }
};
