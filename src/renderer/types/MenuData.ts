import type { AssetKey } from "../assets/assets";

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
        action: "startGame" | "options" | "exits";
    }[]
};

export type MenusKeys = ""