import startScene from '../assets/images/scenarios/image.png';
import bedroomScene from '../assets/images/scenarios/bedroom.png';
import door from "../assets/images/objects/door.jpg";
import caolho from "../assets/images/characters/caolhopng.png";

export const assets = {
    start: startScene,
    bedroom: bedroomScene,
    door,
    caolho
} as const

export type AssetKey = keyof typeof assets