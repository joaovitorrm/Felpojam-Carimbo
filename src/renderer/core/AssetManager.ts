// CLASSE SINGLETON QUE LIDA COM O CARREGAMENTO E GERENCIAMENTO DE IMAGENS

import { images, type AssetsKeys } from "../assets/images";

export default class AssetManager {

    private _images = new Map<AssetsKeys, HTMLImageElement>();

    constructor() {}

    public async loadAll(): Promise<void> {

        const promises = Object.values(images).flatMap(
            (assets) => Object.entries(assets).map(([key, path]) => this.loadImage(key as AssetsKeys, path))
        );

        await Promise.all(promises);
    }

    private loadImage(key: AssetsKeys, path: string): Promise<void> {
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

    public get(key: AssetsKeys): HTMLImageElement {
        const asset = this._images.get(key);
        if (!asset) throw new Error(`Asset ${key} não carregado`);
        return asset;
    }
}
