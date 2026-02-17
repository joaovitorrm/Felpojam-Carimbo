import StartScreen from "./StartScreen";

export const scenes = {
    startScreen: (args: any[]) => new StartScreen()
} as const