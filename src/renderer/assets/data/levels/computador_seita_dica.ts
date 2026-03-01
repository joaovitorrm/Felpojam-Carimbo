import type { LevelData } from "../../../types/LevelData";

export const computador_pais_seita_dica : LevelData = {
    id: "computador_pais_seita",
    type: "level",
    background: "pc_pais_seita_dica",

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
                target: "senha_computador_seita_dica"
            }
        }
    ],

    onEnter: [
        {
            type: "dialog",
            npcId: "Protagonista",
            target: "computador_pais_seita_clicou_dica"
        }

    ],

    onExit: [
        {
            type: "fadeOut",
            seconds: 1
        },
        {
            type: "stopSound",
            sound: "musica_triste"
        }
    ]
}