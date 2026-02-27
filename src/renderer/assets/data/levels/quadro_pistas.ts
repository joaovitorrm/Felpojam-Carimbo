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
            x: 130,
            y: 100,
            width: 145,
            height: 210,
            interactType: {
                type: "dialog",
                target: "olivia",
                npcId: "Protagonista"
            },
        },
        {
            id: "simboloOlivia",
            sprite: "simboloOlivia",
            sprite_clip: [0, 0, 304, 446],
            x: 310,
            y: 100,
            width: 90,
            height: 140,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "simboloOlivia"
            }
        },
        {
            id: "vinicius",
            sprite: "vinicius",
            sprite_clip: [0, 0, 1059, 648],
            x: 940,
            y: 350,
            width: 230,
            height: 140,
            interactType: {
                type: "dialog",
                target: "vinicius",
                npcId: "Protagonista"
            },
        },
        {
            id: "simboloVinicius",
            sprite: "simboloVinicius",
            sprite_clip: [0, 0, 258, 254],
            x: 810,
            y: 400,
            width: 115,
            height: 110,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "simboloVinicius"
            }
        },
        {
            id: "clarissa",
            sprite: "clarissa",
            sprite_clip: [0, 0, 758, 1000],
            x: 170,
            y: 350,
            width: 120,
            height: 160,
            interactType: {
                type: "dialog",
                target: "clarissa",
                npcId: "Protagonista"
            },
        },
        {
            id: "simboloClarissa",
            sprite: "simboloClarissa",
            sprite_clip: [0, 0, 693, 645],
            x: 320,
            y: 400,
            width: 120,
            height: 110,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "simboloClarissa"
            }
        },
        {
            id: "bernardo",
            sprite: "bernardo",
            sprite_clip: [0, 0, 968, 885],
            x: 860,
            y: 80,
            width: 200,
            height: 180,
            interactType: {
                type: "dialog",
                target: "bernardo",
                npcId: "Protagonista"
            },
        },
        {
            id: "simboloBernardo",
            sprite: "simboloBernardo",
            sprite_clip: [0, 0, 467, 584],
            x: 1075,
            y: 185,
            width: 95,
            height: 125,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "simboloBernardo"
            }
        },
        {
            id: "simboloDaniel",
            sprite: "simboloDaniel",
            sprite_clip: [0, 0, 1214, 976],
            x: 530,
            y: 210,
            width: 210,
            height: 160,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "simboloDaniel"
            }
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
