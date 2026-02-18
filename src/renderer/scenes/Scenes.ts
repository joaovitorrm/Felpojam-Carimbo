import BedroomScene from "./BedroomScene";
import StartScreen from "./StartScene";

// DEFINE QUAIS CENAS SERÃO CARREGADAS MANTENDO TIPAGEM FORTE

export const scenes = {
    startScreen: StartScreen,
    bedroom: BedroomScene
} as const

export type ScenesTypes = keyof typeof scenes;