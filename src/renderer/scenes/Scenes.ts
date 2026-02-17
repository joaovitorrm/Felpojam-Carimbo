import BedroomScene from "./BedroomScene";
import StartScreen from "./MenuScene";

export const scenes = {
    startScreen: StartScreen,
    bedroom: BedroomScene
} as const

export type ScenesTypes = keyof typeof scenes;