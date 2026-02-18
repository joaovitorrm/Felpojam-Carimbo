import type { LevelData } from "../types/LevelData";
import EntityFactory from "./factories/EntityFactory";
import Level from "./Level";

// CLASSE QUE CRIA O LEVEL E INSERE AS ENTIDADES

export class LevelLoader {
    private constructor() {}

    static load(levelData: LevelData): Level {
        const level = new Level(levelData.background);

        levelData.entities.forEach(entityData => {
            const entity = EntityFactory.createEntity(entityData);
            level.addEntity(entity);
        });

        return level;
    }
}