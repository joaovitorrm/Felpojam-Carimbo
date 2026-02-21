import type { ScenarioAssetsKey } from "../assets/images/scenarios";
import type { Entity } from "../entities/base/Entity";

// CLASSE QUE CRIA O LEVEL, ADICIONANDO FUNDO E LIDANDO COM RENDER E UPDATE

export default class Level {

    public background: ScenarioAssetsKey;
    public entities: Entity[] = [];
    
    constructor(backgroundKey: ScenarioAssetsKey) {
        this.background = backgroundKey;
    }

    public addEntity(entity: Entity) {
        this.entities.push(entity);
    }
}