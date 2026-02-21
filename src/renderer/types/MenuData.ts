import type { ScenarioAssetsKey } from "../assets/images/scenarios";
import type { Scenes } from "../world/factories/SceneFactory";
import type { InteractionType } from "./InteractionData";

export type MenuData = {
    id: string;
    background: ScenarioAssetsKey;
    elements: MenuDataElement[];
};

export type MenusKeys = ""

export type MenuDataElement = {
    type: MenuDataElementTypes;
    id: string;    
    x: number;
    y: number;
    width: number;
    height: number;
    interactType: InteractionType;
    next?: Scenes;
    action?: Function;
    props?: BaseButtonData;
}

type BaseButtonData = {
    label: string;
    fontSize: number;
    color: string;
    backgroundColor: string;
    textBaseline: CanvasTextBaseline;
    textAlign: CanvasTextAlign;
}

export type MenuDataElementTypes = "labelButton" | "optionButton";