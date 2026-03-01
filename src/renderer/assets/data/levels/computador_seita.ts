import type { LevelData } from "../../../types/LevelData";

export const computador_pais_seita : LevelData = {
    id: "computador_pais_seita",
    type: "level",
    background: "pc_pais_seita",

    interactiveAreas: [
        {
            id: "usuario_seita",
            x: 50,
            y: 508,
            width: 140,
            height: 140,
            interactType: {
                type: "sceneChange",
                next: "computador_pais"
            }
        }
    ],

    npcs: [
    ],

    objects: [
        
        {
            id: "senha",
            sprite: "senhaComputadorSeita",
            sprite_clip: [0, 0, 1920, 1080],
            hitbox: [540, 290, 425, 45],
            x: 0,
            y: 0,
            width: 1280,
            height: 720,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "senha_computador_seita"
            }
        },
        {
            id: "dica",
            sprite: "dicaComputadorSeita",
            sprite_clip: [0, 0, 1920, 1080],
            hitbox: [550, 360, 55, 30],
            x: 0,
            y: 0,
            width: 1280,
            height: 720,
            interactType: {
                type: "sceneChange",
                next: "computador_pais_seita_dica"
            }
        }
    ],

    onEnter: [
        {
            type: "fadeIn",
            seconds: 1
        }
    ],

    onExit: [
    ]
}