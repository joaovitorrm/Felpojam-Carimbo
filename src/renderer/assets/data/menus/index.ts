import { MainMenu } from "./MainMenu";
import { OptionsMenu } from "./OptionsMenu";

export const menus = {
    MainMenu,
    OptionsMenu
} as const;

export type MenusKey = keyof typeof menus;