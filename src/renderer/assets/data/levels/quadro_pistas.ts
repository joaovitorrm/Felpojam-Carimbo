import type { LevelData } from "../../../types/LevelData";


export const quadro_pistas: LevelData = {
    id: "quadro_de_pistas",
    background: "quadro_pistas",

    npcs: [],

    objects: [
        {
            id: "olivia",
            sprite: "olivia",
            sprite_clip: [0, 0, 816, 1209],
            x: 160,
            y: 120,
            width: 110,
            height: 164,
            interactType: {
                type: "dialog",
                target: "olivia",
                npcId: "Protagonista"
            },

        },
        {
            id: "vinicius",
            sprite: "vinicius",
            sprite_clip: [0, 0, 1059, 648],
            x: 350,
            y: 300,
            width: 230,
            height: 140,
            interactType: {
                type: "dialog",
                target: "vinicius",
                npcId: "Protagonista"
            },
        },
        {
            id: "clarissa",
            sprite: "clarissa",
            sprite_clip: [0, 0, 758, 1000],
            x: 900,
            y: 150,
            width: 100,
            height: 140,
            interactType: {
                type: "dialog",
                target: "clarissa",
                npcId: "Protagonista"
            },
        },
        {
            id: "bernardo",
            sprite: "bernardo",
            sprite_clip: [0, 0, 968, 885],
            x: 700,
            y: 350,
            width: 153,
            height: 140,
            interactType: {
                type: "dialog",
                target: "bernardo",
                npcId: "Protagonista"
            },
        },
        {
            id: "envelope",
            sprite: "envelope",
            sprite_clip: [110, 375, 677, 148],
            x: 800,
            y: 600,
            width: 400,
            height: 100,
            interactType: {
                type: "dialog",
                target: "envelope",
                npcId: "Protagonista"
            }
        }
    ],

    interactiveAreas: [
        {
            id: "quadro_sair",
            height: 100,
            width: 500,
            x: 600,
            y: 700,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "quadro_saindo"
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
            target: "quadro"
        }
    ]
};
