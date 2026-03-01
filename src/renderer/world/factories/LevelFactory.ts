import type GameContext from "../../core/GameContext";
import InteractiveArea from "../../entities/base/InteractiveArea";
import NPC from "../../entities/base/NPC";
import Prop from "../../entities/base/Prop";
import type { InteractiveAreaType, LevelCommandType, NPCDataType, ObjectDataType } from "../../types/LevelData";
import { Rect } from "../../util/utils";
import { InteractionFactory } from "./InteractionFactory";

export default class LevelFactory {
    private constructor() { };

    static createNPC(context: GameContext, data: NPCDataType): NPC {
        return new NPC(
            data.id,
            new Rect(data.x, data.y, data.width, data.height),
            context.assetManager.get(data.sprite),
            data.sprite_clip,
            InteractionFactory.create(context, data.interactType)
        );
    };

    static createObject(context: GameContext, obj: ObjectDataType): Prop {
        return new Prop(
            obj.id,
            new Rect(obj.x, obj.y, obj.width, obj.height),
            context.assetManager.get(obj.sprite),
            obj.sprite_clip,
            obj.hitbox ?? null,
            InteractionFactory.createByObjectData(context, obj),
            () => { }
        );
    };

    static createInteractiveArea(context: GameContext, area: InteractiveAreaType): InteractiveArea {
        return new InteractiveArea(
            new Rect(area.x, area.y, area.width, area.height),
            InteractionFactory.create(context, area.interactType),
            () => { }
        );
    };

    static createOnEnter(context: GameContext, command: LevelCommandType): (() => Promise<any[]>) | undefined {
        return InteractionFactory.create(context, command);
    };

    static createOnExit(context: GameContext, command: LevelCommandType): (() => Promise<any[]>) | undefined {
        return InteractionFactory.create(context, command);
    }
}