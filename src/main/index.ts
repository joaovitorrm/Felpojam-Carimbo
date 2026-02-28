import { app, BrowserWindow, ipcMain } from 'electron'
import path, { join } from 'path'
import fs from "fs"

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: join(__dirname, '../preload/index.mjs'),
      contextIsolation: true,
      sandbox: false
    }
  })

  const isDev = !app.isPackaged

  if (isDev) {
    win.loadURL("http://localhost:5173")
  } else {
    win.loadFile(join(__dirname, "../renderer/index.html"))
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

const settingsPath = path.join(app.getPath("userData"), "settings.json")

ipcMain.handle("settings:load", (_, defaults) => {
  if (!fs.existsSync(settingsPath)) {
    fs.writeFileSync(settingsPath, JSON.stringify(defaults, null, 2))
    return defaults
  }

  return JSON.parse(fs.readFileSync(settingsPath, "utf-8"))
})

ipcMain.handle("settings:save", (_, data) => {
  fs.writeFileSync(settingsPath, JSON.stringify(data, null, 2))
})

ipcMain.on("app:quit", () => {
    app.quit();
});