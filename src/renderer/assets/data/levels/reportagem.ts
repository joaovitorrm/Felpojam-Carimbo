import type { LevelData } from "../../../types/LevelData";

export const reportagem: LevelData = {
    id: "reportagem",
    background: "reportagem",
    interactiveAreas: [],
    npcs: [],
    objects: [],
    onEnter: [
        {
            type: "sound",
            category: "bgm",
            sound: "musica_triste",
            options: {
                loop: true,
                volume: 0.5
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
            type: "stopSound",
            sound: "musica_triste"
        }
    ]
}