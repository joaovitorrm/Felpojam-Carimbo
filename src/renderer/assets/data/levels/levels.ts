import { bedroom } from "./bedroom";

export const levels = {
    bedroom
} as const;

export type LevelsKey = keyof typeof levels;