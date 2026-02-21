import { MainMenu } from "./MainMenu";

export const menus = {
    MainMenu
} as const;

export type MenusKey = keyof typeof menus;