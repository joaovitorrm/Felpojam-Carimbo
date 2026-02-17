import startScreen from '../assets/scenarios/image.png';

export const assets = {
    startScreen: startScreen,
} as const

export type AssetKey = keyof typeof assets