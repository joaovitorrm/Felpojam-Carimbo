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

export default class SettingsManager {

  private settings!: GameSettingsData

  async load(defaults: GameSettingsData) {
    this.settings = await window.api.loadSettings(defaults)
  }

  async save() {
    await window.api.saveSettings(this.settings)
  }

  get data() {
    return this.settings
  }

  async update(partial: Partial<GameSettingsData>) {
    this.settings = { ...this.settings, ...partial }
    await this.save()
  }
}