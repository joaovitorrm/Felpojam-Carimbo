export {}

declare global {
  interface Window {
    api: {
      loadSettings: (defaults: any) => Promise<any>
      saveSettings: (data: any) => Promise<void>
    }
  }
}