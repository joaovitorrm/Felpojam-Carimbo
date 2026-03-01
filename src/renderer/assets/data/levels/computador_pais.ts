import type { LevelData } from "../../../types/LevelData";

export const computador_pais : LevelData = {
    id: "computador_pais",
    type: "level",
    background: "pc_pais_pai",

    interactiveAreas: [],

    npcs: [
    ],

    objects: [
        {
            id: "usuario_seita",
            sprite: "usuarioSeita",
            sprite_clip: [0, 0, 1920, 1080],
            hitbox: [50, 508, 140, 140],
            x: 0,
            y: 0,
            width: 1280,
            height: 720,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "trocar_usuario_seita"
            }
        }
    ],

    onEnter: [
        {
            type: "fadeIn",
            seconds: 1,
        },
        {
            type: "sound",
            category: "bgm",
            sound: "musica_triste",
            options: {
                loop: true,
                volume: 0.2
            }
        },
        {
            type: "hold",
            seconds: 2,
            firstTimeOnly: true
        },        
        {
            type: "dialog",
            npcId: "Protagonista",
            target: "ligando_computador_pais_daniel"
        },        
    ],

    onExit: [
    ]
}