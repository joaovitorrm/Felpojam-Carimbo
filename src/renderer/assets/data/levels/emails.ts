import type { LevelData } from "../../../types/LevelData";

export const emails : LevelData = {
    id: "emails",
    type: "level",
    background: "email",

    interactiveAreas: [
        {
            id: "suzana",
            x: 237,
            y: 304,
            width: 993,
            height: 30,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "emails_suzana"
            }
        },
        {
            id: "evento",
            x: 237,
            y: 265,
            width: 993,
            height: 30,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "emails_evento"
            }
        },
        {
            id: "ordem",
            x: 237,
            y: 223,
            width: 993,
            height: 30,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "emails_ordem"
            }
        },
        {
            id: "sabio",
            x: 240,
            y: 180,
            width: 988,
            height: 30,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "emails_sabio"
            }
        },
        {
            id: "prazo",
            x: 240,
            y: 140,
            width: 988,
            height: 30,
            interactType: {
                type: "dialog",
                npcId: "Protagonista",
                target: "emails_prazo"
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
        }     
    ],

    onExit: [
        {
            type: "fadeOut",
            seconds: 1
        },
        {
            type: "dialog",
            npcId: "Protagonista",
            target: "emails"
        }
    ]
}