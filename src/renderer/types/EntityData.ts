import type { AssetKey } from "../assets/assets";
import type { InteractionData } from "./InteractionData";

export interface EntityData {
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    sprite: AssetKey;
    interaction: InteractionData;
}