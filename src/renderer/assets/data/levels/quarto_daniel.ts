import type { LevelData } from "../../../types/LevelData";

export const quarto_daniel : LevelData = {
    id: "quarto_daniel",
    background: "quarto_daniel",

    interactiveAreas: [
        {
            id: "door",            
            width: 265,
            height: 450,
            x: 40,
            y: 140,
            interactType: "changeScene",
            next: "sala_de_estar"
        }
    ],

    npcs: [
        {
            id: "Daniel",
            width: 160,
            height: 400,
            sprite: "Daniel",
            sprite_clip: [225, 309, 525, 1675],
            x: 280,
            y: 280
        }
    ],

    objects: [

    ]    
}