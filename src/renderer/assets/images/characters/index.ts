import placeholder_character from "./placeholder_character.png";
import Daniel from "./Daniel.png";

export const characters = {
    placeholder_character,
    Daniel
} as const;

export type CharacterAssetsKey = keyof typeof characters;