import type { LevelData } from "../../../types/LevelData";


export const bedroom: LevelData = {
    id: "bedroom",
    background: "sala_casa_daniel",

    npcs: [
        {
            id: "Guarda",
            sprite: "placeholder_character",
            sprite_clip: [220, 40, 340, 860],
            x: 400,
            y: 300,
            width: 200,
            height: 420,
            dialogId: "guardDialog"
        },
        {
            id: "Mercador",
            sprite: "placeholder_character",
            sprite_clip: [220, 40, 340, 500],
            x: 800,
            y: 102,
            width: 120,
            height: 180,
            dialogId: "merchantDialog"
        }
    ],

    objects: [
        {
            id: "door",
            sprite: "quarto_dos_pais",
            sprite_clip: [1570, 200, 300, 480],
            x: 1100,
            y: 90,
            width: 200,
            height: 390,
            interactType: "sceneChange",
            next: "quadro_de_pistas"
        },
        {
            id: "foto",
            sprite: "fotografia",
            sprite_clip: [40, 110, 740, 584],
            x: 100,
            y: 220,
            width: 100,
            height: 100,
            interactType: "dialog",
        }
    ]
};
