import type GameContext from "../../core/GameContext";
import type { MenuDataElement, MenuDataElementTypes } from "../../types/MenuData"
import { Button } from "../../ui/Button";
import DialogOptionButton from "../../ui/DialogOptionButton";
import type { UiElement } from "../../ui/UiElement"
import { Rect } from "../../util/utils";


const interactionFactory = (context: GameContext, data: MenuDataElement) => {
    switch (data.interactType) {
        case "changeScene": {
            return () => {
                context.eventBus.emit("scene:change", data.next!);
            };
        }
        case "action": {
            return data.action!;
        }
        case "pushScene": {
            return () => {
                context.eventBus.emit("scene:push", data.next!);
            };
        }
        case "popScene": {
            return () => {
                context.eventBus.emit("scene:pop");
            };
        }

    }
}


export const MenuElementsFactory: Record<MenuDataElementTypes, (context: GameContext, data: MenuDataElement) => UiElement> = {
    optionButton: (context: GameContext, data: MenuDataElement) => new DialogOptionButton(
        new Rect(data.x, data.y, data.width, data.height), 
        data.props!.label,
        data.props!.fontSize,
        data.props!.color,
        data.props!.backgroundColor,
        data.props!.textBaseline,
        data.props!.textAlign,
        interactionFactory(context, data)!
    ),
    labelButton: (context: GameContext, data: MenuDataElement) => new Button(
        new Rect(data.x, data.y, data.width, data.height), 
        data.props!.label,
        data.props!.fontSize,
        data.props!.color,        
        data.props!.backgroundColor,
        data.props!.textBaseline,
        data.props!.textAlign,
        interactionFactory(context, data)!
    ),
}