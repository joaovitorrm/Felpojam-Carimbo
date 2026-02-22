import { fotografia } from "./fotografia";

export const props = {
    fotografia,    
} as const;

export type PropsKey = keyof typeof props;