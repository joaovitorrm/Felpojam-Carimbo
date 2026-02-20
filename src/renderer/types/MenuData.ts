import type { AssetKey } from "../assets/assets";
import type { Scenes } from "../world/factories/SceneFactory";

export type MenuData = {
    id: string;
    background: AssetKey;
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