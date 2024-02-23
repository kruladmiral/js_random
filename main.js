const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('node:path')

process.env.NODE_ENV = 'production';
//to run with dev tools
// process.env.NODE_ENV = 'development';

const isDev = process.env.NODE_ENV === 'development';

//Menu template
const menu = [
    {
        role: 'fileMenu'
    },
    {
        label: 'Help',
        submenu: [{
            label: 'About',
            click: createAboutWindow
        },
        {
            label: 'Help',
            click: async () => {
                const { shell } = require('electron')
                await shell.openExternal('https://github.com/kruladmiral/js_random/blob/master/readme.md')
            }
        }
            
        ]
    }
];

let mainWindow;
function createWindow() {
mainWindow = new BrowserWindow({
    width: isDev ? 1000 : 500,
    height: 800,
    webPreferences: {
preload: path.join(__dirname, 'preload.js'),
nodeIntegration: true,
contextIsolation: true
    },
    resizable: false
});
if (isDev) {
    mainWindow.webContents.openDevTools();
}
mainWindow.loadFile('pages/index.html');
}

function createAboutWindow() {
    const aboutWindow = new BrowserWindow({
        title: 'About',
        width: 300,
        height: 300
    });
    aboutWindow.loadFile(path.join(__dirname,'./pages/about.html'));
}


app.whenReady().then(createWindow);

// implement menu
const mainMenu = Menu.buildFromTemplate(menu);
Menu.setApplicationMenu(mainMenu);

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














