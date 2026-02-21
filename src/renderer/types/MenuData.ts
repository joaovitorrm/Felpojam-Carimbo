import type { ScenarioAssetsKey } from "../assets/images/scenarios";
import type { Scenes } from "../world/factories/SceneFactory";

export type MenuData = {
    id: string;
    background: ScenarioAssetsKey;
    buttons: {
        id: string;
        label: string;
        x: number;
        y: number;
        width: number;
        height: number;
        action: Scenes;
    }[]
};

export type MenusKeys = ""