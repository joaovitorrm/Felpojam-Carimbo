import type { ScenarioAssetsKey } from "../assets/images/scenarios";
import type { InteractiveAreaType, LevelCommandType } from "./LevelData";

export type MenuData = {
    id: string;
    background: ScenarioAssetsKey;
    buttons: MenuDataElement[];
    labels: MenuLabelElement[],
    interactiveAreas: InteractiveAreaType[]
};

export type MenuLabelElement = {
    id: string;
    labelToId: string;
    text: string;
    fontSize: number;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
    color: string;
    x: number,
    y: number,
    width: number,
    height: number,
    action?: Function
}

export type MenuDataElement = {    
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    interactType?: LevelCommandType;
    button: MenuButtonType;
    action?: Function;
}

type BaseButtonData = {
    label: string;
    fontSize: number;
    color: string;
    backgroundColor: string;
    textBaseline: CanvasTextBaseline;
    textAlign: CanvasTextAlign;
    borderRadius?: number;
}

type SliderButtonData = {
    backgroundColor: string,    
    sliderBackgroundColor: string,
    borderRadius: number,
    sliderBorderRadius: number,
    sliderSize: number,
    value: number,
    min: number,
    max: number
}

export type MenuButtonType = 
    | { type: "labelButton", props: BaseButtonData }
    | { type: "optionButton", props: BaseButtonData }
    | { type: "sliderButton", props: SliderButtonData }
