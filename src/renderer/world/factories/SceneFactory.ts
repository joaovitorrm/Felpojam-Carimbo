import type { LevelsKey } from "../../assets/data/levels";
import type { MenusKey } from "../../assets/data/menus";
import type GameContext from "../../core/GameContext";
import GameScene from "../../scenes/GameScene";
import MainMenuScene from "../../scenes/MainMenuScene";
import type { SceneType } from "../../types/SceneType";

export const SceneFactory: Record<
    LevelsKey | MenusKey,
    (context: GameContext) => SceneType
> = {
    bedroom: (context: GameContext) => new GameScene(context, "bedroom"),
    MainMenu: (context: GameContext) => new MainMenuScene(context, "MainMenu"),
    OptionsMenu: (context: GameContext) => new MainMenuScene(context, "OptionsMenu"),
    quadro_de_pistas: (context: GameContext) => new GameScene(context, "quadro_de_pistas"),
    outside_house: (context: GameContext) => new GameScene(context, "outside_house"),
}

export type Scenes = keyof typeof SceneFactory;