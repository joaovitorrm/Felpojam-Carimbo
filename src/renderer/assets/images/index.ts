import { characters, type CharacterAssetsKey } from "./characters";
import { objects, type ObjectAssetsKey } from "./objects";
import { scenarios, type ScenarioAssetsKey } from "./scenarios";

export const images = {
    scenarios: {
        ...scenarios
    },
    objects: {
        ...objects
    },
    characters: {
        ...characters
    }
} as const;

export type AssetsKeys = ScenarioAssetsKey | ObjectAssetsKey | CharacterAssetsKey;