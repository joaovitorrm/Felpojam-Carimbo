import { AssetManager } from "../../core/AssetManager";
import type { Entity } from "../../entities/base/Entity";
import NPC from "../../entities/base/NPC";
import type { EntityData } from "../../types/EntityData";
import { InteractionFactory } from "./InteractionFactory";

// CLASSE QUE PEGA AS INFORMAÇÕES DO JSON DO LEVEL E CRIA OS NPC

export default class EntityFactory {
    private constructor() {}

    static createEntity(data: EntityData) : Entity {
        switch (data.type) {
            case "npc":
                return new NPC(
                    data.x, 
                    data.y, 
                    data.width, 
                    data.height, 
                    AssetManager.instance.get(data.sprite), 
                    InteractionFactory.create(data.interaction)
                );
            default:
                throw new Error("Entity type not implemented.");
        }
    }
}