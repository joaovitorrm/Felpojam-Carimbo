import type { LevelData } from "../../../types/LevelData";

export const casa_branca_interior_aberto : LevelData = {
    id: "casa_branca_interior_aberto",
    type: "level",
    background: "casa_seita_aberta",

    interactiveAreas: [
    ],

    npcs: [
    ],

    objects: [
        {
            id: "porta",
            sprite: "portaCasaBrancaSeita",
            sprite_clip: [0, 0, 1920, 1080],
            hitbox: [735, 302, 98, 170],
            x: 0,
            y: 0,
            width: 1280,
            height: 720,
            interactType: {
                type: "sceneChange",
                next: "escadaria"
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
            target: "fugindo_casa_branca_condicao"
        }
    ],

    onExit: [
        {
            type: "fadeOut",
            seconds: 1
        }
    ]
}