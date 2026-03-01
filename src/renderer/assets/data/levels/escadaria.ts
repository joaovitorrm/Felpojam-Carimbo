import type { LevelData } from "../../../types/LevelData";

export const escadaria : LevelData = {
    id: "escadaria",
    type: "level",
    background: "passagem_escadaria",

    interactiveAreas: [
    ],

    npcs: [
    ],

    objects: [
        {
            id: "escadaria",
            sprite: "escadaria",
            sprite_clip: [0, 0, 1920, 1080],
            hitbox: [322, 85, 730, 580],
            x: 0,
            y: 0,
            width: 1280,
            height: 720,
            interactType: {
                type: "sceneChange",
                next: "salao"
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
            target: "fugindo_escadaria_condicao"
        }
    ],

    onExit: [
        {
            type: "fadeOut",
            seconds: 1
        }
    ]
}