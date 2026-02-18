import startScene from '../assets/images/scenarios/image.png';
import bedroomScene from '../assets/images/scenarios/bedroom.png';
import door from "../assets/images/objects/door.jpg";
import caolho from "../assets/images/characters/caolhopng.png";

// DIZ QUAIS IMAGENS SERÃO CARREGADAS PARA O JOGO

export const assets = {
    menu: startScene,
    bedroom: bedroomScene,
    door,
    caolho
} as const

export type AssetKey = keyof typeof assets