import { contextBridge, ipcRenderer } from "electron";
contextBridge.exposeInMainWorld("api", {
  loadSettings: (defaults) => ipcRenderer.invoke("settings:load", defaults),
  saveSettings: (data) => ipcRenderer.invoke("settings:save", data)
});
