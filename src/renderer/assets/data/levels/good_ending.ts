import type { LevelData } from "../../../types/LevelData";

export const good_ending : LevelData = {
    id: "good_ending",
    type: "level",
    background: "good_ending",

    interactiveAreas: [
        {
            id: "voltar_para_menu",
            width: 1280,
            height: 720,
            x: 0,
            y: 0,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "voltar_para_menu"
            }
        }
    ],

    npcs: [
    ],

    objects: [
    ],

    onEnter: [
        {
            type: "dialog",
            npcId: "Protagonista",
            target: "good_ending"
        }
    ],

    onExit: [
        {
            type: "fadeIn",
            seconds: 1,
            firstTimeOnly: true
        },
        {
            type: "unpausePlayer"
        }
    ]
}