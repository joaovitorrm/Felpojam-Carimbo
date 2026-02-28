import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld("api", {
  loadSettings: (defaults: any) =>
    ipcRenderer.invoke("settings:load", defaults),

  saveSettings: (data: any) =>
    ipcRenderer.invoke("settings:save", data),

  quit: () => ipcRenderer.send("app:quit")
})