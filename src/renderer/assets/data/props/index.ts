import { envelope } from "./envelope";
import { fotografia } from "./fotografia";
import { olivia } from "./olivia";

export const props = {
    fotografia,
    envelope,
    olivia
} as const;

export type PropsKey = keyof typeof props;