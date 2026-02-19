import type { AssetKey } from "../assets/assets";
import type { Entity } from "../entities/base/Entity";

// CLASSE QUE CRIA O LEVEL, ADICIONANDO FUNDO E LIDANDO COM RENDER E UPDATE

export default class Level {

    public background: AssetKey;
    public entities: Entity[] = [];
    
    constructor(backgroundKey: AssetKey) {
        this.background = backgroundKey;
    }

    public addEntity(entity: Entity) {
        this.entities.push(entity);
    }
}