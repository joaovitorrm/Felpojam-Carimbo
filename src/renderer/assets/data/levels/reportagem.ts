import type { LevelData } from "../../../types/LevelData";

export const reportagem: LevelData = {
    id: "reportagem",
    background: "reportagem",
    type: "level",
    interactiveAreas: [],
    npcs: [],
    objects: [],
    onEnter: [
        {
            type: "startGame"
        },
        {
            type: "hold",
            alpha: 1,
            seconds: 2
        },
        {
            type: "fadeIn",
            seconds: 2
        },
        {
            type: "sound",
            category: "bgm",
            sound: "musica_macabra",
            options: {
                loop: true,
                volume: 0.2
            }
        },
        {
            type: "dialog",
            npcId: "Protagonista",
            target: "start"
        }
    ],
    onExit: [
        {
            type: "fadeOut",
            seconds: 1
        },
        {
            type: "hold",
            seconds: 2
        }        
    ]
}