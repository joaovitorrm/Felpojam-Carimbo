import type { LevelsKey } from "../../assets/data/levels";
import type { MenusKey } from "../../assets/data/menus";
import type GameContext from "../../core/GameContext";
import GameScene from "../../scenes/GameScene";
import MainMenuScene from "../../scenes/MenuScene";
import type { SceneType } from "../../types/SceneType";

export const SceneFactory: Record<
    LevelsKey | MenusKey,
    (context: GameContext) => SceneType
> = {
    MainMenu: (context: GameContext) => new MainMenuScene(context, "MainMenu"),
    OptionsMenu: (context: GameContext) => new MainMenuScene(context, "OptionsMenu"),
    quadro_pistas: (context: GameContext) => new GameScene(context, "quadro_pistas"),    
    quarto_daniel: (context: GameContext) => new GameScene(context, "quarto_daniel"),
    reportagem: (context: GameContext) => new GameScene(context, "reportagem"),
    entrada_daniel_fechado: (context: GameContext) => new GameScene(context, "entrada_daniel_fechado"),
    entrada_daniel_aberto: (context: GameContext) => new GameScene(context, "entrada_daniel_aberto"),
    sala_daniel: (context: GameContext) => new GameScene(context, "sala_daniel"),
}

export type Scenes = keyof typeof SceneFactory;