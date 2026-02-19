import menuScene from '../assets/images/scenarios/image.png';
import bedroom from '../assets/images/scenarios/bedroom.png';
import door from "../assets/images/objects/door.jpg";
import caolho from "../assets/images/characters/caolhopng.png";

// DIZ QUAIS IMAGENS SERÃO CARREGADAS PARA O JOGO

export const assets = {
    menuScene,
    bedroom,
    door,
    caolho
} as const

export type AssetKey = keyof typeof assets