import { sounds, type SoundsKey } from "../assets/sounds";
import type GameContext from "./GameContext";

export type AudioCategory = "bgm" | "sfx" | "voice";

export interface PlayOptions {
    loop?: boolean;
    volume?: number; // 0 - 1
}

export default class AudioManager {

    private sounds: Map<string, HTMLAudioElement> = new Map();
    private playingSounds: Map<string, HTMLAudioElement> = new Map();
    private volumes: Record<AudioCategory, number> = {
        bgm: 1,
        sfx: 1,
        voice: 1
    };

    constructor(gameContext: GameContext) {
        gameContext.eventBus.on("audio:play", (data: { id: SoundsKey, category: AudioCategory, options?: PlayOptions }) => this.play(data.id, data.category, data.options));
        gameContext.eventBus.on("audio:stop", (data: { id: SoundsKey }) => this.stop(data.id));
        gameContext.eventBus.on("audio:pause", (data: { id: SoundsKey }) => this.pause(data.id));
        gameContext.eventBus.on("audio:pauseAll", () => this.pauseAll());
        gameContext.eventBus.on("audio:unpause", (data: { id: SoundsKey }) => this.unpause(data.id));
        gameContext.eventBus.on("audio:unpauseAll", () => this.unpauseAll());
    }

    loadAll() : void {
        Object.entries(sounds).forEach(([id, src]) => this.load(id, src));
    }


    load(id: string, src: string) {
        const audio = new Audio(src);
        audio.preload = "auto";
        this.sounds.set(id, audio);
    }

    play(id: SoundsKey, category: AudioCategory, options?: PlayOptions) {
        const original = this.sounds.get(id);
        if (!original) return;

        // Clona para permitir múltiplos plays simultâneos
        const audio = original.cloneNode(true) as HTMLAudioElement;

        audio.loop = options?.loop ?? false;

        const categoryVolume = this.volumes[category];
        const customVolume = options?.volume ?? 1;

        audio.volume = categoryVolume * customVolume;

        audio.play();

        this.playingSounds.set(id, audio);
    }

    pause(id: string) {
        const audio = this.playingSounds.get(id);
        if (!audio) return;

        audio.pause();
    }

    unpause(id: string) {
        const audio = this.playingSounds.get(id);
        if (!audio) return;

        audio.play();
    }

    pauseAll() {
        this.playingSounds.forEach(p => p.pause());
    }

    unpauseAll() {
        this.playingSounds.forEach(p => p.play());
    }

    stop(id: string) {
        const audio = this.playingSounds.get(id);
        if (!audio) return;

        audio.pause();
        audio.currentTime = 0;

        this.playingSounds.delete(id);
    }

    setCategoryVolume(category: AudioCategory, volume: number) {
        this.volumes[category] = volume;
    }
}