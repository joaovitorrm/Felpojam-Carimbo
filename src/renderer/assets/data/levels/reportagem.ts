import type { LevelData } from "../../../types/LevelData";

export const reportagem: LevelData = {
    id: "reportagem",
    background: "reportagem",
    interactiveAreas: [],
    npcs: [],
    objects: [],
    onEnter: {
        type: "dialog",
        npcId: "Protagonista",
        target: "start"
    }
}