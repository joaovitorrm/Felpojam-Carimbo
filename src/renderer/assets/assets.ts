import menuScene from '../assets/images/scenarios/image.png';
import bedroom from '../assets/images/scenarios/bedroom.png';
import door from "../assets/images/objects/door.jpg";
import caolho from "../assets/images/characters/caolhopng.png";
import placeholder_character from "../assets/images/characters/placeholder_character.png";
import quadro_de_pistas from "../assets/images/scenarios/quadro_de_pistas.png";
import sala_casa_daniel from "../assets/images/scenarios/sala_casa_daniel.png";
import quarto_dos_pais from "../assets/images/scenarios/quarto_dos_pais.png";
import fotografia from "../assets/images/objects/fotografia.png";
import frente_casa_daniel from "../assets/images/scenarios/frente_casa_daniel.png";

// DIZ QUAIS IMAGENS SERÃO CARREGADAS PARA O JOGO

export const assets = {
    menuScene,
    bedroom,
    door,
    caolho,
    placeholder_character,
    quadro_de_pistas,
    sala_casa_daniel,
    quarto_dos_pais,
    fotografia,
    frente_casa_daniel
} as const

export type AssetKey = keyof typeof assets