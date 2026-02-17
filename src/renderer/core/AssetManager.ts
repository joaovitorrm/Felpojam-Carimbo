import { assets, type AssetKey } from "../assets/assets";

export class AssetManager {

    private static _instance: AssetManager;
    private _images = new Map<AssetKey, HTMLImageElement>();

    private constructor() {}

    public static get instance(): AssetManager {
        if (!this._instance) {
            this._instance = new AssetManager();
        }
        return this._instance;
    }

    public async loadAll(): Promise<void> {
        const promises = Object.entries(assets).map(
            ([key, path]) => this.loadImage(key as AssetKey, path)
        );

        await Promise.all(promises);
    }

    private loadImage(key: AssetKey, path: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = path;

            console.log(path);

            img.onload = () => {
                this._images.set(key, img);
                resolve();
            };

            img.onerror = () => reject(`Erro ao carregar ${key}`);
        });
    }

    public get(key: AssetKey): HTMLImageElement {
        const asset = this._images.get(key);
        if (!asset) throw new Error(`Asset ${key} não carregado`);
        return asset;
    }
}
