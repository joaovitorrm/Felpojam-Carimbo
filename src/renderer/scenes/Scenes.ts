import BedroomScene from "./BedroomScene";
import StartScreen from "./StartScene";

export const scenes = {
    startScreen: (args: any[]) => new StartScreen(),
    bedroom: (args: any[]) => new BedroomScene()
} as const