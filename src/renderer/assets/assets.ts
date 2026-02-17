import startScene from '../assets/scenarios/image.png';
import bedroomScene from '../assets/scenarios/bedroom.png';
import door from "../assets/objects/door.jpg";

export const assets = {
    start: startScene,
    bedroom: bedroomScene,
    door: door
} as const

export type AssetKey = keyof typeof assets