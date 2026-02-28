import type GameContext from "../../core/GameContext";
import type { MenuDataElement, MenuLabelElement } from "../../types/MenuData";
import { Button } from "../../ui/Button";
import DialogOptionButton from "../../ui/DialogOptionButton";
import { Label } from "../../ui/Label";
import Slider from "../../ui/Slider";
import type { UiElement } from "../../ui/UiElement"
import { Rect } from "../../util/utils";


const interactionFactory = (context: GameContext, data: MenuDataElement) => {
    switch (data.interactType.type) {
        case "sceneChange": {
            const next = data.interactType.next;
            return () => {
                context.eventBus.emit("scene:change", next);
            };
        }
        case "pushScene": {
            const next = data.interactType.next;
            return () => {
                context.eventBus.emit("scene:push", next);
            };
        }
        case "popScene": {
            return () => {
                context.eventBus.emit("scene:pop");
            };
        }
        case "quitGame": {
            return () => {
                context.eventBus.emit("app:quit");
            };
        }

    }
}


export function MenuButtonsFactory(context: GameContext, data: MenuDataElement): UiElement {

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
                props.borderRadius ?? 0,
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

export function MenuLabelsFactory(data: MenuLabelElement): UiElement {
    return new Label(
        new Rect(data.x, data.y, data.width, data.height),
        data.text,
        data.color,
        data.fontSize,
        data.textAlign,
        data.textBaseline
    )
}