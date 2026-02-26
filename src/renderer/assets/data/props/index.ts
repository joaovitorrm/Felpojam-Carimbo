import { envelope } from "./envelope";
import { bernardo } from "./bernardo";
import { olivia } from "./olivia";
import { clarissa } from "./clarissa";

export const props = {
    bernardo,
    envelope,
    olivia,
    clarissa
} as const;

export type PropsKey = keyof typeof props;