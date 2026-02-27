import { envelope } from "./envelope";
import { bernardo } from "./bernardo";
import { olivia } from "./olivia";
import { clarissa } from "./clarissa";
import { vinicius } from "./vinicius";

export const props = {
    bernardo,
    envelope,
    olivia,
    clarissa,
    vinicius
} as const;

export type PropsKey = keyof typeof props;