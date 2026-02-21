export type GameSettingsData = {
    language: string
    masterVolume: number
    musicVolume: number
    sfxVolume: number
    resolution: {
        width: number
        height: number
    }
    fullscreen: boolean
}