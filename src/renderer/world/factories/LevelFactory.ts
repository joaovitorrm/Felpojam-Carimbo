import type GameContext from "../../core/GameContext";
import InteractiveArea from "../../entities/base/InteractiveArea";
import NPC from "../../entities/base/NPC";
import Prop from "../../entities/base/Prop";
import type { InteractiveAreaType, LevelCommandType, NPCDataType, ObjectDataType } from "../../types/LevelData";
import { Rect } from "../../util/utils";

export function createNPC(context: GameContext, data: NPCDataType): NPC {
    return new NPC(
        data.id,
        new Rect(data.x, data.y, data.width, data.height),
        context.assetManager.get(data.sprite),
        data.sprite_clip,
        () => context.eventBus.emit("dialog:npc:interact", { npcId: data.id })
    );
}

export function createObject(context: GameContext, obj: ObjectDataType): Prop {

    const interaction = () => {
        switch (obj.interactType.type) {
            case "dialog":
                context.eventBus.emit("ui:object:interact", { obj: obj, npcId: obj.interactType.npcId, target: obj.interactType.target });
                prop.setInFocus(true);
                context.eventBus.once("ui:object:interacted", () => { prop.setInFocus(false) });
                break;
            case "sceneChange":
                context.eventBus.emit("scene:change", obj.interactType.next);
                break;
            default:
                break;
        }
    };

    const prop = new Prop(
        obj.id,
        new Rect(obj.x, obj.y, obj.width, obj.height),
        context.assetManager.get(obj.sprite),
        obj.sprite_clip,
        interaction,
        () => { }
    );

    return prop;
}

export function createInteractiveArea(context: GameContext, area: InteractiveAreaType): InteractiveArea {
    const interaction = () => {
        switch (area.interactType.type) {
            case "sceneChange":
                context.eventBus.emit("scene:change", area.interactType.next);
                break;
            case "dialog":
                context.eventBus.emit("dialog:npc:interact", { npcId: area.interactType.npcId, target: area.interactType.target });
                break;
            default:
                break;
        }
    };

    const ia = new InteractiveArea(
        new Rect(area.x, area.y, area.width, area.height),
        interaction,
        () => { }
    );

    return ia;
}

export function createOnEnter(context: GameContext, command: LevelCommandType): (() => Promise<any[]>) | undefined {
    let func;
    switch (command.type) {
        case "dialog": {
            func = () => context.eventBus.emit("dialog:start", { npcId: command.npcId, target: command.target });
            break;
        }
        case "sceneChange": {
            func = () => context.eventBus.emit("scene:change", command.next);
            break;
        }
        case "sound": {
            func = () => context.eventBus.emit("audio:play", { id: command.sound, category: command.category, options: command.options });
            break;
        }
        case "fadeIn": {
            func = () => context.eventBus.emit("fade:in", command.seconds);
            break;
        }
        case "fadeOut": {
            func = () => context.eventBus.emit("fade:out", command.seconds);
            break;
        }
        case "hold": {
            func = () => context.eventBus.emit("fade:hold", {seconds: command.seconds, alpha: command.alpha});
            break;
        }
    }
    return func;
}

export function createOnExit(context: GameContext, command: LevelCommandType): (() => Promise<any[]>) | undefined {
    let func;
    switch (command.type) {
        case "stopSound": {
            func = () => context.eventBus.emit("audio:stop", { id: command.sound });
            break;
        }
        case "fadeOut": {
            func = async () => await context.eventBus.emit("fade:out", command.seconds);
            break;
        }
        case "fadeIn": {
            func = async () => await context.eventBus.emit("fade:in", command.seconds);
            break;
        }
        case "hold": {
            func = async () => await context.eventBus.emit("fade:hold", {seconds: command.seconds, alpha: command.alpha});
            break;
        }
    }
    return func;
}