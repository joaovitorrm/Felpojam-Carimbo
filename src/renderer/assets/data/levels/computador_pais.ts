import type { LevelData } from "../../../types/LevelData";

export const computador_pais : LevelData = {
    id: "computador_pais",
    type: "level",
    background: "pc_pais_pai",

    interactiveAreas: [
        {
            id: "usuario_seita",
            x: 50,
            y: 508,
            width: 190,
            height: 140,
            interactType: {
                type: "sceneChange",
                next: "computador_pais_seita"
            }
        }
    ],

    npcs: [
    ],

    objects: [
    ],

    onEnter: [
        {
            type: "fadeIn",
            seconds: 1,
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
        {
            type: "fadeOut",
            seconds: 1
        }
    ]
}