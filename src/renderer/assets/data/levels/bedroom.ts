import type { LevelData } from "../../../types/LevelData";


export const bedroom: LevelData = {
    id: "bedroom",

    background: "bedroom",

    npcs: [
        {
            id: "monika",
            sprite: "caolho",
            x: 400,
            y: 220,
            width: 100,
            height: 100,
            dialogId: "guardDialog"
        },
        {
            id: "sayori",
            sprite: "caolho",
            x: 200,
            y: 230,
            width: 100,
            height: 100,
            dialogId: "merchantDialog"
        }
    ],

    objects: [
        {
            id: "door",
            sprite: "door_closed",
            x: 750,
            y: 210,
            width: 100,
            height: 100,
            interactType: "sceneChange",
            next: "bedroom"
        }
    ]
};
