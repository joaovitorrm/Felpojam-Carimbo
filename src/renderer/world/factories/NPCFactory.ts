import { dialogues } from "../../assets/data/dialogues/dialogues";
import type GameContext from "../../core/GameContext";
import NPC from "../../entities/base/NPC";
import type { NPCData } from "../../types/LevelData";
import { Rect } from "../../util/utils";


// CLASSE QUE PEGA AS INFORMAÇÕES DO JSON DO LEVEL E CRIA OS NPC

export default class NPCFactory {
    constructor(private gameContext: GameContext) {}

    createNPC(data: NPCData) : NPC {
        return new NPC(
            data.id,
            new Rect(data.x, data.y, data.width, data.height),
            this.gameContext.assetManager.get(data.sprite),
            dialogues[data.dialogId],
            this.gameContext
        );            
    }
}