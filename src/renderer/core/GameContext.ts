import DialogSystem from "../systems/DialogueSystem";
import NPCFactory from "../world/factories/NPCFactory";
import AssetManager from "./AssetManager";
import EventBus from "./EventBus";
import InputManager from "./InputManager";
import SceneManager from "./SceneManager";
import UiManager from "./UiManager";
import WorldState from "./WorldState";

export default class GameContext {
    readonly inputManager : InputManager = new InputManager();    
    readonly eventBus : EventBus = new EventBus();
    readonly assetManager : AssetManager = new AssetManager();    

    readonly worldState : WorldState = new WorldState();
    // readonly saveSystem : SaveSystem = new SaveSystem();

    readonly dialogSystem: DialogSystem = new DialogSystem(this);
    readonly uiManager : UiManager = new UiManager(this);
    readonly sceneManager : SceneManager = new SceneManager(this);    
    readonly npcFactory : NPCFactory = new NPCFactory(this);
}