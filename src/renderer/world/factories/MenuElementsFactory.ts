import type GameContext from "../../core/GameContext";
import InteractiveArea from "../../entities/base/InteractiveArea";
import type { InteractiveAreaType } from "../../types/LevelData";
import type { MenuDataElement, MenuLabelElement } from "../../types/MenuData";
import { Button } from "../../ui/Button";
import DialogOptionButton from "../../ui/DialogOptionButton";
import { Label } from "../../ui/Label";
import Slider from "../../ui/Slider";
import type { UiElement } from "../../ui/UiElement"
import { Rect } from "../../util/utils";
import { InteractionFactory } from "./InteractionFactory";

export default class MenuElementsFactory {
    private constructor() { };

    static createButton(context: GameContext, data: MenuDataElement): UiElement {

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
                    data.interactType ? InteractionFactory.create(context, data.interactType) : () => { }
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
                    data.interactType ? InteractionFactory.create(context, data.interactType) : () => { }
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
                    data.interactType ? InteractionFactory.create(context, data.interactType) : () => { },
                    () => { }
                )
            }
        }
    }

    static createLabel(data: MenuLabelElement): UiElement {
        return new Label(
            new Rect(data.x, data.y, data.width, data.height),
            data.text,
            data.color,
            data.fontSize,
            data.textAlign,
            data.textBaseline
        )
    }

    static createInteractiveArea(context: GameContext, area: InteractiveAreaType): InteractiveArea {
        return new InteractiveArea(
            new Rect(area.x, area.y, area.width, area.height),
            InteractionFactory.create(context, area.interactType),
            () => { }
        );
    }
}