import type { AssetKey } from "../assets/assets"
import type { EntityData } from "./EntityData"

export interface LevelData {
    background: AssetKey
    entities: EntityData[]
}