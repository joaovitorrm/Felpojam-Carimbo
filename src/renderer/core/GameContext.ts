import DialogSystem from "../systems/DialogueSystem";
import AssetManager from "./AssetManager";
import AudioManager from "./AudioManager";
import DialogState from "./DialogState";
import EventBus from "./EventBus";
import InputManager from "./InputManager";
import SceneManager from "./SceneManager";
import SettingsManager from "./SettingsManager";
import UiManager from "./UiManager";
import WorldState from "./WorldState";

export default class GameContext {
    readonly inputManager: InputManager = new InputManager();
    readonly assetManager: AssetManager = new AssetManager();
    readonly dialogState: DialogState = new DialogState();
    readonly worldState: WorldState = new WorldState();
    readonly eventBus: EventBus = new EventBus();

    readonly audioManager: AudioManager = new AudioManager(this);
    readonly sceneManager: SceneManager = new SceneManager(this);    
    readonly dialogSystem: DialogSystem = new DialogSystem(this.dialogState, this.worldState, this.eventBus);    

    readonly uiManager : UiManager;

    constructor(readonly settingsManager: SettingsManager) {
        this.uiManager = new UiManager(this);
    }
}