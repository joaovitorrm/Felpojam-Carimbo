import type { ScenarioAssetsKey } from "../assets/images/scenarios";
import type { Scenes } from "../world/factories/SceneFactory";
import type { InteractionType } from "./InteractionData";

export type MenuData = {
    id: string;
    background: ScenarioAssetsKey;
    elements: MenuDataElement[];
};

export type MenuDataElement = {    
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    interactType: InteractionType;
    button: MenuButtonType;
    next?: Scenes;
    action?: Function;
}

type BaseButtonData = {
    label: string;
    fontSize: number;
    color: string;
    backgroundColor: string;
    textBaseline: CanvasTextBaseline;
    textAlign: CanvasTextAlign;
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
