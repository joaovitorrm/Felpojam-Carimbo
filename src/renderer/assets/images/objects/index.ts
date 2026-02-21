import fotografia from "./fotografia.png";

export const objects = {
    fotografia
} as const

export type ObjectAssetsKey = keyof typeof objects;