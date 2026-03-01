import type GameContext from "../../core/GameContext";
import type { LevelCommandType, ObjectDataType } from "../../types/LevelData";

// CLASSE QUE CRIA AS INTERAÇÕES DEPENDENDO DO TIPO DE INTERAÇÃO

export class InteractionFactory {
    static create(context: GameContext, data: LevelCommandType): (() => Promise<any[]>) {

        console.log(data.type)

        switch (data.type) {
            case "dialog":
                return async () => context.eventBus.emit("dialog:start", { npcId: data.npcId, target: data.target });
            case "startGame":
                return async () => context.eventBus.emit("game:start");
            case "sceneChange":
                return async () => context.eventBus.emit("scene:change", data.next);
            case "zoomObject":
                return async () => context.eventBus.emit("ui:zoomObject", data);
            case "collect":
                return async () => context.eventBus.emit("scene:object:collect", data.target);
            case "sound":
                return async () => context.eventBus.emit("audio:play", { id: data.sound, category: data.category, options: data.options });
            case "stopSound":
                return async () => context.eventBus.emit("audio:stop", { id: data.sound });
            case "fadeIn":
                return async () => context.eventBus.emit("fade:in", data.seconds);
            case "fadeOut":
                return async () => context.eventBus.emit("fade:out", data.seconds);
            case "hold":
                return async () => context.eventBus.emit("fade:hold", { seconds: data.seconds, alpha: data.alpha });
            case "pushScene":
                return async () => context.eventBus.emit("scene:push", data.next);
            case "popScene":
                return async () => context.eventBus.emit("scene:pop");
            case "quitGame":
                return async () => context.eventBus.emit("app:quit");
            case "pausePlayer":
                return async () => context.eventBus.emit("scene:playerPause", true);
            case "unpausePlayer":
                return async () => context.eventBus.emit("scene:playerPause", false);
            default:
                throw new Error("Interaction type not implemented.");
        }
    }

    static createByObjectData(context: GameContext, data: ObjectDataType): (() => Promise<any[]>) {

        const interaction = data.interactType;

        switch (interaction.type) {
            case "object":
                return async () => context.eventBus.emit("ui&scene:object:interact", { obj: data, npcId: interaction.npcId, target: interaction.target });
            case "zoomObject":
                return async () => context.eventBus.emit("ui:zoomObject", data.interactType);                
            case "dialog":                 
                return async () => context.eventBus.emit("dialog:start", { npcId: interaction.npcId, target: interaction.target });
            case "sceneChange":
                return async () => context.eventBus.emit("scene:change", interaction.next);
            default:
                throw new Error("Interaction type not implemented.");
        }
    }
}