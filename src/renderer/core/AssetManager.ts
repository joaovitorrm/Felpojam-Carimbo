import { assets, type AssetKey } from "../assets/assets";

// CLASSE SINGLETON QUE LIDA COM O CARREGAMENTO E GERENCIAMENTO DE IMAGENS

export class AssetManager {

    private _images = new Map<AssetKey, HTMLImageElement>();

    constructor() {}

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
