import type GameContext from "../../core/GameContext";
import type { MenuDataElement, MenuButtonType } from "../../types/MenuData"
import { Button } from "../../ui/Button";
import DialogOptionButton from "../../ui/DialogOptionButton";
import Slider from "../../ui/Slider";
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


export function MenuElementsFactory(context: GameContext, data: MenuDataElement): UiElement {

    switch (data.button.type) {
        case "labelButton": {
            const props = data.button.props;
            return new Button(
                new Rect(data.x, data.y, data.width, data.height),
                props.label,
                props.fontSize,
                props.color,
                props.backgroundColor,
                props.textBaseline,
                props.textAlign,
                interactionFactory(context, data)!
            )            
        }
        case "optionButton": {
            const props = data.button.props;
            return new DialogOptionButton(
                new Rect(data.x, data.y, data.width, data.height),
                    props!.label,
                    props!.fontSize,
                    props!.color,
                    props!.backgroundColor,
                    props!.textBaseline,
                    props!.textAlign,
                interactionFactory(context, data)!
            )
        }
        case "sliderButton": {
            const props = data.button.props;
            return new Slider(
                new Rect(data.x, data.y, data.width, data.height),
                props.backgroundColor,
                props.sliderBackgroundColor,
                props.borderRadius,
                props.sliderBorderRadius,                
                props.sliderSize,
                props.value,
                props.min,
                props.max,
                interactionFactory(context, data)!,
                () => {}
            )
        }
    }    
}