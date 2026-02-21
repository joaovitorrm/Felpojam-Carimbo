import place_holder_character from "./placeholder_character.png";

export const characters = {
    placeholder_character: place_holder_character
} as const;

export type CharacterAssetsKey = keyof typeof characters;