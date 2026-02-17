import DialogInteraction from "../../interactions/DialogueInteraction";
import type { Interaction } from "../../interactions/Interaction";

export class InteractionFactory {
    static create(data: any) : Interaction {
        switch (data.type) {
            case "dialog":
                return new DialogInteraction(data.dialog, data.stage);
            default:
                throw new Error("Interaction type not implemented.");
        }
    }
}