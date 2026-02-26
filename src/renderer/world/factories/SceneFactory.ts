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
    MainMenu: (context: GameContext) => new MainMenuScene(context, "MainMenu"),
    OptionsMenu: (context: GameContext) => new MainMenuScene(context, "OptionsMenu"),
    //sala_de_estar: (context: GameContext) => new GameScene(context, "sala_de_estar"),    
    //outside_house: (context: GameContext) => new GameScene(context, "outside_house"),
    quadro_pistas: (context: GameContext) => new GameScene(context, "quadro_pistas"),
    //quarto_daniel: (context: GameContext) => new GameScene(context, "quarto_daniel"),
    sala_daniel: (context: GameContext) => new GameScene(context, "sala_daniel"),
    reportagem: (context: GameContext) => new GameScene(context, "reportagem")
}

export type Scenes = keyof typeof SceneFactory;