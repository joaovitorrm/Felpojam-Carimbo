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
        },
        {
            id: "senha",
            x: 540,
            y: 290,
            width: 425,
            height: 45,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "senha_computador_seita"
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
            seconds: 1
        }
    ],

    onExit: [
        {
            type: "fadeOut",
            seconds: 1
        }
    ]
}