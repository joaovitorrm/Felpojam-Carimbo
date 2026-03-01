import type { LevelData } from "../../../types/LevelData";

export const salao : LevelData = {
    id: "salao",
    type: "level",
    background: "salao_seita",

    interactiveAreas: [
    ],

    npcs: [
    ],

    objects: [
        {
            id: "ferretes",
            sprite: "ferretes",
            sprite_clip: [0, 0, 1920, 1080],
            hitbox: [890, 100, 265, 112],
            x: 0,
            y: 0,
            width: 1280,
            height: 720,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "ferretes"
            }
        },
        {
            id: "livro",
            sprite: "livroSeita",
            sprite_clip: [0, 0, 1920, 1080],
            hitbox: [814, 250, 89, 44],
            x: 0,
            y: 0,
            width: 1280,
            height: 720,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "livro_seita"
            }
        }
    ],

    onEnter: [
        {
            type: "fadeIn",
            seconds: 1
        },
        {
            type: "dialog",
            npcId: "Protagonista",
            target: "salao"
        }
    ],

    onExit: [
        {
            type: "fadeOut",
            seconds: 1
        }
    ]
}