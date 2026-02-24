import fotografia from "./fotografia.png";
import calendario from "./calendario.png";
import envelope from "./envelope.png";
import olivia from "./olivia.png";

export const objects = {
    fotografia,
    calendario,
    envelope,
    olivia
} as const

export type ObjectAssetsKey = keyof typeof objects;