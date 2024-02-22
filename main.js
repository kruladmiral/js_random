const { app, BrowserWindow } = require('electron');
const path = require('node:path')

process.env.NODE_ENV = 'production';
const isDev = process.env.NODE_ENV === 'developmnent';
let mainWindow;
function createWindow() {
mainWindow = new BrowserWindow({
    width: isDev ? 1000 : 500,
    height: 800,
    webPreferences: {
preload: path.join(__dirname, 'preload.js'),
nodeIntegration: true,
contextIsolation: true
    }
});
if (isDev) {
    mainWindow.webContents.openDevTools();
}
mainWindow.loadFile('pages/index.html');
}



app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
if (process.platform !== 'darwin') {
    app.quit();
}
});

app.on('activate', () => {
if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
}
});











